"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assistResponseJsonSchema = exports.assistResponseSchema = exports.assistRequestSchema = void 0;
const zod_1 = require("zod");
const appDescriptorSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    bundleId: zod_1.z.string().nullable(),
    windowTitle: zod_1.z.string().nullable().optional(),
});
const appContextSchema = zod_1.z.object({
    frontmostApp: appDescriptorSchema.nullable(),
    visibleApps: zod_1.z.array(appDescriptorSchema),
});
exports.assistRequestSchema = zod_1.z.object({
    threadId: zod_1.z.string().min(1),
    questionText: zod_1.z.string().min(1),
    inputMode: zod_1.z.enum(["text", "voice"]),
    activeScreenshotId: zod_1.z.string().min(1),
    displayContext: zod_1.z.object({
        displayId: zod_1.z.number(),
        bounds: zod_1.z.object({
            x: zod_1.z.number(),
            y: zod_1.z.number(),
            width: zod_1.z.number().positive(),
            height: zod_1.z.number().positive(),
        }),
        scaleFactor: zod_1.z.number().positive(),
        imageWidth: zod_1.z.number().positive(),
        imageHeight: zod_1.z.number().positive(),
    }),
    appContext: appContextSchema,
    screenshots: zod_1.z
        .array(zod_1.z.object({
        screenshotId: zod_1.z.string().min(1),
        mimeType: zod_1.z.string().min(1),
        bytesBase64: zod_1.z.string().optional(),
        gcsUri: zod_1.z.string().url().optional(),
        width: zod_1.z.number().positive(),
        height: zod_1.z.number().positive(),
        capturedAt: zod_1.z.string().min(1),
        displayContext: zod_1.z.object({
            displayId: zod_1.z.number(),
            bounds: zod_1.z.object({
                x: zod_1.z.number(),
                y: zod_1.z.number(),
                width: zod_1.z.number().positive(),
                height: zod_1.z.number().positive(),
            }),
            scaleFactor: zod_1.z.number().positive(),
            imageWidth: zod_1.z.number().positive(),
            imageHeight: zod_1.z.number().positive(),
        }),
        appContext: appContextSchema,
    }))
        .min(1),
});
exports.assistResponseSchema = zod_1.z.object({
    summary: zod_1.z.string(),
    steps: zod_1.z.array(zod_1.z.string()),
    actions: zod_1.z.array(zod_1.z.union([
        zod_1.z.object({
            type: zod_1.z.literal("POINT"),
            screenshotId: zod_1.z.string(),
            x: zod_1.z.number(),
            y: zod_1.z.number(),
            confidence: zod_1.z.number().min(0).max(1),
            label: zod_1.z.string(),
        }),
        zod_1.z.object({
            type: zod_1.z.literal("HIGHLIGHT_BOX"),
            screenshotId: zod_1.z.string(),
            x: zod_1.z.number(),
            y: zod_1.z.number(),
            width: zod_1.z.number().positive(),
            height: zod_1.z.number().positive(),
            confidence: zod_1.z.number().min(0).max(1),
            label: zod_1.z.string(),
        }),
        zod_1.z.object({
            type: zod_1.z.literal("CAPTURE_SCREENSHOT"),
            reason: zod_1.z.string(),
        }),
        zod_1.z.object({
            type: zod_1.z.literal("ASK_USER"),
            question: zod_1.z.string(),
        }),
        zod_1.z.object({
            type: zod_1.z.literal("DONE"),
            resultSummary: zod_1.z.string(),
        }),
        zod_1.z.object({
            type: zod_1.z.literal("CLICK"),
            screenshotId: zod_1.z.string(),
            x: zod_1.z.number(),
            y: zod_1.z.number(),
            confidence: zod_1.z.number().min(0).max(1),
            label: zod_1.z.string(),
        }),
        zod_1.z.object({
            type: zod_1.z.literal("TYPE"),
            text: zod_1.z.string(),
        }),
        zod_1.z.object({
            type: zod_1.z.literal("SCROLL"),
            direction: zod_1.z.enum(["up", "down"]),
            amount: zod_1.z.enum(["small", "medium", "large"]),
        }),
        zod_1.z.object({
            type: zod_1.z.literal("HOTKEY"),
            keys: zod_1.z.array(zod_1.z.string()).min(1),
        }),
    ])),
    needsMoreContext: zod_1.z.boolean(),
    followUpQuestion: zod_1.z.string().nullable(),
});
exports.assistResponseJsonSchema = {
    type: "object",
    properties: {
        summary: { type: "string" },
        steps: {
            type: "array",
            items: { type: "string" },
        },
        actions: {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "object",
                        properties: {
                            type: { type: "string", enum: ["POINT"] },
                            screenshotId: { type: "string" },
                            x: { type: "number" },
                            y: { type: "number" },
                            confidence: { type: "number" },
                            label: { type: "string" }
                        },
                        required: ["type", "screenshotId", "x", "y", "confidence", "label"]
                    },
                    {
                        type: "object",
                        properties: {
                            type: { type: "string", enum: ["HIGHLIGHT_BOX"] },
                            screenshotId: { type: "string" },
                            x: { type: "number" },
                            y: { type: "number" },
                            width: { type: "number" },
                            height: { type: "number" },
                            confidence: { type: "number" },
                            label: { type: "string" }
                        },
                        required: ["type", "screenshotId", "x", "y", "width", "height", "confidence", "label"]
                    },
                    {
                        type: "object",
                        properties: {
                            type: { type: "string", enum: ["CAPTURE_SCREENSHOT"] },
                            reason: { type: "string" }
                        },
                        required: ["type", "reason"]
                    },
                    {
                        type: "object",
                        properties: {
                            type: { type: "string", enum: ["ASK_USER"] },
                            question: { type: "string" }
                        },
                        required: ["type", "question"]
                    },
                    {
                        type: "object",
                        properties: {
                            type: { type: "string", enum: ["DONE"] },
                            resultSummary: { type: "string" }
                        },
                        required: ["type", "resultSummary"]
                    },
                    {
                        type: "object",
                        properties: {
                            type: { type: "string", enum: ["CLICK"] },
                            screenshotId: { type: "string" },
                            x: { type: "number" },
                            y: { type: "number" },
                            confidence: { type: "number" },
                            label: { type: "string" }
                        },
                        required: ["type", "screenshotId", "x", "y", "confidence", "label"]
                    },
                    {
                        type: "object",
                        properties: {
                            type: { type: "string", enum: ["TYPE"] },
                            text: { type: "string" }
                        },
                        required: ["type", "text"]
                    },
                    {
                        type: "object",
                        properties: {
                            type: { type: "string", enum: ["SCROLL"] },
                            direction: { type: "string", enum: ["up", "down"] },
                            amount: { type: "string", enum: ["small", "medium", "large"] }
                        },
                        required: ["type", "direction", "amount"]
                    },
                    {
                        type: "object",
                        properties: {
                            type: { type: "string", enum: ["HOTKEY"] },
                            keys: { type: "array", items: { type: "string" } }
                        },
                        required: ["type", "keys"]
                    }
                ]
            }
        },
        needsMoreContext: { type: "boolean" },
        followUpQuestion: {
            anyOf: [{ type: "string" }, { type: "null" }]
        }
    },
    required: ["summary", "steps", "actions", "needsMoreContext", "followUpQuestion"]
};
