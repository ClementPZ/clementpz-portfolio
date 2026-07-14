"use client";

import { useCallback, useEffect, useRef } from "react";
import { recentProjects } from "../data/content";
import { projectText, statusText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

export function RecentProjects() {
  const { locale, t } = useLocale();
  const trackRef = useRef<HTMLDivElement>(null);
  const localized = projectText[locale];
  const status = statusText[locale];

  // Deck défilant : les cartes se chevauchent (marges négatives). La plus proche
  // du centre passe devant (zIndex), grandit (scale), les latérales reculent
  // (scale bas, opacité, translateY) avec un léger fan (rotate). Calcul basé sur
  // offsetLeft/scrollLeft (layout, pas transform) pour éviter la rétroaction.
  const applyMagnify = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    const half = track.clientWidth / 2;
    const cards = track.querySelectorAll<HTMLElement>("[data-card]");
    cards.forEach((card) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const rel = Math.max(-1, Math.min(1, (cardCenter - center) / half));
      const dist = Math.abs(rel);
      const scale = 1.08 - dist * 0.2;
      const opacity = Math.max(0.35, 1 - dist * 0.42);
      const ty = dist * 18;
      const rot = Math.max(-5, Math.min(5, rel * 6));
      card.style.transform = `translateY(${ty}px) scale(${scale}) rotate(${rot}deg)`;
      card.style.opacity = String(opacity);
      card.style.zIndex = String(1000 - Math.round(dist * 1000));
    });
  }, []);

  // Au mount : ouvrir le deck centré sur la carte Builder Flow (par id).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>("[data-card]");
    const idx = recentProjects.findIndex((p) => p.id === "builder-flow");
    const target = cards[idx >= 0 ? idx : Math.floor(cards.length / 2)];
    if (target) {
      track.scrollLeft = target.offsetLeft + target.offsetWidth / 2 - track.clientWidth / 2;
      applyMagnify();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        applyMagnify();
        ticking = false;
      });
    };
    applyMagnify();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [applyMagnify, locale]);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    // Une carte utile = largeur visible après chevauchement (~82%).
    const amount = card ? card.offsetWidth * 0.82 : 260;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="recent" className="py-16" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-baseline justify-between mb-8">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">{t.recentTitle}</h2>
          <p className="text-sm mt-2 max-w-xl" style={{ color: "var(--text-muted)" }}>
            {t.recentSub}
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="btn-ghost"
            style={{ width: 44, height: 44, justifyContent: "center", padding: 0 }}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="btn-ghost"
            style={{ width: 44, height: 44, justifyContent: "center", padding: 0 }}
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex overflow-x-auto px-6 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", paddingTop: 24, paddingBottom: 40, position: "relative" }}
      >
        {recentProjects.map((p, i) => {
          const lx = localized[p.id];
          return (
            <article
              key={p.name}
              data-card
              className="snap-center shrink-0 flex flex-col justify-end rounded-2xl p-6 relative overflow-hidden"
              style={{
                width: "min(82vw, 320px)",
                minHeight: 420,
                marginLeft: i === 0 ? 0 : -60,
                background: `linear-gradient(150deg, ${p.accent} 0%, ${p.accent2} 100%)`,
                color: "#ffffff",
                boxShadow: "0 18px 44px rgba(15, 4, 18, 0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
                transformOrigin: "center bottom",
                transition: "transform 0.25s ease, opacity 0.25s ease",
                willChange: "transform",
              }}
            >
              {p.image && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt="" className="proj-img" />
                  <div className="proj-overlay" />
                </>
              )}

              {/* Lien étiré : toute la carte devient cliquable (case study) */}
              {p.link && (
                <a href={p.link} aria-label={p.name} className="absolute inset-0 z-10" />
              )}

              <span
                className="absolute top-5 right-5 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  color: "#ffffff",
                  backdropFilter: "blur(8px)",
                }}
              >
                {status[p.status]}
              </span>

              <div className="relative">
                <h3 className="font-display text-2xl font-bold mb-2 leading-tight">{p.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {lx?.tagline}
                </p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.72)" }}>
                  {lx?.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider px-2 py-1 rounded"
                      style={{ background: "rgba(255,255,255,0.14)", color: "#ffffff" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
