import type { Display } from "electrobun/bun";

type WindowFrame = {
	x: number;
	y: number;
	width: number;
	height: number;
};

export function getDisplayForWindowFrame(
	frame: WindowFrame,
	displays: Display[],
): Display | null {
	if (displays.length === 0) return null;

	const centerX = frame.x + frame.width / 2;
	const centerY = frame.y + frame.height / 2;
	const containingDisplay = displays.find((display) => {
		const { x, y, width, height } = display.bounds;
		return (
			centerX >= x &&
			centerX < x + width &&
			centerY >= y &&
			centerY < y + height
		);
	});

	return containingDisplay ?? displays.find((display) => display.isPrimary) ?? displays[0];
}
