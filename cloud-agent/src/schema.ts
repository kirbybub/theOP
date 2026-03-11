import { z } from "zod";

const appDescriptorSchema = z.object({
	name: z.string().min(1),
	bundleId: z.string().nullable(),
	windowTitle: z.string().nullable().optional(),
});

const appContextSchema = z.object({
	frontmostApp: appDescriptorSchema.nullable(),
	visibleApps: z.array(appDescriptorSchema),
});

export const assistRequestSchema = z.object({
	threadId: z.string().min(1),
	questionText: z.string().min(1),
	inputMode: z.enum(["text", "voice"]),
	activeScreenshotId: z.string().min(1),
	displayContext: z.object({
		displayId: z.number(),
		bounds: z.object({
			x: z.number(),
			y: z.number(),
			width: z.number().positive(),
			height: z.number().positive(),
		}),
		scaleFactor: z.number().positive(),
		imageWidth: z.number().positive(),
		imageHeight: z.number().positive(),
	}),
	appContext: appContextSchema,
	screenshots: z
		.array(
			z.object({
				screenshotId: z.string().min(1),
				mimeType: z.string().min(1),
				bytesBase64: z.string().optional(),
				gcsUri: z.string().url().optional(),
				width: z.number().positive(),
				height: z.number().positive(),
				capturedAt: z.string().min(1),
				displayContext: z.object({
					displayId: z.number(),
					bounds: z.object({
						x: z.number(),
						y: z.number(),
						width: z.number().positive(),
						height: z.number().positive(),
					}),
					scaleFactor: z.number().positive(),
					imageWidth: z.number().positive(),
					imageHeight: z.number().positive(),
				}),
				appContext: appContextSchema,
			}),
		)
		.min(1),
});

export const assistResponseSchema = z.object({
	summary: z.string(),
	steps: z.array(z.string()),
	actions: z.array(
		z.union([
			z.object({
				type: z.literal("POINT"),
				screenshotId: z.string(),
				x: z.number(),
				y: z.number(),
				confidence: z.number().min(0).max(1),
				label: z.string(),
			}),
			z.object({
				type: z.literal("HIGHLIGHT_BOX"),
				screenshotId: z.string(),
				x: z.number(),
				y: z.number(),
				width: z.number().positive(),
				height: z.number().positive(),
				confidence: z.number().min(0).max(1),
				label: z.string(),
			}),
			z.object({
				type: z.literal("CAPTURE_SCREENSHOT"),
				reason: z.string(),
			}),
			z.object({
				type: z.literal("ASK_USER"),
				question: z.string(),
			}),
			z.object({
				type: z.literal("DONE"),
				resultSummary: z.string(),
			}),
			z.object({
				type: z.literal("CLICK"),
				screenshotId: z.string(),
				x: z.number(),
				y: z.number(),
				confidence: z.number().min(0).max(1),
				label: z.string(),
			}),
			z.object({
				type: z.literal("TYPE"),
				text: z.string(),
			}),
			z.object({
				type: z.literal("SCROLL"),
				direction: z.enum(["up", "down"]),
				amount: z.enum(["small", "medium", "large"]),
			}),
			z.object({
				type: z.literal("HOTKEY"),
				keys: z.array(z.string()).min(1),
			}),
		]),
	),
	needsMoreContext: z.boolean(),
	followUpQuestion: z.string().nullable(),
});

export type AssistRequestInput = z.infer<typeof assistRequestSchema>;
export type AssistResponseOutput = z.infer<typeof assistResponseSchema>;

export const assistResponseJsonSchema = {
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
} as const;
