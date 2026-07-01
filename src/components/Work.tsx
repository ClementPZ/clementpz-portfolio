"use client";

import { work } from "../data/content";
import { workText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

export function Work() {
  const { locale, t } = useLocale();
  const localized = workText[locale];
  return (
    <section
      id="work"
      className="max-w-6xl mx-auto px-6 py-16"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex items-baseline justify-between mb-10">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">{t.workTitle}</h2>
        <span className="text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
          {t.workCount.replace("{n}", String(work.length))}
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {work.map((w, index) => {
          const lx = localized[index];
          const bullets = lx?.bullets ?? (w.summary ? [w.summary] : []);
          const impact = lx?.impact ?? w.impact;
          return (
            <article
              key={w.company + w.period}
              className={`surface p-6 sm:p-7 flex flex-col${index === 0 ? " card-featured" : ""}`}
              style={{ boxShadow: "var(--shadow)" }}
            >
              <header className="flex items-baseline justify-between gap-4 mb-3">
                <h3 className="font-display text-xl font-bold">{w.company}</h3>
                <span className="text-xs whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
                  {w.period}
                </span>
              </header>
              <p className="text-sm font-medium mb-1" style={{ color: "var(--accent)" }}>
                {lx?.role ?? w.role}
              </p>
              <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
                {w.location}
              </p>

              <ul className="text-sm leading-relaxed mb-4 space-y-2 pl-4" style={{ listStyle: "disc" }}>
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {impact && impact.length > 0 && (
                <div
                  className="mb-4 rounded-lg p-3"
                  style={{ background: "var(--accent-subtle)", border: "1px solid var(--border)" }}
                >
                  <p
                    className="text-[10px] uppercase tracking-wider mb-1.5 font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {t.impactLabel}
                  </p>
                  <ul className="text-xs space-y-1" style={{ color: "var(--text)" }}>
                    {impact.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {w.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 rounded"
                    style={{ background: "var(--tag-bg)", color: "var(--tag-text)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
