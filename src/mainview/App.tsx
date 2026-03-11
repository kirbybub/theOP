import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Electroview, type ElectrobunRPCSchema } from "electrobun/view";

import type {
	AskAssistantResult,
	AskAssistantDebug,
	AssistResponse,
	HighlightBoxAction,
	PointAction,
} from "../../shared/agent";
import { getHighlightBoxAction } from "../../shared/agent";
import type {
	LiveClientMessage,
	LiveServerMessage,
	NativeMicChunkMessage,
	NativeMicStatusMessage,
	StartVoiceTurnResult,
	VoiceTurnState,
} from "../../shared/live";
import { LIVE_GREETING, LIVE_INPUT_SAMPLE_RATE } from "../../shared/live";
import type { CaptureFailureReason, CaptureScreenshotResult } from "../shared/screenshot";
import {
	encodePcm16Base64FromFloat32,
	decodePcm16Base64ToFloat32,
	PcmAudioPlayer,
} from "./audio/liveAudio";

type AppRPCSchema = ElectrobunRPCSchema & {
	bun: {
		requests: {
			requestFocus: { params: undefined; response: { ok: boolean } };
			captureCurrentDisplay: {
				params: undefined;
				response: CaptureScreenshotResult;
			};
			startVoiceTurn: {
				params: undefined;
				response: StartVoiceTurnResult;
			};
			startNativeMic: {
				params: undefined;
				response: { ok: boolean; message?: string };
			};
			stopNativeMic: {
				params: undefined;
				response: { ok: boolean; message?: string };
			};
			openCapturedImage: {
				params: { imagePath: string };
				response: { ok: boolean };
			};
			askAssistant: {
				params: { questionText: string; inputMode: "text" | "voice" };
				response: AskAssistantResult;
			};
			showHighlightOverlay: {
				params: { action: HighlightBoxAction };
				response: { ok: boolean };
			};
			clearHighlightOverlay: {
				params: undefined;
				response: { ok: boolean };
			};
		};
		messages: {};
	};
	webview: {
		requests: {};
		messages: {
			nativeMicStatus: NativeMicStatusMessage;
			nativeMicChunk: NativeMicChunkMessage;
		};
	};
};

const rpc = Electroview.defineRPC<AppRPCSchema>({
	handlers: {},
});

new Electroview({ rpc });

function createCharacter() {
	const bodyColor = 0x40e0d0;
	const glowColor = 0x60fff0;
	const root = new THREE.Group();

	const bodyGeo = new THREE.SphereGeometry(0.65, 32, 32);
	const bodyMat = new THREE.MeshStandardMaterial({
		color: bodyColor,
		roughness: 0.55,
		emissive: glowColor,
		emissiveIntensity: 0.15,
	});
	root.add(new THREE.Mesh(bodyGeo, bodyMat));

	const blushGeo = new THREE.SphereGeometry(0.13, 16, 16);
	const blushMat = new THREE.MeshStandardMaterial({
		color: 0x20b0a0,
		roughness: 1,
		transparent: true,
		opacity: 0.4,
	});
	for (const side of [-1, 1]) {
		const blush = new THREE.Mesh(blushGeo, blushMat);
		blush.position.set(side * 0.35, -0.05, 0.48);
		blush.scale.set(1, 0.7, 0.3);
		root.add(blush);
	}

	const eyeWhiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1 });
	const eyePupilMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.05 });
	const eyeShineMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff });

	for (const side of [-1, 1]) {
		const eyeWhite = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), eyeWhiteMat);
		eyeWhite.position.set(side * 0.18, 0.12, 0.55);
		eyeWhite.scale.set(0.8, 1.2, 0.8);
		root.add(eyeWhite);

		const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 16), eyePupilMat);
		pupil.position.set(side * 0.18, 0.1, 0.58);
		pupil.scale.set(0.85, 1.15, 0.8);
		root.add(pupil);

		const shine = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), eyeShineMat);
		shine.position.set(side * 0.18 + 0.04, 0.16, 0.65);
		root.add(shine);

		const shine2 = new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 6), eyeShineMat);
		shine2.position.set(side * 0.18 - 0.02, 0.06, 0.65);
		root.add(shine2);
	}

	const mouthShape = new THREE.Shape();
	mouthShape.moveTo(-0.06, 0);
	mouthShape.quadraticCurveTo(0, -0.05, 0.06, 0);
	const mouth = new THREE.Mesh(
		new THREE.ShapeGeometry(mouthShape, 12),
		new THREE.MeshStandardMaterial({ color: 0x209090, roughness: 0.5, side: THREE.DoubleSide }),
	);
	mouth.position.set(0, -0.08, 0.64);
	root.add(mouth);

	const footMat = new THREE.MeshStandardMaterial({
		color: 0x2090a0,
		roughness: 0.5,
		emissive: 0x20a0b0,
		emissiveIntensity: 0.1,
	});
	for (const side of [-1, 1]) {
		const foot = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), footMat);
		foot.position.set(side * 0.25, -0.62, 0.12);
		foot.scale.set(1.1, 0.55, 1.4);
		root.add(foot);
	}

	const armMat = new THREE.MeshStandardMaterial({
		color: bodyColor,
		roughness: 0.55,
		emissive: glowColor,
		emissiveIntensity: 0.15,
	});
	const arms: THREE.Group[] = [];
	for (const side of [-1, 1]) {
		const armPivot = new THREE.Group();
		armPivot.position.set(side * 0.58, -0.05, 0.1);
		armPivot.rotation.z = side * 0.25;

		const armMesh = new THREE.Mesh(
			new THREE.CapsuleGeometry(0.09, 0.25, 8, 12),
			armMat,
		);
		armMesh.position.set(0, -0.2, 0);
		armPivot.add(armMesh);
		root.add(armPivot);
		arms.push(armPivot);
	}

	return { root, arms };
}

