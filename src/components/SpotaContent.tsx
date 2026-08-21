"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { fireConfetti } from "../lib/confetti";

// Page /spota, DEROGATION documentee au shell commun du portfolio (voir
// CLAUDE.md, "Regles strictes"): destination unique pour deux publics, le
// lien marketing de la fiche App Store et la carte SpotA du portfolio. Ces
// deux publics veulent le pitch de l'app, pas le recit de conception, donc
// mono-theme et English only, alignes sur l'identite de l'app elle-meme
// (Flutter, ColorScheme.dark uniquement, copie UI 100% anglaise).
//
// Polices Sora/DM Sans reutilisees telles quelles (regle stricte du layout:
// ces deux fonts UNIQUEMENT), poussees en poids 800 et tracking serre pour
// se rapprocher du chunky de TikTok Sans (police de l'app, non embarquable
// ici) sans ajouter de font au bundle.

const SPOT = "#cafe00"; // bratLime, lib/theme.dart
const SELF = "#00f500"; // billiesGreen, lib/theme.dart
const SPOT_INK = "#0a0d00";

const PROMPT_WORDS = [
  "yellow door",
  "reflection",
  "stranger reading",
  "shadow you like",
  "green thing",
];

// Public TestFlight link, external group Friends. Anyone who opens it joins
// without handing over an email first (SpotA/TESTFLIGHT.md).
const BETA_LINK = "https://testflight.apple.com/join/RvAnbmHY";

const ZIGZAG_POINTS =
  "1.2,13.8 28.8,3.8 54.7,13.8 79.5,3.8 101.7,13.8 132.5,3.8 150.6,13.8 " +
  "179.4,3.8 197.1,13.8 226.9,3.8 246.0,13.8 271.9,3.8 293.4,13.8 314.2,3.8";

