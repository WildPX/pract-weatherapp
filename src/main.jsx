import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./variables.css";
import "./global.css";

import MainPage from "./components/Pages/MainPage/MainPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);
