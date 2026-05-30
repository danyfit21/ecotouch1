/* global React, Icon */
function Footer() {
  const cols = [
    ["Servicios", ["Pantallas interactivas", "Paneles solares", "Capacitación docente", "Servicio técnico"]],
    ["Empresa", ["Nosotros", "Casos de éxito", "Trayectoria", "Contacto"]],
    ["Soporte", ["Garantía", "Repuestos", "Formación online", "Reportar un error"]],
  ];
  return (
    <footer style={{ background: "var(--gris-900)", color: "#fff", paddingTop: 64 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40, paddingBottom: 48 }}>
          <div>
            <img src="../../assets/logo-h-azuloscuro.png" alt="Ecotouch" style={{ height: 30, marginBottom: 18 }} />
            <p style={{ fontFamily: "var(--font-brand)", fontWeight: 300, fontSize: 14.5, lineHeight: 1.6, color: "#9fb3c4", margin: "0 0 18px", maxWidth: 280 }}>
              El puente entre la tecnología de vanguardia y las soluciones sostenibles. Quito, Ecuador.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["instagram", "facebook", "linkedin", "youtube"].map((s) => (
                <div
                  key={s}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name={s} size={18} color="#cfe0ee" />
                </div>
              ))}
            </div>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <div style={{ fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 16 }}>{h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 11 }}>
                {items.map((it) => (
                  <li key={it}>
                    <a href="#" onClick={(e) => e.preventDefault()} style={{ fontFamily: "var(--font-brand)", fontSize: 14, color: "#9fb3c4", textDecoration: "none" }}>
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "22px 0 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "var(--font-brand)",
            fontSize: 13,
            color: "#7d93a6",
          }}
        >
          <span>© 2025 Ecotouch. Todos los derechos reservados.</span>
          <span>Tecnología sin complicaciones.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
