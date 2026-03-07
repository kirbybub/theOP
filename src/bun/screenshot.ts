import { Screen, type Display } from "electrobun/bun";
import { mkdir, readFile, stat, unlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import type { BrowserWindow } from "electrobun/bun";

import { getDisplayForWindowFrame } from "../shared/displaySelection";
import type { CaptureScreenshotResult } from "../shared/screenshot";

const CAPTURE_DELAY_MS = 250;

let captureInFlight = false;

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ensureCaptureDir() {
	const captureDir = join(tmpdir(), "theop", "screenshots");
	await mkdir(captureDir, { recursive: true });
	return captureDir;
}

async function runScreenCapture(display: Display, outputPath: string) {
	const rect = `${display.bounds.x},${display.bounds.y},${display.bounds.width},${display.bounds.height}`;
	const proc = Bun.spawn(["screencapture", "-x", `-R${rect}`, outputPath], {
		stdout: "pipe",
		stderr: "pipe",
	});

	const [exitCode, stderr] = await Promise.all([
		proc.exited,
		new Response(proc.stderr).text(),
	]);

	return { exitCode, stderr: stderr.trim() };
}

async function createPreviewDataUrl(imagePath: string): Promise<string | null> {
	const previewPath = join(tmpdir(), "theop", `preview-${Date.now()}.jpg`);
	const proc = Bun.spawn(
		[
			"sips",
			"-Z",
			"480",
			"-s",
			"format",
			"jpeg",
			imagePath,
			"--out",
			previewPath,
		],
		{
			stdout: "pipe",
			stderr: "pipe",
		},
	);

	const exitCode = await proc.exited;
	if (exitCode !== 0) {
		return null;
	}

	try {
		const previewBuffer = await readFile(previewPath);
		return `data:image/jpeg;base64,${previewBuffer.toString("base64")}`;
	} finally {
		await unlink(previewPath).catch(() => {});
	}
}

export async function captureCurrentDisplayScreenshot(
	mainWindow: BrowserWindow,
): Promise<CaptureScreenshotResult> {
	if (captureInFlight) {
		return {
			ok: false,
			reason: "busy",
			message: "A screenshot is already in progress.",
		};
	}

	captureInFlight = true;

	try {
		const displays = Screen.getAllDisplays();
		const frame = mainWindow.getFrame();
		const display = getDisplayForWindowFrame(frame, displays);

		if (!display) {
			return {
				ok: false,
				reason: "capture_failed",
				message: "No display was available for capture.",
			};
		}

		const captureDir = await ensureCaptureDir();
		const capturedAt = new Date().toISOString();
		const imagePath = join(captureDir, `screenshot-${Date.now()}.png`);

		mainWindow.minimize();
		await sleep(CAPTURE_DELAY_MS);

		const { exitCode, stderr } = await runScreenCapture(display, imagePath);

		if (mainWindow.isMinimized()) {
			mainWindow.unminimize();
		}
		mainWindow.focus();

		if (exitCode !== 0) {
			return {
				ok: false,
				reason: "permission_denied",
				message:
					stderr ||
					"Screen capture was blocked. Allow screen recording for the app in macOS settings and try again.",
			};
		}

		const fileStats = await stat(imagePath);
		if (!fileStats.isFile() || fileStats.size === 0) {
			return {
				ok: false,
				reason: "capture_failed",
				message: "The screenshot file was not created correctly.",
			};
		}

		return {
			ok: true,
			imagePath,
			previewDataUrl: await createPreviewDataUrl(imagePath),
			capturedAt,
		};
	} catch (error) {
		return {
			ok: false,
			reason: "capture_failed",
			message:
				error instanceof Error
					? error.message
					: "The screenshot failed unexpectedly.",
		};
	} finally {
		if (mainWindow.isMinimized()) {
			mainWindow.unminimize();
		}
		mainWindow.focus();
		captureInFlight = false;
	}
}
