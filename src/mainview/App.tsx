import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Electroview, type ElectrobunRPCSchema } from "electrobun/view";

// RPC schema (must mirror the bun side)
type AppRPCSchema = ElectrobunRPCSchema & {
	bun: {
		requests: {
			requestFocus: { params: undefined; response: { ok: boolean } };
		};
		messages: {};
	};
	webview: {
		requests: {};
		messages: {};
	};
};

const rpc = Electroview.defineRPC<AppRPCSchema>({
	handlers: {},
});

// Initialize RPC transport (must be instantiated for rpc to work)
new Electroview({ rpc });

function createCharacter() {
	const bodyColor = 0x40e0d0;
	const glowColor = 0x60fff0;

	// Everything parents to this group — tilting it moves the whole character
	const root = new THREE.Group();

	// --- Body ---
	const bodyGeo = new THREE.SphereGeometry(0.65, 32, 32);
	const bodyMat = new THREE.MeshStandardMaterial({
		color: bodyColor,
		roughness: 0.55,
		emissive: glowColor,
		emissiveIntensity: 0.15,
	});
	const body = new THREE.Mesh(bodyGeo, bodyMat);
	root.add(body);

	// --- Cheek blush ---
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

	// --- Eyes ---
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

	// --- Mouth ---
	const mouthShape = new THREE.Shape();
	mouthShape.moveTo(-0.06, 0);
	mouthShape.quadraticCurveTo(0, -0.05, 0.06, 0);
	const mouth = new THREE.Mesh(
		new THREE.ShapeGeometry(mouthShape, 12),
		new THREE.MeshStandardMaterial({ color: 0x209090, roughness: 0.5, side: THREE.DoubleSide }),
	);
	mouth.position.set(0, -0.08, 0.64);
	root.add(mouth);

	// --- Feet ---
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

	// --- Arms (simple capsule meshes, pivoting from shoulder) ---
	const armMat = new THREE.MeshStandardMaterial({
		color: bodyColor,
		roughness: 0.55,
		emissive: glowColor,
		emissiveIntensity: 0.15,
	});

	const arms: THREE.Group[] = [];
	for (const side of [-1, 1]) {
		// Pivot point at shoulder
		const armPivot = new THREE.Group();
		armPivot.position.set(side * 0.58, -0.05, 0.1);
		// Rotate top of arm inward so it tucks into the body
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

const CHAR_SIZE = 200;

// Simple spring for arm rotation
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

export default function App() {
	const containerRef = useRef<HTMLDivElement>(null);
	const dragVelRef = useRef({ x: 0, y: 0 });
	const [bubblesOpen, setBubblesOpen] = useState(false);
	const bubblesOpenRef = useRef(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const focusInput = useCallback(() => {
		const input = inputRef.current;
		if (!input) return;
		input.focus({ preventScroll: true });
	}, []);

	// Keep ref in sync with state for use in animation loop
	useEffect(() => {
		bubblesOpenRef.current = bubblesOpen;
	}, [bubblesOpen]);

	// Request window focus, then keep trying input focus until it sticks
	useEffect(() => {
		if (!bubblesOpen) return;

		let cancelled = false;
		const focusAfterOpen = async () => {
			try {
				await rpc.request.requestFocus();
			} catch {
				// Fall back to input-only focus if native focus request fails.
			}
			if (cancelled || !bubblesOpenRef.current) return;
			requestAnimationFrame(() => focusInput());
		};

		void focusAfterOpen();
		return () => {
			cancelled = true;
		};
	}, [bubblesOpen, focusInput]);

	// Escape key to close bubbles
	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && bubblesOpen) {
				setBubblesOpen(false);
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [bubblesOpen]);

	function toggleBubbles() {
		setBubblesOpen((prev) => !prev);
	}

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

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

		// Springs for each arm's z-rotation
		const leftArmSpring = new Spring(500, 22);
		const rightArmSpring = new Spring(500, 22);
		// Spring for body tilt
		const bodyTiltSpring = new Spring(400, 25);
		// Spring for right arm raise when bubbles open
		const rightArmUpSpring = new Spring(200, 16);

		// Mouse tracking for drag
		let dragging = false;
		let lastMouseX = 0;
		let lastMouseY = 0;

		const onMouseDown = (e: MouseEvent) => {
			// Only start drag tracking when the event originates from the canvas/character area
			if (!container.contains(e.target as Node)) return;
			dragging = true;
			lastMouseX = e.screenX;
			lastMouseY = e.screenY;
		};
		const onMouseMove = (e: MouseEvent) => {
			if (!dragging) return;
			dragVelRef.current.x = e.screenX - lastMouseX;
			dragVelRef.current.y = e.screenY - lastMouseY;
			lastMouseX = e.screenX;
			lastMouseY = e.screenY;
		};
		const onMouseUp = () => { dragging = false; };

		window.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);

		let t = 0;
		let animId: number;

		function animate() {
			animId = requestAnimationFrame(animate);
			const dt = 1 / 60;
			t += dt;

			// Read and decay drag velocity
			const dx = dragVelRef.current.x;
			dragVelRef.current.x *= 0.5;
			dragVelRef.current.y *= 0.5;

			// Drive body tilt from drag (clamped to prevent full rotation)
			bodyTiltSpring.update(0, dt, 0.25);
			bodyTiltSpring.velocity += dx * -0.8;

			root.rotation.z = bodyTiltSpring.value + Math.sin(t * 0.8) * 0.02;

			// Turn character to face drag direction
			const targetY = THREE.MathUtils.clamp(dx * 0.04, -0.3, 0.3);
			root.rotation.y += (targetY - root.rotation.y) * 0.1;

			// Arms swing (clamped)
			leftArmSpring.update(0, dt, 0.3);
			leftArmSpring.velocity += dx * 1.5;
			rightArmSpring.update(0, dt, 0.3);
			rightArmSpring.velocity += dx * 1.5;

			// Right arm raise animation
			const armUpTarget = bubblesOpenRef.current ? 1.2 : 0;
			rightArmUpSpring.update(armUpTarget, dt);

			arms[0].rotation.z = leftArmSpring.value;
			arms[1].rotation.z = rightArmSpring.value + rightArmUpSpring.value;

			// Gentle idle bob, offset upward so head is near top of container
			root.position.y = 0.35 + Math.sin(t * 1.5) * 0.04;

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
			{/* Character area — fills window, with bubbles overlaid above */}
			<div style={{ flex: 1, position: "relative" }}>
				<div
					ref={containerRef}
					style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: CHAR_SIZE }}
				/>
				{/* Drag overlay — only covers the character area at the bottom */}
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
					onMouseDown={(e) => {
						(e.target as HTMLElement).style.cursor = "grabbing";
						(e.target as HTMLElement).dataset.downX = String(e.screenX);
						(e.target as HTMLElement).dataset.downY = String(e.screenY);
					}}
					onMouseUp={(e) => {
						(e.target as HTMLElement).style.cursor = "pointer";
						const downX = Number((e.target as HTMLElement).dataset.downX ?? 0);
						const downY = Number((e.target as HTMLElement).dataset.downY ?? 0);
						const dist = Math.hypot(e.screenX - downX, e.screenY - downY);
						if (dist < 5) {
							toggleBubbles();
						}
					}}
					onMouseLeave={(e) => {
						(e.target as HTMLElement).style.cursor = "pointer";
					}}
				/>
				{/* Bubble area — positioned above the character, inside the same container */}
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
							padding: "6px 12px 2px",
						}}
					>
						{/* Greeting card */}
						<div style={{
							background: "white",
							borderRadius: 16,
							padding: "10px 14px",
							marginBottom: 6,
							boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
							fontSize: 13,
							color: "#1a1a2e",
							lineHeight: 1.4,
						}}>
							Hey, need help with anything?
						</div>
						{/* Input row */}
						<div style={{ display: "flex", gap: 6 }}>
							<input
								ref={inputRef}
								autoFocus
								type="text"
								placeholder="Ask me anything..."
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
								onFocus={(e) => e.target.style.borderColor = "#40e0d0"}
								onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										// TODO: handle submit
									}
								}}
							/>
							<button
								type="button"
								style={{
									width: 36,
									height: 36,
									borderRadius: 12,
									border: "none",
									background: "#40e0d0",
									color: "white",
									fontSize: 16,
									cursor: "pointer",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexShrink: 0,
								}}
							>
								&#8593;
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
