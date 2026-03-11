export type InputMode = "text" | "voice";

export type ScreenBounds = {
	x: number;
	y: number;
	width: number;
	height: number;
};

export type DisplayContext = {
	displayId: number;
	bounds: ScreenBounds;
	scaleFactor: number;
	imageWidth: number;
	imageHeight: number;
};

export type AppDescriptor = {
	name: string;
	bundleId: string | null;
	windowTitle?: string | null;
};

export type AppContext = {
	frontmostApp: AppDescriptor | null;
	visibleApps: AppDescriptor[];
};

export type ScreenshotInput = {
	screenshotId: string;
	mimeType: string;
	bytesBase64?: string;
	gcsUri?: string;
	width: number;
	height: number;
	capturedAt: string;
	displayContext: DisplayContext;
	appContext: AppContext;
};

export type PointAction = {
	type: "POINT";
	screenshotId: string;
	x: number;
	y: number;
	confidence: number;
	label: string;
};

export type HighlightBoxAction = {
	type: "HIGHLIGHT_BOX";
	screenshotId: string;
	x: number;
	y: number;
	width: number;
	height: number;
	confidence: number;
	label: string;
};

export type CaptureScreenshotAction = {
	type: "CAPTURE_SCREENSHOT";
	reason: string;
};

export type AskUserAction = {
	type: "ASK_USER";
	question: string;
};

export type DoneAction = {
	type: "DONE";
	resultSummary: string;
};

export type ClickAction = {
	type: "CLICK";
	screenshotId: string;
	x: number;
	y: number;
	confidence: number;
	label: string;
};

export type TypeAction = {
	type: "TYPE";
	text: string;
};

export type ScrollAction = {
	type: "SCROLL";
	direction: "up" | "down";
	amount: "small" | "medium" | "large";
};

export type HotkeyAction = {
	type: "HOTKEY";
	keys: string[];
};

export type AssistAction =
	| PointAction
	| HighlightBoxAction
	| CaptureScreenshotAction
	| AskUserAction
	| DoneAction
	| ClickAction
	| TypeAction
	| ScrollAction
	| HotkeyAction;

export type AssistRequest = {
	threadId: string;
	questionText: string;
	screenshots: ScreenshotInput[];
	activeScreenshotId: string;
	displayContext: DisplayContext;
	appContext: AppContext;
	inputMode: InputMode;
};

export type AssistResponse = {
	summary: string;
	steps: string[];
	actions: AssistAction[];
	needsMoreContext: boolean;
	followUpQuestion: string | null;
};

export type AskAssistantDebug = {
	agentUrl: string;
	screenshotCount: number;
	startedAt: string;
	finishedAt: string;
	durationMs: number;
	pointDecision:
		| "point_available"
		| "no_point_action"
		| "request_failed";
	pointAction: PointAction | null;
	requestTimedOut: boolean;
	responseReceived: boolean;
};

export type AskAssistantResult =
	| {
			ok: true;
			response: AssistResponse;
			debug: AskAssistantDebug;
	  }
	| {
			ok: false;
			message: string;
			debug: AskAssistantDebug;
	  };

export function getPointAction(actions: AssistAction[]): PointAction | null {
	for (const action of actions) {
		if (action.type === "POINT") {
			return action;
		}
	}
	return null;
}

export function getHighlightBoxAction(actions: AssistAction[]): HighlightBoxAction | null {
	for (const action of actions) {
		if (action.type === "HIGHLIGHT_BOX") {
			return action;
		}
	}
	return null;
}
