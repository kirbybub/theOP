"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const config_1 = require("./config");
const genai_1 = require("./genai");
const live_1 = require("./live");
const schema_1 = require("./schema");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "20mb" }));
app.get("/healthz", (_req, res) => {
    res.status(200).json({ ok: true });
});
app.post("/assist", async (req, res) => {
    const parsedRequest = schema_1.assistRequestSchema.safeParse(req.body);
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
        const response = await (0, genai_1.generateAssistPlan)(parsedRequest.data);
        console.log("assist response", {
            summary: response.summary,
            actionCount: response.actions.length,
        });
        res.status(200).json(response);
    }
    catch (error) {
        console.error("assist request failed", error);
        res.status(500).json({
            error: error instanceof Error
                ? error.message
                : "Unknown assist request failure.",
        });
    }
});
try {
    (0, config_1.assertConfig)();
}
catch (error) {
    console.warn(error instanceof Error ? error.message : "Cloud agent config is incomplete.");
}
const { port } = (0, config_1.getConfig)();
const server = (0, node_http_1.createServer)(app);
const liveServer = new ws_1.WebSocketServer({ noServer: true });
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
        void (0, live_1.handleLiveSocket)(webSocket, request);
    });
});
server.listen(port, () => {
    console.log(`cloud agent listening on ${port}`);
});
