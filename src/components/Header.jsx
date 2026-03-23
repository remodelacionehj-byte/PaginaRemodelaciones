// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-dark.svg";
import "../styles/Header.css";

function Header() {
  const [scroll,   setScroll]   = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location]);
  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; }, [menuOpen]);
  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${scroll ? "header-scroll" : ""}`}>
      <Link to="/" className="header-logo">
        <img src={logo} alt="Remodelaciones H&J" />
      </Link>

      <nav className="nav">
        <Link to="/"          className={isActive("/")          ? "active" : ""}>Inicio</Link>
        <Link to="/servicios" className={isActive("/servicios") ? "active" : ""}>Servicios</Link>
        <Link to="/nosotros"  className={isActive("/nosotros")  ? "active" : ""}>Nosotros</Link>
        <Link to="/contacto"  className={isActive("/contacto")  ? "active" : ""}>Contacto</Link>
      </nav>

      <button className={`hamburger ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
        <span /><span /><span />
      </button>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav className="mobile-nav">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>

      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}

export default Header;