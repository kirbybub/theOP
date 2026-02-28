import { useEffect, useRef } from "react";
import * as THREE from "three";

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

		// Mouse tracking for drag
		let dragging = false;
		let lastMouseX = 0;
		let lastMouseY = 0;

		const onMouseDown = (e: MouseEvent) => {
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

			arms[0].rotation.z = leftArmSpring.value;
			arms[1].rotation.z = rightArmSpring.value;

			// Gentle idle bob
			root.position.y = Math.sin(t * 1.5) * 0.04;

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
		<div style={{ position: "fixed", inset: 0 }}>
			<div
				ref={containerRef}
				style={{ position: "absolute", inset: 0 }}
			/>
			<div
				className="electrobun-webkit-app-region-drag"
				style={{
					position: "absolute",
					inset: 0,
					zIndex: 10,
					cursor: "pointer",
				}}
				onMouseDown={(e) => {
					(e.target as HTMLElement).style.cursor = "grabbing";
				}}
				onMouseUp={(e) => {
					(e.target as HTMLElement).style.cursor = "pointer";
				}}
				onMouseLeave={(e) => {
					(e.target as HTMLElement).style.cursor = "pointer";
				}}
			/>
		</div>
	);
}
