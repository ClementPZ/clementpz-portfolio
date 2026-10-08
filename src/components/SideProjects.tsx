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
  // script à chaque changement de valeur (0 = pas de clic encore). La première
  // lecture, elle, part toute seule quand le terminal entre à l'écran.
  const [demoTrigger, setDemoTrigger] = useState(0);

  return (
    <div
      className="relative rounded-2xl overflow-hidden grid md:grid-cols-2 gap-8 p-8 sm:p-10"
      style={{
        background: `linear-gradient(150deg, ${accent} 0%, ${accent2} 100%)`,
        color: "#ffffff",
        boxShadow: "var(--shadow)",
      }}
    >
      {/* Carte entière cliquable (lien étiré), seul retour au survol : le
          curseur. Les boutons de la démo passent au-dessus (z-20). */}
      <Link
        href="/builder"
        aria-label={`${t.title}, ${t.ctaSecondary}`}
        className="absolute inset-0 z-10 rounded-[inherit]"
      />

      {/* Texte */}
      <div className="flex flex-col justify-center">
        <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight">{t.title}</h3>
        <p className="text-sm font-medium mt-1" style={{ color: "rgba(255,255,255,0.85)" }}>
          {t.tagline}
        </p>
        <p className="text-base leading-relaxed mt-5" style={{ color: "rgba(255,255,255,0.78)" }}>
          {t.blurb}
        </p>
      </div>

      {/* Démo : moitié droite sur desktop, empilée en dessous sur mobile. Les
          2 CTA sont sous le terminal, alignés à droite, "Voir le détail" à
          gauche de "Lancer la démo". */}
      <div className="flex flex-col justify-center gap-5">
        <BuilderDemo trigger={demoTrigger} />
        <div className="relative z-20 flex flex-wrap items-center justify-end gap-3">
          <Link
            href="/builder"
            className="inline-flex shrink-0 items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold"
            style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#ffffff" }}
          >
            {t.ctaSecondary}
            <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            onClick={() => setDemoTrigger((n) => n + 1)}
            className="inline-flex shrink-0 items-center px-5 py-3 rounded-full text-sm font-semibold"
            style={{ background: "#ffffff", color: accent2 }}
          >
            {t.ctaPrimary}
          </button>
        </div>
      </div>
    </div>
  );
}

// Visuel d'une carte. Days a le sien, une carte qui porte `image` aussi, les
// autres n'ont pas de cadre.
function CardVisual({ p, ratio }: { p: RecentProject; ratio: string }) {
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

  // Pas de visuel : la carte commence par son titre, sans cadre vide.
  return null;
}

// Carte projet : visuel, nom (avec un point à ses couleurs), état, une phrase,
// la description, tags en texte discret. "wide" : pleine ligne, visuel à gauche
// et texte à droite (comme la carte Episource), empilés sur mobile.
function ProjectCard({
  p,
  wide = false,
  className = "",
}: {
  p: RecentProject;
  wide?: boolean;
  className?: string;
}) {
  const { locale } = useLocale();
  const lx = projectText[locale][p.id];
  const status = statusText[locale][p.status];

  return (
    <article
      className={`panel p-4 sm:p-5 ${
        wide ? "grid gap-6 md:grid-cols-2 md:gap-10 items-center" : "flex flex-col"
      }${p.link ? " card-link relative" : ""} ${className}`}
    >
      {p.link && (
        <Link href={p.link} aria-label={p.name} className="absolute inset-0 z-10 rounded-[inherit]" />
      )}
      <CardVisual p={p} ratio="16 / 9" />
      <div className={`px-1 pb-1 flex flex-col flex-1 ${wide ? "" : "pt-5"}`}>
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
        <p className="text-sm leading-relaxed mt-2" style={{ color: "var(--text-muted)" }}>
          {lx?.description}
        </p>
        <p className="mt-auto pt-4 text-xs" style={{ color: "var(--text-muted)" }}>
          {p.tags.join(" · ")}
        </p>
      </div>
    </article>
  );
}

// Section Side projects de la home. Ordre dans `sideProjectIds` : les deux
// premiers ont leur grande carte (Builder, SpotA), puis une ligne à deux
// cartes (1/3, 2/3), puis une dernière carte seule sur sa ligne.
export function SideProjects() {
  const { locale } = useLocale();
  const title = highlightText[locale].sectionTitle;
  const cards = sideProjectIds
    .slice(2)
    .map((id) => recentProjects.find((p) => p.id === id))
    .filter((p): p is RecentProject => Boolean(p));
  const pair = cards.slice(0, 2);
  const last = cards.slice(2);

  return (
    <section id="featured" className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">{title}</h2>
      </div>

      <div className="grid gap-6">
        <BuilderFeature />
        <SpotaFeature />
      </div>

      <div className="grid gap-5 md:grid-cols-3 mt-6">
        {pair.map((p, i) => (
          <ProjectCard key={p.id} p={p} className={i === 1 ? "md:col-span-2" : ""} />
        ))}
      </div>

      {last.map((p) => (
        <div key={p.id} className="mt-5">
          <ProjectCard p={p} wide />
        </div>
      ))}
    </section>
  );
}
