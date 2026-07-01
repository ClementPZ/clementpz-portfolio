"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

// Real visit counter via abacus (free, no auth, no backend). Each /hit call
// increments and returns the running total. Personal namespace.
const COUNTER_URL = "https://abacus.jasoncameron.dev/hit/clementpz/portfolio-v1";

export function DisclaimerOverlay() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Show once per session, triggered ~1s after the first scroll (best practice:
  // let the visitor see the real work first). Safety fallback if they never
  // scroll (short viewport) so recruiters still get the message.
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

  // Fetch the real count once the overlay becomes visible.
  useEffect(() => {
    if (!visible) return;
    fetch(COUNTER_URL)
      .then((r) => r.json())
      .then((d) => {
        if (typeof d?.value === "number") setCount(d.value);
      })
      .catch(() => setCount(null));
  }, [visible]);

  // Count-up animation once the real number arrives.
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
    // Cheerful confetti from the button's position.
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
    // Let the confetti breathe before fading the overlay out.
    setTimeout(() => setClosing(true), 260);
    setTimeout(() => setVisible(false), 260 + 420);
  };

  if (!visible) return null;

  const ordinal = display > 0 ? display.toLocaleString("en-US") : "…";

  return (
    <div
      className="overlay-root"
      data-closing={closing}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio in progress"
    >
      <div className="overlay-card overlay-glass">
        <div className="overlay-badge">
          <span className="pulse-dot" />
          V1 — shipping in public
        </div>

        <h2
          className="font-display font-bold"
          style={{ fontSize: "1.7rem", lineHeight: 1.15, color: "var(--text)", marginBottom: 16 }}
        >
          This portfolio is under construction.
          <br />
          Live, and in public.
        </h2>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-muted)", marginBottom: 28 }}>
          You&apos;re visitor{" "}
          <span className="count-shimmer" style={{ fontWeight: 700 }}>
            #{ordinal}
          </span>{" "}
          dropping by while I build it. Product design, code, and AI — all done by
          hand. V1 is on its way, but the work is already here underneath.
        </p>

        <button
          ref={btnRef}
          type="button"
          onClick={dismiss}
          className="btn-accent"
          style={{ width: "100%", justifyContent: "center" }}
        >
          Come in anyway →
        </button>

        <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", opacity: 0.7, marginTop: 16 }}>
          No wall, no sign-up. Everything is accessible.
        </p>
      </div>
    </div>
  );
}
