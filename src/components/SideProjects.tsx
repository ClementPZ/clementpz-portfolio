"use client";

import { useState } from "react";
import Link from "next/link";
import { recentProjects, sideProjectIds, type RecentProject } from "../data/content";
import { highlightText, projectText, statusText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";
import { BuilderDemo } from "./BuilderDemo";
import { SpotaFeature } from "./SpotaFeature";

// Builder en vedette. Couleurs d'identité tirées des données du projet
// (builder-flow), texte blanc sur le gradient comme les autres cartes de marque.
const builder = recentProjects.find((p) => p.id === "builder-flow");
const accent = builder?.accent ?? "#7c3aed";
const accent2 = builder?.accent2 ?? "#1e1b4b";

function BuilderFeature() {
  const { locale } = useLocale();
  const t = highlightText[locale];
  // Compteur incrémenté à chaque clic "Lancer demo" : BuilderDemo (re)joue son
  // script à chaque changement de valeur (0 = jamais lancée, repos).
  const [demoTrigger, setDemoTrigger] = useState(0);

  return (
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
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight">{t.title}</h3>
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
  );
}

// Visuel d'une carte. Days et l'appartement ont le leur, les autres un
// emplacement "visuel à venir" comme sur /nrc.
function CardVisual({ p, ratio }: { p: RecentProject; ratio: string }) {
  const { t } = useLocale();
  const box: React.CSSProperties = { aspectRatio: ratio, borderRadius: "var(--radius-lg)" };

  if (p.id === "days") {
    return (
      <div
        className="relative overflow-hidden flex justify-center items-end"
        style={{
          ...box,
          background: `linear-gradient(150deg, ${p.accent} 0%, ${p.accent2} 100%)`,
        }}
      >
        {/* La capture dépasse par le bas : on n'en voit que le haut. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/days/home.png"
          alt=""
          className="block"
          style={{
            width: "34%",
            minWidth: 150,
            transform: "translateY(18%)",
            borderRadius: "22px 22px 0 0",
            boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
          }}
        />
      </div>
    );
  }

  if (p.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={p.image} alt="" className="w-full object-cover" style={box} />
    );
  }

  return (
    <div
      className="flex items-center justify-center px-6 text-center"
      style={{ ...box, background: "var(--accent-subtle)" }}
    >
      <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
        {t.visualLabel}
      </span>
    </div>
  );
}

// Carte projet : visuel, nom (avec un point à ses couleurs), état, une phrase,
// la description en taille medium seulement, tags en texte discret.
function ProjectCard({ p, size }: { p: RecentProject; size: "medium" | "small" }) {
  const { locale } = useLocale();
  const lx = projectText[locale][p.id];
  const status = statusText[locale][p.status];
  const medium = size === "medium";

  return (
    <article className={`panel p-4 sm:p-5 flex flex-col${p.link ? " card-link relative" : ""}`}>
      {p.link && (
        <Link href={p.link} aria-label={p.name} className="absolute inset-0 z-10 rounded-[inherit]" />
      )}
      <CardVisual p={p} ratio={medium ? "16 / 9" : "16 / 6"} />
      <div className="px-1 pt-5 pb-1 flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-bold flex items-center gap-2.5">
            <span
              aria-hidden
              className="inline-block shrink-0 rounded-full"
              style={{
                width: 10,
                height: 10,
                background: p.accent,
              }}
            />
            {p.name}
          </h3>
          <span className="text-xs whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
            {status}
          </span>
        </div>
        <p className="text-sm font-medium mt-2">{lx?.tagline}</p>
        {medium && (
          <p className="text-sm leading-relaxed mt-2" style={{ color: "var(--text-muted)" }}>
            {lx?.description}
          </p>
        )}
        <p className="mt-auto pt-4 text-xs" style={{ color: "var(--text-muted)" }}>
          {p.tags.join(" · ")}
        </p>
      </div>
    </article>
  );
}

// Section Side projects de la home. Ordre dans `sideProjectIds` : les deux
// premiers ont leur grande carte (SpotA, Builder), les deux suivants passent
// en taille medium, le reste en petit.
export function SideProjects() {
  const { locale } = useLocale();
  const title = highlightText[locale].sectionTitle;
  const cards = sideProjectIds
    .slice(2)
    .map((id) => recentProjects.find((p) => p.id === id))
    .filter((p): p is RecentProject => Boolean(p));

  return (
    <section id="featured" className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">{title}</h2>
      </div>

      <div className="grid gap-6">
        <SpotaFeature />
        <BuilderFeature />
      </div>

      <div className="grid gap-5 md:grid-cols-2 mt-6">
        {cards.map((p, i) => (
          <ProjectCard key={p.id} p={p} size={i < 2 ? "medium" : "small"} />
        ))}
      </div>
    </section>
  );
}
