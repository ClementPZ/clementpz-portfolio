"use client";

import { useState } from "react";
import { profile } from "../data/content";
import { introCut, introText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";
import { fireConfetti } from "../lib/confetti";

export function Hero() {
  const { locale, t } = useLocale();
  const [open, setOpen] = useState(false);

  // Mobile : l'intro s'arrête après introCut, un "…" affiche la suite. Dès sm
  // le texte est entier. Expression introuvable : pas de coupure.
  const full = introText[locale];
  const at = full.indexOf(introCut[locale]);
  const cut = at === -1 ? full.length : at + introCut[locale].length;
  const head = full.slice(0, cut);
  const tail = full.slice(cut);

  return (
    <section id="top" className="max-w-6xl mx-auto px-6 pt-20 pb-12 sm:pt-32 sm:pb-16">
      {/* Titre et intro dans un même bloc : dès sm, l'intro prend la largeur du
          titre (voir .hero-block dans globals.css). */}
      <div className="hero-block">
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl hero-tagline">
          {profile.tagline}
        </h1>
        <p
          className="mt-8 text-lg sm:text-xl leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {head}
          {tail && !open && (
            <button
              type="button"
              className="hero-more"
              aria-expanded={false}
              aria-label={t.readMore}
              onClick={() => setOpen(true)}
            >
              …
            </button>
          )}
          {tail && <span className={open ? undefined : "hidden sm:inline"}>{tail}</span>}
        </p>
      </div>
      <div className="mt-10 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <a
            id="cta-getintouch"
            href={`mailto:${profile.email}`}
            className="btn-ghost"
            onClick={(e) => fireConfetti(e.currentTarget)}
          >
            {t.getInTouch}
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