function Zigzag({ color = SPOT }: { color?: string }) {
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
function PhoneMock() {
  return (
    <div className="spota-phone">
      <div className="spota-phone-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="spota-shot"
          src="/spota/member-spot.jpg"
          alt="SpotA member page: a crew member's spot of the day, with their selfie inset in the corner"
        />
      </div>
    </div>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Le cas reduced-motion est gere en CSS (transition:none + opacity:1
    // sous le media query), pas besoin de le dupliquer ici.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`spota-reveal${visible ? " in" : ""}`}>
      {children}
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

function WordRotator() {
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

export function SpotaContent() {
  return (
    <div className="spota">
      <div className="spota-shell">
        <nav className="spota-nav">
          <div className="spota-wordmark">
            Spot<b>a</b>
          </div>
          <a className="spota-nav-cta" href={BETA_LINK} onClick={(e) => fireConfetti(e.currentTarget, [SPOT, SELF, "#ffffff"])}>
            Join the beta
          </a>
        </nav>

        <header className="spota-hero">
          <div className="spota-eyebrow">A daily dare for you and your crew</div>
          <h1>
            <span className="spota-h1-lead">Today: spot a</span>
            {/* Tous les prompts sont empiles invisibles dans la meme cellule
                de grid: la hauteur de la rangee vaut le max de tous, donc le
                titre ne bouge d'un pixel a aucune largeur d'ecran. */}
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
          <p className="spota-lede">
            One prompt a day. Find it in the real world, capture it, back camera for the
            target, front camera for you. Post yours to unlock what your crew spotted.
          </p>
          <p className="spota-slogan">
            <b>One spot a day</b>, keep the doctor away.
          </p>
          <div className="spota-hero-ctas">
            <a
              className="spota-btn"
              href={BETA_LINK}
              onClick={(e) => fireConfetti(e.currentTarget, [SPOT, SELF, "#ffffff"])}
            >
              Join the beta
            </a>
            <span className="spota-fine-print">iOS 16 or later · ages 13+</span>
          </div>
        </header>

        <Reveal>
          <div className="spota-stage">
            <PhoneMock />
          </div>
        </Reveal>

        <Reveal>
          <section className="spota-section">
            <div className="spota-section-head">
              <h2>Not a feed. A dare, once a day.</h2>
              <p>
                No scrolling, no likes to chase, no strangers. Just today&apos;s prompt, your
                crew, and whether you actually went and found the thing.
              </p>
            </div>
            <div style={{ marginTop: 24 }}>
              <Zigzag color={SPOT} />
            </div>
            <div className="spota-steps">
              <div className="spota-step">
                <div className="spota-step-mark">01</div>
                <div>
                  <h3>Get today&apos;s prompt</h3>
                  <p>
                    One line, written by hand, not generated. Never trivial, never impossible,
                    like &quot;a yellow door,&quot; or &quot;someone reading a paper book.&quot;
                  </p>
                </div>
              </div>
              <div className="spota-step">
                <div className="spota-step-mark">02</div>
                <div>
                  <h3>Find it, capture it</h3>
                  <p>
                    Back camera on the target first, then the front camera flips to you. In
                    the moment, no gallery imports.
                  </p>
                </div>
              </div>
              <div className="spota-step">
                <div className="spota-step-mark">03</div>
                <div>
                  <h3>Post to unlock the crew</h3>
                  <p>
                    You don&apos;t see anyone else&apos;s spot for today until yours is in.
                    That&apos;s the whole game.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="spota-section">
            <div className="spota-section-head">
              <h2>Some spots turn out legendary.</h2>
              <p>Two ways the crew calls out a great spot, both earned, neither bought.</p>
            </div>
            <div className="spota-distinctions">
              <div className="spota-dcard spota-dcard-first">
                <div className="spota-dcard-inner">
                  <span className="spota-dchip">1ST SPOT</span>
                  <h3>First to spot it</h3>
                  <p>
                    Whoever finds today&apos;s prompt first gets the holo border on their
                    tile. Gone by tomorrow&apos;s prompt.
                  </p>
                </div>
              </div>
              <div className="spota-dcard spota-dcard-top">
                <div className="spota-dcard-inner">
                  <span className="spota-dchip">TOP SPOT</span>
                  <h3>Crew&apos;s favorite</h3>
                  <p>
                    Everyone gets one upvote a day. Move it to a better spot and you take it
                    back from wherever it was.
                  </p>
                </div>
              </div>
            </div>
            <div className="spota-rule">
              <span>&#10003;</span>
              <span>
                Spots also get <b>validated by the crew</b>, a quiet check that keeps the
                game honest as it grows.
              </span>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="spota-section spota-cta-band">
            <div style={{ marginBottom: 24 }}>
              <Zigzag color={SELF} />
            </div>
            <h2>Your crew is waiting on you to post first.</h2>
            <p className="spota-lede">
              Testing right now with a small crew. The link below drops you straight in.
            </p>
            <div className="spota-hero-ctas">
              <a
                className="spota-btn"
                href={BETA_LINK}
                onClick={(e) => fireConfetti(e.currentTarget, [SPOT, SELF, "#ffffff"])}
              >
                Join the beta
              </a>
            </div>
            {/* Step 2 is the whole point of this block: people install
                TestFlight, open TestFlight, find it empty and give up. The
                invite rides on the link, never on the app alone. */}
            <div className="spota-join">
              <div className="spota-join-head">Getting in takes two steps</div>
              <ol>
                <li>
                  Install <b>TestFlight</b>, Apple&apos;s free app for betas.
                </li>
                <li>
                  <b>Come back and tap again.</b> TestFlight on its own stays empty,
                  only the link carries the invite.
                </li>
              </ol>
            </div>
          </section>
        </Reveal>

        <footer className="spota-section spota-footer">
          <div className="spota-foot-row">
            <span>Spot a · 2026</span>
            <span>
              Ages 13+ ·{" "}
              <Link href="/spota/privacy" className="spota-foot-link">
                Privacy policy
              </Link>
            </span>
          </div>
          <Link href="/" className="spota-back">
            ← Clément PZ, portfolio
          </Link>
        </footer>
      </div>

      <style>{`
        .spota {
          --spot: ${SPOT};
          --self: ${SELF};
          --spot-ink: ${SPOT_INK};
          background: #000;
          color: #fff;
          font-family: var(--font-dm-sans), system-ui, sans-serif;
          background-image:
            radial-gradient(1200px 600px at 20% -10%, rgba(202,254,0,0.07), transparent 60%),
            radial-gradient(900px 500px at 100% 10%, rgba(0,245,0,0.05), transparent 55%);
        }
        .spota * { box-sizing: border-box; }
        .spota h1, .spota h2, .spota h3, .spota p { margin: 0; }
        .spota h1, .spota h2, .spota h3, .spota-wordmark {
          font-family: var(--font-sora), var(--font-dm-sans), sans-serif;
        }

        .spota-shell { max-width: 760px; margin: 0 auto; padding: 0 24px; }

        .spota-nav { display: flex; align-items: center; justify-content: space-between; padding: 22px 0 0; }
        .spota-wordmark { font-weight: 800; font-size: 20px; letter-spacing: -0.3px; }
        .spota-wordmark b { color: var(--spot); }
        .spota-nav-cta {
          font-weight: 700; font-size: 13px; letter-spacing: 0.02em;
          color: var(--spot-ink); background: var(--spot);
          padding: 9px 16px; border-radius: 12px; text-decoration: none;
        }

        .spota-zigzag { width: 100%; height: 14px; display: block; }
        .spota-zigzag polyline { fill: none; stroke: currentColor; stroke-width: 7; stroke-linejoin: miter; }

        .spota-hero { padding: 64px 0 12px; text-align: left; }
        .spota-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(255,255,255,0.7);
          margin-bottom: 18px;
        }
        .spota-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: var(--self); box-shadow: 0 0 0 3px rgba(0,245,0,0.18);
        }
        .spota-hero h1 {
          font-size: clamp(38px, 7.5vw, 60px);
          font-weight: 800; line-height: 1.02; letter-spacing: -1.6px;
        }
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

        .spota-slogan {
          margin-top: 18px;
          font-family: var(--font-sora), var(--font-dm-sans), sans-serif;
          font-weight: 800; font-size: clamp(17px, 2.7vw, 21px);
          letter-spacing: -0.4px; color: #fff;
        }
        .spota-slogan b { color: var(--spot); font-weight: 800; }
        .spota-lede {
          margin-top: 20px; max-width: 46ch;
          font-size: 17px; line-height: 1.55; color: rgba(255,255,255,0.7);
        }
        .spota-hero-ctas { margin-top: 30px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .spota-btn {
          display: inline-flex; align-items: center; justify-content: center;
          height: 46px; padding: 0 28px; border-radius: 12px;
          font-weight: 800; font-size: 16px; text-decoration: none;
          border: none; cursor: pointer; background: var(--spot); color: var(--spot-ink);
        }
        .spota-btn:hover { filter: brightness(1.06); }
        .spota-fine-print { font-size: 12.5px; color: rgba(255,255,255,0.38); }

        .spota-stage { position: relative; margin: 46px 0 8px; display: flex; justify-content: center; }
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

        .spota-section { padding: 58px 0; border-top: 1px solid rgba(255,255,255,0.08); }
        .spota-section-head { max-width: 50ch; }
        .spota-section-head h2 {
          font-size: clamp(24px, 4.2vw, 32px); font-weight: 800;
          letter-spacing: -0.8px; line-height: 1.12; text-wrap: balance;
        }
        .spota-section-head p { margin-top: 12px; color: rgba(255,255,255,0.7); font-size: 15.5px; line-height: 1.6; }

        .spota-steps { margin-top: 34px; display: grid; gap: 22px; }
        .spota-step { display: grid; grid-template-columns: 34px 1fr; gap: 14px; }
        .spota-step-mark { font-size: 13px; font-weight: 800; color: var(--self); font-variant-numeric: tabular-nums; }
        .spota-step h3 { font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
        .spota-step p { margin-top: 4px; font-size: 14.5px; line-height: 1.55; color: rgba(255,255,255,0.7); }

        .spota-distinctions { margin-top: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .spota-dcard {
          position: relative; border-radius: 18px; padding: 2.5px;
          animation: spota-spin 8s linear infinite;
        }
        .spota-dcard-first { background: conic-gradient(from var(--spin, 0deg), var(--spot), var(--self), #fff, var(--self), var(--spot)); }
        .spota-dcard-top {
          background: conic-gradient(from var(--spin, 0deg), #fff, var(--spot), #fff, var(--spot), #fff);
          animation-duration: 6.5s; animation-direction: reverse;
        }
        .spota-dcard-inner { background: #131313; border-radius: 15.5px; padding: 20px 16px; height: 100%; }
        .spota-dchip {
          display: inline-block; font-size: 10.5px; font-weight: 800;
          letter-spacing: 0.03em; padding: 4px 8px; border-radius: 7px;
          color: var(--spot-ink); margin-bottom: 12px;
        }
        .spota-dcard-first .spota-dchip { background: linear-gradient(120deg, var(--spot), var(--self)); }
        .spota-dcard-top .spota-dchip { background: linear-gradient(120deg, #fff, var(--spot)); }
        .spota-dcard h3 { font-size: 15px; font-weight: 800; }
        .spota-dcard p { margin-top: 6px; font-size: 13.5px; line-height: 1.5; color: rgba(255,255,255,0.7); }

        .spota-rule { margin-top: 22px; display: flex; gap: 10px; align-items: baseline; font-size: 14px; color: rgba(255,255,255,0.7); }
        .spota-rule b { color: #fff; }

        .spota-cta-band h2 { font-size: clamp(26px, 5vw, 38px); font-weight: 800; letter-spacing: -1px; text-wrap: balance; }
        .spota-cta-band .spota-lede { margin-top: 12px; }
        .spota-cta-band .spota-hero-ctas { margin-top: 26px; }
        .spota-join { margin-top: 28px; max-width: 46ch; }
        .spota-join-head { font-size: 13px; font-weight: 800; letter-spacing: 0.02em; color: #fff; }
        /* Tailwind preflight strips list markers, and the numbering is the
           point here: step 2 is the one people skip. */
        .spota-join ol { margin-top: 10px; padding-left: 20px; display: grid; gap: 8px; list-style: decimal; }
        .spota-join li { font-size: 14px; line-height: 1.5; color: rgba(255,255,255,0.7); }
        .spota-join li::marker { color: var(--spot); font-weight: 800; }
        .spota-join b { color: #fff; }

        .spota-footer { padding-top: 30px; padding-bottom: 56px; display: grid; gap: 18px; }
        .spota-foot-row {
          display: flex; flex-wrap: wrap; gap: 10px 18px; align-items: center;
          justify-content: space-between; font-size: 12.5px; color: rgba(255,255,255,0.38);
        }
        .spota-foot-link { color: rgba(255,255,255,0.6); text-decoration: underline; text-underline-offset: 2px; }
        .spota-foot-link:hover { color: #fff; }
        .spota-back { font-size: 13px; color: rgba(255,255,255,0.7); text-decoration: none; }
        .spota-back:hover { color: #fff; }

        .spota-reveal { opacity: 0; transform: translateY(14px); transition: opacity .5s ease, transform .5s ease; }
        .spota-reveal.in { opacity: 1; transform: none; }

        @keyframes spota-spin { to { --spin: 360deg; } }
        @keyframes spota-blink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }
        @property --spin { syntax: '<angle>'; inherits: true; initial-value: 0deg; }

        @media (prefers-reduced-motion: reduce) {
          .spota-phone, .spota-dcard { animation: none; }
          .spota-reveal { transition: none; opacity: 1; transform: none; }
        }

        @media (max-width: 480px) {
          .spota-distinctions { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
