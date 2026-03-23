// src/components/Proceso.jsx
import { motion } from "framer-motion";

const pasos = [
  { num: "01", icon: "📋", title: "Cotización",    desc: "Visitamos tu espacio, escuchamos tus necesidades y elaboramos un presupuesto detallado sin costo." },
  { num: "02", icon: "✏️", title: "Diseño",        desc: "Planificamos cada detalle: materiales, tiempos y distribución para lograr el resultado que imaginas." },
  { num: "03", icon: "🔨", title: "Construcción",  desc: "Nuestro equipo trabaja con precisión, manteniendo tu espacio ordenado y cumpliendo los plazos." },
  { num: "04", icon: "🎉", title: "Entrega final", desc: "Revisamos cada detalle contigo antes de entregar el proyecto terminado a tu entera satisfacción." },
];

function Proceso() {
  return (
    <section className="proceso-section">
      <div className="proceso-inner">
        <motion.div
          className="proceso-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">✦ Cómo trabajamos</span>
          <h2 className="section-title">Nuestro proceso</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Un método probado que garantiza calidad, transparencia y tranquilidad en cada etapa de tu proyecto.
          </p>
        </motion.div>

        <div className="proceso-steps">
          {pasos.map((paso, i) => (
            <motion.div
              key={paso.num}
              className="paso"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="paso-num">
                <span className="paso-icon">{paso.icon}</span>
              </div>
              <h3>{paso.title}</h3>
              <p>{paso.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proceso;