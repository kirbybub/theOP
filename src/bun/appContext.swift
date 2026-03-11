import AppKit
import CoreGraphics
import Foundation

struct AppDescriptor: Codable {
	let name: String
	let bundleId: String?
	let windowTitle: String?
}

struct AppContextPayload: Codable {
	let frontmostApp: AppDescriptor?
	let visibleApps: [AppDescriptor]
}

func frontmostWindowTitle(for pid: pid_t) -> String? {
	guard let windowList = CGWindowListCopyWindowInfo(
		[.optionOnScreenOnly, .excludeDesktopElements],
		kCGNullWindowID
	) as? [[String: Any]] else {
		return nil
	}

	for window in windowList {
		guard let ownerPid = window[kCGWindowOwnerPID as String] as? pid_t, ownerPid == pid else {
			continue
		}
		let layer = window[kCGWindowLayer as String] as? Int ?? 0
		if layer != 0 {
			continue
		}
		if let title = window[kCGWindowName as String] as? String, !title.isEmpty {
			return title
		}
	}

	return nil
}

func appDescriptor(for app: NSRunningApplication, includeWindowTitle: Bool) -> AppDescriptor? {
	guard let name = app.localizedName, !name.isEmpty else {
		return nil
	}

	return AppDescriptor(
		name: name,
		bundleId: app.bundleIdentifier,
		windowTitle: includeWindowTitle ? frontmostWindowTitle(for: app.processIdentifier) : nil
	)
}

let workspace = NSWorkspace.shared
let frontmostApp = workspace.frontmostApplication.flatMap { appDescriptor(for: $0, includeWindowTitle: true) }
let visibleApps = workspace.runningApplications.compactMap { app in
	if app.activationPolicy != .regular || app.isHidden {
		return nil
	}
	return appDescriptor(for: app, includeWindowTitle: false)
}
let payload = AppContextPayload(frontmostApp: frontmostApp, visibleApps: visibleApps)

do {
	let encoder = JSONEncoder()
	encoder.outputFormatting = [.sortedKeys]
	let data = try encoder.encode(payload)
	FileHandle.standardOutput.write(data)
} catch {
	let message = "{\"frontmostApp\":null,\"visibleApps\":[]}"
	FileHandle.standardOutput.write(message.data(using: .utf8)!)
}
