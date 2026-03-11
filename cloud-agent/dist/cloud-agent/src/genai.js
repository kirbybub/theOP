"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAssistPlan = generateAssistPlan;
exports.locateUiTarget = locateUiTarget;
const genai_1 = require("@google/genai");
const zod_1 = require("zod");
const config_1 = require("./config");
const schema_1 = require("./schema");
const prompt_1 = require("./prompt");
function createClient() {
    const config = (0, config_1.assertConfig)();
    return new genai_1.GoogleGenAI({
        vertexai: true,
        project: config.project,
        location: config.location,
    });
}
function buildContents(request) {
    const parts = [
        {
            text: (0, prompt_1.buildPrompt)(request),
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
        }
        else if (screenshot.gcsUri) {
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
async function generateAssistPlan(request) {
    const config = (0, config_1.assertConfig)();
    const ai = createClient();
    const response = await ai.models.generateContent({
        model: config.model,
        contents: buildContents(request),
        config: {
            temperature: 0.2,
            responseMimeType: "application/json",
            responseJsonSchema: schema_1.assistResponseJsonSchema,
        },
    });
    const text = response.text;
    if (!text) {
        throw new Error("Gemini returned an empty response.");
    }
    const parsed = JSON.parse(text);
    return schema_1.assistResponseSchema.parse(parsed);
}
const highlightResultSchema = zod_1.z.object({
    found: zod_1.z.boolean(),
    reason: zod_1.z.string().nullable(),
    label: zod_1.z.string().nullable(),
    confidence: zod_1.z.number().min(0).max(1),
    box: zod_1.z
        .object({
        x: zod_1.z.number(),
        y: zod_1.z.number(),
        width: zod_1.z.number().positive(),
        height: zod_1.z.number().positive(),
    })
        .nullable(),
});
function summarizeAppContext(appContext) {
    return [
        `frontmost app: ${appContext.frontmostApp?.name ?? "unknown"}`,
        `bundle id: ${appContext.frontmostApp?.bundleId ?? "unknown"}`,
        `window title: ${appContext.frontmostApp?.windowTitle ?? "unknown"}`,
        `visible apps: ${appContext.visibleApps.map((app) => app.name).join(", ") || "unknown"}`,
    ].join("; ");
}
async function locateUiTarget(params) {
    const config = (0, config_1.assertConfig)();
    const ai = createClient();
    const prompt = (0, prompt_1.buildHighlightPrompt)({
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
                                fileUri: params.screenshot.gcsUri,
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
    const parsed = highlightResultSchema.parse(JSON.parse(text));
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
