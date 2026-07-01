"use client";

import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const full = document.documentElement.scrollHeight;
      // Apparaît quand on approche du bas (~600px de la fin).
      setShow(scrolled > full - 600 && window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  const onClick = () => {
    // Petit burst d'étoiles translucides, très discret.
    const rect = ref.current?.getBoundingClientRect();
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.95;
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.95;
    confetti({
      particleCount: 14,
      spread: 55,
      startVelocity: 22,
      gravity: 0.7,
      scalar: 0.8,
      ticks: 90,
      shapes: ["star"],
      colors: ["#d3a6dd", "#b370c0", "#f5eff6"],
      origin: { x, y },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Back to top"
      title="Back to top"
      className="back-to-top"
      onClick={onClick}
    >
      ↑
    </button>
  );
}
