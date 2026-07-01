"use client";

import { useEffect, useRef, useState } from "react";

// Curseur façon Figma (flèche + label). Réutilisé pour le visiteur et le faux.
function Cursor({ label, cursorRef }: { label: string; cursorRef: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={cursorRef} className="live-cursor" aria-hidden>
      <svg width="22" height="22" viewBox="0 0 24 24" className="live-cursor-arrow">
        <path
          d="M5 2.5 L5 19.5 L9.2 15.6 L12 21.5 L14.4 20.4 L11.7 14.7 L17.5 14.7 Z"
          fill="var(--cursor-fill)"
          stroke="#ffffff"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
      <span className="live-cursor-label">{label}</span>
    </div>
  );
}

export function LiveCursors() {
  const [enabled, setEnabled] = useState(false);
  const youRef = useRef<HTMLDivElement>(null);
  const fakeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Uniquement sur les appareils avec un vrai pointeur (pas mobile/tactile).
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
  }, []);

  // Curseur du visiteur : suit la souris, cache le curseur natif.
  useEffect(() => {
    if (!enabled) return;
    const you = youRef.current;
    if (!you) return;
    document.body.classList.add("cursor-hidden");
    const onMove = (e: MouseEvent) => {
      you.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      you.style.opacity = "1";
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.classList.remove("cursor-hidden");
    };
  }, [enabled]);

  // Faux curseur "Stefan Sagmeister" : traverse l'écran jusqu'au CTA, puis fade.
  useEffect(() => {
    if (!enabled) return;
    const fake = fakeRef.current;
    if (!fake) return;

    const start = { x: window.innerWidth * 0.12, y: window.innerHeight * 0.24 };
    const cta = document.getElementById("cta-getintouch");
    const r = cta?.getBoundingClientRect();
    const end = r
      ? { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 }
      : { x: window.innerWidth * 0.3, y: window.innerHeight * 0.5 };

    fake.style.transform = `translate(${start.x}px, ${start.y}px)`;
    fake.style.opacity = "0";

    let raf = 0;
    const duration = 2200;
    const delay = 900;
    let t0 = 0;
    const step = (now: number) => {
      if (!t0) t0 = now;
      const elapsed = now - t0 - delay;
      if (elapsed < 0) {
        raf = requestAnimationFrame(step);
        return;
      }
      const p = Math.min(elapsed / duration, 1);
      // easeInOutCubic
      const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      const x = start.x + (end.x - start.x) * e;
      const y = start.y + (end.y - start.y) * e;
      fake.style.transform = `translate(${x}px, ${y}px)`;
      fake.style.opacity = p < 0.05 ? String(p / 0.05) : "1";
      if (p < 1) {
        raf = requestAnimationFrame(step);
      } else {
        // petit "clic" puis disparition
        cta?.classList.add("cta-poked");
        fake.classList.add("live-cursor-poke");
        setTimeout(() => {
          fake.style.transition = "opacity 0.6s ease";
          fake.style.opacity = "0";
        }, 700);
        setTimeout(() => cta?.classList.remove("cta-poked"), 900);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <Cursor label="You" cursorRef={youRef} />
      <Cursor label="Stefan Sagmeister" cursorRef={fakeRef} />
    </>
  );
}
