"use client";

import { nrcText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

// Roadmap de la fonction design chez NRC, condensee depuis l'outil interne :
// 4 colonnes (Completed/Now/Next/Future), 2 initiatives representatives par
// colonne. Pas de chiffres business, pas de noms de personnes.

export function NrcRoadmap() {
  const { locale } = useLocale();
  const columns = nrcText[locale].team.roadmap;

  return (
    <div className="grid gap-3 sm:grid-cols-4 mt-8">
      {columns.map((col) => (
        <div key={col.label}>
          <h4
            className="text-xs uppercase tracking-widest font-semibold mb-2.5"
            style={{ color: "var(--text-muted)" }}
          >
            {col.label}
          </h4>
          <div className="grid gap-2">
            {col.items.map((item) => (
              <div key={item.title} className="surface px-3.5 py-3">
                <p
                  className="text-[10px] uppercase tracking-wide font-semibold mb-1"
                  style={{ color: "var(--accent)" }}
                >
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
