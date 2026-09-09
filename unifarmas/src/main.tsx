import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LinksPage from "./LinksPage";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {window.location.pathname.replace(/\/$/, "") === "/links" ? (
      <LinksPage />
    ) : (
      <App />
    )}
  </React.StrictMode>,
);
import "./responsive.css";
