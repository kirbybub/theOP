import { Utils } from "electrobun/bun";
import { mkdir, stat } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import type {
	NativeMicChunkMessage,
	NativeMicStatusMessage,
} from "../../shared/live";

type NativeMicEvent =
	| {
			type: "ready";
			sampleRate?: number;
	  }
	| {
			type: "permission_denied";
			message?: string;
	  }
	| {
			type: "error";
			message?: string;
	  }
	| {
			type: "chunk";
			sampleRate?: number;
			pcm16Base64?: string;
	  };

type Senders = {
	sendStatus: (payload: NativeMicStatusMessage) => void;
	sendChunk: (payload: NativeMicChunkMessage) => void;
};

let micProcess: Bun.Subprocess | null = null;
let stopRequested = false;

const helperSourcePath = fileURLToPath(new URL("./nativeMic.swift", import.meta.url));

export async function startNativeMicCapture(senders: Senders) {
	if (micProcess) {
		return {
			ok: false,
			message: "Native microphone capture is already running.",
		};
	}

	const helperPath = await ensureNativeMicHelper();
	senders.sendStatus({ state: "starting" });
	console.log("[native-mic] launching helper", { helperPath });

	stopRequested = false;
	const proc = Bun.spawn([helperPath], {
		stdout: "pipe",
		stderr: "pipe",
	});
	micProcess = proc;

	void pumpStdout(proc.stdout, senders);
	void pumpStderr(proc.stderr);
	void proc.exited.then((exitCode) => {
		console.log("[native-mic] helper exited", { exitCode, stopRequested });
		micProcess = null;
		if (stopRequested) {
			senders.sendStatus({ state: "stopped" });
			return;
		}

		senders.sendStatus({
			state: "error",
			message: `Native microphone helper exited with code ${exitCode}.`,
		});
	});

	return { ok: true };
}

export async function stopNativeMicCapture(senders: Senders) {
	if (!micProcess) {
		return { ok: true };
	}

	stopRequested = true;
	micProcess.kill();
	micProcess = null;
	senders.sendStatus({ state: "stopped" });
	return { ok: true };
}

async function ensureNativeMicHelper() {
	const helperDir = join(Utils.paths.cache, "theop", "bin");
	const helperPath = join(helperDir, "native-mic-capture");
	await mkdir(helperDir, { recursive: true });

	const shouldBuild = await needsBuild(helperPath);
	if (!shouldBuild) {
		return helperPath;
	}

	console.log("[native-mic] compiling helper");
	const compileProc = Bun.spawn(
		["xcrun", "swiftc", helperSourcePath, "-o", helperPath],
		{
			stdout: "pipe",
			stderr: "pipe",
		},
	);

	const [exitCode, stderr, stdout] = await Promise.all([
		compileProc.exited,
		new Response(compileProc.stderr).text(),
		new Response(compileProc.stdout).text(),
	]);

	if (exitCode !== 0) {
		throw new Error(
			`Failed to compile native microphone helper.\n${stdout}\n${stderr}`.trim(),
		);
	}

	return helperPath;
}

async function needsBuild(helperPath: string) {
	try {
		const [helperStats, sourceStats] = await Promise.all([
			stat(helperPath),
			stat(helperSourcePath),
		]);
		return sourceStats.mtimeMs > helperStats.mtimeMs;
	} catch {
		return true;
	}
}

async function pumpStdout(stream: ReadableStream<Uint8Array>, senders: Senders) {
	const reader = stream.getReader();
	const decoder = new TextDecoder();
	let pending = "";

	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) {
				break;
			}

			pending += decoder.decode(value, { stream: true });
			pending = parsePendingLines(pending, senders);
		}
	} finally {
		reader.releaseLock();
	}
}

function parsePendingLines(pending: string, senders: Senders) {
	let buffer = pending;
	while (true) {
		const newlineIndex = buffer.indexOf("\n");
		if (newlineIndex === -1) {
			return buffer;
		}

		const line = buffer.slice(0, newlineIndex).trim();
		buffer = buffer.slice(newlineIndex + 1);
		if (!line) {
			continue;
		}

		try {
			const event = JSON.parse(line) as NativeMicEvent;
			handleEvent(event, senders);
		} catch (error) {
			console.error("[native-mic] failed to parse helper output", error, line);
		}
	}
}

function handleEvent(event: NativeMicEvent, senders: Senders) {
	switch (event.type) {
		case "ready":
			console.log("[native-mic] ready", event);
			senders.sendStatus({ state: "ready" });
			return;
		case "permission_denied":
			console.error("[native-mic] permission denied", event.message);
			senders.sendStatus({
				state: "permission_denied",
				message: event.message ?? "Microphone access was denied.",
			});
			return;
		case "error":
			console.error("[native-mic] helper error", event.message);
			senders.sendStatus({
				state: "error",
				message: event.message ?? "Native microphone capture failed.",
			});
			return;
		case "chunk":
			if (!event.pcm16Base64 || !event.sampleRate) {
				return;
			}
			senders.sendChunk({
				pcm16Base64: event.pcm16Base64,
				sampleRate: event.sampleRate,
			});
			return;
	}
}

async function pumpStderr(stream: ReadableStream<Uint8Array>) {
	const reader = stream.getReader();
	const decoder = new TextDecoder();
	let output = "";

	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) {
				break;
			}
			output += decoder.decode(value, { stream: true });
		}
	} finally {
		reader.releaseLock();
	}

	if (output.trim()) {
		console.error("[native-mic] stderr", output.trim());
	}
}
