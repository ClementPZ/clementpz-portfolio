"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { fireConfetti } from "../lib/confetti";
import {
  SPOT,
  SELF,
  PINK,
  SPOTA_FONTS,
  SPOTA_VARS,
  SPOTA_SHARED_CSS,
  PhoneMock,
  SpotaHeadline,
} from "./SpotaShared";

// Page /spota, DEROGATION documentee au shell commun du portfolio (voir
// CLAUDE.md, "Regles strictes"): destination unique pour deux publics, le
// lien marketing de la fiche App Store et la carte SpotA du portfolio. Ces
// deux publics veulent le pitch de l'app, pas le recit de conception, donc
// mono-theme et English only, alignes sur l'identite de l'app elle-meme
// (Flutter, ColorScheme.dark uniquement).
//
// La page porte le kit Mix 3 de l'app (oct. 2026) : fond noir teinte de
// violet, titres en Anton, carte mission, stickers, CTA lime a bord noir.
// Couleurs, polices, machine a ecrire et telephone vivent dans
// SpotaShared.tsx: le bloc SpotA de la home montre le meme hero, une seule
// source pour les deux.

const BETA_MAILTO =
  "mailto:clementpicardzivy@gmail.com" +
  "?subject=" +
  encodeURIComponent("SpotA, beta access request") +
  "&body=" +
  encodeURIComponent("Hi Clement, I'd love to try SpotA, happy to be added to the beta.");

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

// Les ecrans montres sous le hero, captures au simulateur puis montes dans un
// rendu d'iPhone de face.
const PHONES = [
  { src: "/spota/phone-today.webp", alt: "Spot a, the Today screen: today's dare on the mission card, with the Go spot it button" },
  { src: "/spota/phone-react.webp", alt: "Spot a, a crew member's spot of the day, a car, with the five reactions open" },
];

