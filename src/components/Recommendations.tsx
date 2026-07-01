"use client";

import { recommendations } from "../data/content";
import { useLocale } from "./LocaleProvider";

export function Recommendations() {
  const { t } = useLocale();
  return (
    <section
      id="recommendations"
      className="max-w-6xl mx-auto px-6 py-16"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex items-baseline justify-between mb-10">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">{t.recoTitle}</h2>
        <span className="text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
          {t.recoSub}
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {recommendations.map((r) => (
          <blockquote
            key={r.author}
            className="surface p-6 sm:p-7"
            style={{ boxShadow: "var(--shadow)" }}
          >
            <p className="text-base sm:text-lg leading-relaxed italic">
              &ldquo;{r.quote}&rdquo;
            </p>
            <footer className="mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="font-display font-bold text-sm">{r.author}</p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {r.title}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
