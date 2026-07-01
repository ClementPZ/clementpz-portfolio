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
      <div className="mb-10">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">{t.recoTitle}</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {recommendations
          .filter((r) => r.quote)
          .map((r) => (
          <blockquote
            key={r.author}
            className="surface p-6 sm:p-7"
            style={{ boxShadow: "var(--shadow)" }}
          >
            <p className="text-base sm:text-lg leading-relaxed italic">
              &ldquo;{r.quote}&rdquo;
            </p>
            <footer
              className="mt-5 pt-4 flex items-end justify-between gap-3"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <div>
                <p className="font-display font-bold text-sm">{r.author}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {r.title}
                </p>
              </div>
              <a
                href={r.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{
                  background: "var(--tag-bg)",
                  color: "var(--tag-text)",
                  border: "1px solid var(--border)",
                }}
              >
                in · Contact
              </a>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
