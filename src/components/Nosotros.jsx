// src/components/Nosotros.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { num: "10+",  label: "Años de experiencia" },
  { num: "300+", label: "Proyectos completados" },
  { num: "98%",  label: "Clientes satisfechos" },
  { num: "2",    label: "Ciudades atendidas" },
];

function Nosotros() {
  return (
    <section id="nosotros" className="nosotros-section">
      <div className="nosotros-inner">
        {/* Imagen */}
        <motion.div
          className="nosotros-img"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
            alt="Equipo de Remodelaciones H&J"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="section-tag">✦ Quiénes somos</span>
          <h2 className="section-title">Sobre<br />Remodelaciones H&amp;J</h2>
          <div className="gold-line" />
          <p className="section-subtitle" style={{ maxWidth: "100%" }}>
            Somos una empresa familiar con más de 10 años transformando hogares y espacios comerciales. Nos especializamos en remodelaciones, acabados, pintura y construcción general.
          </p>
          <p className="section-subtitle" style={{ maxWidth: "100%", marginTop: "1rem" }}>
            Nuestro equipo de profesionales trabaja con los mejores materiales del mercado, garantizando resultados que superan las expectativas de cada cliente. La honestidad, el cumplimiento y la calidad son nuestros pilares.
          </p>

          <div className="nosotros-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat-num">{s.num}</div>
                <p>{s.label}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem" }}>
            <Link to="/contacto" className="btn btn-primary">Trabajemos juntos →</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Nosotros;