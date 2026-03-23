// src/components/Servicios.jsx
import { motion } from "framer-motion";

const servicios = [
  { emoji: "🏗️", title: "Remodelaciones",       desc: "Renovamos cocinas, baños, salas y cualquier espacio con los mejores materiales." },
  { emoji: "🪟", title: "Acabados",              desc: "Enchapes, pisos, estuco, molduras y detalles que elevan el valor de tu inmueble." },
  { emoji: "🖌️", title: "Pintura",               desc: "Aplicamos pinturas de alta calidad con técnicas profesionales para resultados perfectos." },
  { emoji: "🏢", title: "Construcción general",  desc: "Obras civiles, ampliaciones y construcción desde cero con ingeniería confiable." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const card      = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function Servicios() {
  return (
    <section id="servicios" className="servicios-section">
      <div className="servicios-inner">
        <motion.div
          className="servicios-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">✦ Lo que hacemos</span>
          <h2 className="section-title">Nuestros servicios</h2>
          <p className="section-subtitle">
            Ofrecemos soluciones integrales para transformar cualquier espacio, con calidad, garantía y acabados de primer nivel.
          </p>
        </motion.div>

        <motion.div
          className="servicios-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {servicios.map((s) => (
            <motion.div key={s.title} className="servicio-card" variants={card}>
              <span className="servicio-emoji">{s.emoji}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Servicios;