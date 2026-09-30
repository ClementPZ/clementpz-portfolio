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
          <div className="grid gap-4">
            {col.items.map((item) => (
              <div key={item.title}>
                <p className="text-xs font-semibold mb-1" style={{ color: "var(--accent)" }}>
                  {item.category}
                </p>
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
