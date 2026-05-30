/* global React, Button, Logo, Icon */
const { useState: useStateHeader } = React;

function Header() {
  const [open, setOpen] = useStateHeader(false);
  const links = ["Inicio", "Pantallas interactivas", "Energía solar", "Casos de éxito", "Contacto"];
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "14px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Logo height={30} />
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {links.map((l, i) => (
            <a
              key={l}
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                fontFamily: "var(--font-brand)",
                fontWeight: i === 0 ? 700 : 400,
                fontSize: 14.5,
                color: i === 0 ? "var(--accent)" : "var(--fg)",
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
        </nav>
        <Button variant="primary" size="sm" iconRight="arrow-right">
          Cotizar
        </Button>
      </div>
    </header>
  );
}

Object.assign(window, { Header });
