import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Overlay from "./Overlay";

const mode = new URLSearchParams(window.location.search).get("mode");
const RootComponent = mode === "overlay" ? Overlay : App;

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RootComponent />
	</StrictMode>,
);
