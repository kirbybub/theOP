import { Utils } from "electrobun/bun";
import { mkdir, stat } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import type { AppContext } from "../../shared/agent";

const helperSourcePath = fileURLToPath(new URL("./appContext.swift", import.meta.url));

export async function getCurrentAppContext(): Promise<AppContext> {
	try {
		const helperPath = await ensureAppContextHelper();
		const proc = Bun.spawn([helperPath], {
			stdout: "pipe",
			stderr: "pipe",
		});

		const [exitCode, stdout, stderr] = await Promise.all([
			proc.exited,
			new Response(proc.stdout).text(),
			new Response(proc.stderr).text(),
		]);

		if (exitCode !== 0) {
			console.error("[app-context] helper failed", { exitCode, stderr });
			return emptyAppContext();
		}

		return JSON.parse(stdout) as AppContext;
	} catch (error) {
		console.error("[app-context] failed to capture app context", error);
		return emptyAppContext();
	}
}

function emptyAppContext(): AppContext {
	return {
		frontmostApp: null,
		visibleApps: [],
	};
}

async function ensureAppContextHelper() {
	const helperDir = join(Utils.paths.cache, "theop", "bin");
	const helperPath = join(helperDir, "app-context-helper");
	await mkdir(helperDir, { recursive: true });

	const shouldBuild = await needsBuild(helperPath);
	if (!shouldBuild) {
		return helperPath;
	}

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
			`Failed to compile app-context helper.\n${stdout}\n${stderr}`.trim(),
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
