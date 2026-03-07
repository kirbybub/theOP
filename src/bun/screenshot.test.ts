import { describe, expect, test } from "bun:test";

import { getDisplayForWindowFrame } from "../shared/displaySelection";

describe("getDisplayForWindowFrame", () => {
	test("returns the display containing the window center", () => {
		const display = getDisplayForWindowFrame(
			{ x: 2100, y: 200, width: 200, height: 300 },
			[
				{
					id: 1,
					bounds: { x: 0, y: 0, width: 1920, height: 1080 },
					workArea: { x: 0, y: 0, width: 1920, height: 1040 },
					scaleFactor: 2,
					isPrimary: true,
				},
				{
					id: 2,
					bounds: { x: 1920, y: 0, width: 1728, height: 1117 },
					workArea: { x: 1920, y: 0, width: 1728, height: 1077 },
					scaleFactor: 2,
					isPrimary: false,
				},
			],
		);

		expect(display?.id).toBe(2);
	});

	test("falls back to primary display when no display contains the center", () => {
		const display = getDisplayForWindowFrame(
			{ x: -4000, y: 200, width: 200, height: 300 },
			[
				{
					id: 1,
					bounds: { x: 0, y: 0, width: 1920, height: 1080 },
					workArea: { x: 0, y: 0, width: 1920, height: 1040 },
					scaleFactor: 2,
					isPrimary: true,
				},
				{
					id: 2,
					bounds: { x: 1920, y: 0, width: 1728, height: 1117 },
					workArea: { x: 1920, y: 0, width: 1728, height: 1077 },
					scaleFactor: 2,
					isPrimary: false,
				},
			],
		);

		expect(display?.id).toBe(1);
	});
});
