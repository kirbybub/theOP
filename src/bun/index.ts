import { BrowserView, BrowserWindow, Updater } from "electrobun/bun";
import { readFile } from "node:fs/promises";
import type { ElectrobunRPCSchema } from "electrobun/bun";

import type {
	AskAssistantDebug,
	AskAssistantResult,
	HighlightBoxAction,
	InputMode,
} from "../../shared/agent";
import type {
	NativeMicChunkMessage,
	NativeMicStatusMessage,
	StartVoiceTurnResult,
} from "../../shared/live";
import { getPointAction } from "../../shared/agent";
import {
	askCloudAgent,
	getAgentBaseUrl,
} from "./cloudAgent";
import { startNativeMicCapture, stopNativeMicCapture } from "./nativeMic";
import { captureCurrentDisplayScreenshot } from "./screenshot";
import type { CaptureScreenshotResult } from "../shared/screenshot";
import {
	getActiveThread,
	getRecentScreenshots,
	getScreenshotById,
	recordAssistantTurn,
	recordScreenshot,
	recordUserTurn,
} from "./threadStore";

const DEV_SERVER_PORT = 4000;
const DEV_SERVER_URL = `http://localhost:${DEV_SERVER_PORT}`;

const CHAR_SIZE = 220;
const BUBBLE_HEIGHT = 145;
const WINDOW_HEIGHT = CHAR_SIZE + BUBBLE_HEIGHT;
const WINDOW_WIDTH = 240;

function getLiveWebSocketUrl() {
	const agentBaseUrl = getAgentBaseUrl();
	if (!agentBaseUrl) {
		return "";
	}

	return `${agentBaseUrl.replace(/^http/i, "ws")}/live`;
}

// RPC schema
type AppRPCSchema = ElectrobunRPCSchema & {
	bun: {
		requests: {
			requestFocus: { params: undefined; response: { ok: boolean } };
			captureCurrentDisplay: {
				params: undefined;
				response: CaptureScreenshotResult;
			};
			startVoiceTurn: {
				params: undefined;
				response: StartVoiceTurnResult;
			};
			startNativeMic: {
				params: undefined;
				response: { ok: boolean; message?: string };
			};
			stopNativeMic: {
				params: undefined;
				response: { ok: boolean; message?: string };
			};
			openCapturedImage: {
				params: { imagePath: string };
				response: { ok: boolean };
			};
			askAssistant: {
				params: { questionText: string; inputMode: InputMode };
				response: AskAssistantResult;
			};
			showHighlightOverlay: {
				params: { action: HighlightBoxAction };
				response: { ok: boolean };
			};
			clearHighlightOverlay: {
				params: undefined;
				response: { ok: boolean };
			};
		};
		messages: {};
	};
	webview: {
		requests: {};
		messages: {
			nativeMicStatus: NativeMicStatusMessage;
			nativeMicChunk: NativeMicChunkMessage;
		};
	};
};

let mainWindow: BrowserWindow | null = null;
let overlayWindow: BrowserWindow | null = null;
let overlayHideTimeout: Timer | null = null;
const OVERLAY_PADDING = 20;
const OVERLAY_LABEL_HEIGHT = 42;

type OverlayPayload = {
	label: string;
	confidence: number;
	x: number;
	y: number;
	width: number;
	height: number;
};

