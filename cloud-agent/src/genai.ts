import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

import type {
	AppContext,
	AssistRequest,
	AssistResponse,
	HighlightBoxAction,
	ScreenshotInput,
} from "../../shared/agent";

import { assertConfig } from "./config";
import {
	assistResponseJsonSchema,
	assistResponseSchema,
	type AssistRequestInput,
} from "./schema";
import { buildHighlightPrompt, buildPrompt } from "./prompt";

function createClient() {
	const config = assertConfig();
	return new GoogleGenAI({
		vertexai: true,
		project: config.project,
		location: config.location,
	});
}

function buildContents(request: AssistRequestInput) {
	const parts: Array<Record<string, unknown>> = [
		{
			text: buildPrompt(request),
		},
	];

	for (const screenshot of request.screenshots) {
		parts.push({
			text: `Screenshot ${screenshot.screenshotId} follows.`,
		});

		if (screenshot.bytesBase64) {
			parts.push({
				inlineData: {
					mimeType: screenshot.mimeType,
					data: screenshot.bytesBase64,
				},
			});
		} else if (screenshot.gcsUri) {
			parts.push({
				fileData: {
					mimeType: screenshot.mimeType,
					fileUri: screenshot.gcsUri,
				},
			});
		}
	}

	return [{ role: "user", parts }];
}

export async function generateAssistPlan(
	request: AssistRequest,
): Promise<AssistResponse> {
	const config = assertConfig();
	const ai = createClient();
	const response = await ai.models.generateContent({
		model: config.model,
		contents: buildContents(request),
		config: {
			temperature: 0.2,
			responseMimeType: "application/json",
			responseJsonSchema: assistResponseJsonSchema,
		},
	});

	const text = response.text;
	if (!text) {
		throw new Error("Gemini returned an empty response.");
	}

	const parsed = JSON.parse(text) as unknown;
	return assistResponseSchema.parse(parsed);
}

const highlightResultSchema = z.object({
	found: z.boolean(),
	reason: z.string().nullable(),
	label: z.string().nullable(),
	confidence: z.number().min(0).max(1),
	box: z
		.object({
			x: z.number(),
			y: z.number(),
			width: z.number().positive(),
			height: z.number().positive(),
		})
		.nullable(),
});

type HighlightResult = z.infer<typeof highlightResultSchema>;

function summarizeAppContext(appContext: AppContext) {
	return [
		`frontmost app: ${appContext.frontmostApp?.name ?? "unknown"}`,
		`bundle id: ${appContext.frontmostApp?.bundleId ?? "unknown"}`,
		`window title: ${appContext.frontmostApp?.windowTitle ?? "unknown"}`,
		`visible apps: ${appContext.visibleApps.map((app) => app.name).join(", ") || "unknown"}`,
	].join("; ");
}

export async function locateUiTarget(params: {
	questionText: string;
	targetLabel: string;
	screenshot: ScreenshotInput;
	appContext: AppContext;
}): Promise<{
	ok: true;
	action: HighlightBoxAction;
	reason: string | null;
} | {
	ok: false;
	reason: string;
}> {
	const config = assertConfig();
	const ai = createClient();
	const prompt = buildHighlightPrompt({
		questionText: params.questionText,
		targetLabel: params.targetLabel,
		screenshotId: params.screenshot.screenshotId,
		appContextSummary: summarizeAppContext(params.appContext),
		imageWidth: params.screenshot.width,
		imageHeight: params.screenshot.height,
	});

	const response = await ai.models.generateContent({
		model: config.model,
		contents: [{
			role: "user",
			parts: [
				{ text: prompt },
				params.screenshot.bytesBase64
					? {
						inlineData: {
							mimeType: params.screenshot.mimeType,
							data: params.screenshot.bytesBase64,
						},
					}
					: {
						fileData: {
							mimeType: params.screenshot.mimeType,
							fileUri: params.screenshot.gcsUri!,
						},
					},
			],
		}],
		config: {
			temperature: 0.1,
			responseMimeType: "application/json",
			responseJsonSchema: {
				type: "object",
				properties: {
					found: { type: "boolean" },
					reason: { anyOf: [{ type: "string" }, { type: "null" }] },
					label: { anyOf: [{ type: "string" }, { type: "null" }] },
					confidence: { type: "number" },
					box: {
						anyOf: [
							{
								type: "object",
								properties: {
									x: { type: "number" },
									y: { type: "number" },
									width: { type: "number" },
									height: { type: "number" },
								},
								required: ["x", "y", "width", "height"],
							},
							{ type: "null" },
						],
					},
				},
				required: ["found", "reason", "label", "confidence", "box"],
			},
		},
	});

	const text = response.text;
	if (!text) {
		return {
			ok: false,
			reason: "Gemini returned an empty locator response.",
		};
	}

	const parsed = highlightResultSchema.parse(JSON.parse(text) as HighlightResult);
	if (!parsed.found || !parsed.box) {
		return {
			ok: false,
			reason: parsed.reason ?? "The target is not clearly visible in the screenshot.",
		};
	}

	return {
		ok: true,
		action: {
			type: "HIGHLIGHT_BOX",
			screenshotId: params.screenshot.screenshotId,
			x: parsed.box.x,
			y: parsed.box.y,
			width: parsed.box.width,
			height: parsed.box.height,
			confidence: parsed.confidence,
			label: parsed.label ?? params.targetLabel,
		},
		reason: parsed.reason,
	};
}
