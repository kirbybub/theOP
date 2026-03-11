import { createServer } from "node:http";

import cors from "cors";
import express from "express";
import { WebSocketServer } from "ws";

import type { AssistResponse } from "../../shared/agent";

import { assertConfig, getConfig } from "./config";
import { generateAssistPlan } from "./genai";
import { handleLiveSocket } from "./live";
import { assistRequestSchema } from "./schema";

const app = express();

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/healthz", (_req, res) => {
	res.status(200).json({ ok: true });
});

app.post("/assist", async (req, res) => {
	const parsedRequest = assistRequestSchema.safeParse(req.body);
	if (!parsedRequest.success) {
		res.status(400).json({
			error: "Invalid assist request payload.",
			details: parsedRequest.error.flatten(),
		});
		return;
	}

	try {
		console.log("assist request", {
			threadId: parsedRequest.data.threadId,
			questionText: parsedRequest.data.questionText,
			screenshotCount: parsedRequest.data.screenshots.length,
			activeScreenshotId: parsedRequest.data.activeScreenshotId,
		});
		const response: AssistResponse = await generateAssistPlan(parsedRequest.data);
		console.log("assist response", {
			summary: response.summary,
			actionCount: response.actions.length,
		});
		res.status(200).json(response);
	} catch (error) {
		console.error("assist request failed", error);
		res.status(500).json({
			error:
				error instanceof Error
					? error.message
					: "Unknown assist request failure.",
		});
	}
});

try {
	assertConfig();
} catch (error) {
	console.warn(
		error instanceof Error ? error.message : "Cloud agent config is incomplete.",
	);
}

const { port } = getConfig();
const server = createServer(app);
const liveServer = new WebSocketServer({ noServer: true });

server.on("upgrade", (request, socket, head) => {
	console.log("ws upgrade", {
		url: request.url,
	});

	if (request.url !== "/live") {
		console.warn("ws upgrade rejected", {
			url: request.url,
		});
		socket.destroy();
		return;
	}

	liveServer.handleUpgrade(request, socket, head, (webSocket) => {
		console.log("ws upgrade accepted", {
			url: request.url,
		});
		void handleLiveSocket(webSocket, request);
	});
});

server.listen(port, () => {
	console.log(`cloud agent listening on ${port}`);
});
