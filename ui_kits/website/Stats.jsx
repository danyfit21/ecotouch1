/* global React, Button, Overline, Icon */
function Stats() {
  const stats = [
    ["100k", "Alumnos beneficiados"],
    ["+700", "Pantallas entregadas"],
    ["+40", "Instituciones atendidas"],
    ["24 h", "Resolución de soporte"],
  ];
  return (
    <section style={{ background: "var(--eco-azul-oscuro)", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(900px 380px at 85% -10%, rgba(28,247,153,0.16), transparent 60%)",
        }}
      ></div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px", position: "relative" }}>
        <Overline color="var(--eco-verde)">Trayectoria en Ecuador</Overline>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginTop: 28 }}>
          {stats.map(([n, c]) => (
            <div key={c}>
              <div
                style={{
                  fontFamily: "var(--font-brand)",
                  fontWeight: 700,
                  fontSize: 52,
                  lineHeight: 1,
                  background: "var(--eco-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {n}
              </div>
              <div style={{ fontFamily: "var(--font-brand)", fontSize: 15, color: "#bcd3e8", marginTop: 8 }}>{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const names = [
    "Universidad San Francisco de Quito",
    "Universidad Espíritu Santo",
    "PUCE – Sede Manabí",
    "Universidad ECOTEC",
    "Liceo Naval de Guayaquil",
    "U.E. Monte Tabor",
    "Colegio Sir Thomas More",
    "Instituto Tecnológico Quito",
  ];
  return (
    <section style={{ background: "var(--gris-50)", padding: "72px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
        <Overline>Confían en nosotros</Overline>
        <h2 style={{ fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 32, color: "var(--fg-strong)", margin: "12px 0 36px" }}>
          Las mejores instituciones del país
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          {names.map((n) => (
            <div
              key={n}
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 999,
                padding: "11px 20px",
                fontFamily: "var(--font-brand)",
                fontWeight: 700,
                fontSize: 14,
                color: "var(--fg)",
                display: "flex",
                alignItems: "center",
                gap: 9,
              }}
            >
              <Icon name="graduation-cap" size={16} color="var(--accent)" />
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section style={{ background: "#fff", padding: "20px 0 90px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            background: "var(--eco-gradient)",
            borderRadius: "var(--radius-xl)",
            padding: "56px 56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
            boxShadow: "var(--shadow-accent)",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2 style={{ fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 36, color: "#fff", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
              Haz tu vida sencilla, hazlo con Ecotouch
            </h2>
            <p style={{ fontFamily: "var(--font-brand)", fontWeight: 400, fontSize: 17, color: "rgba(255,255,255,0.92)", margin: 0 }}>
              Cuéntanos tu proyecto y te enviamos una cotización sin compromiso.
            </p>
          </div>
          <Button variant="white" size="lg" iconRight="arrow-right">
            Solicitar cotización
          </Button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Stats, Clients, CTABand });
