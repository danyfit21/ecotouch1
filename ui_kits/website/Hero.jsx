/* global React, Button, Badge, Overline, Icon */
function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--bg)" }}>
      {/* soft brand glow */}
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -120,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "var(--eco-gradient)",
          opacity: 0.12,
          filter: "blur(20px)",
        }}
      ></div>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "72px 32px 80px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 48,
          alignItems: "center",
          position: "relative",
        }}
      >
        <div>
          <Badge tone="gradient" icon="sparkles">
            El puente a la tecnología
          </Badge>
          <h1
            style={{
              fontFamily: "var(--font-brand)",
              fontWeight: 700,
              fontSize: 54,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--fg-strong)",
              margin: "20px 0 18px",
            }}
          >
            Tecnología de vanguardia,{" "}
            <span
              style={{
                background: "var(--eco-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              sin complicaciones
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-brand)",
              fontWeight: 300,
              fontSize: 19,
              lineHeight: 1.6,
              color: "var(--fg-muted)",
              margin: "0 0 32px",
              maxWidth: 480,
            }}
          >
            Encontramos la tecnología que necesitas, la importamos y nos ocupamos de todo —aduanas,
            impuestos, instalación— para entregártela lista, con garantía y soporte.
          </p>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Button variant="primary" size="lg" iconRight="arrow-right">
              Solicitar cotización
            </Button>
            <Button variant="ghost" size="lg" icon="play">
              Ver casos
            </Button>
          </div>
          <div style={{ display: "flex", gap: 28, marginTop: 40 }}>
            {[
              ["+700", "Pantallas entregadas"],
              ["+40", "Instituciones"],
              ["7 años", "De trayectoria"],
            ].map(([n, c]) => (
              <div key={c}>
                <div style={{ fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 26, color: "var(--accent)" }}>
                  {n}
                </div>
                <div style={{ fontFamily: "var(--font-brand)", fontSize: 12.5, color: "var(--fg-subtle)" }}>{c}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid var(--border)",
              background: "#fff",
            }}
          >
            <img
              src="../../assets/scene-collaboration.png"
              alt="Pantalla interactiva en uso"
              style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -22,
              left: -22,
              background: "#fff",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-md)",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: "var(--eco-gradient)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <Icon name="badge-check" size={22} color="#fff" />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 14, color: "var(--fg-strong)" }}>
                Soporte en 24 h
              </div>
              <div style={{ fontFamily: "var(--font-brand)", fontSize: 12, color: "var(--fg-muted)" }}>
                Garantía y repuestos en Ecuador
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
