import App from "./App";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const rootContainer = document.getElementById("root");

if (rootContainer) {
  const root = createRoot(rootContainer);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
