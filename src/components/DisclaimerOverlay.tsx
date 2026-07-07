"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { useLocale } from "./LocaleProvider";
import { LanguageDropdown } from "./LanguageDropdown";

// Real visit counter via abacus (free, no auth, no backend). Each /hit call
// increments and returns the running total. Personal namespace.
const COUNTER_URL = "https://abacus.jasoncameron.dev/hit/clementpz/portfolio-v1";

export function DisclaimerOverlay() {
  const { locale, t } = useLocale();
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Show once per session, instantanément au premier scroll UNIQUEMENT (jamais
  // sur un timer). Si le visiteur ne scrolle pas, l'overlay n'apparaît pas.
  useEffect(() => {
    if (sessionStorage.getItem("disclaimer-seen")) return;
    let fired = false;
    const onScroll = () => {
      if (fired) return;
      fired = true;
      window.removeEventListener("scroll", onScroll);
      setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    fetch(COUNTER_URL)
      .then((r) => r.json())
      .then((d) => {
        if (typeof d?.value === "number") setCount(d.value);
      })
      .catch(() => setCount(null));
  }, [visible]);

  useEffect(() => {
    if (count == null) return;
    const start = performance.now();
    const duration = 1100;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(count * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [count]);

  const burst = useCallback(() => {
    const rect = btnRef.current?.getBoundingClientRect();
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.6;
    const colors = ["#b370c0", "#54255a", "#d3a6dd", "#f5eff6", "#7c3aed"];
    confetti({ particleCount: 90, spread: 70, startVelocity: 42, origin: { x, y }, colors });
    confetti({ particleCount: 40, spread: 100, startVelocity: 28, scalar: 0.9, origin: { x, y }, colors });
  }, []);

  const dismiss = () => {
    burst();
    sessionStorage.setItem("disclaimer-seen", "1");
    // Signale aux live cursors que "Visit" a été cliqué → Carol peut entrer.
    window.dispatchEvent(new Event("disclaimer-dismissed"));
    setTimeout(() => setClosing(true), 260);
    setTimeout(() => setVisible(false), 260 + 420);
  };

  if (!visible) return null;

  const ordinal = display > 0 ? display.toLocaleString(locale === "en" ? "en-US" : locale) : "…";

  return (
    <div
      className="overlay-root"
      data-closing={closing}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio in progress"
    >
      <div className="overlay-glass">
        {/* Haut : langue à gauche, V1 à droite (inversés sur mobile via CSS) */}
        <div
          className="overlay-top"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <LanguageDropdown align="left" />
          <div className="overlay-badge" style={{ margin: 0 }}>
            <span className="pulse-dot" />
            V1
          </div>
        </div>

        <h2
          className="font-display font-bold"
          style={{ fontSize: "1.55rem", lineHeight: 1.2, color: "var(--text)", marginBottom: 16 }}
        >
          {t.overlayTitle}
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-muted)", marginBottom: 26 }}>
          {t.overlayBodyPre}{" "}
          <span className="count-shimmer" style={{ fontWeight: 700 }}>
            {ordinal}
          </span>
          <sup style={{ fontSize: "0.6em", color: "var(--accent)" }}>
            {locale === "fr" ? "e" : locale === "es" ? "ª" : "th"}
          </sup>{" "}
          {t.overlayBodyPost}
        </p>

        <button
          ref={btnRef}
          type="button"
          onClick={dismiss}
          className="btn-ghost"
          style={{ width: "100%", justifyContent: "center" }}
        >
          {t.overlayCta}
        </button>

        <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", opacity: 0.7, marginTop: 16 }}>
          {t.overlayFoot}
        </p>
      </div>
    </div>
  );
}
