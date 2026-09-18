"use client";

import Link from "next/link";
import { work, recommendations, type Reco } from "../data/content";
import { workText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

// Monogramme placeholder (remplacé par un logo via w.image plus tard).
function initials(company: string): string {
  const words = company.replace(/[^\p{L}\s]/gu, " ").split(/\s+/).filter(Boolean);
  if (words.length === 0) return "•";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function Quote({ r }: { r: Reco }) {
  return (
    <blockquote className="flex flex-col">
      <span
        aria-hidden
        className="font-display font-bold leading-none mb-1 mt-1.5"
        style={{ fontSize: "2.75rem", color: "var(--accent)" }}
      >
        &ldquo;
      </span>
      <p className="text-lg leading-relaxed" style={{ color: "var(--text)" }}>
        {r.quote}
      </p>
      <footer className="mt-4 flex items-baseline gap-2 flex-wrap text-sm">
        <span className="font-display font-bold">{r.author}</span>
        <span style={{ color: "var(--text-muted)" }}>· {r.title}</span>
        <a
          href={r.linkedin || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-20 hover:underline"
          style={{ color: "var(--accent)" }}
        >
          LinkedIn ↗
        </a>
      </footer>
    </blockquote>
  );
}

function Avatar({ company, image }: { company: string; image?: string }) {
  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt={company}
        className="shrink-0 rounded-lg object-cover"
        style={{ width: 52, height: 52 }}
      />
    );
  }
  return (
    <div
      className="shrink-0 rounded-lg flex items-center justify-center font-display font-bold"
      style={{
        width: 52,
        height: 52,
        fontSize: "0.95rem",
        background: "var(--accent-subtle)",
        border: "1px solid var(--border)",
        color: "var(--accent)",
      }}
      aria-hidden
    >
      {initials(company)}
    </div>
  );
}

export function Work() {
  const { locale, t } = useLocale();
  const localized = workText[locale];
  const pinnedByWork = new Map(
    recommendations.filter((r) => r.quote && r.pinnedTo).map((r) => [r.pinnedTo, r])
  );
  const topQuotes = [
    ...work.map((w) => pinnedByWork.get(w.id)).filter((r): r is Reco => Boolean(r)),
    ...recommendations.filter((r) => r.quote && !r.pinnedTo),
  ];

  return (
    <section
      id="work"
      className="max-w-6xl mx-auto px-6 py-16"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">{t.workTitle}</h2>
      </div>

      {/* Quotes — traitement éditorial, sans card, posé sur le fond.
          Ordonnées sur les colonnes de leur carte pour rester flush avec elle. */}
      {topQuotes.length > 0 && (
        <div className="grid gap-10 sm:grid-cols-2 mb-14">
          {topQuotes.map((r) => (
            <Quote key={r.author} r={r} />
          ))}
        </div>
      )}

      {/* Expériences */}
      <div className="grid gap-5 sm:grid-cols-2">
        {work.map((w, index) => {
          const lx = localized[w.id];
          const bullets = lx?.bullets ?? [];
          const impact = lx?.impact;
          return (
            <article
              key={w.company + w.period}
              className={`surface p-6 sm:p-7 flex flex-col${index === 0 ? " card-featured" : ""}${
                w.link ? " card-link relative" : ""
              }`}
              style={{ boxShadow: "var(--shadow)" }}
            >
              {/* Lien étiré : la carte entière mène au case study. Rien
                  d'autre n'est cliquable dedans, pas de lien imbriqué. */}
              {w.link && (
                <Link
                  href={w.link}
                  aria-label={`${w.company}, ${t.caseStudy}`}
                  className="absolute inset-0 z-10 rounded-[inherit]"
                />
              )}
              <header className="flex items-center gap-3 mb-3">
                <Avatar company={w.company} image={w.image} />
                <div className="flex-1 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-bold">{w.company}</h3>
                  <span className="text-xs whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
                    {w.period}
                  </span>
                </div>
              </header>
              <p className="text-sm font-medium mb-1" style={{ color: "var(--accent)" }}>
                {lx?.role}
              </p>
              <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
                {w.location}
              </p>

              {w.photo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={w.photo}
                  alt={w.company}
                  className="w-full mb-4 rounded-lg object-cover"
                  style={{ aspectRatio: "3 / 2" }}
                />
              )}

              <ul className="text-sm leading-relaxed mb-4 space-y-2 pl-4" style={{ listStyle: "disc" }}>
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {impact && impact.length > 0 && (
                <div
                  className="mb-4 rounded-lg p-3"
                  style={{ background: "var(--accent-subtle)", border: "1px solid var(--border)" }}
                >
                  <p
                    className="text-[10px] uppercase tracking-wider mb-1.5 font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {t.impactLabel}
                  </p>
                  <ul className="text-xs space-y-1" style={{ color: "var(--text)" }}>
                    {impact.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {w.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 rounded"
                    style={{ background: "var(--tag-bg)", color: "var(--tag-text)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
