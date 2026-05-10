import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const FONT_WAIT_MS = 3200;

function waitForCriticalFonts(): Promise<void> {
  if (!document.fonts?.load) {
    return Promise.resolve();
  }

  const loads = Promise.all([
    document.fonts.load("400 16px 'Jessy Ohio'"),
    document.fonts.load("400 16px 'Montserrat'"),
    document.fonts.load("500 16px 'Montserrat'"),
  ])
    .then(() => undefined)
    .catch(() => undefined);

  const deadline = new Promise<void>((resolve) => {
    setTimeout(resolve, FONT_WAIT_MS);
  });

  return Promise.race([loads, deadline]);
}

const root = document.getElementById("root");
if (root) {
  void waitForCriticalFonts().then(() => {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  });
}
