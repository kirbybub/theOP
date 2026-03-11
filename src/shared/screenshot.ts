import type { AppContext, DisplayContext } from "../../shared/agent";

export type CaptureFailureReason =
	| "permission_denied"
	| "capture_failed"
	| "busy";

export type CaptureScreenshotSuccess = {
	ok: true;
	screenshotId: string;
	imagePath: string;
	modelImagePath: string;
	modelMimeType: string;
	previewDataUrl: string | null;
	capturedAt: string;
	displayContext: DisplayContext;
	appContext: AppContext;
};

export type CaptureScreenshotFailure = {
	ok: false;
	reason: CaptureFailureReason;
	message: string;
};

export type CaptureScreenshotResult =
	| CaptureScreenshotSuccess
	| CaptureScreenshotFailure;
