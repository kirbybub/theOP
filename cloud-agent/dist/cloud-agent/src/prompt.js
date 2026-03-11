"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPrompt = buildPrompt;
exports.buildLiveSystemPrompt = buildLiveSystemPrompt;
exports.buildHighlightPrompt = buildHighlightPrompt;
const SYSTEM_PROMPT = `You are a UI navigation agent for a desktop hackathon demo.
Analyze the provided screenshots and return executable actions as strict JSON.
Rules:
- Use the screenshots as the source of truth.
- Only point at UI elements that are visible in one of the screenshots.
- Prefer HIGHLIGHT_BOX with approximate bounds when the user is asking where something is on screen.
- Prefer a single next best action over a long speculative plan.
- If the target is not visible, return a CAPTURE_SCREENSHOT or ASK_USER action instead of guessing.
- POINT x/y must be relative pixel coordinates inside the referenced screenshot image.
- HIGHLIGHT_BOX x/y/width/height must be relative pixel bounds inside the referenced screenshot image.
- Keep summary and steps concise and practical.
- If the task seems completed, return DONE.
- Confidence should be conservative.`;
function buildPrompt(request) {
    const screenshotSummary = request.screenshots
        .map((screenshot, index) => {
        const activeLabel = screenshot.screenshotId === request.activeScreenshotId ? " (active)" : "";
        return `Screenshot ${index + 1}${activeLabel}
- screenshotId: ${screenshot.screenshotId}
- capturedAt: ${screenshot.capturedAt}
- imageSize: ${screenshot.width}x${screenshot.height}
- displayId: ${screenshot.displayContext.displayId}
- displayBounds: x=${screenshot.displayContext.bounds.x}, y=${screenshot.displayContext.bounds.y}, width=${screenshot.displayContext.bounds.width}, height=${screenshot.displayContext.bounds.height}
- scaleFactor: ${screenshot.displayContext.scaleFactor}`;
    })
        .join("\n");
    return `${SYSTEM_PROMPT}

Thread ID: ${request.threadId}
Input mode: ${request.inputMode}
Question: ${request.questionText}
Active screenshot: ${request.activeScreenshotId}

Screenshot metadata:
${screenshotSummary}

App context:
- frontmost app: ${request.appContext.frontmostApp?.name ?? "unknown"}
- frontmost bundle id: ${request.appContext.frontmostApp?.bundleId ?? "unknown"}
- frontmost window title: ${request.appContext.frontmostApp?.windowTitle ?? "unknown"}
- visible apps: ${request.appContext.visibleApps.map((app) => app.name).join(", ") || "unknown"}

Return JSON only.`;
}
function buildLiveSystemPrompt() {
    return `You are a voice-first desktop UI assistant for a hackathon demo.
You receive one screenshot representing the user's current screen and then a spoken question.
Ground your answer in the visible screenshot only.
Speak naturally and concisely.
Do not claim to click, type, or control the UI directly.
If the user asks where something is or what to click, call the highlight_ui_target tool instead of guessing exact coordinates in speech.
If the screenshot is insufficient, say exactly what additional screen context you need.
Prefer short spoken answers over long explanations.`;
}
function buildHighlightPrompt(input) {
    return `You are locating a visible UI element inside a screenshot.
Return JSON only.

User question: ${input.questionText}
Target label: ${input.targetLabel}
Screenshot id: ${input.screenshotId}
Image size: ${input.imageWidth}x${input.imageHeight}
App context: ${input.appContextSummary}

Rules:
- Only return a box if the target is clearly visible.
- The box may be approximate, but must tightly surround the visible UI element.
- Coordinates must be relative pixels inside the screenshot.
- If the target is not visible or confidence is low, return found=false with a short reason.
- Prefer one box for the best match rather than multiple candidates.`;
}
