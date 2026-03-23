// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hace scroll al tope de la página cada vez
 * que el usuario navega a una nueva ruta.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null; // no renderiza nada visible
}

export default ScrollToTop;