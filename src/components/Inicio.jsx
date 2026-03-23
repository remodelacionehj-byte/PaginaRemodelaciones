// src/components/Inicio.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <section id="inicio" className="hero-video">
      <video autoPlay muted loop playsInline className="video-bg">
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      </video>
      <div className="overlay" />

      <div className="hero-content">
        <motion.span
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✦ Remodelaciones H&amp;J — Bogotá
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Transformamos<br /><em>tus espacios</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Remodelaciones y acabados de alto nivel con más de 10 años de experiencia.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Link to="/contacto" className="btn btn-primary">Solicitar cotización</Link>
          <a href="https://wa.me/+573025416369" className="btn btn-outline" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-dot" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Inicio;