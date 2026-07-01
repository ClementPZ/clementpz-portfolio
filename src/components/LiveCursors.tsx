"use client";

import { useEffect, useRef, useState } from "react";

// Couleurs officielles Figma multiplayer.
const GREEN = "#0FA958"; // You
const BLUE = "#0D99FF"; // Stefan
const ORANGE = "#FF8A00"; // Carolino

// You + Stefan parqués pour l'instant (trop de bruit) → passer à true pour réactiver.
const SHOW_EXTRA_CURSORS = false;

function Cursor({
  label,
  color,
  cursorRef,
  labelLeft = false,
}: {
  label: string;
  color: string;
  cursorRef: React.Ref<HTMLDivElement>;
  labelLeft?: boolean;
}) {
  return (
    <div ref={cursorRef} className={`live-cursor${labelLeft ? " label-left" : ""}`} aria-hidden>
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
  const [mounted, setMounted] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const youRef = useRef<HTMLDivElement>(null);
  const stefanRef = useRef<HTMLDivElement>(null);
  const carolinoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Activation client-only au mount (fine pointer + rendu curseurs).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // "You" (qui suit la souris) seulement sur desktop ; Stefan + Carol partout.
    setFinePointer(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  // Curseur du visiteur "You" (vert Figma) : n'apparaît qu'APRÈS la séquence
  // Stefan + Carol (~7,5s), suit la souris en masquant le curseur natif, puis
  // disparaît au premier clic (curseur natif restauré).
  useEffect(() => {
    if (!finePointer) return;
    const you = youRef.current;
    if (!you) return;

    let active = false;
    const onMove = (e: MouseEvent) => {
      if (!active) return;
      you.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      you.style.opacity = "1";
    };
    const dismiss = () => {
      if (!active) return;
      active = false;
      you.style.transition = "opacity 0.4s ease";
      you.style.opacity = "0";
      document.body.classList.remove("cursor-hidden");
    };

    const activateAt = window.setTimeout(() => {
      active = true;
      document.body.classList.add("cursor-hidden");
      window.addEventListener("mousemove", onMove);
      window.addEventListener("click", dismiss, { once: true });
    }, 7500);

    return () => {
      clearTimeout(activateAt);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", dismiss);
      document.body.classList.remove("cursor-hidden");
    };
  }, [finePointer]);

  // Faux curseurs : traversent l'écran jusqu'à une cible, la "pokent", puis fade.
  // Actifs partout, y compris mobile.
  useEffect(() => {
    if (!mounted) return;
    const rafs: number[] = [];
    const timers: number[] = [];

    const animateTo = (
      el: HTMLDivElement | null,
      targetId: string,
      startFrac: { x: number; y: number },
      delay: number,
      duration: number
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

    if (SHOW_EXTRA_CURSORS) {
      animateTo(stefanRef.current, "cta-getintouch", { x: 0.12, y: 0.26 }, 600, 3500);
    }
    animateTo(carolinoRef.current, "mode-toggle", { x: 0.5, y: 0.5 }, 5000, 2000);

    return () => {
      rafs.forEach(cancelAnimationFrame);
      timers.forEach(clearTimeout);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {SHOW_EXTRA_CURSORS && finePointer && (
        <Cursor label="You" color={GREEN} cursorRef={youRef} />
      )}
      {SHOW_EXTRA_CURSORS && <Cursor label="Stefan" color={BLUE} cursorRef={stefanRef} />}
      <Cursor label="Carolino" color={ORANGE} cursorRef={carolinoRef} labelLeft />
    </>
  );
}
