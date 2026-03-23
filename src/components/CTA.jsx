// ─────────────────────────────────────────────────────────────
// src/components/CTA.jsx
// ─────────────────────────────────────────────────────────────
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">✦ Comencemos</span>
          <h2>¿Listo para transformar<br />tu espacio?</h2>
          <p>Contáctanos hoy y recibe una cotización personalizada sin costo ni compromiso.</p>
          <div className="cta-buttons">
            <Link to="/contacto" className="btn btn-primary">Solicitar cotización</Link>
            <a href="https://wa.me/+573025416369" className="btn btn-outline" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;