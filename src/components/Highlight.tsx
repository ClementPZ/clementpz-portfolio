"use client";

import Link from "next/link";
import { profile, recentProjects } from "../data/content";
import { highlightText, accessMailtoHref } from "../data/i18n";
import { useLocale } from "./LocaleProvider";
import { fireConfetti } from "../lib/confetti";
import { BuilderDemo } from "./BuilderDemo";

// Projet en vedette = Builder. Couleurs d'identité tirées des données du
// carrousel (builder-flow), texte blanc sur le gradient comme les cartes projet.
const builder = recentProjects.find((p) => p.id === "builder-flow");
const accent = builder?.accent ?? "#7c3aed";
const accent2 = builder?.accent2 ?? "#1e1b4b";

export function Highlight() {
  const { locale } = useLocale();
  const t = highlightText[locale];

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
        className="rounded-2xl overflow-hidden p-8 sm:p-10"
        style={{
          background: `linear-gradient(150deg, ${accent} 0%, ${accent2} 100%)`,
          color: "#ffffff",
          boxShadow: "var(--shadow)",
        }}
      >
        {/* Texte */}
        <div className="flex flex-col justify-center">
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
            {t.title}
          </h3>
          <p className="text-sm font-medium mt-1" style={{ color: "rgba(255,255,255,0.85)" }}>
            {t.tagline}
          </p>
          <p className="text-base leading-relaxed mt-5" style={{ color: "rgba(255,255,255,0.78)" }}>
            {t.blurb}
          </p>
        </div>

        <div className="mt-8">
          <BuilderDemo />
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href={accessMailtoHref(profile.email, locale)}
            onClick={(e) => fireConfetti(e.currentTarget)}
            className="inline-flex items-center px-5 py-3 rounded-full text-sm font-semibold"
            style={{ background: "#ffffff", color: accent2 }}
          >
            {t.ctaPrimary}
          </a>
          <Link
            href="/builder"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold"
            style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#ffffff" }}
          >
            {t.ctaSecondary}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
