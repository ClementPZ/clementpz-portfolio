"use client";

import { useState } from "react";
import Link from "next/link";
import { recentProjects } from "../data/content";
import { highlightText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";
import { BuilderDemo } from "./BuilderDemo";

// Projet en vedette = Builder. Couleurs d'identité tirées des données du
// carrousel (builder-flow), texte blanc sur le gradient comme les cartes projet.
const builder = recentProjects.find((p) => p.id === "builder-flow");
const accent = builder?.accent ?? "#7c3aed";
const accent2 = builder?.accent2 ?? "#1e1b4b";

export function Highlight() {
  const { locale } = useLocale();
  const t = highlightText[locale];
  // Compteur incrémenté à chaque clic "Lancer demo" : BuilderDemo (re)joue son
  // script à chaque changement de valeur (0 = jamais lancée, repos).
  const [demoTrigger, setDemoTrigger] = useState(0);

  return (
    <section
      id="featured"
      className="max-w-6xl mx-auto px-6 py-16"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">{t.sectionTitle}</h2>
      </div>
      <div
        className="rounded-2xl overflow-hidden grid md:grid-cols-2 gap-8 p-8 sm:p-10"
        style={{
          background: `linear-gradient(150deg, ${accent} 0%, ${accent2} 100%)`,
          color: "#ffffff",
          boxShadow: "var(--shadow)",
        }}
      >
        {/* Texte + CTAs */}
        <div className="flex flex-col justify-center">
          {/* Les 2 CTA vivent groupés sur la ligne du titre, poussés à droite. */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              {t.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setDemoTrigger((n) => n + 1)}
                className="inline-flex shrink-0 items-center px-5 py-3 rounded-full text-sm font-semibold"
                style={{ background: "#ffffff", color: accent2 }}
              >
                {t.ctaPrimary}
              </button>
              <Link
                href="/builder"
                className="inline-flex shrink-0 items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold"
                style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#ffffff" }}
              >
                {t.ctaSecondary}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <p className="text-sm font-medium mt-1" style={{ color: "rgba(255,255,255,0.85)" }}>
            {t.tagline}
          </p>
          <p className="text-base leading-relaxed mt-5" style={{ color: "rgba(255,255,255,0.78)" }}>
            {t.blurb}
          </p>
        </div>

        {/* Démo : moitié droite sur desktop, empilée en dessous sur mobile */}
        <div className="flex items-center">
          <BuilderDemo trigger={demoTrigger} />
        </div>
      </div>
    </section>
  );
}
