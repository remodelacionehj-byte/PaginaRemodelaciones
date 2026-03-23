// src/components/Testimonios.jsx
import { motion } from "framer-motion";

const testimonios = [
  {
    texto: "Excelente trabajo en la remodelación de mi cocina. Cumplieron cada detalle del diseño, el equipo fue muy profesional y terminaron antes de lo acordado.",
    nombre: "Carlos Ramírez",
    cargo:  "Cliente residencial",
    ini:    "CR",
  },
  {
    texto: "Contratamos a H&J para remodelar nuestra oficina completa. El resultado superó nuestras expectativas. Acabados impecables y trato inmejorable.",
    nombre: "Laura Méndez",
    cargo:  "Directora comercial",
    ini:    "LM",
  },
  {
    texto: "Renovaron el baño principal de mi apartamento en tiempo récord. Los materiales son de primera calidad y el precio fue muy justo. Los recomiendo totalmente.",
    nombre: "Andrés Torres",
    cargo:  "Cliente residencial",
    ini:    "AT",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.13 } } };
const card      = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function Testimonios() {
  return (
    <section className="testimonios-section">
      <div className="testimonios-inner">
        <motion.div
          className="testimonios-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">✦ Lo que dicen</span>
          <h2 className="section-title">Testimonios de clientes</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            La satisfacción de cada cliente es nuestra mayor motivación. Estas son algunas de sus experiencias.
          </p>
        </motion.div>

        <motion.div
          className="testimonios-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonios.map((t) => (
            <motion.div key={t.nombre} className="testimonio-card" variants={card}>
              <div className="stars">★★★★★</div>
              <div className="testimonio-quote">"</div>
              <p>{t.texto}</p>
              <div className="testimonio-footer">
                <div className="testimonio-avatar">{t.ini}</div>
                <div className="testimonio-info">
                  <strong>{t.nombre}</strong>
                  <span>{t.cargo}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonios;