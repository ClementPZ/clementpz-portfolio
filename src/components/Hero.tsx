"use client";

import { profile } from "../data/content";
import { introText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";
import { fireConfetti } from "../lib/confetti";

export function Hero() {
  const { locale, t } = useLocale();
  return (
    <section id="top" className="max-w-6xl mx-auto px-6 pt-20 pb-12 sm:pt-32 sm:pb-16">
      <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl hero-tagline">
        {profile.tagline}
      </h1>
      <p
        className="mt-8 text-lg sm:text-xl leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {introText[locale]}
      </p>
      <div className="mt-10 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <a
            id="cta-getintouch"
            href={`mailto:${profile.email}`}
            className="btn-accent"
            onClick={(e) => fireConfetti(e.currentTarget)}
          >
            {t.getInTouch}
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            onClick={(e) => fireConfetti(e.currentTarget)}
          >
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            onClick={(e) => fireConfetti(e.currentTarget)}
          >
            GitHub
          </a>
        </div>
        {/* Photo de profil, à l'opposé des boutons : ronde, elle s'agrandit à
            400 px au survol (ou au focus), ancrée en bas à droite. Tant que
            profile.avatar est vide, une pastille aux initiales tient la place. */}
        {profile.avatar ? (
          <div className="hero-avatar" tabIndex={0}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.avatar} alt={profile.name} width={800} height={800} />
          </div>
        ) : (
          <div
            aria-hidden
            className="shrink-0 rounded-full flex items-center justify-center font-display font-bold"
            style={{
              width: 64,
              height: 64,
              background: "var(--accent-subtle)",
              color: "var(--accent)",
            }}
          >
            CP
          </div>
        )}
      </div>
    </section>
  );
}
