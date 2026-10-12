"use client";

import { useState } from "react";
import { profile } from "../data/content";
import { introCut, introDesktopCut, introText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

export function Hero() {
  const { locale, t } = useLocale();
  const [open, setOpen] = useState(false);

  // Trois segments. Mobile : l'intro s'arrête après introCut, un "…" affiche la
  // suite. Dès sm, elle s'arrête après introDesktopCut, un second "…" prend le
  // relais. Expression introuvable : pas de coupure à cet endroit.
  const full = introText[locale];
  const mobileAt = full.indexOf(introCut[locale]);
  const mobileCut = mobileAt === -1 ? full.length : mobileAt + introCut[locale].length;
  const desktopKey = introDesktopCut[locale];
  const desktopAt = desktopKey ? full.indexOf(desktopKey) : -1;
  const desktopCut = desktopAt === -1 ? full.length : desktopAt + desktopKey!.length;
  const head = full.slice(0, mobileCut);
  const middle = full.slice(mobileCut, desktopCut);
  const tail = full.slice(desktopCut);

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
          {!open && mobileCut < full.length && (
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
          {middle && <span className={open ? undefined : "hidden sm:inline"}>{middle}</span>}
          {!open && desktopCut < full.length && <span className="hidden sm:inline"> </span>}
          {!open && desktopCut < full.length && (
            <button
              type="button"
              className="hero-more-desk"
              aria-expanded={false}
              aria-label={t.readMore}
              onClick={() => setOpen(true)}
            >
              …
            </button>
          )}
          {open && tail}
        </p>
      </div>
      <div className="mt-10 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <a
            id="cta-getintouch"
            href={`mailto:${profile.email}`}
            className="btn-ghost"
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
