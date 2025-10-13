import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "next-themes";
import { BrowserRouter } from "react-router-dom";
import { SoundProvider } from "./context/SoundContext";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <SoundProvider>
          <App />
          <Analytics />
        </SoundProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
