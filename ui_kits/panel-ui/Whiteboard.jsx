/* global React, PIcon */
const { useRef: useRefWB, useState: useStateWB, useEffect: useEffectWB } = React;

function Whiteboard({ onHome }) {
  const canvasRef = useRefWB(null);
  const drawing = useRefWB(false);
  const [color, setColor] = useStateWB("#2b83ed");
  const [size, setSize] = useStateWB(6);
  const colors = ["#002f56", "#2b83ed", "#1cf799", "#e2452f", "#f0a000", "#0c1822"];

  useEffectWB(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    const ratio = window.devicePixelRatio || 1;
    const rect = c.getBoundingClientRect();
    c.width = rect.width * ratio;
    c.height = rect.height * ratio;
    ctx.scale(ratio, ratio);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, []);

  const pos = (e) => {
    const r = canvasRef.current.getBoundingClientRect();
    const p = e.touches ? e.touches[0] : e;
    return { x: p.clientX - r.left, y: p.clientY - r.top };
  };
  const start = (e) => {
    drawing.current = true;
    const ctx = canvasRef.current.getContext("2d");
    const { x, y } = pos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };
  const move = (e) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current.getContext("2d");
    const { x, y } = pos(e);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.lineTo(x, y);
    ctx.stroke();
  };
  const end = () => (drawing.current = false);
  const clear = () => {
    const c = canvasRef.current;
    c.getContext("2d").clearRect(0, 0, c.width, c.height);
  };

  return (
    <div style={{ position: "absolute", inset: 0, background: "#fff", display: "flex", flexDirection: "column" }}>
      {/* top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onHome} style={{ background: "var(--gris-100)", border: 0, borderRadius: 12, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <PIcon name="house" size={22} color="var(--fg)" />
          </button>
          <span style={{ fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 18, color: "var(--fg-strong)" }}>Pizarra · Sin título</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={clear} style={{ fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 14, background: "var(--gris-100)", color: "var(--fg)", border: 0, borderRadius: 999, padding: "10px 18px", cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}>
            <PIcon name="eraser" size={18} /> Limpiar
          </button>
          <button style={{ fontFamily: "var(--font-brand)", fontWeight: 700, fontSize: 14, background: "var(--accent)", color: "#fff", border: 0, borderRadius: 999, padding: "10px 18px", cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}>
            <PIcon name="share-2" size={18} color="#fff" /> Compartir
          </button>
        </div>
      </div>
      {/* canvas */}
      <div style={{ flex: 1, position: "relative", background: "radial-gradient(circle at 1px 1px, #e1e2e4 1px, transparent 0) 0 0/26px 26px" }}>
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", touchAction: "none", cursor: "crosshair" }}
          onMouseDown={start}
          onMouseMove={move}
          onMouseUp={end}
          onMouseLeave={end}
          onTouchStart={start}
          onTouchMove={move}
          onTouchEnd={end}
        ></canvas>
        {/* floating tool palette */}
        <div style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 12, background: "#fff", borderRadius: 22, padding: 12, boxShadow: "var(--shadow-md)", border: "1px solid var(--border)" }}>
          {colors.map((c) => (
            <button key={c} onClick={() => setColor(c)} style={{ width: 34, height: 34, borderRadius: "50%", background: c, border: color === c ? "3px solid #fff" : "3px solid transparent", boxShadow: color === c ? "0 0 0 2px " + c : "none", cursor: "pointer" }}></button>
          ))}
          <div style={{ height: 1, background: "var(--gris-200)", margin: "2px 0" }}></div>
          {[4, 6, 12].map((s) => (
            <button key={s} onClick={() => setSize(s)} style={{ width: 34, height: 34, borderRadius: 12, background: size === s ? "var(--gris-100)" : "transparent", border: 0, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ width: s + 4, height: s + 4, borderRadius: "50%", background: "var(--fg)" }}></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Whiteboard });
