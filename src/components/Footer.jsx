// src/components/Footer.jsx
import { Link } from "react-router-dom";

// ─────────────────────────────────────────────────────────────
// DATOS — edita solo estos arrays para actualizar el footer
// ─────────────────────────────────────────────────────────────

/**
 * Links de navegación interna.
 * Usa <Link> de React Router para navegar sin recargar la página.
 * @type {{ label: string, to: string }[]}
 */
const NAV_LINKS = [
  { label: "Inicio",    to: "/"          },
  { label: "Servicios", to: "/servicios" },
  { label: "Nosotros",  to: "/nosotros"  },
  { label: "Contacto",  to: "/contacto"  },
];

/**
 * Información de contacto de la empresa.
 * Agrega o elimina filas según sea necesario.
 * @type {{ icon: string, text: string }[]}
 */
const CONTACT_INFO = [
  { icon: "📍", text: "Bogotá, Colombia"               },
  { icon: "📞", text: "+57 302 541 6369"               },
  { icon: "✉️", text: "remodelacionehj@gmail.com"  },
  { icon: "⏰", text: "Lun–Sáb  8:00am – 6:00pm"      },
];

// ─────────────────────────────────────────────────────────────
// COMPONENTE
// ─────────────────────────────────────────────────────────────
function Footer() {
  /** Año actual calculado dinámicamente */
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* ── Marca / descripción ───────────────────────── */}
        <div className="footer-brand">
          <span className="brand-name">H&amp;J</span>
          <p>
            Especialistas en remodelaciones y acabados de alto nivel.
            Transformamos tus espacios con calidad, compromiso y experiencia.
          </p>
        </div>

        {/* ── Navegación (generada desde NAV_LINKS) ─────── */}
        <div className="footer-col">
          <h4>Navegación</h4>

          {NAV_LINKS.map(({ label, to }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </div>

        {/* ── Contacto (generado desde CONTACT_INFO) ────── */}
        <div className="footer-col">
          <h4>Contacto</h4>

          {CONTACT_INFO.map(({ icon, text }) => (
            <p key={text}>
              {icon} {text}
            </p>
          ))}
        </div>

      </div>

      {/* ── Barra inferior con copyright ─────────────────── */}
      <div className="footer-bottom">
        <span>© {anioActual} Remodelaciones H&amp;J — Todos los derechos reservados</span>
      </div>
    </footer>
  );
}

export default Footer;