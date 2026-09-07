"use client";

import { useEffect, useState } from "react";

// Briques SpotA partagees par la landing produit (/spota, SpotaContent) et le
// bloc SpotA de la section Highlights de la home (SpotaFeature). Une seule
// source pour la machine a ecrire, la coque de telephone et le zigzag : les
// deux surfaces montrent le meme hero, elles ne peuvent pas diverger.
//
// La CSS voyage avec les composants (SPOTA_SHARED_CSS) parce que la page
// /spota pose ses regles dans une balise <style> globale, pas scopee : la
// landing produit et le bloc de la home l'injectent chacun de leur cote.

// Post-retint values (863dea8, 19 Aug): the spot colour took the violet and
// the self colour took the old lime. The token names swapped with them in
// 7167070, so bratLime now names what used to be billiesGreen.
export const SPOT = "#9922ff"; // electricViolet, lib/theme.dart
export const SELF = "#cafe00"; // bratLime, lib/theme.dart
export const SPOT_INK = "#0a0d00";

export const PROMPT_WORDS = [
  "yellow door",
  "reflection",
  "stranger reading",
  "shadow you like",
  "green thing",
];

export const ZIGZAG_POINTS =
  "1.2,13.8 28.8,3.8 54.7,13.8 79.5,3.8 101.7,13.8 132.5,3.8 150.6,13.8 " +
  "179.4,3.8 197.1,13.8 226.9,3.8 246.0,13.8 271.9,3.8 293.4,13.8 314.2,3.8";

export function Zigzag({ color = SPOT }: { color?: string }) {
  return (
    <svg
      className="spota-zigzag"
      viewBox="0 0 316 18"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ color }}
    >
      <polyline points={ZIGZAG_POINTS} />
    </svg>
  );
}

// Export Figma de la member page, pas une reconstitution en CSS: header
// "Sammy's spot" + zigzag, incrustation selfie cerclee de vert, rail
// d'actions a droite. La coque gardee autour est le seul habillage.
// frame "brand" = le cadre degrade qui tourne, signature de la page /spota.
// frame "device" = une coque d'iPhone, pour poser l'ecran dans la section
// Highlights sans y importer l'animation de la landing produit.
export function PhoneMock({ frame = "brand" }: { frame?: "brand" | "device" }) {
  return (
    <div className={frame === "device" ? "spota-device" : "spota-phone"}>
      {frame === "device" && <span className="spota-device-island" aria-hidden="true" />}
      <div className={frame === "device" ? "spota-device-screen" : "spota-phone-inner"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="spota-shot"
          src="/spota/member-spot-retint.jpg"
          alt="SpotA member page: a crew member's spot of the day, with their selfie inset in the corner"
        />
      </div>
    </div>
  );
}

// Machine a ecrire: on tape le mot lettre par lettre, on tient, on efface, on
// passe au suivant. La phase "idle" est l'etat de depart, donc le rendu
// serveur et le cas reduced-motion affichent le mot entier, sans curseur.
type TypePhase = "idle" | "typing" | "holding" | "erasing";

const TYPE_MS = 75;
const ERASE_MS = 35;
const HOLD_MS = 1900;

export function WordRotator() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(PROMPT_WORDS[0].length);
  const [phase, setPhase] = useState<TypePhase>("idle");

  // Demarrage differe: le premier prompt tient le meme temps que les suivants
  // avant de s'effacer. Passer par un timer plutot qu'un setState synchrone
  // evite aussi la cascade de rendus que react-hooks refuse dans un effet.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setPhase("erasing"), HOLD_MS);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (phase === "idle") return;
    const word = PROMPT_WORDS[index];
    const delay = phase === "holding" ? HOLD_MS : phase === "erasing" ? ERASE_MS : TYPE_MS;

    const id = setTimeout(() => {
      if (phase === "holding") {
        setPhase("erasing");
      } else if (phase === "erasing") {
        if (count <= 0) {
          setIndex((i) => (i + 1) % PROMPT_WORDS.length);
          setPhase("typing");
        } else {
          setCount((c) => c - 1);
        }
      } else if (count >= word.length) {
        setPhase("holding");
      } else {
        setCount((c) => c + 1);
      }
    }, delay);
    return () => clearTimeout(id);
  }, [phase, count, index]);

  const word = PROMPT_WORDS[index];
  const shown = phase === "idle" ? word : word.slice(0, count);

  // Le point ne se pose qu'une fois le mot entier tape, sinon on lirait
  // "refle." avec le curseur coince avant un point deja la.
  return (
    <span className="spota-word">
      {shown}
      {shown.length === word.length && "."}
      {phase !== "idle" && <i className="spota-caret" aria-hidden="true" />}
    </span>
  );
}

