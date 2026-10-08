"use client";

import Link from "next/link";
import { work, recommendations, type Reco, type WorkItem } from "../data/content";
import { workText, type Locale } from "../data/i18n";
import { nrcVisuals } from "../data/nrcVisuals";
import { useLocale } from "./LocaleProvider";
import { BeforeAfterSlider } from "./NrcVisuals";

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
        color: "var(--accent)",
      }}
      aria-hidden
    >
      {initials(company)}
    </div>
  );
}

// Rayon des cartes d'expérience et de leurs visuels, 8px au plus.
const CARD_RADIUS = 8;
// Carte pleine largeur posée juste sous NRC, photo à gauche : les deux
// expériences santé se lisent avant les side projects.
const WIDE_ID = "episource";

type LocalizedWork = (typeof workText)[Locale][WorkItem["id"]];

// Corps commun d'une carte d'expérience : entête, rôle, lieu, puis `children`
// (le visuel quand il s'empile), puces, impact et tags.
function ExperienceText({
  w,
  lx,
  children,
}: {
  w: WorkItem;
  lx: LocalizedWork | undefined;
  children?: React.ReactNode;
}) {
  const { t } = useLocale();
  const bullets = lx?.bullets ?? [];
  const impact = lx?.impact;
  return (
    <>
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

      {children}

      <ul className="text-sm leading-relaxed mb-4 space-y-2 pl-4" style={{ listStyle: "disc" }}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {impact && impact.length > 0 && (
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

      <p className="mt-auto pt-2 text-xs" style={{ color: "var(--text-muted)" }}>
        {w.tags.join(" · ")}
      </p>
    </>
  );
}

// Lien étiré : la carte entière mène au case study. Rien d'autre n'est
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

// Dernière expérience seule, pleine largeur, puis les deux recommandations en
// conclusion. Le visuel de droite est le comparateur avant/après de /nrc, posé
// au-dessus du lien étiré de la carte (z-20) pour rester glissable.
export function LastExperience() {
  const { locale, t } = useLocale();
  const w = work.find((x) => x.id === "nrc");
  const wide = work.find((x) => x.id === WIDE_ID);
  const lx = workText[locale].nrc;
  // Ordre des cartes : la citation épinglée à NRC d'abord, puis les autres.
  const pinnedByWork = new Map(
    recommendations.filter((r) => r.quote && r.pinnedTo).map((r) => [r.pinnedTo, r])
  );
  const quotes = [
    ...work.map((x) => pinnedByWork.get(x.id)).filter((r): r is Reco => Boolean(r)),
    ...recommendations.filter((r) => r.quote && !r.pinnedTo),
  ];
  if (!w) return null;

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">{t.workTitle}</h2>
      </div>

      <article
        className={`panel card-featured p-6 sm:p-10 grid gap-8 md:grid-cols-2 md:gap-12${
          w.link ? " relative" : ""
        }`}
        style={{ borderRadius: CARD_RADIUS }}
      >
        <CardLink w={w} />
        <div className="flex flex-col">
          <ExperienceText w={w} lx={lx} />
          {w.link && (
            <p className="mt-5 text-sm font-semibold" style={{ color: "var(--text)" }}>
              {t.caseStudy} →
            </p>
          )}
        </div>
        <div className="relative z-20 self-center">
          <BeforeAfterSlider text={nrcVisuals[locale].slider} breakout={false} />
          <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
            {nrcVisuals[locale].disclaimer}
          </p>
        </div>
      </article>

      {wide && (
        <article
          className="panel p-6 sm:p-10 grid gap-8 md:grid-cols-2 md:gap-12 items-center mt-5"
          style={{ borderRadius: CARD_RADIUS }}
        >
          {wide.photo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={wide.photo}
              alt={wide.company}
              className="w-full object-cover"
              style={{ aspectRatio: "3 / 2", borderRadius: CARD_RADIUS }}
            />
          )}
          <div className="flex flex-col">
            <ExperienceText w={wide} lx={workText[locale][wide.id]} />
          </div>
        </article>
      )}

      {quotes.length > 0 && (
        <div className="grid gap-10 sm:grid-cols-2 mt-14">
          {quotes.map((r) => (
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
  const past = work.filter((x) => x.id !== "nrc" && x.id !== WIDE_ID);

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
