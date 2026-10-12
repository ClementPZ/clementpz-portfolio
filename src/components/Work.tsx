"use client";

import Link from "next/link";
import { work, recommendations, type Reco, type WorkId, type WorkItem } from "../data/content";
import { workCardCaption, workText, type Locale } from "../data/i18n";
import { nrcVisuals } from "../data/nrcVisuals";
import { EPISOURCE_SCREEN_CLEAN, episourceVisual } from "../data/episourceVisual";
import { useLocale } from "./LocaleProvider";

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

// Rayon des cartes d'expérience et de leurs visuels, 8px au plus.
const CARD_RADIUS = 8;
// Les deux expériences santé ouvrent la home, côte à côte, chacune avec sa
// citation dessous. Les autres passent dans PastExperiences.
const FEATURED_IDS: WorkId[] = ["nrc", "episource"];

type LocalizedWork = (typeof workText)[Locale][WorkItem["id"]];

// Corps commun d'une carte d'expérience : entête, rôle, lieu, puis `children`
// (le visuel quand il s'empile), puces, impact et tags. `compact` retire les
// puces et l'impact : la carte de la home ne garde que l'entête, l'écran et
// les tags, le détail vit sur la page de l'expérience.
function ExperienceText({
  w,
  lx,
  children,
  compact = false,
}: {
  w: WorkItem;
  lx: LocalizedWork | undefined;
  children?: React.ReactNode;
  compact?: boolean;
}) {
  const { t } = useLocale();
  const bullets = lx?.bullets ?? [];
  const impact = lx?.impact;
  return (
    <>
      <header className="flex items-baseline justify-between gap-4 mb-3">
        <h3 className="font-display text-xl font-bold">{w.company}</h3>
        <span className="text-xs whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
          {w.period}
        </span>
      </header>
      <p className="text-sm font-medium mb-1" style={{ color: "var(--accent)" }}>
        {lx?.role}
      </p>
      <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
        {w.location}
      </p>

      {children}

      {!compact && (
        <ul className="text-sm leading-relaxed mb-4 pl-4 space-y-2" style={{ listStyle: "disc" }}>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}

      {!compact && impact && impact.length > 0 && (
        <div className="mb-4">
          <p className="text-sm mb-1.5 font-semibold" style={{ color: "var(--accent)" }}>
            {t.impactLabel}
          </p>
          <ul className="text-sm space-y-1" style={{ color: "var(--text)" }}>
            {impact.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-2">
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          {w.tags.join(" · ")}
        </p>
      </div>
    </>
  );
}

// Lien étiré : la carte entière mène à sa page. Rien d'autre n'est
// cliquable dedans, pas de lien imbriqué.
function CardLink({ w }: { w: WorkItem }) {
  const { t } = useLocale();
  if (!w.link) return null;
  return (
    <Link
      href={w.link}
      aria-label={`${w.company}, ${t.caseStudy}`}
      className="absolute inset-0 z-10 rounded-[inherit]"
    />
  );
}

// Écran posé entre l'entête et les tags : "après" de /nrc pour NRC, écran
// Click to Code sans marqueurs pour Episource. Les deux sont des recréations
// illustratives, leur mention reste sous l'image.
function cardVisual(id: WorkId, locale: Locale) {
  if (id === "nrc") {
    return {
      src: "/nrc/after.webp",
      alt: nrcVisuals[locale].slider.alt,
      width: 3090,
      height: 1760,
      disclaimer: workCardCaption[locale].nrc,
      white: false,
    };
  }
  if (id === "episource") {
    return {
      src: EPISOURCE_SCREEN_CLEAN,
      alt: episourceVisual[locale].step.alt,
      width: 1561,
      height: 880,
      disclaimer: workCardCaption[locale].episource,
      white: true,
    };
  }
  return null;
}

// Les deux dernières expériences côte à côte sur desktop, chaque carte entière
// cliquable vers sa page, sa citation dessous. La grille se remplit par colonne
// (carte, citation, carte, citation) : en une colonne l'ordre est le même, sur
// desktop les cartes partagent la même hauteur de ligne et les citations aussi.
export function LastExperience() {
  const { locale, t } = useLocale();
  const featured = FEATURED_IDS.map((id) => work.find((x) => x.id === id)).filter(
    (x): x is WorkItem => Boolean(x)
  );
  const pinnedByWork = new Map(
    recommendations.filter((r) => r.quote && r.pinnedTo).map((r) => [r.pinnedTo, r])
  );
  // Citations sans carte à laquelle s'épingler : en bloc dessous.
  const loose = recommendations.filter(
    (r) => r.quote && !(r.pinnedTo && FEATURED_IDS.includes(r.pinnedTo))
  );

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">{t.workTitle}</h2>
      </div>

      <div className="grid gap-x-12 gap-y-6 lg:gap-y-8 lg:grid-flow-col relative lg:grid-cols-2 lg:grid-rows-[auto_1fr]">
        {featured.flatMap((w, i) => {
          const visual = cardVisual(w.id, locale);
          const quote = pinnedByWork.get(w.id);
          return [
            ...(i > 0
              ? [<div key={`${w.id}-rule`} aria-hidden className="work-rule lg:hidden h-px" />]
              : []),
            <article
              key={w.id}
              className={`panel${w.id === "nrc" ? " card-featured" : ""} p-6 sm:p-8 flex flex-col${
                w.link ? " relative card-link" : ""
              }`}
              style={{ borderRadius: CARD_RADIUS }}
            >
              <CardLink w={w} />
              <ExperienceText w={w} lx={workText[locale][w.id]} compact>
                {visual && (
                  <figure className="m-0 mb-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={visual.src}
                      alt={visual.alt}
                      width={visual.width}
                      height={visual.height}
                      loading="lazy"
                      className="block w-full h-auto"
                      style={{
                        borderRadius: CARD_RADIUS,
                        ...(visual.white ? { background: "#ffffff" } : null),
                        border: "1px solid var(--border-strong)",
                        boxShadow: "var(--shadow)",
                      }}
                    />
                    <figcaption className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
                      {visual.disclaimer}
                    </figcaption>
                  </figure>
                )}
              </ExperienceText>
            </article>,
            <div key={`${w.id}-quote`}>{quote && <Quote r={quote} />}</div>,
          ];
        })}
      </div>

      {loose.length > 0 && (
        <div className="grid gap-10 sm:grid-cols-2 mt-14">
          {loose.map((r) => (
            <Quote key={r.author} r={r} />
          ))}
        </div>
      )}
    </section>
  );
}

export function PastExperiences() {
  const { locale, t } = useLocale();
  const localized = workText[locale];
  const past = work.filter((x) => !FEATURED_IDS.includes(x.id));

  return (
    <section id="past" className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">{t.pastTitle}</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {past.map((w) => {
          return (
            <article
              key={w.company + w.period}
              className={`panel p-6 sm:p-7 flex flex-col${w.link ? " relative" : ""}`}
              style={{ borderRadius: CARD_RADIUS }}
            >
              <CardLink w={w} />
              <ExperienceText w={w} lx={localized[w.id]}>
                  {w.photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={w.photo}
                      alt={w.company}
                      className="w-full mb-4 object-cover"
                      style={{ aspectRatio: "3 / 2", borderRadius: CARD_RADIUS }}
                    />
                  )}
              </ExperienceText>
            </article>
          );
        })}
      </div>
    </section>
  );
}
