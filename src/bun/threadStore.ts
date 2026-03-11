import type { AssistResponse, InputMode } from "../../shared/agent";
import type { CaptureScreenshotSuccess } from "../shared/screenshot";

type ThreadTurn = {
	id: string;
	role: "user" | "assistant";
	text: string;
	inputMode?: InputMode;
	createdAt: string;
};

type ActiveThread = {
	threadId: string;
	goal: string | null;
	turns: ThreadTurn[];
	screenshots: CaptureScreenshotSuccess[];
	latestAgentActionPlan: AssistResponse | null;
};

let activeThread: ActiveThread | null = null;

function createThread(): ActiveThread {
	return {
		threadId: crypto.randomUUID(),
		goal: null,
		turns: [],
		screenshots: [],
		latestAgentActionPlan: null,
	};
}

export function ensureActiveThread() {
	if (!activeThread) {
		activeThread = createThread();
	}
	return activeThread;
}

export function getActiveThread() {
	return ensureActiveThread();
}

export function recordScreenshot(screenshot: CaptureScreenshotSuccess) {
	const thread = ensureActiveThread();
	thread.screenshots.push(screenshot);
	return thread;
}

export function recordUserTurn(questionText: string, inputMode: InputMode) {
	const thread = ensureActiveThread();
	if (!thread.goal) {
		thread.goal = questionText;
	}
	thread.turns.push({
		id: crypto.randomUUID(),
		role: "user",
		text: questionText,
		inputMode,
		createdAt: new Date().toISOString(),
	});
	return thread;
}

export function recordAssistantTurn(response: AssistResponse) {
	const thread = ensureActiveThread();
	thread.latestAgentActionPlan = response;
	thread.turns.push({
		id: crypto.randomUUID(),
		role: "assistant",
		text: response.summary,
		createdAt: new Date().toISOString(),
	});
	return thread;
}

export function getRecentScreenshots(limit = 4) {
	const thread = ensureActiveThread();
	return thread.screenshots.slice(-limit);
}

export function getScreenshotById(screenshotId: string) {
	const thread = ensureActiveThread();
	return thread.screenshots.find((screenshot) => screenshot.screenshotId === screenshotId) ?? null;
}
