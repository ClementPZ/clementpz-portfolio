"use client";

import { useEffect, useRef, useState } from "react";

// Easter egg : quand on tire l'écran vers le bas (pull-to-refresh iOS/Android,
// ou overscroll trackpad sur desktop), on affiche 3 messages dans le top bar.
const MESSAGES = [
  "Hello You",
  "You look great today",
  "Page is charged you can stop doing this 🫂",
];

function stageForPull(px: number): number {
  if (px < 55) return 0;
  if (px < 115) return 1;
  return 2;
}

export function PullToRefresh() {
  const [pull, setPull] = useState(0);
  const [msg, setMsg] = useState<number | null>(null);
  const retractTimer = useRef<number | null>(null);

  useEffect(() => {
    let startY = 0;
    let pulling = false;
    let wheelPull = 0;
    let wheelTimer = 0;

    const clearRetract = () => {
      if (retractTimer.current) {
        clearTimeout(retractTimer.current);
        retractTimer.current = null;
      }
    };

    const retract = (holdFinal: boolean) => {
      const finish = () => {
        setPull(0);
        setMsg(null);
      };
      if (holdFinal) {
        retractTimer.current = window.setTimeout(finish, 1400);
      } else {
        finish();
      }
    };

    // --- Tactile (mobile) ---
    const onTouchStart = (e: TouchEvent) => {
      if (window.scrollY <= 0) {
        startY = e.touches[0].clientY;
        pulling = true;
        clearRetract();
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!pulling) return;
      if (window.scrollY > 0) {
        pulling = false;
        return;
      }
      const delta = e.touches[0].clientY - startY;
      if (delta <= 0) return;
      e.preventDefault(); // remplace le refresh natif par l'easter egg
      const damped = Math.min(delta * 0.5, 150);
      setPull(damped);
      setMsg(stageForPull(damped));
    };
    const onTouchEnd = () => {
      if (!pulling) return;
      pulling = false;
      retract(stageForPull(pull) === 2);
    };

    // --- Trackpad / desktop (overscroll vers le haut en haut de page) ---
    const onWheel = (e: WheelEvent) => {
      if (window.scrollY > 0 || e.deltaY >= 0) return;
      wheelPull = Math.min(wheelPull + -e.deltaY * 0.5, 150);
      setPull(wheelPull);
      setMsg(stageForPull(wheelPull));
      clearRetract();
      clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => {
        retract(stageForPull(wheelPull) === 2);
        wheelPull = 0;
      }, 350);
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("wheel", onWheel);
      clearRetract();
      clearTimeout(wheelTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="ptr"
      style={{
        transform: `translateY(${Math.min(pull, 110)}px)`,
        opacity: msg === null ? 0 : 1,
      }}
      aria-hidden
    >
      <div className="ptr-pill">{msg === null ? "" : MESSAGES[msg]}</div>
    </div>
  );
}
