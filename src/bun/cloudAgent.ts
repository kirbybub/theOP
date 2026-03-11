import { readFile } from "node:fs/promises";

import type {
	AssistRequest,
	AssistResponse,
	InputMode,
	ScreenshotInput,
} from "../../shared/agent";
import { getPointAction } from "../../shared/agent";
import type { CaptureScreenshotSuccess } from "../shared/screenshot";

import { getActiveThread, getRecentScreenshots } from "./threadStore";

const DEFAULT_AGENT_PATH = "/assist";
const ASSISTANT_FETCH_TIMEOUT_MS = 30000;

type CloudAgentResult =
	| {
			ok: true;
			response: AssistResponse;
	  }
	| {
			ok: false;
			message: string;
	  };

export function getAgentBaseUrl() {
	const raw =
		process.env["THEOP_AGENT_URL"] ??
		process.env["THEOP_CLOUD_AGENT_URL"] ??
		"";
	return raw.replace(/\/+$/, "");
}

async function buildScreenshotInput(
	screenshot: CaptureScreenshotSuccess,
): Promise<ScreenshotInput> {
	const imageBuffer = await readFile(screenshot.modelImagePath);
	return {
		screenshotId: screenshot.screenshotId,
		mimeType: screenshot.modelMimeType,
		bytesBase64: imageBuffer.toString("base64"),
		width: screenshot.displayContext.imageWidth,
		height: screenshot.displayContext.imageHeight,
		capturedAt: screenshot.capturedAt,
		displayContext: screenshot.displayContext,
		appContext: screenshot.appContext,
	};
}

function isAssistResponse(value: unknown): value is AssistResponse {
	if (typeof value !== "object" || value === null) {
		return false;
	}

	const candidate = value as Partial<AssistResponse>;
	return (
		typeof candidate.summary === "string" &&
		Array.isArray(candidate.steps) &&
		Array.isArray(candidate.actions) &&
		typeof candidate.needsMoreContext === "boolean" &&
		(candidate.followUpQuestion === null ||
			typeof candidate.followUpQuestion === "string")
	);
}

export async function askCloudAgent(
	questionText: string,
	inputMode: InputMode,
): Promise<CloudAgentResult> {
	const agentBaseUrl = getAgentBaseUrl();
	if (!agentBaseUrl) {
		return {
			ok: false,
			message:
				"Set THEOP_AGENT_URL to your Cloud Run service URL before asking the assistant.",
		};
	}

	const screenshots = getRecentScreenshots();
	if (screenshots.length === 0) {
		return {
			ok: false,
			message: "Take a screenshot before asking the assistant.",
		};
	}

	const thread = getActiveThread();
	const screenshotInputs = await Promise.all(
		screenshots.map((screenshot) => buildScreenshotInput(screenshot)),
	);
	const activeScreenshot = screenshots[screenshots.length - 1];
	const request: AssistRequest = {
		threadId: thread.threadId,
		questionText,
		screenshots: screenshotInputs,
		activeScreenshotId: activeScreenshot.screenshotId,
		displayContext: activeScreenshot.displayContext,
		appContext: activeScreenshot.appContext,
		inputMode,
	};

	const controller = new AbortController();
	const timeoutId = setTimeout(() => {
		controller.abort(
			new Error(
				`Cloud agent request timed out after ${ASSISTANT_FETCH_TIMEOUT_MS}ms.`,
			),
		);
	}, ASSISTANT_FETCH_TIMEOUT_MS);

	let response: Response;
	try {
		response = await fetch(`${agentBaseUrl}${DEFAULT_AGENT_PATH}`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(request),
			signal: controller.signal,
		});
	} catch (error) {
		if (controller.signal.aborted) {
			return {
				ok: false,
				message: `Cloud agent request timed out after ${ASSISTANT_FETCH_TIMEOUT_MS}ms.`,
			};
		}

		if (error instanceof Error) {
			return {
				ok: false,
				message: error.message,
			};
		}

		return {
			ok: false,
			message: "Cloud agent request failed unexpectedly.",
		};
	} finally {
		clearTimeout(timeoutId);
	}

	if (!response.ok) {
		const bodyText = await response.text();
		return {
			ok: false,
			message:
				bodyText || `Cloud agent request failed with status ${response.status}.`,
		};
	}

	const data = (await response.json()) as unknown;
	if (!isAssistResponse(data)) {
		return {
			ok: false,
			message: "Cloud agent returned an invalid response payload.",
		};
	}

	return {
		ok: true,
		response: {
			...data,
			actions: data.actions,
			steps: data.steps,
		},
	};
}

export function getPointScreenshot(
	result: AssistResponse,
): CaptureScreenshotSuccess | null {
	const pointAction = getPointAction(result.actions);
	if (!pointAction) {
		return null;
	}

	for (const screenshot of getRecentScreenshots()) {
		if (screenshot.screenshotId === pointAction.screenshotId) {
			return screenshot;
		}
	}

	return null;
}
