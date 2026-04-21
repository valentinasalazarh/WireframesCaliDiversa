import { BrowserRouter, Routes, Route } from "react-router";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Inicio } from "./pages/Inicio";
import { AcercaDe } from "./pages/AcercaDe";
import { Rutas } from "./pages/Rutas";
import { RutaDetalle } from "./pages/RutaDetalle";
import { Lugares } from "./pages/Lugares";
import { LugarDetalle } from "./pages/LugarDetalle";
import { Contacto } from "./pages/Contacto";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/rutas" element={<Rutas />} />
          <Route path="/rutas/:id" element={<RutaDetalle />} />
          <Route path="/lugares" element={<Lugares />} />
          <Route
            path="/lugares/:id"
            element={<LugarDetalle />}
          />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}