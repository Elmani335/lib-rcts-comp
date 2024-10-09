import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

const root = document.getElementById("root");

if (root) {
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