const rpc = BrowserView.defineRPC<AppRPCSchema>({
	maxRequestTime: 45000,
	handlers: {
		requests: {
			requestFocus: (): { ok: boolean } => {
				if (!mainWindow) {
					return { ok: false };
				}
				mainWindow.focus();
				return { ok: true };
			},
			captureCurrentDisplay: async (): Promise<CaptureScreenshotResult> => {
				if (!mainWindow) {
					return {
						ok: false,
						reason: "capture_failed",
						message: "The main window is not ready yet.",
					} satisfies CaptureScreenshotResult;
				}
				const captureResult = await captureCurrentDisplayScreenshot(mainWindow);
				if (captureResult.ok) {
					recordScreenshot(captureResult);
				}
				return captureResult;
			},
			startVoiceTurn: async (): Promise<StartVoiceTurnResult> => {
				if (!mainWindow) {
					return {
						ok: false,
						reason: "capture_failed",
						message: "The main window is not ready yet.",
					};
				}

				const captureResult = await captureCurrentDisplayScreenshot(mainWindow);
				if (!captureResult.ok) {
					return captureResult;
				}

				recordScreenshot(captureResult);
				const thread = getActiveThread();
				const modelImage = await readFile(captureResult.modelImagePath);

				return {
					ok: true,
					threadId: thread.threadId,
					liveWebSocketUrl: getLiveWebSocketUrl(),
					screenshotId: captureResult.screenshotId,
					imagePath: captureResult.imagePath,
					previewDataUrl: captureResult.previewDataUrl,
					capturedAt: captureResult.capturedAt,
					displayContext: captureResult.displayContext,
					appContext: captureResult.appContext,
					modelMimeType: captureResult.modelMimeType,
					modelImageBase64: modelImage.toString("base64"),
				};
			},
			startNativeMic: async (): Promise<{ ok: boolean; message?: string }> => {
				return await startNativeMicCapture({
					sendStatus: (payload) => {
						rpc.send.nativeMicStatus(payload);
					},
					sendChunk: (payload) => {
						rpc.send.nativeMicChunk(payload);
					},
				});
			},
			stopNativeMic: async (): Promise<{ ok: boolean; message?: string }> => {
				return await stopNativeMicCapture({
					sendStatus: (payload) => {
						rpc.send.nativeMicStatus(payload);
					},
					sendChunk: (payload) => {
						rpc.send.nativeMicChunk(payload);
					},
				});
			},

			openCapturedImage: async ({
				imagePath,
			}: {
				imagePath: string;
			}): Promise<{ ok: boolean }> => {
				const proc = Bun.spawn(["open", imagePath], {
					stdout: "ignore",
					stderr: "ignore",
				});
				const exitCode = await proc.exited;
				return { ok: exitCode === 0 };
			},

			askAssistant: async ({
				questionText,
				inputMode,
			}: {
				questionText: string;
				inputMode: InputMode;
			}): Promise<AskAssistantResult> => {
				const startedAt = Date.now();
				const startedAtIso = new Date(startedAt).toISOString();
				const initialScreenshotCount = getRecentScreenshots().length;
				const agentUrl = getAgentBaseUrl();
				const buildDebug = (
					overrides: Partial<AskAssistantDebug>,
				): AskAssistantDebug => ({
					agentUrl,
					screenshotCount: initialScreenshotCount,
					startedAt: startedAtIso,
					finishedAt: new Date().toISOString(),
					durationMs: Date.now() - startedAt,
					pointDecision: "request_failed",
					pointAction: null,
					requestTimedOut: false,
					responseReceived: false,
					...overrides,
				});

				recordUserTurn(questionText, inputMode);
				const result = await askCloudAgent(questionText, inputMode);
				if (result.ok) {
					recordAssistantTurn(result.response);
					const pointAction = getPointAction(result.response.actions);
					const pointDecision: AskAssistantDebug["pointDecision"] = pointAction
						? "point_available"
						: "no_point_action";

					console.log("assistant summary:", result.response.summary);
					console.log("assistant actions:", JSON.stringify(result.response.actions));

					return {
						ok: true,
						response: result.response,
						debug: buildDebug({
							pointDecision,
							pointAction,
							requestTimedOut: false,
							responseReceived: true,
						}),
					};
				}
				return {
					ok: false,
					message: result.message,
					debug: buildDebug({
						requestTimedOut: /timed out/i.test(result.message),
						responseReceived: false,
					}),
				};
			},
			showHighlightOverlay: async ({
				action,
			}: {
				action: HighlightBoxAction;
			}): Promise<{ ok: boolean }> => {
				await showHighlightOverlay(action);
				return { ok: true };
			},
			clearHighlightOverlay: async (): Promise<{ ok: boolean }> => {
				await clearHighlightOverlay();
				return { ok: true };
			},
		} as any,
	},
});

// Check if Vite dev server is running for HMR
async function getMainViewUrl(): Promise<string> {
	const channel = await Updater.localInfo.channel();
	if (channel === "dev") {
		try {
			await fetch(DEV_SERVER_URL, { method: "HEAD" });
			console.log(`HMR enabled: Using Vite dev server at ${DEV_SERVER_URL}`);
			return DEV_SERVER_URL;
		} catch {
			console.log(
				"Vite dev server not running. Run 'bun run dev:hmr' for HMR support.",
			);
		}
	}
	return "views://mainview/index.html";
}

function withQuery(url: string, query: string) {
	return url.includes("?") ? `${url}&${query}` : `${url}?${query}`;
}

