"use client";

import { nrcText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

// Ce que la fonction design a livre chez NRC : une liste courte, une ligne par
// domaine. Pas de chiffres business, pas de noms de personnes.

export function NrcRoadmap() {
  const { locale } = useLocale();
  const groups = nrcText[locale].team.roadmap;

  return (
    <div className="grid gap-10 mt-14">
      {groups.map((g) => (
        <div key={g.label}>
          <h3 className="font-display text-lg font-bold mb-4">{g.label}</h3>
          <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-[9rem_1fr]">
            {g.items.map((item) => (
              <div key={item.category} className="contents">
                <dt className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                  {item.category}
                </dt>
                <dd className="text-base leading-snug m-0 mb-2 sm:mb-0">{item.title}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
