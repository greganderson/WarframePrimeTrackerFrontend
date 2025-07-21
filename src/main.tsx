import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Weapons from "./Weapons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="primary" element={<Weapons weaponType="Primary" />} />
          <Route path="secondary" element={<Weapons weaponType="Secondary" />} />
          <Route path="melee" element={<Weapons weaponType="Melee" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
