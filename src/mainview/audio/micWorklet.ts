/// <reference lib="webworker" />

declare abstract class AudioWorkletProcessor {
	readonly port: MessagePort;

	abstract process(inputs: Float32Array[][]): boolean;
}

declare function registerProcessor(
	name: string,
	processorCtor: typeof AudioWorkletProcessor,
): void;

class MicCaptureProcessor extends AudioWorkletProcessor {
	process(inputs: Float32Array[][]) {
		const input = inputs[0];
		if (!input || input.length === 0) {
			return true;
		}

		const channelData = input[0];
		if (!channelData) {
			return true;
		}

		this.port.postMessage(channelData.slice());
		return true;
	}
}

registerProcessor("mic-capture-processor", MicCaptureProcessor);
