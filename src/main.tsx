import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { CountdownProvider } from "./context/CountdownContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CountdownProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CountdownProvider>
  </StrictMode>
);
