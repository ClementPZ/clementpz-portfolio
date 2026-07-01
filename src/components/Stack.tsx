"use client";

import { stack } from "../data/content";
import { useLocale } from "./LocaleProvider";
import { StackIcon } from "./StackIcon";

export function Stack() {
  const { t } = useLocale();
  return (
    <section
      id="stack"
      className="max-w-6xl mx-auto px-6 py-16"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">{t.stackTitle}</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {stack.map((s) => (
          <span key={s.label} className="pill" style={{ gap: 8 }}>
            <span style={{ display: "inline-flex", color: "var(--accent)" }}>
              <StackIcon icon={s.icon} />
            </span>
            {s.label}
          </span>
        ))}
      </div>
    </section>
  );
}
