/* global React, Button, Badge, Overline, Icon */
const { useState: useStateSec } = React;

function ServiceCard({ icon, tag, title, desc, points, dark }) {
  const [h, setH] = useStateSec(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: dark ? "var(--eco-azul-oscuro)" : "#fff",
        border: dark ? "0" : "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        padding: 32,
        boxShadow: h ? "var(--shadow-lg)" : "var(--shadow-sm)",
        transform: h ? "translateY(-3px)" : "none",
        transition: "all var(--dur-base) var(--ease-out)",
        color: dark ? "#fff" : "var(--fg)",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: dark ? "var(--eco-gradient)" : "var(--eco-gradient)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 22,
        }}
      >
        <Icon name={icon} size={28} color="#fff" />
      </div>
      <Badge tone={dark ? "verde" : "azul"}>{tag}</Badge>
      <h3
        style={{
          fontFamily: "var(--font-brand)",
          fontWeight: 700,
          fontSize: 24,
          margin: "14px 0 10px",
          color: dark ? "#fff" : "var(--fg-strong)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-brand)",
          fontWeight: 400,
          fontSize: 15,
          lineHeight: 1.6,
          margin: "0 0 20px",
          color: dark ? "#bcd3e8" : "var(--fg-muted)",
        }}
      >
        {desc}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "grid", gap: 10 }}>
        {points.map((p) => (
          <li key={p} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-brand)", fontSize: 14, color: dark ? "#dbe8f4" : "var(--fg)" }}>
            <Icon name="check-circle-2" size={18} color="var(--eco-verde)" />
            {p}
          </li>
        ))}
      </ul>
      <Button variant={dark ? "verde" : "primary"} iconRight="arrow-right">
        Conocer más
      </Button>
    </div>
  );
}

function Services() {
  return (
    <section style={{ background: "var(--gris-50)", padding: "84px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Overline>Nuestros servicios</Overline>
          <h2 style={{ fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 40, letterSpacing: "-0.02em", color: "var(--fg-strong)", margin: "12px 0 0" }}>
            Dos áreas, un mismo compromiso
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <ServiceCard
            icon="monitor"
            tag="Tecnología educativa"
            title="Pantallas interactivas"
            desc="Transformamos aulas y salas de reunión en espacios tecnológicos que facilitan la docencia y la colaboración."
            points={["Capacitación docente gratuita", "Recursos interactivos para todas las asignaturas", "Servicio técnico inmediato 24 h"]}
          />
          <ServiceCard
            icon="sun"
            tag="Energía sostenible"
            title="Sistemas de paneles solares"
            desc="Para empresas e instituciones: evaluación técnica, presupuesto y ejecución de proyectos de energía solar."
            points={["Evaluación técnica del proyecto", "Presupuesto y ejecución llave en mano", "Ahorro energético a largo plazo"]}
            dark
          />
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["search", "Buscamos", "Encontramos la tecnología innovadora que necesitas, al mejor precio y garantía."],
    ["plane", "Importamos", "Gestionamos aduanas, impuestos y declaraciones — todo lo que no tienes que saber hacer."],
    ["wrench", "Instalamos", "Entregamos e instalamos el producto, con capacitación para tu equipo."],
    ["shield-check", "Acompañamos", "Soporte continuo, repuestos en Ecuador y garantía de reparación."],
  ];
  return (
    <section style={{ background: "#fff", padding: "84px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ marginBottom: 48, maxWidth: 560 }}>
          <Overline>Cómo trabajamos</Overline>
          <h2 style={{ fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 40, letterSpacing: "-0.02em", color: "var(--fg-strong)", margin: "12px 0 12px" }}>
            El puente entre tú y la tecnología
          </h2>
          <p style={{ fontFamily: "var(--font-brand)", fontWeight: 300, fontSize: 18, lineHeight: 1.6, color: "var(--fg-muted)", margin: 0 }}>
            Hacemos todo el proceso que el cliente no sabe hacer y le entregamos su producto en las manos.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {steps.map(([icon, t, d], i) => (
            <div key={t} style={{ position: "relative" }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "var(--gris-50)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <Icon name={icon} size={24} color="var(--accent)" />
              </div>
              <div style={{ fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 12, color: "var(--accent-2-ink)", marginBottom: 6 }}>
                0{i + 1}
              </div>
              <h4 style={{ fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 18, color: "var(--fg-strong)", margin: "0 0 8px" }}>{t}</h4>
              <p style={{ fontFamily: "var(--font-brand)", fontSize: 14, lineHeight: 1.55, color: "var(--fg-muted)", margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services, Process, ServiceCard });
