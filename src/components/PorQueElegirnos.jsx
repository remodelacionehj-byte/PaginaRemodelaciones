// src/components/PorQueElegirnos.jsx
import { motion } from "framer-motion";

const razones = [
  { icon: "🏆", title: "Experiencia comprobada", desc: "Más de 10 años transformando hogares y espacios comerciales en toda la región." },
  { icon: "🤝", title: "Trabajo responsable",    desc: "Cumplimos cada compromiso con honestidad, orden y respeto por tu propiedad." },
  { icon: "⏱️", title: "Entregas a tiempo",      desc: "Planificamos cada proyecto con precisión para cumplir los plazos pactados." },
  { icon: "💬", title: "Atención personalizada", desc: "Te acompañamos en cada etapa con asesoría directa y comunicación clara." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item      = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function PorQueElegirnos() {
  return (
    <section className="porque-section">
      <div className="porque-inner">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">✦ Nuestra diferencia</span>
          <h2 className="section-title">¿Por qué elegir<br />Remodelaciones H&J?</h2>
          <div className="gold-line" />
          <p className="section-subtitle">
            Somos el equipo que convierte tu visión en realidad. Cada proyecto es único y lo tratamos como tal, con dedicación y profesionalismo desde el primer día.
          </p>
        </motion.div>

        {/* Grid de razones */}
        <motion.div
          className="porque-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {razones.map((r) => (
            <motion.div key={r.title} className="porque-item" variants={item}>
              <span className="porque-icon">{r.icon}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default PorQueElegirnos;