async function ensureOverlayWindow(): Promise<BrowserWindow> {
	if (overlayWindow) {
		return overlayWindow;
	}

	const overlayUrl = withQuery(await getMainViewUrl(), "mode=overlay");
	overlayWindow = new BrowserWindow({
		title: "theOP-overlay",
		url: overlayUrl,
		titleBarStyle: "hidden",
		transparent: true,
		styleMask: {
			Borderless: true,
			Titled: false,
			Closable: false,
			Miniaturizable: false,
			Resizable: false,
			FullSizeContentView: true,
			NonactivatingPanel: true,
		},
		frame: {
			x: 0,
			y: 0,
			width: 120,
			height: 80,
		},
	});
	overlayWindow.setAlwaysOnTop(true);
	overlayWindow.on("close", () => {
		overlayWindow = null;
	});
	return overlayWindow;
}

function mapHighlightToScreen(action: HighlightBoxAction): OverlayPayload | null {
	const screenshot = getScreenshotById(action.screenshotId);
	if (!screenshot) {
		console.warn("[overlay] screenshot not found for highlight", {
			screenshotId: action.screenshotId,
		});
		return null;
	}

	const { displayContext } = screenshot;
	const scaleX = displayContext.bounds.width / displayContext.imageWidth;
	const scaleY = displayContext.bounds.height / displayContext.imageHeight;
	return {
		label: action.label,
		confidence: action.confidence,
		x: action.x * scaleX,
		y: action.y * scaleY,
		width: action.width * scaleX,
		height: action.height * scaleY,
	};
}

async function clearHighlightOverlay() {
	if (overlayHideTimeout) {
		clearTimeout(overlayHideTimeout);
		overlayHideTimeout = null;
	}
	if (!overlayWindow) {
		return;
	}
	try {
		overlayWindow.webview.executeJavascript(
			`window.__theopOverlayPendingState = ${JSON.stringify(null)}; window.__theopOverlaySetState?.(window.__theopOverlayPendingState);`,
		);
	} catch (error) {
		console.warn("[overlay] failed to clear overlay state", error);
	}
	try {
		await overlayWindow.close();
	} catch (error) {
		console.warn("[overlay] failed to close overlay window", error);
		overlayWindow = null;
	}
}

async function showHighlightOverlay(action: HighlightBoxAction) {
	const payload = mapHighlightToScreen(action);
	if (!payload) {
		return;
	}

	const screenshot = getScreenshotById(action.screenshotId);
	if (!screenshot) {
		return;
	}

	const overlay = await ensureOverlayWindow();
	const bounds = screenshot.displayContext.bounds;
	const frameX = Math.round(bounds.x + Math.max(0, payload.x - OVERLAY_PADDING));
	const frameY = Math.round(
		bounds.y + Math.max(0, payload.y - OVERLAY_LABEL_HEIGHT),
	);
	const frameWidth = Math.round(payload.width + OVERLAY_PADDING * 2);
	const frameHeight = Math.round(
		payload.height + OVERLAY_LABEL_HEIGHT + OVERLAY_PADDING,
	);
	const localPayload = {
		...payload,
		x: Math.round(payload.x - Math.max(0, payload.x - OVERLAY_PADDING)),
		y: Math.round(payload.y - Math.max(0, payload.y - OVERLAY_LABEL_HEIGHT)),
		width: Math.round(payload.width),
		height: Math.round(payload.height),
	};
	overlay.setFrame(frameX, frameY, frameWidth, frameHeight);
	overlay.show();
	overlay.webview.executeJavascript(
		`window.__theopOverlayPendingState = ${JSON.stringify(localPayload)}; window.__theopOverlaySetState?.(window.__theopOverlayPendingState);`,
	);
	mainWindow.focus();

	if (overlayHideTimeout) {
		clearTimeout(overlayHideTimeout);
	}
	overlayHideTimeout = setTimeout(() => {
		void clearHighlightOverlay();
	}, 4000);
}

// Create the main application window
const url = await getMainViewUrl();

mainWindow = new BrowserWindow({
	title: "theOP",
	url,
	titleBarStyle: "hiddenInset",
	transparent: true,
	styleMask: {
		FullSizeContentView: true,
		Closable: false,
		Miniaturizable: false,
		Resizable: false,
	},
	frame: {
		width: WINDOW_WIDTH,
		height: WINDOW_HEIGHT,
		x: 500,
		y: 200,
	},
	rpc,
});
