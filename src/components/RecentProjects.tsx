"use client";

import { useRef } from "react";
import { recentProjects, type ProjectStatus } from "../data/content";

const statusLabel: Record<ProjectStatus, string> = {
  live: "● En ligne",
  "en cours": "● En cours",
  concept: "○ Concept",
};

export function RecentProjects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : 340;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section
      id="recent"
      className="py-16"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-baseline justify-between mb-8">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            The past 6 months
          </h2>
          <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
            Side projects en cours. L&apos;objectif : les pousser jusqu&apos;à une
            première version solide.
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <button
            type="button"
            aria-label="Précédent"
            onClick={() => scrollBy(-1)}
            className="btn-ghost"
            style={{ width: 44, height: 44, justifyContent: "center", padding: 0 }}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Suivant"
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
        className="flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {recentProjects.map((p) => (
          <article
            key={p.name}
            data-card
            className="snap-start shrink-0 flex flex-col justify-end rounded-2xl p-6 relative overflow-hidden"
            style={{
              width: "min(82vw, 320px)",
              minHeight: 420,
              background: `linear-gradient(150deg, ${p.accent} 0%, ${p.accent2} 100%)`,
              color: "#ffffff",
              boxShadow: "var(--shadow)",
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
              {statusLabel[p.status]}
            </span>

            <div className="relative">
              <h3 className="font-display text-2xl font-bold mb-2 leading-tight">
                {p.name}
              </h3>
              <p
                className="text-sm font-medium mb-3"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                {p.tagline}
              </p>
              <p
                className="text-xs leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 rounded"
                    style={{
                      background: "rgba(255,255,255,0.14)",
                      color: "#ffffff",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
