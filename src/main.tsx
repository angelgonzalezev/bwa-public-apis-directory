import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Clarity from "@microsoft/clarity";

import App from "./App.tsx";
import "./index.css";

const projectId = process.env.CLARITY_PROJECT_ID ?? "";

Clarity.init(projectId);

Clarity.identify("custom-id", "custom-session-id", "custom-page-id", "friendly-name"); // only custom-id is required

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
