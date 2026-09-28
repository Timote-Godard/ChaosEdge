import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Radar from "./pages/Radar";
import Attaque from "./pages/Attaque";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attaque" element={<Attaque />} />
        <Route path="/radar" element={<Radar />} />
      </Routes>
    </BrowserRouter>
  );
}