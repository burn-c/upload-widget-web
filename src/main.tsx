import { StrictMode } from "react"

import { App } from "./app"
import { createRoot } from "react-dom/client"
import "./index.css"

// biome-ignore lint/style/noNonNullAssertion: False positive
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
