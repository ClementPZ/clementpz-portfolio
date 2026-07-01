"use client";

import { useEffect, useState } from "react";

// Easter egg pull-to-refresh : tirer l'écran vers le bas pousse le contenu (façon
// iOS/Android) et révèle un message dans l'espace créé. UN message par geste,
// séquentiel via un compteur persistant : 1er pull → 1er message, etc.
const MESSAGES = [
  "Hello You",
  "You look great today",
  "Page is charged you can stop doing this 😊",
];

const MAX_PULL = 92;
const COUNT_THRESHOLD = 45; // au-delà, le geste compte comme un "recharge"

export function PullToRefresh() {
  const [pull, setPull] = useState(0);
  const [releasing, setReleasing] = useState(false);
  const [msgIdx, setMsgIdx] = useState(0);

  // Pousse le contenu de la page vers le bas en suivant le pull.
  useEffect(() => {
    const shift = document.getElementById("page-shift");
    if (!shift) return;
    shift.style.transition = releasing
      ? "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
      : "none";
    shift.style.transform = `translateY(${pull}px)`;
  }, [pull, releasing]);

  useEffect(() => {
    const readCount = () => {
      try {
        return parseInt(localStorage.getItem("ptr-count") || "0", 10) || 0;
      } catch {
        return 0;
      }
    };
    const bumpCount = () => {
      try {
        localStorage.setItem("ptr-count", String(readCount() + 1));
      } catch {}
    };
    // Boucle infinie : après le 3e message, on recommence au 1er.
    const msgFor = (count: number) => count % MESSAGES.length;

    let startY = 0;
    let pulling = false;
    let maxPull = 0;
    let wheelActive = false;
    let wheelPull = 0;
    let wheelTimer = 0;

    const begin = () => {
      maxPull = 0;
      setReleasing(false);
      setMsgIdx(msgFor(readCount()));
    };
    const end = () => {
      if (maxPull > COUNT_THRESHOLD) bumpCount();
      setReleasing(true);
      setPull(0);
    };

    // --- Tactile ---
    const onTouchStart = (e: TouchEvent) => {
      if (window.scrollY <= 0) {
        startY = e.touches[0].clientY;
        pulling = true;
        begin();
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
      e.preventDefault();
      const damped = Math.min(delta * 0.5, MAX_PULL);
      maxPull = Math.max(maxPull, damped);
      setPull(damped);
    };
    const onTouchEnd = () => {
      if (!pulling) return;
      pulling = false;
      end();
    };

    // --- Trackpad / desktop (overscroll vers le haut en haut de page) ---
    const onWheel = (e: WheelEvent) => {
      if (window.scrollY > 0 || e.deltaY >= 0) return;
      if (!wheelActive) {
        wheelActive = true;
        wheelPull = 0;
        begin();
      }
      wheelPull = Math.min(wheelPull + -e.deltaY * 0.5, MAX_PULL);
      maxPull = Math.max(maxPull, wheelPull);
      setPull(wheelPull);
      clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => {
        wheelActive = false;
        end();
      }, 320);
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
      clearTimeout(wheelTimer);
    };
  }, []);

  return (
    <div
      className="ptr"
      style={{
        height: pull,
        opacity: pull > 4 ? 1 : 0,
        transition: releasing ? "height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease" : "none",
      }}
      aria-hidden
    >
      <div className="ptr-pill">{MESSAGES[msgIdx]}</div>
    </div>
  );
}
