export type CaptureFailureReason =
	| "permission_denied"
	| "capture_failed"
	| "busy";

export type CaptureScreenshotSuccess = {
	ok: true;
	imagePath: string;
	previewDataUrl: string | null;
	capturedAt: string;
};

export type CaptureScreenshotFailure = {
	ok: false;
	reason: CaptureFailureReason;
	message: string;
};

export type CaptureScreenshotResult =
	| CaptureScreenshotSuccess
	| CaptureScreenshotFailure;
