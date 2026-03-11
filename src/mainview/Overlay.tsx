import { useEffect, useState } from "react";

type OverlayState = {
	label: string;
	confidence: number;
	x: number;
	y: number;
	width: number;
	height: number;
} | null;

declare global {
	interface Window {
		__theopOverlaySetState?: (state: OverlayState) => void;
		__theopOverlayPendingState?: OverlayState;
	}
}

export default function Overlay() {
	const [overlay, setOverlay] = useState<OverlayState>(null);

	useEffect(() => {
		window.__theopOverlaySetState = (state) => {
			setOverlay(state);
		};
		if (window.__theopOverlayPendingState !== undefined) {
			setOverlay(window.__theopOverlayPendingState);
		}

		return () => {
			delete window.__theopOverlaySetState;
		};
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				inset: 0,
				pointerEvents: "none",
				overflow: "hidden",
			}}
		>
			{overlay ? (
				<div
					style={{
						position: "absolute",
						left: overlay.x,
						top: overlay.y,
						width: overlay.width,
						height: overlay.height,
						borderRadius: 18,
						border: "3px solid rgba(64, 224, 208, 0.96)",
						boxShadow:
							"0 0 0 2px rgba(10, 15, 24, 0.22), 0 0 28px rgba(64, 224, 208, 0.55), inset 0 0 18px rgba(64, 224, 208, 0.16)",
						background: "rgba(64, 224, 208, 0.08)",
						backdropFilter: "blur(1px)",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: 0,
							top: -36,
							padding: "8px 12px",
							borderRadius: 999,
							background: "rgba(7, 18, 24, 0.9)",
							color: "#d6ffff",
							fontSize: 14,
							fontWeight: 700,
							letterSpacing: 0.2,
							whiteSpace: "nowrap",
							boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
						}}
					>
						{overlay.label} · {Math.round(overlay.confidence * 100)}%
					</div>
				</div>
			) : null}
		</div>
	);
}
