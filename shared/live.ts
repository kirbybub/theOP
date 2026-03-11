import type { AppContext, DisplayContext, HighlightBoxAction } from "./agent";

export type VoiceTurnFailureReason =
	| "permission_denied"
	| "capture_failed"
	| "busy";

export const LIVE_INPUT_SAMPLE_RATE = 16000;
export const LIVE_OUTPUT_SAMPLE_RATE = 24000;
export const LIVE_GREETING = "What's on your mind?";
export const LIVE_PCM_MIME_PREFIX = "audio/pcm;rate=";

export type VoiceTurnState =
	| "idle"
	| "capturing"
	| "connecting"
	| "ready"
	| "recording"
	| "thinking"
	| "speaking"
	| "completed"
	| "error";

export type VoiceTurnScreenshot = {
	threadId: string;
	liveWebSocketUrl: string;
	screenshotId: string;
	imagePath: string;
	previewDataUrl: string | null;
	capturedAt: string;
	displayContext: DisplayContext;
	appContext: AppContext;
	modelMimeType: string;
	modelImageBase64: string;
};

export type StartVoiceTurnResult =
	| ({
			ok: true;
	  } & VoiceTurnScreenshot)
	| {
			ok: false;
			reason: VoiceTurnFailureReason;
			message: string;
	  };

export type NativeMicStatusMessage = {
	state:
		| "starting"
		| "ready"
		| "permission_denied"
		| "stopped"
		| "error";
	message?: string;
};

export type NativeMicChunkMessage = {
	pcm16Base64: string;
	sampleRate: number;
};

export type LiveClientMessage =
	| {
			type: "session.start";
			threadId: string;
			inputMode: "voice";
			questionHint?: string;
			screenshot: {
				screenshotId: string;
				mimeType: string;
				bytesBase64: string;
				capturedAt: string;
			};
			displayContext: DisplayContext;
			appContext: AppContext;
	  }
	| {
			type: "audio.chunk";
			pcm16Base64: string;
			sampleRate: number;
	  }
	| {
			type: "audio.end";
	  }
	| {
			type: "session.cancel";
	  }
	| {
			type: "session.close";
	  };

export type LiveServerMessage =
	| {
			type: "session.ready";
			sessionId?: string;
	  }
	| {
			type: "session.error";
			message: string;
	  }
	| {
			type: "transcript.partial";
			role: "user" | "assistant";
			text: string;
	  }
	| {
			type: "transcript.final";
			role: "user" | "assistant";
			text: string;
	  }
	| {
			type: "response.text";
			text: string;
	  }
	| {
			type: "response.audio.chunk";
			pcm16Base64: string;
			sampleRate: number;
	  }
	| {
			type: "response.done";
	  }
	| {
			type: "highlight.show";
			action: HighlightBoxAction;
			message?: string;
	  }
	| {
			type: "highlight.clear";
	  }
	| {
			type: "debug.status";
			status: string;
			detail?: string;
	  };
