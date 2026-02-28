declare module "wiggle/spring" {
	export class WiggleBone {
		constructor(
			target: import("three").Bone,
			options?: { stiffness?: number; damping?: number },
		);
		reset(): void;
		update(dt?: number): void;
		dispose(): void;
	}
}

declare module "wiggle/helper" {
	export class WiggleRigHelper extends import("three").Object3D {
		constructor(options?: {
			skeleton: import("three").Skeleton;
			dotSize?: number;
			lineWidth?: number;
		});
	}
}

declare module "wiggle" {
	export class WiggleBone {
		constructor(target: import("three").Bone, options?: { velocity?: number });
		reset(): void;
		update(dt?: number): void;
		dispose(): void;
	}
	export class WiggleSpring {
		constructor(
			target: import("three").Bone,
			options?: { stiffness?: number; damping?: number },
		);
		reset(): void;
		update(dt?: number): void;
		dispose(): void;
	}
	export class WiggleRig {
		constructor(target: import("three").Skeleton);
		reset(): void;
		update(dt?: number): void;
		dispose(): void;
	}
}
