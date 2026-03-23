// src/components/Contacto.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contacto.css";

// ─────────────────────────────────────────────────────────────
// CREDENCIALES — leídas desde variables de entorno (.env)
// En desarrollo: crea src/.env.local con estas variables
// En Vercel:     agrégalas en Settings → Environment Variables
// ─────────────────────────────────────────────────────────────
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const MAX_CHARS = 500;

function Contacto() {
  const form = useRef();
  const [charCount, setCharCount] = useState(0);
  const [status,    setStatus]    = useState("idle"); // idle | sending | success | error

  const enviarEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const datos = {
      title:   form.current.title.value,
      name:    form.current.name.value,
      email:   form.current.email.value,
      message: form.current.message.value,
      time:    new Date().toLocaleString("es-CO"),
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, datos, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus("success");
        form.current.reset();
        setCharCount(0);
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="contacto-container">

        {/* ── Columna izquierda ──────────────────── */}
        <div className="contacto-info">
          <span className="contacto-tag">✦ Hablemos</span>
          <h2 className="contacto-titulo">
            Convierte tu idea<br />en realidad
          </h2>
          <p className="contacto-desc">
            Cuéntanos sobre tu proyecto y te respondemos
            en menos de 24 horas con una propuesta personalizada.
          </p>

          <div className="contacto-datos">
            <div className="dato-item">
              <span className="dato-icon">📍</span>
              <span>Bogotá, Colombia</span>
            </div>
            <div className="dato-item">
              <span className="dato-icon">⏱️</span>
              <span>Respuesta en menos de 24h</span>
            </div>
            <div className="dato-item">
              <span className="dato-icon">💬</span>
              <span>Presupuesto sin costo</span>
            </div>
          </div>
        </div>

        {/* ── Formulario glassmorphism ───────────── */}
        <div className="glass-card">

          {status === "success" && (
            <div className="status-msg success">
              <span>✓</span> ¡Mensaje enviado! Te contactamos pronto.
            </div>
          )}
          {status === "error" && (
            <div className="status-msg error">
              <span>✕</span> Error al enviar. Intenta de nuevo.
            </div>
          )}

          <form ref={form} onSubmit={enviarEmail} className="glass-form" noValidate>

            <div className="field-group">
              <label>Asunto</label>
              <div className="field-wrap">
                <span className="field-icon">✦</span>
                <input type="text" name="title" placeholder="¿En qué te podemos ayudar?" required />
              </div>
            </div>

            <div className="field-row">
              <div className="field-group">
                <label>Nombre</label>
                <div className="field-wrap">
                  <span className="field-icon">◈</span>
                  <input type="text" name="name" placeholder="Tu nombre completo" required />
                </div>
              </div>

              <div className="field-group">
                <label>Correo</label>
                <div className="field-wrap">
                  <span className="field-icon">◉</span>
                  <input type="email" name="email" placeholder="tu@correo.com" required />
                </div>
              </div>
            </div>

            <div className="field-group">
              <label>
                Mensaje
                <span className={`char-counter ${charCount > MAX_CHARS * 0.9 ? "near-limit" : ""}`}>
                  {charCount}/{MAX_CHARS}
                </span>
              </label>
              <div className="field-wrap textarea-wrap">
                <textarea
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto, plazos, presupuesto..."
                  rows={5}
                  maxLength={MAX_CHARS}
                  onChange={(e) => setCharCount(e.target.value.length)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className={`btn-enviar ${status === "sending" ? "sending" : ""}`}
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <><span className="spinner" /> Enviando...</>
              ) : (
                <>Enviar mensaje <span className="btn-arrow">→</span></>
              )}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;