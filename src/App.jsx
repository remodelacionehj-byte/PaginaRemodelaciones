// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop  from "./components/ScrollToTop";
import Header       from "./components/Header";
import Footer       from "./components/Footer";
import WhatsApp     from "./components/WhatsApp";

import Inicio          from "./components/Inicio";
import PorQueElegirnos from "./components/PorQueElegirnos";
import Servicios       from "./components/Servicios";
import Proceso         from "./components/Proceso";
import Galeria         from "./components/Galeria";
import Proyectos       from "./components/Proyectos";
import Testimonios     from "./components/Testimonios";
import CTA             from "./components/CTA";
import Nosotros        from "./components/Nosotros";
import Contacto        from "./components/Contacto";

/** Página de inicio — todas las secciones en una */
function Home() {
  return (
    <>
      <Inicio />
      <PorQueElegirnos />
      <Servicios />
      <Proceso />
      <Galeria />
      <Proyectos />
      <Testimonios />
      <CTA />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />   {/* ← scroll al tope en cada navegación */}
      <Header />

      <Routes>
        <Route path="/"          element={<Home />}     />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros"  element={<Nosotros />}  />
        <Route path="/contacto"  element={<Contacto />}  />
      </Routes>

      <Footer />
      <WhatsApp />      {/* ← global, visible en todas las páginas */}
    </BrowserRouter>
  );
}

export default App;