"use client";

import { nrcText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

// Organigramme de la fonction design chez NRC. Dessine, pas placeholder : la
// structure est publique (deux Product Designers + un Analytics Specialist,
// rattaches au produit), les personnes ne le sont pas. Donc des ROLES, jamais
// de noms ni d'initiales.
//
// SVG inline plutot qu'une image : suit les 2 themes via currentColor et les
// variables CSS, et reste lisible au zoom.

const W = 680;
const H = 300;

function Box({
  x,
  y,
  w,
  label,
  strong,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  strong?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={38}
        rx={8}
        fill={strong ? "var(--accent-subtle)" : "var(--bg-card)"}
        stroke={strong ? "var(--accent)" : "var(--border-strong)"}
        strokeWidth={strong ? 1.5 : 1}
      />
      <text
        x={x + w / 2}
        y={y + 24}
        textAnchor="middle"
        fontSize={13}
        fontWeight={strong ? 700 : 500}
        fill={strong ? "var(--accent)" : "var(--text)"}
      >
        {label}
      </text>
    </g>
  );
}

export function NrcOrgChart() {
  const { locale } = useLocale();
  const t = nrcText[locale].team.org;

  // Rangee du haut : trois pairs relies horizontalement.
  const topW = 150;
  const topY = 20;
  const topX = [40, 265, 490];

  // Le lead, sous le CPO (boite du milieu).
  const leadW = 170;
  const leadX = W / 2 - leadW / 2;
  const leadY = 120;

  // Les trois rattachements.
  const repW = 190;
  const repY = 232;
  const repX = [15, 245, 475];

  const line = "var(--border-strong)";

  return (
    <figure className="m-0">
      <div className="surface px-3 py-4 overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          style={{ minWidth: 560, display: "block" }}
          role="img"
          aria-label={t.caption}
        >
          {/* Liens horizontaux entre les trois pairs du haut */}
          <line
            x1={topX[0] + topW}
            y1={topY + 19}
            x2={topX[1]}
            y2={topY + 19}
            stroke={line}
            strokeWidth={1}
          />
          <line
            x1={topX[1] + topW}
            y1={topY + 19}
            x2={topX[2]}
            y2={topY + 19}
            stroke={line}
            strokeWidth={1}
          />

          {/* Du CPO vers le lead */}
          <line
            x1={W / 2}
            y1={topY + 38}
            x2={W / 2}
            y2={leadY}
            stroke={line}
            strokeWidth={1}
          />

          {/* Du lead vers la barre de distribution, puis vers chaque role */}
          <line x1={W / 2} y1={leadY + 38} x2={W / 2} y2={200} stroke={line} strokeWidth={1} />
          <line
            x1={repX[0] + repW / 2}
            y1={200}
            x2={repX[2] + repW / 2}
            y2={200}
            stroke={line}
            strokeWidth={1}
          />
          {repX.map((x) => (
            <line
              key={x}
              x1={x + repW / 2}
              y1={200}
              x2={x + repW / 2}
              y2={repY}
              stroke={line}
              strokeWidth={1}
            />
          ))}

          {t.top.map((label, i) => (
            <Box key={label} x={topX[i]} y={topY} w={topW} label={label} />
          ))}
          <Box x={leadX} y={leadY} w={leadW} label={t.lead} strong />
          {t.reports.map((label, i) => (
            <Box key={label} x={repX[i]} y={repY} w={repW} label={label} />
          ))}
        </svg>
      </div>
      <figcaption className="text-sm mt-3" style={{ color: "var(--text-muted)" }}>
        {t.caption}
      </figcaption>
    </figure>
  );
}
