import AVFoundation
import Foundation

private let outputSampleRate: Double = 16000

struct StreamEvent: Codable {
	let type: String
	let sampleRate: Int?
	let pcm16Base64: String?
	let message: String?
}

func emit(_ event: StreamEvent) {
	do {
		let data = try JSONEncoder().encode(event)
		if let line = String(data: data, encoding: .utf8) {
			FileHandle.standardOutput.write((line + "\n").data(using: .utf8)!)
		}
	} catch {
		FileHandle.standardError.write("failed to encode event\n".data(using: .utf8)!)
	}
}

func requestPermission() -> Bool {
	let semaphore = DispatchSemaphore(value: 0)
	var granted = false

	AVCaptureDevice.requestAccess(for: .audio) { allowed in
		granted = allowed
		semaphore.signal()
	}

	semaphore.wait()
	return granted
}

guard requestPermission() else {
	emit(StreamEvent(type: "permission_denied", sampleRate: nil, pcm16Base64: nil, message: "Microphone access was denied."))
	exit(1)
}

let engine = AVAudioEngine()
let inputNode = engine.inputNode
let inputFormat = inputNode.inputFormat(forBus: 0)

guard let outputFormat = AVAudioFormat(
	commonFormat: .pcmFormatInt16,
	sampleRate: outputSampleRate,
	channels: 1,
	interleaved: true
) else {
	emit(StreamEvent(type: "error", sampleRate: nil, pcm16Base64: nil, message: "Failed to create output audio format."))
	exit(1)
}

guard let converter = AVAudioConverter(from: inputFormat, to: outputFormat) else {
	emit(StreamEvent(type: "error", sampleRate: nil, pcm16Base64: nil, message: "Failed to create audio converter."))
	exit(1)
}

inputNode.installTap(onBus: 0, bufferSize: 1024, format: inputFormat) { buffer, _ in
	let outputCapacity = AVAudioFrameCount(
		(Double(buffer.frameLength) * outputFormat.sampleRate / buffer.format.sampleRate).rounded(.up)
	)

	guard let outputBuffer = AVAudioPCMBuffer(
		pcmFormat: outputFormat,
		frameCapacity: max(outputCapacity, 1)
	) else {
		emit(StreamEvent(type: "error", sampleRate: nil, pcm16Base64: nil, message: "Failed to allocate output buffer."))
		return
	}

	var providedInput = false
	var conversionError: NSError?
	let status = converter.convert(to: outputBuffer, error: &conversionError) { _, outStatus in
		if providedInput {
			outStatus.pointee = .noDataNow
			return nil
		}

		providedInput = true
		outStatus.pointee = .haveData
		return buffer
	}

	if let conversionError {
		emit(StreamEvent(type: "error", sampleRate: nil, pcm16Base64: nil, message: conversionError.localizedDescription))
		return
	}

	guard status != .error else {
		emit(StreamEvent(type: "error", sampleRate: nil, pcm16Base64: nil, message: "Audio conversion failed."))
		return
	}

	let frameLength = Int(outputBuffer.frameLength)
	guard frameLength > 0, let channelData = outputBuffer.int16ChannelData else {
		return
	}

	let byteCount = frameLength * MemoryLayout<Int16>.size
	let data = Data(bytes: channelData.pointee, count: byteCount)
	emit(StreamEvent(
		type: "chunk",
		sampleRate: Int(outputFormat.sampleRate),
		pcm16Base64: data.base64EncodedString(),
		message: nil
	))
}

do {
	try engine.start()
	emit(StreamEvent(type: "ready", sampleRate: Int(outputFormat.sampleRate), pcm16Base64: nil, message: nil))
	RunLoop.current.run()
} catch {
	emit(StreamEvent(type: "error", sampleRate: nil, pcm16Base64: nil, message: error.localizedDescription))
	exit(1)
}

