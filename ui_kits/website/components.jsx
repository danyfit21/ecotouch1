/* global React */
const { useState, useEffect, useRef } = React;

// Re-render all <i data-lucide> into SVGs (call after DOM updates)
function useLucide(dep) {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

function Icon({ name, size = 20, color, stroke = 2, style }) {
  return (
    <i
      data-lucide={name}
      style={{ width: size, height: size, display: "inline-flex", color, "--lc": stroke, ...style }}
      data-stroke={stroke}
    ></i>
  );
}

function Logo({ variant = "color", height = 30 }) {
  // variant: color (on light), blanco-text (white wordmark on dark)
  const src =
    variant === "white"
      ? "../../assets/logo-h-azuloscuro.png" // white wordmark designed for dark bg
      : "../../assets/logo-h-blanco.png"; // dark wordmark for light bg
  return <img src={src} alt="Ecotouch" style={{ height, display: "block" }} />;
}

function Button({ children, variant = "primary", size = "md", icon, iconRight, onClick, style }) {
  const base = {
    fontFamily: "var(--font-brand)",
    fontWeight: 700,
    border: "0",
    cursor: "pointer",
    borderRadius: "var(--radius-pill)",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    transition: "all var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
  };
  const sizes = {
    sm: { padding: "9px 18px", fontSize: 13 },
    md: { padding: "12px 24px", fontSize: 15 },
    lg: { padding: "15px 30px", fontSize: 16 },
  };
  const variants = {
    primary: { background: "var(--accent)", color: "#fff", boxShadow: "var(--shadow-accent)" },
    gradient: { background: "var(--eco-gradient)", color: "#fff", boxShadow: "var(--shadow-accent)" },
    verde: { background: "var(--accent-2)", color: "#063a26" },
    ghost: { background: "transparent", color: "var(--accent)", border: "1.5px solid var(--accent)" },
    white: { background: "#fff", color: "var(--accent)", boxShadow: "var(--shadow-sm)" },
    quiet: { background: "var(--gris-100)", color: "var(--fg-strong)" },
  };
  const [h, setH] = useState(false);
  const hover = h
    ? variant === "primary" || variant === "gradient"
      ? { filter: "brightness(1.05)", transform: "translateY(-1px)" }
      : { background: variant === "ghost" ? "rgba(43,131,237,.08)" : undefined, transform: "translateY(-1px)" }
    : {};
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ ...base, ...sizes[size], ...variants[variant], ...hover, ...style }}
    >
      {icon && <Icon name={icon} size={size === "sm" ? 16 : 18} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === "sm" ? 16 : 18} />}
    </button>
  );
}

function Badge({ children, tone = "azul", icon }) {
  const tones = {
    azul: { background: "rgba(43,131,237,.12)", color: "var(--azul-600)" },
    verde: { background: "rgba(28,247,153,.18)", color: "var(--verde-700)" },
    gradient: { background: "var(--eco-gradient)", color: "#fff" },
    gris: { background: "var(--gris-100)", color: "var(--fg-strong)" },
    dark: { background: "var(--eco-azul-oscuro)", color: "#fff" },
  };
  return (
    <span
      style={{
        ...tones[tone],
        fontFamily: "var(--font-brand)",
        fontWeight: 700,
        fontSize: 12.5,
        padding: "7px 15px",
        borderRadius: 999,
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
      }}
    >
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>
  );
}

function Overline({ children, color = "var(--accent)" }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-brand)",
        fontWeight: 700,
        fontSize: 12.5,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color,
      }}
    >
      {children}
    </div>
  );
}

Object.assign(window, { useLucide, Icon, Logo, Button, Badge, Overline, React, useState, useEffect, useRef });
