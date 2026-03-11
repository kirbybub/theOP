import type { BrowserWindow } from "electrobun/bun";

import type { PointAction } from "../../shared/agent";
import type { CaptureScreenshotSuccess } from "../shared/screenshot";

const CHAR_SIZE = 220;
const BUBBLE_HEIGHT = 145;
const FLIGHT_STEPS = 18;
const FLIGHT_DURATION_MS = 650;

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function clamp(value: number, min: number, max: number) {
	return Math.min(max, Math.max(min, value));
}

function getWindowTargetPosition(
	action: PointAction,
	screenshot: CaptureScreenshotSuccess,
) {
	const { bounds, imageWidth, imageHeight } = screenshot.displayContext;
	const normalizedX = clamp(action.x / imageWidth, 0, 1);
	const normalizedY = clamp(action.y / imageHeight, 0, 1);
	const screenX = bounds.x + normalizedX * bounds.width;
	const screenY = bounds.y + normalizedY * bounds.height;

	return {
		x: Math.round(screenX - CHAR_SIZE / 2),
		y: Math.round(screenY - (BUBBLE_HEIGHT + CHAR_SIZE / 2)),
	};
}

export async function animatePetToPoint(
	mainWindow: BrowserWindow,
	action: PointAction,
	screenshot: CaptureScreenshotSuccess,
) {
	const start = mainWindow.getPosition();
	const target = getWindowTargetPosition(action, screenshot);
	const stepDelay = FLIGHT_DURATION_MS / FLIGHT_STEPS;

	for (let index = 1; index <= FLIGHT_STEPS; index += 1) {
		const progress = index / FLIGHT_STEPS;
		const easedProgress = 1 - Math.pow(1 - progress, 3);
		const x = Math.round(start.x + (target.x - start.x) * easedProgress);
		const y = Math.round(start.y + (target.y - start.y) * easedProgress);
		mainWindow.setPosition(x, y);
		await sleep(stepDelay);
	}
}
