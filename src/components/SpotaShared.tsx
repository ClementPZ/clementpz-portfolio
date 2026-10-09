"use client";

import { useEffect, useState } from "react";
import { Anton, Space_Grotesk, Work_Sans } from "next/font/google";

// Briques SpotA partagees par la landing produit (/spota, SpotaContent) et le
// bloc SpotA de la section Side projects de la home (SpotaFeature). Une seule
// source pour les couleurs, les polices, la machine a ecrire, le telephone et
// les regles du kit : les deux surfaces montrent le meme hero, elles ne
// peuvent pas diverger.
//
// La CSS voyage avec les composants (SPOTA_SHARED_CSS) parce que la page
// /spota pose ses regles dans une balise <style> globale, pas scopee : la
// landing produit et le bloc de la home l'injectent chacun de leur cote.

// Les trois polices de l'app depuis la refonte Mix 3 (oct. 2026, lib/theme.dart
// cote SpotA) : Anton pour les titres en capitales, Space Grotesk pour le texte
// et les boutons, Work Sans pour les petits labels en capitales. Exception
// documentee a la regle "Sora + DM Sans uniquement" (CLAUDE.md, "Exception
// /spota") : elles ne sont chargees que par les surfaces SpotA, via la classe
// SPOTA_FONTS posee sur leur conteneur.
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" });

export const SPOTA_FONTS = `${anton.variable} ${spaceGrotesk.variable} ${workSans.variable}`;

// SpotColors, lib/theme.dart cote SpotA. Les noms suivent l'app : le violet
// parle du spot, le lime parle de toi et porte le CTA, le rose date et
// couronne (TOP SPOT).
export const SPOT = "#9922ff"; // electricViolet
export const SELF = "#cafe00"; // bratLime
export const PINK = "#ff3ea5"; // pink
export const SPOT_INK = "#0a0a0a"; // stickerBlack
export const GROUND = "#121014"; // background
export const CARD = "#1a1720"; // surfaceDark
export const TEXT = "#f3efe6"; // textPrimary
export const TEXT_2 = "#a9a2b8"; // textSecondary

// Les variables que lisent les regles partagees. Chaque surface les pose sur
// son conteneur.
export const SPOTA_VARS = `
  --spot: ${SPOT};
  --self: ${SELF};
  --pink: ${PINK};
  --spot-ink: ${SPOT_INK};
  --spota-ground: ${GROUND};
  --spota-card: ${CARD};
  --spota-text: ${TEXT};
  --spota-text-2: ${TEXT_2};
`;

export const PROMPT_WORDS = [
  "the oldest thing you carry with you",
  "what's under your bed",
  "your reflection on something",
  "something you can hide behind",
  "the highest thing you can reach",
  "something you like to touch",
];

// Un ecran de l'app capture au simulateur, monte dans un rendu d'iPhone
// incline. L'image porte deja le telephone, il n'y a plus de cadre dessine en
// CSS. A REFAIRE a chaque refonte d'ecran, voir src/app/spota/NOTES.md.
export function PhoneMock({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="spota-phone" src={src} alt={alt} />
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

// Le titre du hero, identique sur les deux surfaces. C'est la carte mission de
// l'app (MissionCard, lib/theme.dart) : une carte violette a bord noir,
// penchee derriere un texte qui reste droit, le debut surligne en lime. Tous
// les defis sont empiles invisibles dans la meme cellule de grid pour que la
// hauteur ne bouge d'un pixel a aucune largeur d'ecran.
export function SpotaHeadline() {
  return (
    <h1 className="spota-mission">
      <span className="spota-mission-card" aria-hidden="true" />
      <span className="spota-h1-lead">Today, spot</span>
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

// Regles portees par les briques ci-dessus et par le kit Mix 3 (sticker,
// label, bouton). Les couleurs sont lues en variables : c'est le conteneur de
// chaque surface qui les declare avec SPOTA_VARS.
export const SPOTA_SHARED_CSS = `
  .spota-mission {
    position: relative; isolation: isolate; display: block;
    margin: 0; padding: 26px 30px 24px 22px;
    font-family: var(--font-anton), Impact, sans-serif;
    font-weight: 400; text-transform: uppercase; letter-spacing: 0.01em;
    line-height: 1.08; color: #fff;
  }
  .spota-mission-card {
    position: absolute; inset: 0; z-index: -1;
    background: var(--spot); border: 3px solid var(--spot-ink); border-radius: 20px;
    transform: rotate(-1.5deg);
  }
  .spota-h1-lead {
    display: inline-block; margin-bottom: 0.14em; padding: 0 0.16em;
    background: var(--self); color: var(--spot-ink); border-radius: 4px;
  }
  .spota-h1-slot { display: grid; }
  .spota-h1-slot > * { grid-area: 1 / 1; }
  .spota-h1-ghost { visibility: hidden; pointer-events: none; }
  .spota-h1-live { color: #fff; }
  .spota-caret {
    display: inline-block; width: 0.06em; height: 0.78em;
    margin-left: 0.06em; vertical-align: -0.04em;
    background: var(--self);
    animation: spota-blink 1s steps(1, end) infinite;
  }

  /* Petit label en capitales, Work Sans, rose comme la ligne de date de l'app. */
  .spota-label {
    font-family: var(--font-work-sans), system-ui, sans-serif;
    font-size: 11.5px; font-weight: 600; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--pink);
  }

  /* Sticker : etiquette plate et penchee, bord noir epais. */
  .spota-sticker {
    display: inline-block; padding: 4px 10px;
    font-family: var(--font-anton), Impact, sans-serif;
    font-size: 13px; font-weight: 400; line-height: 1.15; letter-spacing: 0.02em;
    text-transform: uppercase; color: var(--spot-ink);
    background: var(--self); border: 3px solid var(--spot-ink); border-radius: 8px;
    transform: rotate(-4deg);
  }

  /* CTA principal : lime, bord noir, capitales. */
  .spota-btn {
    display: inline-flex; align-items: center; justify-content: center;
    height: 56px; padding: 0 30px; border-radius: 26px;
    font-family: var(--font-space-grotesk), system-ui, sans-serif;
    font-weight: 700; font-size: 16px; letter-spacing: 0.03em;
    text-transform: uppercase; text-decoration: none; cursor: pointer;
    background: var(--self); color: var(--spot-ink); border: 3px solid var(--spot-ink);
  }
  .spota-btn:hover { filter: brightness(1.06); }

  .spota-phone {
    display: block; height: auto;
    filter: drop-shadow(0 24px 40px rgba(0,0,0,0.55));
  }

  @keyframes spota-blink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }
`;