const CHAR_SIZE = 220;

class Spring {
	value = 0;
	velocity = 0;

	constructor(
		public stiffness = 400,
		public damping = 18,
	) {}

	update(target: number, dt: number, clamp = Infinity) {
		const force = -this.stiffness * (this.value - target);
		const dampForce = -this.damping * this.velocity;
		this.velocity += (force + dampForce) * dt;
		this.value += this.velocity * dt;
		this.value = Math.max(-clamp, Math.min(clamp, this.value));
	}
}

function getPointAction(response: AssistResponse | null): PointAction | null {
	if (!response) {
		return null;
	}
	for (const action of response.actions) {
		if (action.type === "POINT") {
			return action;
		}
	}
	return null;
}

function pickGreetingVoice(voices: SpeechSynthesisVoice[]) {
	const preferredNames = [
		"Samantha",
		"Victoria",
		"Karen",
		"Tessa",
		"Fiona",
		"Moira",
		"Allison",
		"Ava",
		"Susan",
	];

	for (const preferredName of preferredNames) {
		const matchingVoice = voices.find((voice) => voice.name.includes(preferredName));
		if (matchingVoice) {
			return matchingVoice;
		}
	}

	return voices.find((voice) => voice.lang.toLowerCase().startsWith("en")) ?? null;
}

