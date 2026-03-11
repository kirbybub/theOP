"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLiveSocket = handleLiveSocket;
const node_crypto_1 = require("node:crypto");
const genai_1 = require("@google/genai");
const live_1 = require("../../shared/live");
const config_1 = require("./config");
const genai_2 = require("./genai");
const prompt_1 = require("./prompt");
function createClient() {
    const config = (0, config_1.assertConfig)();
    return new genai_1.GoogleGenAI({
        vertexai: true,
        project: config.project,
        location: config.location,
    });
}
function sendMessage(socket, message) {
    if (socket.readyState === socket.OPEN) {
        socket.send(JSON.stringify(message));
    }
}
function sendDebug(socket, status, detail) {
    sendMessage(socket, {
        type: "debug.status",
        status,
        detail,
    });
}
function parseClientMessage(raw) {
    return JSON.parse(raw);
}
async function handleLiveSocket(socket, _request) {
    const config = (0, config_1.assertConfig)();
    const ai = createClient();
    const connectionId = (0, node_crypto_1.randomUUID)().slice(0, 8);
    let session = null;
    let responseText = "";
    let sawResponseAudio = false;
    let sawResponseText = false;
    let activeTurnIndex = 0;
    let turnAudioChunkCount = 0;
    let sawServerContent = false;
    let activeScreenshot = null;
    let activeAppContext = null;
    const resetTurnState = () => {
        responseText = "";
        sawResponseAudio = false;
        sawResponseText = false;
        turnAudioChunkCount = 0;
        sawServerContent = false;
    };
    const closeSession = () => {
        console.log("[live]", connectionId, "closing Gemini session");
        session?.close();
        session = null;
    };
    console.log("[live]", connectionId, "client websocket connected", {
        model: config.liveModel,
        location: config.location,
    });
    socket.on("message", async (rawData) => {
        try {
            const message = parseClientMessage(rawData.toString());
            console.log("[live]", connectionId, "client message", message.type);
            if (message.type === "session.start") {
                resetTurnState();
                console.log("[live]", connectionId, "starting Gemini Live session", {
                    threadId: message.threadId,
                    screenshotId: message.screenshot.screenshotId,
                    mimeType: message.screenshot.mimeType,
                    imageBytes: message.screenshot.bytesBase64.length,
                });
                sendDebug(socket, "connecting", config.liveModel);
                try {
                    session = await ai.live.connect({
                        model: config.liveModel,
                        config: {
                            responseModalities: [genai_1.Modality.AUDIO],
                            speechConfig: {
                                voiceConfig: {
                                    prebuiltVoiceConfig: {
                                        voiceName: config.liveVoiceName,
                                    },
                                },
                            },
                            systemInstruction: (0, prompt_1.buildLiveSystemPrompt)(),
                            inputAudioTranscription: {},
                            outputAudioTranscription: {},
                        },
                        callbacks: {
                            onopen: () => {
                                console.log("[live]", connectionId, "Gemini socket open");
                                sendDebug(socket, "socket-open");
                            },
                            onmessage: (serverMessage) => {
                                console.log("[live]", connectionId, "Gemini message", summarizeServerMessage(serverMessage));
                                handleServerMessage(serverMessage);
                            },
                            onerror: (error) => {
                                console.error("[live]", connectionId, "Gemini session error", error);
                                sendMessage(socket, {
                                    type: "session.error",
                                    message: error instanceof Error ? error.message : "Gemini Live session error.",
                                });
                            },
                            onclose: (event) => {
                                console.log("[live]", connectionId, "Gemini socket closed", event);
                                sendDebug(socket, "closed");
                            },
                        },
                    });
                    console.log("[live]", connectionId, "Gemini connect returned session");
                }
                catch (error) {
                    console.error("[live]", connectionId, "Gemini connect failed", error);
                    sendMessage(socket, {
                        type: "session.error",
                        message: error instanceof Error
                            ? error.message
                            : "Failed to connect to Gemini Live.",
                    });
                    return;
                }
                try {
                    session.sendClientContent({
                        turns: [
                            {
                                role: "user",
                                parts: [
                                    {
                                        text: "This screenshot is the user's current screen. Use it as the visual grounding for the next spoken question.",
                                    },
                                    {
                                        inlineData: {
                                            mimeType: message.screenshot.mimeType,
                                            data: message.screenshot.bytesBase64,
                                        },
                                    },
                                ],
                            },
                        ],
                        turnComplete: false,
                    });
                    console.log("[live]", connectionId, "sent screenshot context to Gemini");
                    activeScreenshot = {
                        screenshotId: message.screenshot.screenshotId,
                        mimeType: message.screenshot.mimeType,
                        bytesBase64: message.screenshot.bytesBase64,
                        width: message.displayContext.imageWidth,
                        height: message.displayContext.imageHeight,
                        capturedAt: message.screenshot.capturedAt,
                        displayContext: message.displayContext,
                        appContext: message.appContext,
                    };
                    activeAppContext = message.appContext;
                }
                catch (error) {
                    console.error("[live]", connectionId, "failed to send screenshot context", error);
                    sendMessage(socket, {
                        type: "session.error",
                        message: error instanceof Error
                            ? error.message
                            : "Failed to send screenshot context to Gemini Live.",
                    });
                }
                return;
            }
            if (!session) {
                sendMessage(socket, {
                    type: "session.error",
                    message: "The live session has not been started yet.",
                });
                return;
            }
            if (message.type === "audio.chunk") {
                if (turnAudioChunkCount === 0) {
                    activeTurnIndex += 1;
                    resetTurnState();
                    console.log("[live]", connectionId, "first inbound audio chunk", {
                        turn: activeTurnIndex,
                        sampleRate: message.sampleRate,
                    });
                }
                turnAudioChunkCount += 1;
                if (turnAudioChunkCount % 25 === 0) {
                    console.log("[live]", connectionId, "audio chunk count", {
                        turn: activeTurnIndex,
                        count: turnAudioChunkCount,
                    });
                }
                sendDebug(socket, "recording");
                session.sendRealtimeInput({
                    audio: {
                        mimeType: `audio/pcm;rate=${message.sampleRate}`,
                        data: message.pcm16Base64,
                    },
                });
                return;
            }
            if (message.type === "audio.end") {
                sendDebug(socket, "thinking");
                console.log("[live]", connectionId, "audioStreamEnd", {
                    turn: activeTurnIndex,
                    audioChunkCount: turnAudioChunkCount,
                });
                session.sendRealtimeInput({
                    audioStreamEnd: true,
                });
                return;
            }
            if (message.type === "session.cancel" || message.type === "session.close") {
                console.log("[live]", connectionId, "client requested close", message.type);
                closeSession();
                socket.close();
            }
        }
        catch (error) {
            console.error("[live]", connectionId, "message handler failed", error);
            sendMessage(socket, {
                type: "session.error",
                message: error instanceof Error
                    ? error.message
                    : "The voice session failed unexpectedly.",
            });
        }
    });
    socket.on("close", () => {
        console.log("[live]", connectionId, "client websocket closed");
        closeSession();
    });
    async function handleServerMessage(message) {
        if (message.setupComplete) {
            console.log("[live]", connectionId, "session ready", {
                sessionId: message.setupComplete.sessionId,
            });
            sendMessage(socket, {
                type: "session.ready",
                sessionId: message.setupComplete.sessionId,
            });
            return;
        }
        if (message.toolCall?.functionCalls?.length) {
            await handleToolCall(message.toolCall.functionCalls);
            return;
        }
        const serverContent = message.serverContent;
        if (!serverContent) {
            return;
        }
        if (!sawServerContent) {
            sawServerContent = true;
            console.log("[live]", connectionId, "first serverContent", {
                turn: activeTurnIndex,
            });
        }
        if (serverContent.inputTranscription?.text) {
            sendMessage(socket, {
                type: serverContent.inputTranscription.finished
                    ? "transcript.final"
                    : "transcript.partial",
                role: "user",
                text: serverContent.inputTranscription.text,
            });
        }
        if (serverContent.outputTranscription?.text) {
            sendMessage(socket, {
                type: serverContent.outputTranscription.finished
                    ? "transcript.final"
                    : "transcript.partial",
                role: "assistant",
                text: serverContent.outputTranscription.text,
            });
        }
        const parts = serverContent.modelTurn?.parts ?? [];
        for (const part of parts) {
            if (part.text) {
                responseText += part.text;
                sawResponseText = true;
                sendMessage(socket, {
                    type: "response.text",
                    text: responseText.trim(),
                });
            }
            if (part.inlineData?.data && part.inlineData.mimeType?.startsWith("audio/")) {
                sawResponseAudio = true;
                sendMessage(socket, {
                    type: "response.audio.chunk",
                    pcm16Base64: part.inlineData.data,
                    sampleRate: extractSampleRate(part.inlineData.mimeType) ?? live_1.LIVE_OUTPUT_SAMPLE_RATE,
                });
            }
        }
        if (serverContent.generationComplete || serverContent.turnComplete) {
            console.log("[live]", connectionId, "generation complete", {
                turn: activeTurnIndex,
                audioChunkCount: turnAudioChunkCount,
                sawResponseAudio,
                sawResponseText,
                responseTextLength: responseText.length,
            });
            sendDebug(socket, "turn-complete", JSON.stringify({ sawResponseAudio, sawResponseText }));
            sendMessage(socket, { type: "response.done" });
            resetTurnState();
        }
    }
    async function handleToolCall(functionCalls) {
        if (!session) {
            return;
        }
        const functionResponses = [];
        for (const functionCall of functionCalls) {
            if (functionCall.name !== "highlight_ui_target") {
                functionResponses.push({
                    id: functionCall.id,
                    name: functionCall.name,
                    response: {
                        error: `Unsupported live tool: ${functionCall.name}`,
                    },
                });
                continue;
            }
            if (!activeScreenshot || !activeAppContext) {
                functionResponses.push({
                    id: functionCall.id,
                    name: functionCall.name,
                    response: {
                        ok: false,
                        reason: "No active screenshot is available for highlighting.",
                    },
                });
                continue;
            }
            const args = (functionCall.args ?? {});
            const targetLabel = args.targetLabel?.trim();
            if (!targetLabel) {
                functionResponses.push({
                    id: functionCall.id,
                    name: functionCall.name,
                    response: {
                        ok: false,
                        reason: "targetLabel is required.",
                    },
                });
                continue;
            }
            console.log("[live]", connectionId, "toolCall highlight_ui_target", {
                turn: activeTurnIndex,
                targetLabel,
            });
            const locateResult = await (0, genai_2.locateUiTarget)({
                questionText: args.userQuestion?.trim() || targetLabel,
                targetLabel,
                screenshot: activeScreenshot,
                appContext: activeAppContext,
            });
            if (locateResult.ok) {
                sendMessage(socket, {
                    type: "highlight.show",
                    action: locateResult.action,
                    message: locateResult.reason ?? undefined,
                });
                functionResponses.push({
                    id: functionCall.id,
                    name: functionCall.name,
                    response: {
                        ok: true,
                        highlight: locateResult.action,
                        reason: locateResult.reason,
                    },
                });
            }
            else {
                sendMessage(socket, { type: "highlight.clear" });
                functionResponses.push({
                    id: functionCall.id,
                    name: functionCall.name,
                    response: {
                        ok: false,
                        reason: locateResult.reason,
                    },
                });
            }
        }
        session.sendToolResponse({
            functionResponses,
        });
    }
}
function extractSampleRate(mimeType) {
    const match = mimeType.match(/rate=(\d+)/);
    return match ? Number(match[1]) : null;
}
function summarizeServerMessage(message) {
    return {
        setupComplete: Boolean(message.setupComplete),
        serverContent: Boolean(message.serverContent),
        toolCall: "toolCall" in message ? Boolean(message.toolCall) : false,
        goAway: "goAway" in message ? Boolean(message.goAway) : false,
        sessionResumptionUpdate: "sessionResumptionUpdate" in message
            ? Boolean(message.sessionResumptionUpdate)
            : false,
    };
}
