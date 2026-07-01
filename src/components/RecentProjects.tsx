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

  // Effet "carrousel arrondi" : la carte la plus proche du centre est agrandie,
  // les latérales rétrécies + décalées vers le bas + estompées.
  const applyMagnify = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const mid = track.getBoundingClientRect().left + track.clientWidth / 2;
    track.querySelectorAll<HTMLElement>("[data-card]").forEach((card) => {
      const r = card.getBoundingClientRect();
      const cardMid = r.left + r.width / 2;
      const dist = Math.min(Math.abs(cardMid - mid) / (track.clientWidth / 2), 1);
      const scale = 1.06 - dist * 0.16;
      const translateY = dist * 14;
      const opacity = 1 - dist * 0.38;
      card.style.transform = `translateY(${translateY}px) scale(${scale})`;
      card.style.opacity = String(opacity);
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    applyMagnify();
    track.addEventListener("scroll", applyMagnify, { passive: true });
    window.addEventListener("resize", applyMagnify);
    return () => {
      track.removeEventListener("scroll", applyMagnify);
      window.removeEventListener("resize", applyMagnify);
    };
  }, [applyMagnify, locale]);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : 340;
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
        className="flex gap-5 overflow-x-auto px-6 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", paddingTop: 18, paddingBottom: 34 }}
      >
        {recentProjects.map((p, index) => {
          const lx = localized[index];
          return (
            <article
              key={p.name}
              data-card
              className="snap-center shrink-0 flex flex-col justify-end rounded-2xl p-6 relative overflow-hidden"
              style={{
                width: "min(82vw, 320px)",
                minHeight: 420,
                background: `linear-gradient(150deg, ${p.accent} 0%, ${p.accent2} 100%)`,
                color: "#ffffff",
                boxShadow: "var(--shadow)",
                transformOrigin: "center bottom",
                transition: "transform 0.25s ease, opacity 0.25s ease",
                willChange: "transform",
              }}
            >
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
                  {lx?.tagline ?? p.tagline}
                </p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.72)" }}>
                  {lx?.description ?? p.description}
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
