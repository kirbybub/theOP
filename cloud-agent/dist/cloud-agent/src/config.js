"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = getConfig;
exports.assertConfig = assertConfig;
const DEFAULT_MODEL = "gemini-2.5-flash";
const DEFAULT_LIVE_MODEL = "gemini-live-2.5-flash-native-audio";
const DEFAULT_LOCATION = "global";
function getConfig() {
    const project = process.env["GOOGLE_CLOUD_PROJECT"] ??
        process.env["GCLOUD_PROJECT"] ??
        "";
    const location = process.env["GOOGLE_CLOUD_LOCATION"] ?? DEFAULT_LOCATION;
    const model = process.env["GEMINI_MODEL"] ?? DEFAULT_MODEL;
    const liveModel = process.env["GEMINI_LIVE_MODEL"] ?? DEFAULT_LIVE_MODEL;
    const liveVoiceName = process.env["GEMINI_LIVE_VOICE"] ?? "Leda";
    const port = Number(process.env["PORT"] ?? 8080);
    return {
        project,
        location,
        model,
        liveModel,
        liveVoiceName,
        port,
    };
}
function assertConfig() {
    const config = getConfig();
    if (!config.project) {
        throw new Error("GOOGLE_CLOUD_PROJECT or GCLOUD_PROJECT must be set for Vertex AI.");
    }
    return config;
}
