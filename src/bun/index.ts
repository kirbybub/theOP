import { BrowserView, BrowserWindow, Updater } from "electrobun/bun";
import type { ElectrobunRPCSchema } from "electrobun/bun";

import { captureCurrentDisplayScreenshot } from "./screenshot";
import type { CaptureScreenshotResult } from "../shared/screenshot";

const DEV_SERVER_PORT = 4000;
const DEV_SERVER_URL = `http://localhost:${DEV_SERVER_PORT}`;

const CHAR_SIZE = 200;
const BUBBLE_HEIGHT = 105;
const WINDOW_HEIGHT = CHAR_SIZE + BUBBLE_HEIGHT;

// RPC schema
type AppRPCSchema = ElectrobunRPCSchema & {
	bun: {
		requests: {
			requestFocus: { params: undefined; response: { ok: boolean } };
			captureCurrentDisplay: {
				params: undefined;
				response: CaptureScreenshotResult;
			};
			openCapturedImage: {
				params: { imagePath: string };
				response: { ok: boolean };
			};
		};
		messages: {};
	};
	webview: {
		requests: {};
		messages: {};
	};
};

let mainWindow: BrowserWindow | null = null;

const rpc = BrowserView.defineRPC<AppRPCSchema>({
	maxRequestTime: 5000,
	handlers: {
		requests: {
			requestFocus: (): { ok: boolean } => {
				if (!mainWindow) {
					return { ok: false };
				}
				mainWindow.focus();
				return { ok: true };
			},
			_: async (method, params) => {
				if (method === "captureCurrentDisplay") {
					if (!mainWindow) {
						return {
							ok: false,
							reason: "capture_failed",
							message: "The main window is not ready yet.",
						} satisfies CaptureScreenshotResult;
					}
					return await captureCurrentDisplayScreenshot(mainWindow);
				}

				if (method === "openCapturedImage") {
					const { imagePath } = params as { imagePath: string };
					const proc = Bun.spawn(["open", imagePath], {
						stdout: "ignore",
						stderr: "ignore",
					});
					const exitCode = await proc.exited;
					return { ok: exitCode === 0 };
				}

				throw new Error(`Unhandled RPC request: ${String(method)}`);
			},
		},
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
		width: CHAR_SIZE,
		height: WINDOW_HEIGHT,
		x: 500,
		y: 200,
	},
	rpc,
});
