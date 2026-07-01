"use client";

import { useEffect, useRef, useState } from "react";

// Couleurs officielles Figma multiplayer.
const VIOLET = "#7B61FF"; // You
const BLUE = "#0D99FF"; // Stefan
const ORANGE = "#FF8A00"; // Carolino

function Cursor({
  label,
  color,
  cursorRef,
}: {
  label: string;
  color: string;
  cursorRef: React.Ref<HTMLDivElement>;
}) {
  return (
    <div ref={cursorRef} className="live-cursor" aria-hidden>
      <svg width="22" height="22" viewBox="0 0 24 24" className="live-cursor-arrow">
        <path
          d="M5 2.5 L5 19.5 L9.2 15.6 L12 21.5 L14.4 20.4 L11.7 14.7 L17.5 14.7 Z"
          fill={color}
          stroke="#ffffff"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
      <span className="live-cursor-label" style={{ background: color }}>
        {label}
      </span>
    </div>
  );
}

export function LiveCursors() {
  const [enabled, setEnabled] = useState(false);
  const youRef = useRef<HTMLDivElement>(null);
  const stefanRef = useRef<HTMLDivElement>(null);
  const carolinoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
  }, []);

  // Curseur du visiteur : suit la souris, masque le curseur natif.
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

  // Faux curseurs : traversent l'écran jusqu'à une cible, la "pokent", puis fade.
  useEffect(() => {
    if (!enabled) return;
    const rafs: number[] = [];
    const timers: number[] = [];

    const animateTo = (
      el: HTMLDivElement | null,
      targetId: string,
      startFrac: { x: number; y: number },
      delay: number
    ) => {
      if (!el) return;
      const start = {
        x: window.innerWidth * startFrac.x,
        y: window.innerHeight * startFrac.y,
      };
      const target = document.getElementById(targetId);
      const r = target?.getBoundingClientRect();
      const end = r
        ? { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 }
        : { x: window.innerWidth * 0.4, y: window.innerHeight * 0.4 };

      el.style.transform = `translate(${start.x}px, ${start.y}px)`;
      el.style.opacity = "0";

      const duration = 2000;
      let t0 = 0;
      const step = (now: number) => {
        if (!t0) t0 = now;
        const elapsed = now - t0 - delay;
        if (elapsed < 0) {
          rafs.push(requestAnimationFrame(step));
          return;
        }
        const p = Math.min(elapsed / duration, 1);
        const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
        el.style.transform = `translate(${start.x + (end.x - start.x) * e}px, ${
          start.y + (end.y - start.y) * e
        }px)`;
        el.style.opacity = p < 0.05 ? String(p / 0.05) : "1";
        if (p < 1) {
          rafs.push(requestAnimationFrame(step));
        } else {
          target?.classList.add("cursor-poked");
          timers.push(
            window.setTimeout(() => {
              el.style.transition = "opacity 0.6s ease";
              el.style.opacity = "0";
            }, 700)
          );
          timers.push(window.setTimeout(() => target?.classList.remove("cursor-poked"), 900));
        }
      };
      rafs.push(requestAnimationFrame(step));
    };

    animateTo(stefanRef.current, "cta-getintouch", { x: 0.12, y: 0.26 }, 900);
    animateTo(carolinoRef.current, "mode-toggle", { x: 0.9, y: 0.6 }, 1700);

    return () => {
      rafs.forEach(cancelAnimationFrame);
      timers.forEach(clearTimeout);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <Cursor label="You" color={VIOLET} cursorRef={youRef} />
      <Cursor label="Stefan" color={BLUE} cursorRef={stefanRef} />
      <Cursor label="Carolino" color={ORANGE} cursorRef={carolinoRef} />
    </>
  );
}
