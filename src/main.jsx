import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Main CSS File
import "./styles/index.css";

// Main App Components
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
