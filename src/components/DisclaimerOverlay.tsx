"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { locales } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

// Real visit counter via abacus (free, no auth, no backend). Each /hit call
// increments and returns the running total. Personal namespace.
const COUNTER_URL = "https://abacus.jasoncameron.dev/hit/clementpz/portfolio-v1";

export function DisclaimerOverlay() {
  const { locale, setLocale, t } = useLocale();
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Show once per session, ~1s after the first scroll (best practice: let the
  // visitor see the real work first). Fallback if they never scroll.
  useEffect(() => {
    if (sessionStorage.getItem("disclaimer-seen")) return;
    let fired = false;
    const trigger = () => {
      if (fired) return;
      fired = true;
      window.removeEventListener("scroll", onScroll);
      setTimeout(() => setVisible(true), 1000);
    };
    const onScroll = () => trigger();
    window.addEventListener("scroll", onScroll, { passive: true });
    const fallback = window.setTimeout(trigger, 12000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(fallback);
    };
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
        <div className="overlay-badge">
          <span className="pulse-dot" />
          {t.overlayBadge}
        </div>

        <h2
          className="font-display font-bold"
          style={{ fontSize: "1.7rem", lineHeight: 1.15, color: "var(--text)", marginBottom: 16 }}
        >
          {t.overlayTitle1}
          <br />
          {t.overlayTitle2}
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-muted)", marginBottom: 24 }}>
          {t.overlayBodyPre}{" "}
          <span className="count-shimmer" style={{ fontWeight: 700 }}>
            #{ordinal}
          </span>{" "}
          {t.overlayBodyPost}
        </p>

        {/* Sélecteur de langue — définit la langue de la page à l'entrée */}
        <div style={{ marginBottom: 24 }}>
          <p
            style={{
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              marginBottom: 8,
            }}
          >
            {t.overlayLang}
          </p>
          <div className="lang-select" role="radiogroup" aria-label={t.overlayLang}>
            {locales.map((l) => {
              const active = l.id === locale;
              return (
                <button
                  key={l.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setLocale(l.id)}
                  className="lang-chip"
                  data-active={active}
                >
                  {l.short}
                </button>
              );
            })}
          </div>
        </div>

        <button
          ref={btnRef}
          type="button"
          onClick={dismiss}
          className="btn-accent"
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
