"use client";

import { nrcText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

// Roadmap de la fonction design chez NRC, condensee depuis l'outil interne :
// 4 colonnes (Done/Now/Next/Future) posees sur une ligne de temps, 2
// initiatives representatives par colonne. Pas de chiffres business, pas de
// noms de personnes.

export function NrcRoadmap() {
  const { locale } = useLocale();
  const columns = nrcText[locale].team.roadmap;

  return (
    <div className="grid gap-y-10 sm:grid-cols-4 mt-14">
      {columns.map((col, i) => (
        <div key={col.label} className="relative pt-6 pr-6">
          <span
            aria-hidden
            className="absolute top-0 left-0 h-px w-full"
            style={{ background: "var(--border-strong)" }}
          />
          <span
            aria-hidden
            className="absolute left-0 rounded-full"
            style={{
              top: -5,
              width: 11,
              height: 11,
              background: i === 1 ? "var(--accent)" : "var(--text-muted)",
            }}
          />
          <h4 className="text-sm font-semibold mb-3">{col.label}</h4>
          <div className="grid gap-5">
            {col.items
              .reduce<{ category: string; titles: string[] }[]>((groups, item) => {
                const last = groups[groups.length - 1];
                if (last && last.category === item.category) last.titles.push(item.title);
                else groups.push({ category: item.category, titles: [item.title] });
                return groups;
              }, [])
              .map((g) => (
                <div key={g.category}>
                  <p className="text-xs font-semibold mb-1.5" style={{ color: "var(--accent)" }}>
                    {g.category}
                  </p>
                  <ul className="grid gap-2">
                    {g.titles.map((title) => (
                      <li key={title} className="text-sm leading-snug">
                        {title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
