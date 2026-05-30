/* global React */
const { useState: useStatePanel, useEffect: useEffectPanel } = React;

function usePanelLucide() {
  useEffectPanel(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

function PIcon({ name, size = 24, color, style }) {
  return <i data-lucide={name} style={{ width: size, height: size, display: "inline-flex", color, ...style }}></i>;
}

function Clock() {
  const [now, setNow] = useStatePanel(new Date());
  useEffectPanel(() => {
    const t = setInterval(() => setNow(new Date()), 1000 * 20);
    return () => clearInterval(t);
  }, []);
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  return (
    <div style={{ textAlign: "center", color: "#fff" }}>
      <div style={{ fontFamily: "var(--font-brand)", fontWeight: 300, fontSize: 92, lineHeight: 1, letterSpacing: "-0.02em", textShadow: "0 4px 24px rgba(0,0,0,0.3)" }}>
        {hh}<span style={{ opacity: 0.7 }}>:</span>{mm}
      </div>
      <div style={{ fontFamily: "var(--font-brand)", fontWeight: 400, fontSize: 22, marginTop: 6, opacity: 0.92 }}>
        {days[now.getDay()]}, {now.getDate()} de {months[now.getMonth()]} de {now.getFullYear()}
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 28px", position: "relative", zIndex: 5 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img src="../../assets/logo-h-azuloscuro.png" alt="Ecotouch" style={{ height: 24 }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20, color: "rgba(255,255,255,0.92)" }}>
        <PIcon name="cast" size={20} color="rgba(255,255,255,0.92)" />
        <PIcon name="wifi" size={20} color="rgba(255,255,255,0.92)" />
        <PIcon name="volume-2" size={20} color="rgba(255,255,255,0.92)" />
        <PIcon name="settings" size={20} color="rgba(255,255,255,0.92)" />
        <div style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 14, color: "#fff" }}>
          <PIcon name="user" size={18} color="#fff" /> Aula 204
        </div>
      </div>
    </div>
  );
}

function AppTile({ icon, label, accent, onClick }) {
  const [h, setH] = useStatePanel(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: "rgba(255,255,255,0.14)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: 24,
        padding: "22px 18px",
        width: 150,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        transform: h ? "translateY(-4px)" : "none",
        boxShadow: h ? "0 16px 40px rgba(0,0,0,0.25)" : "none",
        transition: "all 160ms cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div style={{ width: 70, height: 70, borderRadius: 20, background: accent, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(0,0,0,0.18)" }}>
        <PIcon name={icon} size={34} color="#fff" />
      </div>
      <span style={{ fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 15, color: "#fff" }}>{label}</span>
    </button>
  );
}

function Dock({ onHome }) {
  const tools = [
    ["pen-tool", "Pizarra"],
    ["grid-2x2", "Apps"],
    ["chrome", "Navegador"],
    ["folder", "Archivos"],
  ];
  return (
    <div
      style={{
        position: "absolute",
        bottom: 22,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(0,20,40,0.55)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: 999,
        padding: "10px 14px",
        zIndex: 6,
      }}
    >
      <button onClick={onHome} style={{ background: "var(--eco-gradient)", border: 0, width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
        <PIcon name="house" size={24} color="#fff" />
      </button>
      <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.18)", margin: "0 4px" }}></div>
      {tools.map(([ic, lb]) => (
        <button key={lb} style={{ background: "transparent", border: 0, width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}>
          <PIcon name={ic} size={22} color="rgba(255,255,255,0.92)" />
        </button>
      ))}
    </div>
  );
}

Object.assign(window, { usePanelLucide, PIcon, Clock, StatusBar, AppTile, Dock });
