export function encodePcm16Base64FromFloat32(
	input: Float32Array,
	inputSampleRate: number,
	outputSampleRate: number,
) {
	const resampled = resampleFloat32(input, inputSampleRate, outputSampleRate);
	const pcmBytes = new Uint8Array(resampled.length * 2);

	for (let index = 0; index < resampled.length; index += 1) {
		const sample = Math.max(-1, Math.min(1, resampled[index]));
		const intSample = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
		const clamped = Math.round(intSample);
		pcmBytes[index * 2] = clamped & 0xff;
		pcmBytes[index * 2 + 1] = (clamped >> 8) & 0xff;
	}

	return bytesToBase64(pcmBytes);
}

export function decodePcm16Base64ToFloat32(base64: string) {
	const bytes = base64ToBytes(base64);
	const sampleCount = Math.floor(bytes.length / 2);
	const samples = new Float32Array(sampleCount);

	for (let index = 0; index < sampleCount; index += 1) {
		const low = bytes[index * 2]!;
		const high = bytes[index * 2 + 1]!;
		let sample = (high << 8) | low;
		if (sample >= 0x8000) {
			sample -= 0x10000;
		}
		samples[index] = sample / 0x8000;
	}

	return samples;
}

export class PcmAudioPlayer {
	private currentTime = 0;

	constructor(
		private readonly audioContext: AudioContext,
	) {}

	playChunk(samples: Float32Array, sampleRate: number) {
		const buffer = this.audioContext.createBuffer(1, samples.length, sampleRate);
		buffer.getChannelData(0).set(samples);

		const source = this.audioContext.createBufferSource();
		source.buffer = buffer;
		source.connect(this.audioContext.destination);

		const startTime = Math.max(this.audioContext.currentTime + 0.02, this.currentTime);
		source.start(startTime);
		this.currentTime = startTime + buffer.duration;
	}

	reset() {
		this.currentTime = this.audioContext.currentTime;
	}
}

function resampleFloat32(
	input: Float32Array,
	inputSampleRate: number,
	outputSampleRate: number,
) {
	if (inputSampleRate === outputSampleRate) {
		return input;
	}

	const ratio = inputSampleRate / outputSampleRate;
	const outputLength = Math.max(1, Math.round(input.length / ratio));
	const output = new Float32Array(outputLength);

	for (let outputIndex = 0; outputIndex < outputLength; outputIndex += 1) {
		const position = outputIndex * ratio;
		const leftIndex = Math.floor(position);
		const rightIndex = Math.min(input.length - 1, leftIndex + 1);
		const interpolation = position - leftIndex;
		const left = input[leftIndex] ?? 0;
		const right = input[rightIndex] ?? left;
		output[outputIndex] = left + (right - left) * interpolation;
	}

	return output;
}

function bytesToBase64(bytes: Uint8Array) {
	let binary = "";
	for (const byte of bytes) {
		binary += String.fromCharCode(byte);
	}
	return btoa(binary);
}

function base64ToBytes(base64: string) {
	const binary = atob(base64);
	const bytes = new Uint8Array(binary.length);
	for (let index = 0; index < binary.length; index += 1) {
		bytes[index] = binary.charCodeAt(index);
	}
	return bytes;
}
