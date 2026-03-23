// src/components/Galeria.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ─────────────────────────────────────────────────────────────
// FOTOS — todas de Unsplash (permiten hotlinking sin bloqueos)
// Para reemplazar con fotos propias: cambia la URL del src
// ─────────────────────────────────────────────────────────────
const fotos = [
  {
    src:   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    label: "Remodelación sala",
  },
  {
    src:   "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    label: "Cocina moderna",
  },
  {
    src:   "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    label: "Acabados interiores",
  },
  {
    src:   "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    label: "Comedor renovado",
  },
  {
    src:   "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80",
    label: "Baño de lujo",
  },
];

function Galeria() {
  return (
    <section className="galeria-section">
      <div className="galeria-inner">

        {/* Encabezado */}
        <div className="galeria-header">
          <div>
            <span className="section-tag">✦ Portafolio</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Nuestros proyectos
            </h2>
          </div>
          <Link to="/nosotros" className="btn btn-outline" style={{ flexShrink: 0 }}>
            Ver todos →
          </Link>
        </div>

        {/* Grid de imágenes */}
        <motion.div
          className="galeria-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {fotos.map((f, i) => (
            <motion.div
              key={i}
              className="g-item"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <img
                src={f.src}
                alt={f.label}
                loading="lazy"
                onError={(e) => {
                  // Si falla la imagen, muestra un placeholder gris
                  e.target.style.background = "#1a1a1a";
                  e.target.style.opacity = "0.4";
                }}
              />
              <div className="g-overlay">
                <span>{f.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Galeria;