export function SpotaContent() {
  const confetti = (e: React.MouseEvent<HTMLAnchorElement>) =>
    fireConfetti(e.currentTarget, [SPOT, SELF, PINK]);

  return (
    <div className={`spota ${SPOTA_FONTS}`}>
      <div className="spota-shell">
        <nav className="spota-nav">
          <div className="spota-nav-left">
            <Link href="/" aria-label="Back to portfolio" className="spota-back-btn">
              ←
            </Link>
            <div className="spota-wordmark">
              Spot <b>a</b>
            </div>
          </div>
          <a className="spota-btn spota-nav-cta" href={BETA_MAILTO} onClick={confetti}>
            Get the beta
          </a>
        </nav>

        <header className="spota-hero">
          <div className="spota-label">A daily dare for you and your crew</div>
          {/* Tous les defis sont empiles invisibles dans la meme cellule de
              grid (voir SpotaHeadline): la hauteur de la rangee vaut le max de
              tous, donc le titre ne bouge d'un pixel a aucune largeur. */}
          <SpotaHeadline />
          <p className="spota-lede">
            One dare a day. Find it in the real world, shoot it, back camera for the
            target, front camera for you. Post yours to unlock what your crew spotted.
          </p>
          <p className="spota-slogan">
            <b>One spot a day</b>, keep the doctor away.
          </p>
          <div className="spota-hero-ctas">
            <a className="spota-btn" href={BETA_MAILTO} onClick={confetti}>
              Get the beta
            </a>
            <span className="spota-fine-print">iOS, via TestFlight · ages 13+</span>
          </div>
        </header>

        <Reveal>
          <div className="spota-stage">
            {PHONES.map((p) => (
              <PhoneMock key={p.src} src={p.src} alt={p.alt} />
            ))}
          </div>
        </Reveal>

        <Reveal>
          <section className="spota-section">
            <div className="spota-section-head">
              <h2>Not a feed. A dare, once a day.</h2>
              <p>
                No scrolling, no likes to chase, no strangers. Just today&apos;s dare, your
                crew, and whether you actually went and found the thing.
              </p>
            </div>
            <div className="spota-steps">
              <div className="spota-step">
                <div className="spota-step-mark">1</div>
                <div>
                  <h3>Get today&apos;s dare</h3>
                  <p>
                    One line, written by hand, not generated. The same one for your whole
                    crew, like &quot;the weirdest door in town&quot; or &quot;a cloud that
                    looks like something.&quot;
                  </p>
                </div>
              </div>
              <div className="spota-step">
                <div className="spota-step-mark">2</div>
                <div>
                  <h3>Find it, shoot it</h3>
                  <p>
                    Back camera on the target first, then the front camera flips to you. In
                    the moment, no gallery imports.
                  </p>
                </div>
              </div>
              <div className="spota-step">
                <div className="spota-step-mark">3</div>
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
              <div className="spota-dcard">
                <span className="spota-sticker">1ST SPOT</span>
                <h3>First to spot it</h3>
                <p>
                  Whoever answers today&apos;s dare first wears the lime 1ST SPOT sticker.
                </p>
              </div>
              <div className="spota-dcard">
                <span className="spota-sticker spota-sticker-top">TOP SPOT</span>
                <h3>Crew&apos;s favorite</h3>
                <p>
                  React with 🔥 😍 😂 💅🏼 🫰🏼, as many as you like. The spot the most people
                  react to wears TOP SPOT.
                </p>
              </div>
            </div>
            <p className="spota-rule">
              <b>Comment as much as you like</b>, the conversation stays on the spot.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="spota-section spota-cta-band">
            <h2>Your crew is waiting on you to post first.</h2>
            <p className="spota-lede">
              Testing right now with a small crew. Ask for the beta and you&apos;re in.
            </p>
            <div className="spota-hero-ctas">
              <a className="spota-btn" href={BETA_MAILTO} onClick={confetti}>
                Get the beta
              </a>
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
        ${SPOTA_SHARED_CSS}
        .spota {
          ${SPOTA_VARS}
          background: var(--spota-ground);
          color: var(--spota-text);
          font-family: var(--font-space-grotesk), system-ui, sans-serif;
        }
        .spota * { box-sizing: border-box; }
        .spota h1, .spota h2, .spota h3, .spota p { margin: 0; }
        .spota h2, .spota-wordmark {
          font-family: var(--font-anton), Impact, sans-serif;
          font-weight: 400; text-transform: uppercase; letter-spacing: 0.01em; color: #fff;
        }

        .spota-shell { max-width: 760px; margin: 0 auto; padding: 0 24px; }

        .spota-nav { display: flex; align-items: center; justify-content: space-between; padding: 22px 0 0; }
        .spota-nav-left { display: flex; align-items: center; gap: 14px; }
        .spota-back-btn {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.4); color: #fff;
          text-decoration: none; transition: border-color .15s ease;
        }
        .spota-back-btn:hover { border-color: var(--self); }
        .spota-wordmark { font-size: 24px; }
        .spota-wordmark b { color: var(--self); font-weight: 400; }
        .spota-nav-cta { height: 44px; padding: 0 18px; border-radius: 22px; font-size: 13px; }

        .spota-hero { padding: 56px 0 12px; text-align: left; }
        .spota-hero .spota-label { margin-bottom: 22px; }
        .spota-hero h1 { font-size: clamp(36px, 7.4vw, 60px); }
        .spota-hero .spota-slogan {
          margin-top: 18px;
          font-weight: 700; font-size: clamp(17px, 2.7vw, 21px);
          letter-spacing: -0.2px; color: #fff;
        }
        .spota-hero .spota-slogan b { color: var(--self); font-weight: 700; }
        /* Porte par le hero: .spota p {margin:0} bat .spota-lede seul. */
        .spota-hero .spota-lede { margin-top: 36px; }
        .spota-lede {
          margin-top: 20px; max-width: 46ch;
          font-size: 17px; line-height: 1.55; color: var(--spota-text-2);
        }
        .spota-hero-ctas { margin-top: 30px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .spota-fine-print { font-size: 12.5px; color: var(--spota-text-2); }

        .spota-stage {
          margin: 46px 0 8px; display: flex; justify-content: space-around;
          align-items: center;
        }
        .spota-stage .spota-phone { width: 40%; max-width: 270px; }

        .spota-section { padding: 58px 0; border-top: 1px solid rgba(139,92,246,0.22); }
        .spota-section-head { max-width: 50ch; }
        .spota-section-head h2 {
          font-size: clamp(28px, 5vw, 40px); line-height: 1.08; text-wrap: balance;
        }
        .spota-section-head p { margin-top: 14px; color: var(--spota-text-2); font-size: 15.5px; line-height: 1.6; }

        .spota-steps {
          margin-top: 34px; display: grid; gap: 24px;
          background: var(--spota-card); border-radius: 20px; padding: 26px 22px;
        }
        .spota-step { display: grid; grid-template-columns: 34px 1fr; gap: 16px; align-items: start; }
        /* Le numero sur un petit sticker violet penche, comme l'ecran Rules de l'app. */
        .spota-step-mark {
          width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;
          font-family: var(--font-anton), Impact, sans-serif; font-size: 16px; color: #fff;
          background: var(--spot); border: 3px solid var(--spot-ink); border-radius: 10px;
          transform: rotate(-6deg);
        }
        .spota-step:nth-child(even) .spota-step-mark { transform: rotate(5deg); }
        .spota-step h3 { font-size: 17px; font-weight: 700; color: #fff; }
        .spota-step p { margin-top: 4px; font-size: 14.5px; line-height: 1.55; color: var(--spota-text-2); }

        .spota-distinctions { margin-top: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .spota-dcard { background: var(--spota-card); border-radius: 20px; padding: 24px 20px; }
        .spota-dcard .spota-sticker { margin-bottom: 16px; }
        /* TOP SPOT : texte noir sur rose, comme l'app (le blanc y mesurait 3.3:1). */
        .spota-sticker-top { background: var(--pink); transform: rotate(5deg); }
        .spota-dcard h3 { font-size: 16px; font-weight: 700; color: #fff; }
        .spota-dcard p { margin-top: 6px; font-size: 14px; line-height: 1.5; color: var(--spota-text-2); }

        .spota-section .spota-rule { margin-top: 22px; font-size: 14.5px; line-height: 1.55; color: var(--spota-text-2); }
        .spota-section .spota-rule b { color: #fff; font-weight: 700; }

        .spota-cta-band h2 { font-size: clamp(30px, 5.6vw, 46px); line-height: 1.06; text-wrap: balance; }
        .spota-cta-band .spota-lede { margin-top: 14px; }
        .spota-cta-band .spota-hero-ctas { margin-top: 26px; }

        .spota-footer { padding-top: 30px; padding-bottom: 56px; display: grid; gap: 18px; }
        .spota-foot-row {
          display: flex; flex-wrap: wrap; gap: 10px 18px; align-items: center;
          justify-content: space-between; font-size: 12.5px; color: var(--spota-text-2);
        }
        .spota-foot-link { color: var(--spota-text); text-decoration: underline; text-underline-offset: 2px; }
        .spota-foot-link:hover { color: #fff; }
        .spota-back { font-size: 13px; color: var(--spota-text-2); text-decoration: none; }
        .spota-back:hover { color: #fff; }

        .spota-reveal { opacity: 0; transform: translateY(14px); transition: opacity .5s ease, transform .5s ease; }
        .spota-reveal.in { opacity: 1; transform: none; }

        @media (prefers-reduced-motion: reduce) {
          .spota-reveal { transition: none; opacity: 1; transform: none; }
        }

        @media (max-width: 480px) {
          .spota-distinctions { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
