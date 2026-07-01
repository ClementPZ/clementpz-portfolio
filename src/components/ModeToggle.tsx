"use client";

import { useRef } from "react";
import confetti from "canvas-confetti";
import { useTheme } from "./ThemeProvider";

export function ModeToggle() {
  const { mode, toggleMode } = useTheme();
  const isDark = mode === "dark";
  const ref = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    // Explosion d'icônes : soleil quand on passe en clair, lune quand on passe
    // en sombre. Émis depuis le bouton.
    const rect = ref.current?.getBoundingClientRect();
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.9;
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.05;
    const goingLight = isDark; // on part de dark → light
    const shape = confetti.shapeFromText({ text: goingLight ? "☀️" : "🌙", scalar: 2.2 });
    confetti({
      shapes: [shape],
      scalar: 2.2,
      particleCount: 18,
      spread: 80,
      startVelocity: 26,
      gravity: 0.8,
      ticks: 120,
      origin: { x, y },
    });
    toggleMode();
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="rounded-full"
      style={{
        width: 36,
        height: 36,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-elev)",
        border: "1px solid var(--border)",
        color: "var(--text)",
        fontSize: "0.95rem",
        lineHeight: 1,
      }}
    >
      {isDark ? "☀︎" : "☾"}
    </button>
  );
}
