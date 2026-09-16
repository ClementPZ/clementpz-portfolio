"use client";

import Link from "next/link";
import { profile } from "../data/content";
import { introText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";
import { fireConfetti } from "../lib/confetti";

export function Hero() {
  const { locale, t } = useLocale();
  return (
    <section id="top" className="max-w-6xl mx-auto px-6 pt-20 pb-24 sm:pt-32 sm:pb-32">
      <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl hero-tagline">
        {profile.tagline}
      </h1>
      <p
        className="mt-8 text-lg sm:text-xl leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {introText[locale]}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
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
        {/* Widget méta : mène au making of, aligné sur les autres CTAs.
            id = cible d'ancrage du curseur Carol (LiveCursors). */}
        <Link href="/making-of" id="cta-makingof" className="btn-ghost">
          {t.makingOfWidget}
          <span aria-hidden style={{ color: "var(--text-muted)" }}>
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
