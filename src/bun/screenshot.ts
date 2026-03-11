import { Screen, Utils, type Display } from "electrobun/bun";
import { mkdir, readFile, stat, unlink } from "node:fs/promises";
import { join } from "node:path";

import type { BrowserWindow } from "electrobun/bun";

import type { DisplayContext } from "../../shared/agent";
import { getCurrentAppContext } from "./appContext";
import { getDisplayForWindowFrame } from "../shared/displaySelection";
import type { CaptureScreenshotResult } from "../shared/screenshot";

const CAPTURE_DELAY_MS = 250;
const MODEL_IMAGE_MAX_EDGE = 1600;
const PREVIEW_IMAGE_MAX_EDGE = 480;

let captureInFlight = false;

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ensureCaptureDir() {
	const captureDir = join(Utils.paths.cache, "theop", "screenshots");
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

async function createDerivativeImage(
	inputPath: string,
	outputPath: string,
	maxEdge: number,
) {
	const proc = Bun.spawn(
		[
			"sips",
			"-Z",
			String(maxEdge),
			"-s",
			"format",
			"jpeg",
			inputPath,
			"--out",
			outputPath,
		],
		{
			stdout: "pipe",
			stderr: "pipe",
		},
	);

	return await proc.exited;
}

async function createPreviewDataUrl(imagePath: string, screenshotId: string): Promise<string | null> {
	const previewPath = join(await ensureCaptureDir(), `${screenshotId}-preview.jpg`);
	const exitCode = await createDerivativeImage(
		imagePath,
		previewPath,
		PREVIEW_IMAGE_MAX_EDGE,
	);
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

async function createModelImage(imagePath: string, screenshotId: string) {
	const modelImagePath = join(await ensureCaptureDir(), `${screenshotId}-model.jpg`);
	const exitCode = await createDerivativeImage(
		imagePath,
		modelImagePath,
		MODEL_IMAGE_MAX_EDGE,
	);
	if (exitCode !== 0) {
		return {
			modelImagePath: imagePath,
			modelMimeType: "image/png",
		};
	}
	return {
		modelImagePath,
		modelMimeType: "image/jpeg",
	};
}

async function getImageDimensions(imagePath: string) {
	const proc = Bun.spawn(["sips", "-g", "pixelWidth", "-g", "pixelHeight", imagePath], {
		stdout: "pipe",
		stderr: "ignore",
	});
	const [exitCode, output] = await Promise.all([
		proc.exited,
		new Response(proc.stdout).text(),
	]);
	if (exitCode !== 0) {
		throw new Error("Failed to read screenshot dimensions.");
	}

	const widthMatch = output.match(/pixelWidth:\s+(\d+)/);
	const heightMatch = output.match(/pixelHeight:\s+(\d+)/);
	if (!widthMatch || !heightMatch) {
		throw new Error("Screenshot dimensions were not available.");
	}

	return {
		width: Number(widthMatch[1]),
		height: Number(heightMatch[1]),
	};
}

function buildDisplayContext(
	display: Display,
	imageWidth: number,
	imageHeight: number,
): DisplayContext {
	return {
		displayId: display.id,
		bounds: { ...display.bounds },
		scaleFactor: display.scaleFactor,
		imageWidth,
		imageHeight,
	};
}

export async function captureCurrentDisplayScreenshot(
	mainWindow: BrowserWindow,
): Promise<CaptureScreenshotResult> {
	if (captureInFlight) {
		console.error("[screenshot] capture rejected: already in flight");
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
			console.error("[screenshot] no display found for window frame", frame);
			return {
				ok: false,
				reason: "capture_failed",
				message: "No display was available for capture.",
			};
		}

		const captureDir = await ensureCaptureDir();
		const capturedAt = new Date().toISOString();
		const screenshotId = crypto.randomUUID();
		const imagePath = join(captureDir, `${screenshotId}.png`);
		console.log("[screenshot] starting capture", {
			screenshotId,
			displayId: display.id,
			displayBounds: display.bounds,
			imagePath,
		});

		mainWindow.minimize();
		await sleep(CAPTURE_DELAY_MS);
		const appContext = await getCurrentAppContext();

		const { exitCode, stderr } = await runScreenCapture(display, imagePath);

		if (mainWindow.isMinimized()) {
			mainWindow.unminimize();
		}
		mainWindow.focus();

		if (exitCode !== 0) {
			console.error("[screenshot] screencapture failed", {
				exitCode,
				stderr,
			});
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
			console.error("[screenshot] output file missing or empty", {
				imagePath,
				size: fileStats.size,
			});
			return {
				ok: false,
				reason: "capture_failed",
				message: "The screenshot file was not created correctly.",
			};
		}

		const imageDimensions = await getImageDimensions(imagePath);
		const displayContext = buildDisplayContext(
			display,
			imageDimensions.width,
			imageDimensions.height,
		);
		const modelImage = await createModelImage(imagePath, screenshotId);
		console.log("[screenshot] capture complete", {
			screenshotId,
			imagePath,
			modelImagePath: modelImage.modelImagePath,
			imageDimensions,
		});

		return {
			ok: true,
			screenshotId,
			imagePath,
			modelImagePath: modelImage.modelImagePath,
			modelMimeType: modelImage.modelMimeType,
			previewDataUrl: await createPreviewDataUrl(imagePath, screenshotId),
			capturedAt,
			displayContext,
			appContext,
		};
	} catch (error) {
		console.error("[screenshot] unexpected failure", error);
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
