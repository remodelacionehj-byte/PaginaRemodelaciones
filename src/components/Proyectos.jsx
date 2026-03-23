// src/components/Proyectos.jsx
import { motion } from "framer-motion";

const fotos = [
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd", label: "Proyecto 1" },
  { src: "https://grupobofar.com/wp-content/uploads/2022/07/procesos-constructivos-26.jpg", label: "Proyecto 2" },
  { src: "https://grupobofar.com/wp-content/uploads/2022/07/procesos-constructivos-9.jpg", label: "Proyecto 3" },
];

function Proyectos() {
  return (
    <section className="galeria-section">
      <div className="galeria-inner">
        <motion.div
          className="galeria-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="section-tag">✦ Portafolio</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Proyectos recientes</h2>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
          {fotos.map((f, i) => (
            <motion.div
              key={i}
              className="g-item"
              style={{ height: "280px" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <img src={f.src} alt={f.label} />
              <div className="g-overlay"><span>{f.label}</span></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;