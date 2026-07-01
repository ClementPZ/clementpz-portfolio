"use client";

import { useRef } from "react";
import confetti from "canvas-confetti";
import { useTheme } from "./ThemeProvider";

export function ModeToggle() {
  const { mode, toggleMode } = useTheme();
  const isDark = mode === "dark";
  const ref = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    // Explosion d'icônes vers le BAS (le bouton est en haut de page).
    // Soleil aubergine quand on passe en clair ; lune claire quand on passe en sombre.
    const rect = ref.current?.getBoundingClientRect();
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.9;
    const y = rect ? (rect.bottom / window.innerHeight) : 0.06;
    const goingLight = isDark; // dark → light
    // ︎ force le rendu TEXTE (monochrome) → la couleur s'applique
    // (sinon le glyphe est rendu en emoji couleur, soleil jaune).
    const glyph = goingLight ? "☀︎" : "☾︎";
    const color = goingLight ? "#54255a" : "#ece0f0"; // soleil aubergine / lune claire
    const shape = confetti.shapeFromText({ text: glyph, scalar: 2.4, color });
    confetti({
      shapes: [shape],
      scalar: 2.4,
      particleCount: 16,
      spread: 60,
      angle: 225, // diagonale 45° vers l'intérieur (bas-gauche depuis le coin haut-droit)
      startVelocity: 34,
      gravity: 1.1,
      ticks: 140,
      origin: { x, y },
    });
    toggleMode();
  };

  return (
    <button
      ref={ref}
      id="mode-toggle"
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
