"use client";

import { stack } from "../data/content";
import { useLocale } from "./LocaleProvider";

export function Stack() {
  const { t } = useLocale();
  return (
    <section
      id="stack"
      className="max-w-6xl mx-auto px-6 py-16"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">{t.stackTitle}</h2>
        <span className="text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
          {t.stackSub}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {stack.map((s) => (
          <span key={s.label} className="pill">
            {s.label}
          </span>
        ))}
      </div>
    </section>
  );
}