// Le titre du hero, identique sur les deux surfaces: le lead violet, puis la
// cellule de grid ou tous les prompts sont empiles invisibles pour que la
// hauteur ne bouge d'un pixel a aucune largeur d'ecran.
export function SpotaHeadline() {
  return (
    <h1>
      <span className="spota-h1-lead">Today: spot a</span>
      <span className="spota-h1-slot">
        {PROMPT_WORDS.map((w) => (
          <span className="spota-h1-ghost" aria-hidden="true" key={w}>
            {w}.
          </span>
        ))}
        <span className="spota-h1-live">
          <WordRotator />
        </span>
      </span>
    </h1>
  );
}

// Regles portees par les briques ci-dessus. Les couleurs sont lues en
// variables (--spot, --self, --spot-ink): c'est le conteneur de chaque
// surface qui les declare.
export const SPOTA_SHARED_CSS = `
  .spota-zigzag { width: 100%; height: 14px; display: block; }
  .spota-zigzag polyline { fill: none; stroke: currentColor; stroke-width: 7; stroke-linejoin: miter; }

  .spota-h1-lead { display: block; color: var(--spot); }
  .spota-h1-slot { display: grid; }
  .spota-h1-slot > * { grid-area: 1 / 1; }
  .spota-h1-ghost { visibility: hidden; pointer-events: none; }
  .spota-h1-live { color: #fff; }
  .spota-caret {
    display: inline-block; width: 0.055em; height: 0.74em;
    margin-left: 0.06em; vertical-align: -0.04em;
    background: var(--spot);
    animation: spota-blink 1s steps(1, end) infinite;
  }

  .spota-phone {
    position: relative; width: min(260px, 72vw); aspect-ratio: 590 / 1278;
    border-radius: 30px; padding: 3px;
    background: conic-gradient(from var(--spin, 0deg), var(--spot), var(--self), #fff, var(--self), var(--spot));
    animation: spota-spin 7s linear infinite;
  }
  .spota-phone-inner {
    position: relative; width: 100%; height: 100%; border-radius: 27px;
    overflow: hidden; background: #1a1a1a;
  }
  .spota-shot { display: block; width: 100%; height: 100%; object-fit: cover; }

  .spota-device {
    position: relative; width: min(232px, 66vw); aspect-ratio: 590 / 1278;
    border-radius: 42px; padding: 9px;
    background: linear-gradient(150deg, #4a4a4f 0%, #17171a 42%, #35353a 100%);
    box-shadow:
      inset 0 0 0 1px rgba(255,255,255,0.16),
      0 26px 60px rgba(0,0,0,0.55);
  }
  .spota-device-screen {
    position: relative; width: 100%; height: 100%; border-radius: 33px;
    overflow: hidden; background: #1a1a1a;
  }
  .spota-device-island {
    position: absolute; z-index: 2; top: 18px; left: 50%; transform: translateX(-50%);
    width: 34%; height: 20px; border-radius: 999px; background: #000;
  }

  @keyframes spota-spin { to { --spin: 360deg; } }
  @keyframes spota-blink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }
  @property --spin { syntax: '<angle>'; inherits: true; initial-value: 0deg; }

  @media (prefers-reduced-motion: reduce) {
    .spota-phone { animation: none; }
  }
`;