export default function App() {
	const containerRef = useRef<HTMLDivElement>(null);
	const dragVelRef = useRef({ x: 0, y: 0 });
	const bubblesOpenRef = useRef(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const webSocketRef = useRef<WebSocket | null>(null);
	const audioContextRef = useRef<AudioContext | null>(null);
	const audioPlayerRef = useRef<PcmAudioPlayer | null>(null);
	const browserMicStreamRef = useRef<MediaStream | null>(null);
	const browserMicSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
	const browserMicProcessorRef = useRef<ScriptProcessorNode | null>(null);
	const browserMicGainRef = useRef<GainNode | null>(null);
	const captureModeRef = useRef<"browser" | "native" | null>(null);
	const sentChunkCountRef = useRef(0);
	const sawAssistantResponseRef = useRef(false);
	const noAudioTimeoutRef = useRef<number | null>(null);
	const noResponseTimeoutRef = useRef<number | null>(null);
	const recordingRef = useRef(false);
	const isSessionClosedRef = useRef(false);
	const liveSessionReadyRef = useRef(false);
	const greetingAbortRef = useRef<(() => void) | null>(null);

	const [bubblesOpen, setBubblesOpen] = useState(false);
	const [isCapturing, setIsCapturing] = useState(false);
	const [capturedImagePath, setCapturedImagePath] = useState<string | null>(null);
	const [capturedPreviewDataUrl, setCapturedPreviewDataUrl] = useState<string | null>(null);
	const [, setCapturedAt] = useState<string | null>(null);
	const [questionText, setQuestionText] = useState("");
	const [assistantResponse, setAssistantResponse] = useState<AssistResponse | null>(null);
	const [assistantError, setAssistantError] = useState<string | null>(null);
	const [isAskingAssistant, setIsAskingAssistant] = useState(false);
	const [captureError, setCaptureError] = useState<{
		reason: CaptureFailureReason;
		message: string;
	} | null>(null);

	const [voiceState, setVoiceState] = useState<VoiceTurnState>("idle");
	const [voiceError, setVoiceError] = useState<string | null>(null);
	const [, setMicPermission] = useState<PermissionState | "unknown">("unknown");
	const [, setWebSocketConnected] = useState(false);
	const [liveSessionReady, setLiveSessionReady] = useState(false);
	const [isStartingRecording, setIsStartingRecording] = useState(false);
	const [isRecording, setIsRecording] = useState(false);
	const [, setAudioChunksSent] = useState(0);
	const [, setAudioChunksReceived] = useState(0);
	const [, setLastDebugDetail] = useState<string>("");
	const [assistantDebug, setAssistantDebug] = useState<AskAssistantDebug | null>(null);
	const [userTranscript, setUserTranscript] = useState("");
	const [assistantTranscript, setAssistantTranscript] = useState("");
	const [assistantTextResponse, setAssistantTextResponse] = useState("");

	const pointAction = useMemo(() => getPointAction(assistantResponse), [assistantResponse]);
	useEffect(() => {
		bubblesOpenRef.current = bubblesOpen;
	}, [bubblesOpen]);

	useEffect(() => {
		liveSessionReadyRef.current = liveSessionReady;
	}, [liveSessionReady]);

	const focusInput = useCallback(() => {
		const input = inputRef.current;
		if (input) {
			input.focus({ preventScroll: true });
		}
	}, []);

	const teardownBrowserMicCapture = useCallback(() => {
		browserMicProcessorRef.current?.disconnect();
		browserMicSourceRef.current?.disconnect();
		browserMicGainRef.current?.disconnect();
		browserMicProcessorRef.current = null;
		browserMicSourceRef.current = null;
		browserMicGainRef.current = null;

		if (browserMicStreamRef.current) {
			for (const track of browserMicStreamRef.current.getTracks()) {
				track.stop();
			}
			browserMicStreamRef.current = null;
		}

		if (captureModeRef.current === "browser") {
			captureModeRef.current = null;
		}
	}, []);

	useEffect(() => {
		if (!bubblesOpen) {
			return;
		}

		let cancelled = false;
		const focusAfterOpen = async () => {
			try {
				await rpc.request.requestFocus();
			} catch {
				// noop
			}
			if (!cancelled && bubblesOpenRef.current) {
				requestAnimationFrame(() => focusInput());
			}
		};

		void focusAfterOpen();
		return () => {
			cancelled = true;
		};
	}, [bubblesOpen, focusInput]);

	const closeVoiceSession = useCallback(async () => {
		if (greetingAbortRef.current) {
			greetingAbortRef.current();
			greetingAbortRef.current = null;
		}

		if (noAudioTimeoutRef.current) {
			window.clearTimeout(noAudioTimeoutRef.current);
			noAudioTimeoutRef.current = null;
		}
		if (noResponseTimeoutRef.current) {
			window.clearTimeout(noResponseTimeoutRef.current);
			noResponseTimeoutRef.current = null;
		}

		if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
			webSocketRef.current.send(JSON.stringify({ type: "session.close" } satisfies LiveClientMessage));
		}
		try {
			await rpc.request.clearHighlightOverlay();
		} catch {
			// noop
		}

		try {
			await rpc.request.stopNativeMic();
		} catch (error) {
			console.error("[voice] failed to stop native mic", error);
		}
		teardownBrowserMicCapture();

		isSessionClosedRef.current = true;
		webSocketRef.current?.close();
		webSocketRef.current = null;
		captureModeRef.current = null;
		sentChunkCountRef.current = 0;
		sawAssistantResponseRef.current = false;
		setWebSocketConnected(false);
		setLiveSessionReady(false);
		setIsStartingRecording(false);
		recordingRef.current = false;
		setIsRecording(false);
	}, [teardownBrowserMicCapture]);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape" && bubblesOpen) {
				setBubblesOpen(false);
				void closeVoiceSession();
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [bubblesOpen, closeVoiceSession]);

	const ensureAudioContext = useCallback(async () => {
		if (!audioContextRef.current) {
			const audioContext = new AudioContext();
			audioContextRef.current = audioContext;
			audioPlayerRef.current = new PcmAudioPlayer(audioContext);
			console.log("[voice] audio context initialized", {
				sampleRate: audioContext.sampleRate,
			});
		}

		if (audioContextRef.current.state === "suspended") {
			await audioContextRef.current.resume();
		}

		return audioContextRef.current;
	}, []);

	const clearNoAudioTimeout = useCallback(() => {
		if (noAudioTimeoutRef.current) {
			window.clearTimeout(noAudioTimeoutRef.current);
			noAudioTimeoutRef.current = null;
		}
	}, []);

	const clearNoResponseTimeout = useCallback(() => {
		if (noResponseTimeoutRef.current) {
			window.clearTimeout(noResponseTimeoutRef.current);
			noResponseTimeoutRef.current = null;
		}
	}, []);

	const handleNoAudioDetected = useCallback(async () => {
		noAudioTimeoutRef.current = null;
		if (!recordingRef.current || sentChunkCountRef.current > 0) {
			return;
		}

		console.warn("[voice] no audio chunks detected after recording start", {
			captureMode: captureModeRef.current,
		});
		recordingRef.current = false;
		setIsStartingRecording(false);
		setIsRecording(false);
		setVoiceState("ready");
		setVoiceError("I couldn't hear your microphone. Check permissions/input and try again.");

		if (captureModeRef.current === "native") {
			try {
				await rpc.request.stopNativeMic();
			} catch (error) {
				console.error("[voice] failed to stop native mic after no-audio timeout", error);
			}
		}
	}, []);

	const armNoAudioTimeout = useCallback(() => {
		clearNoAudioTimeout();
		noAudioTimeoutRef.current = window.setTimeout(() => {
			void handleNoAudioDetected();
		}, 2500);
	}, [clearNoAudioTimeout, handleNoAudioDetected]);

	const markAssistantResponseSeen = useCallback((kind: "text" | "audio") => {
		if (!sawAssistantResponseRef.current) {
			console.log("[voice] first assistant response", { kind });
		}
		sawAssistantResponseRef.current = true;
		clearNoResponseTimeout();
	}, [clearNoResponseTimeout]);

	const armNoResponseTimeout = useCallback(() => {
		clearNoResponseTimeout();
		noResponseTimeoutRef.current = window.setTimeout(() => {
			if (sawAssistantResponseRef.current) {
				return;
			}
			console.warn("[voice] no assistant response received after audio end");
			setVoiceState("ready");
			setVoiceError("No response from the live session. Try asking again.");
		}, 7000);
	}, [clearNoResponseTimeout]);

	const activateRecording = useCallback((mode: "browser" | "native") => {
		captureModeRef.current = mode;
		recordingRef.current = true;
		sentChunkCountRef.current = 0;
		sawAssistantResponseRef.current = false;
		clearNoAudioTimeout();
		clearNoResponseTimeout();
		setIsStartingRecording(false);
		setIsRecording(true);
		setVoiceError(null);
		setVoiceState("recording");
		setLastDebugDetail(`recording:${mode}`);
		console.log("[voice] mic ready", { captureMode: mode });
		armNoAudioTimeout();
	}, [armNoAudioTimeout, clearNoAudioTimeout, clearNoResponseTimeout]);

	const ensureBrowserMicCapture = useCallback(async () => {
		if (browserMicProcessorRef.current && browserMicStreamRef.current) {
			return;
		}
		if (!navigator.mediaDevices?.getUserMedia) {
			throw new Error("browser-unavailable");
		}

		const audioContext = await ensureAudioContext();
		const stream = await navigator.mediaDevices.getUserMedia({
			audio: {
				channelCount: 1,
				echoCancellation: true,
				noiseSuppression: true,
				autoGainControl: true,
			},
		});
		const sourceNode = audioContext.createMediaStreamSource(stream);
		const processorNode = audioContext.createScriptProcessor(2048, 1, 1);
		const silentGain = audioContext.createGain();
		silentGain.gain.value = 0;

		processorNode.onaudioprocess = (event) => {
			if (!recordingRef.current || captureModeRef.current !== "browser") {
				return;
			}

			const socket = webSocketRef.current;
			if (!socket || socket.readyState !== WebSocket.OPEN) {
				return;
			}

			const inputSamples = event.inputBuffer.getChannelData(0);
			if (inputSamples.length === 0) {
				return;
			}

			const nextCount = sentChunkCountRef.current + 1;
			sentChunkCountRef.current = nextCount;
			if (nextCount === 1) {
				console.log("[voice] first audio chunk", { captureMode: "browser" });
				clearNoAudioTimeout();
			} else if (nextCount % 25 === 0) {
				console.log("[voice] audio chunk count", { count: nextCount, captureMode: "browser" });
			}

			const message: LiveClientMessage = {
				type: "audio.chunk",
				pcm16Base64: encodePcm16Base64FromFloat32(
					new Float32Array(inputSamples),
					audioContext.sampleRate,
					LIVE_INPUT_SAMPLE_RATE,
				),
				sampleRate: LIVE_INPUT_SAMPLE_RATE,
			};
			socket.send(JSON.stringify(message));
			setAudioChunksSent((value) => value + 1);
		};

		sourceNode.connect(processorNode);
		processorNode.connect(silentGain);
		silentGain.connect(audioContext.destination);

		browserMicStreamRef.current = stream;
		browserMicSourceRef.current = sourceNode;
		browserMicProcessorRef.current = processorNode;
		browserMicGainRef.current = silentGain;
		console.log("[voice] captureMode=browser");
	}, [clearNoAudioTimeout, ensureAudioContext]);

	useEffect(() => {
		return () => {
			void closeVoiceSession();
			teardownBrowserMicCapture();
			audioContextRef.current?.close().catch(() => {});
		};
	}, [closeVoiceSession, teardownBrowserMicCapture]);

	useEffect(() => {
		const handleNativeMicStatus = (payload: NativeMicStatusMessage) => {
			console.log("[voice] native mic status", payload);
			setLastDebugDetail(payload.message ? `${payload.state}: ${payload.message}` : payload.state);

			switch (payload.state) {
				case "starting":
					setMicPermission("prompt");
					return;
				case "ready":
					setMicPermission("granted");
					if (captureModeRef.current === "native") {
						activateRecording("native");
					}
					return;
				case "permission_denied":
					setMicPermission("denied");
					setIsStartingRecording(false);
					setVoiceState("error");
					setVoiceError(payload.message ?? "Microphone access was denied.");
					return;
				case "stopped":
					return;
				case "error":
					setIsStartingRecording(false);
					setVoiceState("error");
					setVoiceError(payload.message ?? "Native microphone capture failed.");
					return;
			}
		};

		const handleNativeMicChunk = (payload: NativeMicChunkMessage) => {
			if (!recordingRef.current || captureModeRef.current !== "native") {
				return;
			}

			const socket = webSocketRef.current;
			if (!socket || socket.readyState !== WebSocket.OPEN) {
				return;
			}

			const nextCount = sentChunkCountRef.current + 1;
			sentChunkCountRef.current = nextCount;
			if (nextCount === 1) {
				console.log("[voice] first audio chunk", { captureMode: "native" });
				clearNoAudioTimeout();
			} else if (nextCount % 25 === 0) {
				console.log("[voice] audio chunk count", { count: nextCount, captureMode: "native" });
			}

			const message: LiveClientMessage = {
				type: "audio.chunk",
				pcm16Base64: payload.pcm16Base64,
				sampleRate: payload.sampleRate,
			};
			socket.send(JSON.stringify(message));
			setAudioChunksSent((value) => value + 1);
		};

		rpc.addMessageListener("nativeMicStatus", handleNativeMicStatus);
		rpc.addMessageListener("nativeMicChunk", handleNativeMicChunk);

		return () => {
			rpc.removeMessageListener("nativeMicStatus", handleNativeMicStatus);
			rpc.removeMessageListener("nativeMicChunk", handleNativeMicChunk);
		};
	}, [activateRecording, clearNoAudioTimeout]);

	const speakGreeting = useCallback(() => {
		return new Promise<void>((resolve) => {
			if (!("speechSynthesis" in window)) {
				resolve();
				return;
			}

			window.speechSynthesis.cancel();
			const utterance = new SpeechSynthesisUtterance(LIVE_GREETING);
			const availableVoices = window.speechSynthesis.getVoices();
			const preferredVoice = pickGreetingVoice(availableVoices);
			if (preferredVoice) {
				utterance.voice = preferredVoice;
			}
			utterance.rate = 1.16;
			utterance.pitch = 1.55;
			utterance.volume = 0.95;
			console.log("[voice] greeting voice", {
				name: preferredVoice?.name ?? "system-default",
				lang: preferredVoice?.lang ?? "unknown",
				rate: utterance.rate,
				pitch: utterance.pitch,
			});

			const cleanup = () => {
				utterance.onend = null;
				utterance.onerror = null;
				greetingAbortRef.current = null;
				resolve();
			};

			utterance.onend = cleanup;
			utterance.onerror = cleanup;
			greetingAbortRef.current = () => {
				window.speechSynthesis.cancel();
				cleanup();
			};

			window.speechSynthesis.speak(utterance);
		});
	}, []);

	const resetVoiceState = useCallback(() => {
		setVoiceError(null);
		setWebSocketConnected(false);
		setLiveSessionReady(false);
		setIsStartingRecording(false);
		setAudioChunksSent(0);
		setAudioChunksReceived(0);
		setLastDebugDetail("");
		setUserTranscript("");
		setAssistantTranscript("");
		setAssistantTextResponse("");
		sentChunkCountRef.current = 0;
		sawAssistantResponseRef.current = false;
		clearNoAudioTimeout();
		clearNoResponseTimeout();
		if (assistantDebug) {
			setAssistantDebug(null);
		}
		audioPlayerRef.current?.reset();
	}, [assistantDebug, clearNoAudioTimeout, clearNoResponseTimeout]);

	const showHighlightOverlay = useCallback(async (action: HighlightBoxAction) => {
		try {
			await rpc.request.showHighlightOverlay({ action });
		} catch (error) {
			console.error("[overlay] failed to show highlight", error);
		}
	}, []);

	const clearHighlightOverlay = useCallback(async () => {
		try {
			await rpc.request.clearHighlightOverlay();
		} catch {
			// noop
		}
	}, []);

	const handleLiveMessage = useCallback(async (message: LiveServerMessage) => {
		switch (message.type) {
			case "session.ready":
				setLiveSessionReady(true);
				setVoiceState("ready");
				setLastDebugDetail(message.sessionId ?? "session-ready");
				await speakGreeting();
				return;
			case "session.error":
				setVoiceState("error");
				setVoiceError(message.message);
				setLastDebugDetail(message.message);
				return;
			case "transcript.partial":
				if (message.role === "user") {
					setUserTranscript(message.text);
				} else {
					markAssistantResponseSeen("text");
					setAssistantTranscript(message.text);
				}
				return;
			case "transcript.final":
				if (message.role === "user") {
					setUserTranscript(message.text);
				} else {
					markAssistantResponseSeen("text");
					setAssistantTranscript(message.text);
				}
				return;
			case "response.text":
				markAssistantResponseSeen("text");
				setAssistantTextResponse((current) => {
					if (!current) return message.text;
					if (current.includes(message.text)) return current;
					return `${current} ${message.text}`.trim();
				});
				return;
			case "response.audio.chunk": {
				await ensureAudioContext();
				markAssistantResponseSeen("audio");
				const samples = decodePcm16Base64ToFloat32(message.pcm16Base64);
				audioPlayerRef.current?.playChunk(samples, message.sampleRate);
				setAudioChunksReceived((value) => value + 1);
				setVoiceState("speaking");
				return;
			}
			case "response.done":
				clearNoResponseTimeout();
				console.log("[voice] turn complete", {
					captureMode: captureModeRef.current,
					sawAssistantResponse: sawAssistantResponseRef.current,
					audioChunksSent: sentChunkCountRef.current,
				});
				if (!sawAssistantResponseRef.current) {
					setVoiceError("No response from the live session. Try asking again.");
				}
				setIsStartingRecording(false);
				setIsRecording(false);
				setVoiceState("ready");
				return;
			case "highlight.show":
				if (message.message) {
					setAssistantTextResponse(message.message);
				}
				await showHighlightOverlay(message.action);
				return;
			case "highlight.clear":
				await clearHighlightOverlay();
				return;
			case "debug.status":
				setLastDebugDetail(message.detail ? `${message.status}: ${message.detail}` : message.status);
				if (message.status === "thinking") {
					setVoiceState("thinking");
				}
				return;
		}
	}, [
		clearHighlightOverlay,
		clearNoResponseTimeout,
		ensureAudioContext,
		markAssistantResponseSeen,
		showHighlightOverlay,
		speakGreeting,
	]);

	const connectVoiceSession = useCallback(async (turn: Extract<StartVoiceTurnResult, { ok: true }>) => {
		if (!turn.liveWebSocketUrl) {
			setVoiceState("error");
			setVoiceError("THEOP_AGENT_URL is not configured for voice sessions.");
			console.error("[voice] missing live websocket url");
			return;
		}

		setVoiceState("connecting");
		setVoiceError(null);
		resetVoiceState();
		isSessionClosedRef.current = false;
		console.log("[voice] starting voice turn", {
			threadId: turn.threadId,
			screenshotId: turn.screenshotId,
			liveWebSocketUrl: turn.liveWebSocketUrl,
		});

		const socket = new WebSocket(turn.liveWebSocketUrl);
		webSocketRef.current = socket;

		socket.addEventListener("open", () => {
			console.log("[voice] websocket open");
			setWebSocketConnected(true);
			const message: LiveClientMessage = {
				type: "session.start",
				threadId: turn.threadId,
				inputMode: "voice",
				screenshot: {
					screenshotId: turn.screenshotId,
					mimeType: turn.modelMimeType,
					bytesBase64: turn.modelImageBase64,
					capturedAt: turn.capturedAt,
				},
				displayContext: turn.displayContext,
				appContext: turn.appContext,
			};
			socket.send(JSON.stringify(message));
		});

		socket.addEventListener("message", (event) => {
			try {
				const parsed = JSON.parse(event.data as string) as LiveServerMessage;
				console.log("[voice] websocket message", parsed.type);
				void handleLiveMessage(parsed);
			} catch (error) {
				console.error("[voice] websocket message parse failed", error, event.data);
				setVoiceState("error");
				setVoiceError(
					error instanceof Error
						? error.message
						: "Voice response parsing failed.",
				);
			}
		});

		socket.addEventListener("close", () => {
			console.log("[voice] websocket closed");
			clearNoAudioTimeout();
			clearNoResponseTimeout();
			const closedBeforeReady = !liveSessionReadyRef.current;
			setWebSocketConnected(false);
			setLiveSessionReady(false);
			setIsStartingRecording(false);
			setIsRecording(false);
			if (!isSessionClosedRef.current) {
				if (closedBeforeReady) {
					setVoiceState("error");
					setVoiceError("The Live voice session closed before it became ready.");
				} else {
					setVoiceState((current) => (current === "error" ? current : "idle"));
				}
			}
		});

		socket.addEventListener("error", () => {
			console.error("[voice] websocket error");
			clearNoAudioTimeout();
			clearNoResponseTimeout();
			setIsStartingRecording(false);
			setVoiceState("error");
			setVoiceError("The Live voice session could not connect.");
		});
	}, [clearNoAudioTimeout, clearNoResponseTimeout, handleLiveMessage, resetVoiceState]);

	const handleCharacterClick = useCallback(async () => {
		if (
			isCapturing ||
			voiceState === "connecting" ||
			voiceState === "recording" ||
			voiceState === "thinking"
		) {
			return;
		}

		await closeVoiceSession();
		setIsCapturing(true);
		setVoiceState("capturing");
		setCaptureError(null);
		setAssistantResponse(null);
		setAssistantError(null);
		setAssistantDebug(null);
		setBubblesOpen(true);

		try {
			const result = await rpc.request.startVoiceTurn();
			console.log("[voice] startVoiceTurn result", result);
			if (!result.ok) {
				setCaptureError({
					reason: result.reason,
					message: result.message,
				});
				setCapturedImagePath(null);
				setCapturedPreviewDataUrl(null);
				setCapturedAt(null);
				setVoiceState("error");
				return;
			}

			setCapturedImagePath(result.imagePath);
			setCapturedPreviewDataUrl(result.previewDataUrl);
			setCapturedAt(result.capturedAt);
			setCaptureError(null);
			await connectVoiceSession(result);
		} catch (error) {
			setCapturedImagePath(null);
			setCapturedPreviewDataUrl(null);
			setCapturedAt(null);
			setCaptureError({
				reason: "capture_failed",
				message:
					error instanceof Error
						? error.message
						: "Something went wrong while starting the voice turn.",
			});
			setVoiceState("error");
		} finally {
			setIsCapturing(false);
		}
	}, [closeVoiceSession, connectVoiceSession, isCapturing, voiceState]);

	const startRecording = useCallback(async () => {
		if (!liveSessionReady || !webSocketRef.current || webSocketRef.current.readyState !== WebSocket.OPEN) {
			console.warn("[voice] startRecording ignored: live session not ready");
			return;
		}
		if (isRecording || isStartingRecording) {
			console.warn("[voice] startRecording ignored: already recording or starting");
			return;
		}

		console.log("[voice] recording requested");
		void clearHighlightOverlay();
		if (greetingAbortRef.current) {
			greetingAbortRef.current();
		}
		setVoiceError(null);
		setIsStartingRecording(true);
		setUserTranscript("");
		setAssistantTranscript("");
		setAssistantTextResponse("");
		sentChunkCountRef.current = 0;
		sawAssistantResponseRef.current = false;
		clearNoAudioTimeout();
		clearNoResponseTimeout();

		try {
			await ensureBrowserMicCapture();
			setMicPermission("granted");
			activateRecording("browser");
			return;
		} catch (error) {
			console.warn("[voice] browser mic unavailable, falling back to native helper", error);
			teardownBrowserMicCapture();
		}

		captureModeRef.current = "native";
		console.log("[voice] captureMode=native");
		const result = await rpc.request.startNativeMic();
		console.log("[voice] startNativeMic result", result);
		if (!result.ok) {
			setIsStartingRecording(false);
			captureModeRef.current = null;
			recordingRef.current = false;
			setIsRecording(false);
			setVoiceState("error");
			setVoiceError(result.message ?? "Native microphone capture could not start.");
		}
	}, [
		activateRecording,
		clearHighlightOverlay,
		clearNoAudioTimeout,
		clearNoResponseTimeout,
		ensureBrowserMicCapture,
		isRecording,
		isStartingRecording,
		liveSessionReady,
		teardownBrowserMicCapture,
	]);

	const stopRecording = useCallback(() => {
		if (!recordingRef.current) {
			console.warn("[voice] stopRecording ignored: not recording");
			return;
		}

		console.log("[voice] stop sent", {
			captureMode: captureModeRef.current,
			audioChunksSent: sentChunkCountRef.current,
		});
		clearNoAudioTimeout();
		recordingRef.current = false;
		setIsRecording(false);
		setVoiceState("thinking");

		if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
			webSocketRef.current.send(JSON.stringify({ type: "audio.end" } satisfies LiveClientMessage));
		}

		armNoResponseTimeout();

		if (captureModeRef.current === "native") {
			void rpc.request.stopNativeMic().catch((error) => {
				console.error("[voice] stopNativeMic failed", error);
			});
		}
	}, [armNoResponseTimeout, clearNoAudioTimeout]);

	const openCapturedImage = useCallback(async () => {
		if (!capturedImagePath) {
			return;
		}
		try {
			await rpc.request.openCapturedImage({ imagePath: capturedImagePath });
		} catch {
			// noop
		}
	}, [capturedImagePath]);

	const submitQuestion = useCallback(async () => {
		const trimmedQuestion = questionText.trim();
		if (!trimmedQuestion || isAskingAssistant) {
			return;
		}

		setIsAskingAssistant(true);
		setAssistantError(null);

		try {
			const result = await rpc.request.askAssistant({
				questionText: trimmedQuestion,
				inputMode: "text",
			});
			setAssistantDebug(result.debug);
			if (result.ok) {
				setAssistantResponse(result.response);
				setAssistantError(null);
				setQuestionText("");
			} else {
				setAssistantResponse(null);
				setAssistantError(result.message);
			}
		} catch (error) {
			setAssistantResponse(null);
			setAssistantDebug(null);
			setAssistantError(
				error instanceof Error
					? error.message
					: "The assistant request failed unexpectedly.",
			);
		} finally {
			setIsAskingAssistant(false);
		}
	}, [isAskingAssistant, questionText]);

	useEffect(() => {
		if (!assistantResponse) {
			void clearHighlightOverlay();
			return;
		}
		const action = getHighlightBoxAction(assistantResponse.actions);
		if (action) {
			void showHighlightOverlay(action);
			return;
		}
		void clearHighlightOverlay();
	}, [assistantResponse, clearHighlightOverlay, showHighlightOverlay]);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) {
			return;
		}

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			45,
			container.clientWidth / container.clientHeight,
			0.1,
			100,
		);
		camera.position.set(0, 0, 3.2);

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setClearColor(0x000000, 0);
		container.appendChild(renderer.domElement);

		scene.add(new THREE.AmbientLight(0xfff4f8, 0.9));
		const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
		dirLight.position.set(3, 5, 4);
		scene.add(dirLight);
		const fillLight = new THREE.DirectionalLight(0xffd0e0, 0.4);
		fillLight.position.set(-3, 2, 2);
		scene.add(fillLight);

		const { root, arms } = createCharacter();
		scene.add(root);

		const leftArmSpring = new Spring(500, 22);
		const rightArmSpring = new Spring(500, 22);
		const bodyTiltSpring = new Spring(400, 25);
		const rightArmUpSpring = new Spring(200, 16);

		let dragging = false;
		let lastMouseX = 0;
		let lastMouseY = 0;

		const onMouseDown = (event: MouseEvent) => {
			if (!container.contains(event.target as Node)) {
				return;
			}
			dragging = true;
			lastMouseX = event.screenX;
			lastMouseY = event.screenY;
		};

		const onMouseMove = (event: MouseEvent) => {
			if (!dragging) {
				return;
			}
			dragVelRef.current.x = event.screenX - lastMouseX;
			dragVelRef.current.y = event.screenY - lastMouseY;
			lastMouseX = event.screenX;
			lastMouseY = event.screenY;
		};

		const onMouseUp = () => {
			dragging = false;
		};

		window.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);

		let time = 0;
		let animId = 0;

		function animate() {
			animId = requestAnimationFrame(animate);
			const dt = 1 / 60;
			time += dt;

			const dx = dragVelRef.current.x;
			dragVelRef.current.x *= 0.5;
			dragVelRef.current.y *= 0.5;

			bodyTiltSpring.update(0, dt, 0.25);
			bodyTiltSpring.velocity += dx * -0.8;
			root.rotation.z = bodyTiltSpring.value + Math.sin(time * 0.8) * 0.02;

			const targetY = THREE.MathUtils.clamp(dx * 0.04, -0.3, 0.3);
			root.rotation.y += (targetY - root.rotation.y) * 0.1;

			leftArmSpring.update(0, dt, 0.3);
			leftArmSpring.velocity += dx * 1.5;
			rightArmSpring.update(0, dt, 0.3);
			rightArmSpring.velocity += dx * 1.5;

			const armUpTarget = bubblesOpenRef.current ? 1.2 : 0;
			rightArmUpSpring.update(armUpTarget, dt);
			arms[0].rotation.z = leftArmSpring.value;
			arms[1].rotation.z = rightArmSpring.value + rightArmUpSpring.value;

			root.position.y = 0.35 + Math.sin(time * 1.5) * 0.04;
			renderer.render(scene, camera);
		}

		animate();
		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
			container.removeChild(renderer.domElement);
			renderer.dispose();
		};
	}, []);

	return (
		<div style={{ position: "fixed", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
			<div style={{ flex: 1, position: "relative" }}>
				<div
					ref={containerRef}
					style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: CHAR_SIZE }}
				/>

				<div
					className="electrobun-webkit-app-region-drag"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						bottom: 0,
						height: CHAR_SIZE,
						zIndex: 10,
						cursor: "pointer",
					}}
					onMouseDown={(event) => {
						(event.target as HTMLElement).style.cursor = "grabbing";
						(event.target as HTMLElement).dataset.downX = String(event.screenX);
						(event.target as HTMLElement).dataset.downY = String(event.screenY);
					}}
					onMouseUp={(event) => {
						(event.target as HTMLElement).style.cursor = "pointer";
						const downX = Number((event.target as HTMLElement).dataset.downX ?? 0);
						const downY = Number((event.target as HTMLElement).dataset.downY ?? 0);
						const dist = Math.hypot(event.screenX - downX, event.screenY - downY);
						if (dist < 5 && !isCapturing) {
							void handleCharacterClick();
						}
					}}
					onMouseLeave={(event) => {
						(event.target as HTMLElement).style.cursor = "pointer";
					}}
				/>

				{bubblesOpen && (
					<div
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							bottom: CHAR_SIZE,
							zIndex: 20,
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-end",
							padding: "10px 14px 4px",
							gap: 6,
						}}
					>
						<div
							style={{
								background: "white",
								borderRadius: 16,
								padding: "10px 14px",
								boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
								fontSize: 13,
								color: "#1a1a2e",
								lineHeight: 1.4,
							}}
						>
							{captureError?.reason === "permission_denied" ? (
								<>
									Allow screen recording for this app in macOS System Settings &gt; Privacy
									&amp; Security &gt; Screen &amp; System Audio Recording, then click me again.
								</>
							) : captureError ? (
								<>I couldn&apos;t grab the screen: {captureError.message}</>
							) : voiceError ? (
								<>Voice error: {voiceError}</>
							) : (
								<>
									{voiceState === "capturing" && "Capturing your screen..."}
									{voiceState === "connecting" && "Connecting voice session..."}
									{isStartingRecording && "Opening your microphone..."}
									{voiceState === "ready" && !isStartingRecording && "What's on your mind? Click Start talking."}
									{voiceState === "recording" && "Listening... click Send voice when you're done."}
									{voiceState === "thinking" && "Thinking..."}
									{voiceState === "speaking" && "Speaking..."}
									{voiceState === "completed" && "Voice turn complete."}
									{voiceState === "idle" && "Click me to start a voice turn."}
								</>
							)}
						</div>

						{capturedPreviewDataUrl && !captureError && (
							<div
								role="button"
								tabIndex={0}
								onClick={() => {
									void openCapturedImage();
								}}
								onKeyDown={(event) => {
									if (event.key === "Enter" || event.key === " ") {
										event.preventDefault();
										void openCapturedImage();
									}
								}}
								style={{
									background: "rgba(255,255,255,0.92)",
									borderRadius: 16,
									padding: 8,
									boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
									cursor: "pointer",
								}}
							>
								<img
									src={capturedPreviewDataUrl}
									alt="Screenshot preview"
									style={{
										display: "block",
										width: "100%",
										maxHeight: 120,
										objectFit: "cover",
										borderRadius: 10,
									}}
								/>
								<div
									style={{
										marginTop: 6,
										fontSize: 11,
										color: "#5a5a6f",
										textAlign: "center",
									}}
								>
									Click to open full screenshot
								</div>
							</div>
						)}

						<div
							style={{
								background: "rgba(255,255,255,0.95)",
								borderRadius: 16,
								padding: "12px 12px",
								boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
								color: "#1a1a2e",
							}}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "stretch",
									gap: 8,
								}}
							>
								<button
									type="button"
									onClick={() => {
										if (isRecording) {
											stopRecording();
											return;
										}
										void startRecording();
									}}
									disabled={
										!liveSessionReady ||
										isStartingRecording ||
										voiceState === "thinking" ||
										voiceState === "speaking"
									}
									style={{
										border: "none",
										borderRadius: 14,
										padding: "12px 14px",
										background: isRecording ? "#0d1b2a" : "#40e0d0",
										color: isRecording ? "#d7f4ff" : "#0b2230",
										fontSize: 13,
										fontWeight: 700,
										cursor: liveSessionReady ? "pointer" : "wait",
									}}
								>
									{isStartingRecording ? "Starting mic..." : isRecording ? "Send voice" : "Start talking"}
								</button>

								<div style={{ fontSize: 12, color: "#4b5572", minHeight: 18 }}>
									You: {userTranscript || "Waiting for your voice..."}
								</div>
								<div style={{ fontSize: 12, color: "#27324a", minHeight: 18 }}>
									Assistant: {assistantTranscript || assistantTextResponse || "No spoken answer yet."}
								</div>
							</div>
						</div>

						{(assistantResponse || assistantError) && (
							<div
								style={{
									background: "rgba(255,255,255,0.95)",
									borderRadius: 16,
									padding: "10px 12px",
									boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
									color: "#1a1a2e",
								}}
							>
								<div
									style={{
										fontSize: 13,
										lineHeight: 1.45,
										marginBottom:
											assistantResponse?.steps.length || assistantResponse?.followUpQuestion
												? 8
												: 0,
									}}
								>
									{assistantError ?? assistantResponse?.summary}
								</div>
								{assistantResponse?.steps.length ? (
									<ol style={{ margin: 0, paddingLeft: 18, fontSize: 12, lineHeight: 1.45 }}>
										{assistantResponse.steps.map((step, index) => (
											<li key={`${index}-${step}`}>{step}</li>
										))}
									</ol>
								) : null}
								{assistantResponse?.followUpQuestion ? (
									<div style={{ marginTop: 8, fontSize: 12, color: "#4b5572" }}>
										Follow-up: {assistantResponse.followUpQuestion}
									</div>
								) : null}
								{pointAction ? (
									<div style={{ marginTop: 8, fontSize: 11, color: "#4b5572" }}>
										Pointing at {pointAction.label} with {Math.round(pointAction.confidence * 100)}%
										confidence at ({Math.round(pointAction.x)}, {Math.round(pointAction.y)}).
									</div>
								) : null}
							</div>
						)}

						<div style={{ display: "flex", gap: 6 }}>
							<input
								ref={inputRef}
								autoFocus
								type="text"
								placeholder="Typed fallback..."
								value={questionText}
								style={{
									flex: 1,
									padding: "8px 12px",
									borderRadius: 12,
									border: "1px solid #e0e0e0",
									fontSize: 13,
									outline: "none",
									background: "white",
									color: "#1a1a2e",
								}}
								onChange={(event) => setQuestionText(event.target.value)}
								onFocus={(event) => {
									event.target.style.borderColor = "#40e0d0";
								}}
								onBlur={(event) => {
									event.target.style.borderColor = "#e0e0e0";
								}}
								onKeyDown={(event) => {
									if (event.key === "Enter") {
										event.preventDefault();
										void submitQuestion();
									}
								}}
							/>
							<button
								type="button"
								onClick={() => {
									void submitQuestion();
								}}
								disabled={isAskingAssistant}
								style={{
									width: 36,
									height: 36,
									borderRadius: 12,
									border: "none",
									background: "#40e0d0",
									color: "white",
									fontSize: 16,
									cursor: isAskingAssistant ? "wait" : "pointer",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexShrink: 0,
									opacity: isAskingAssistant ? 0.75 : 1,
								}}
							>
								{isAskingAssistant ? "…" : "↑"}
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
