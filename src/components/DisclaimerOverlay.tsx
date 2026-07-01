"use client";

import { useEffect, useRef, useState } from "react";

// Compteur de visites RÉEL via abacus (gratuit, sans auth, sans backend).
// Chaque appel /hit incrémente et renvoie le total. Namespace perso.
const COUNTER_URL = "https://abacus.jasoncameron.dev/hit/clementpz/portfolio-v1";

export function DisclaimerOverlay() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  // Affiche une fois par session (un refresh ne re-nag pas ; une nouvelle
  // visite oui). Récupère le compteur réel au mount.
  useEffect(() => {
    const seen = sessionStorage.getItem("disclaimer-seen");
    if (seen) return;
    setVisible(true);

    fetch(COUNTER_URL)
      .then((r) => r.json())
      .then((d) => {
        if (typeof d?.value === "number") setCount(d.value);
      })
      .catch(() => setCount(null));
  }, []);

  // Animation count-up une fois le vrai chiffre reçu.
  useEffect(() => {
    if (count == null) return;
    const start = performance.now();
    const duration = 1100;
    const from = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(from + (count - from) * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [count]);

  const dismiss = () => {
    setClosing(true);
    sessionStorage.setItem("disclaimer-seen", "1");
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  const ordinal = display > 0 ? display.toLocaleString("fr-FR") : "…";

  return (
    <div
      className="overlay-root"
      data-closing={closing}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio en construction"
    >
      <div
        className="overlay-card surface"
        style={{
          maxWidth: 520,
          width: "100%",
          padding: "40px 32px",
          textAlign: "center",
          background: "linear-gradient(160deg, rgba(84,37,90,0.55) 0%, rgba(26,14,28,0.92) 100%)",
          border: "1px solid var(--border-strong)",
          boxShadow: "0 30px 80px rgba(10,3,12,0.7)",
        }}
      >
        <div
          className="inline-flex items-center gap-2 mb-6"
          style={{
            padding: "6px 14px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid var(--border)",
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          <span
            className="pulse-dot"
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
          V1 — shipping in public
        </div>

        <h2
          className="font-display font-bold mb-4"
          style={{ fontSize: "1.7rem", lineHeight: 1.15, color: "var(--text)" }}
        >
          Ce portfolio est en construction.
          <br />
          En direct, en public.
        </h2>

        <p
          className="mb-7"
          style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-muted)" }}
        >
          Vous êtes le{" "}
          <span className="count-shimmer" style={{ fontWeight: 700 }}>
            {ordinal}
          </span>
          <sup style={{ fontSize: "0.6em", color: "var(--accent)" }}>e</sup> curieux à
          passer pendant que je le build. Product design, code et IA, tout est fait
          main. La V1 arrive, mais le travail est déjà là dessous.
        </p>

        <button type="button" onClick={dismiss} className="btn-accent" style={{ width: "100%", justifyContent: "center" }}>
          Entrer quand même →
        </button>

        <p
          className="mt-4"
          style={{ fontSize: "0.72rem", color: "var(--text-muted)", opacity: 0.7 }}
        >
          Aucun mur, aucune inscription. Le contenu est accessible.
        </p>
      </div>
    </div>
  );
}
