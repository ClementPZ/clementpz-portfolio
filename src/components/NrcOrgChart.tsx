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
const H = 350;

function Box({
  x,
  y,
  w,
  h = 38,
  fontSize = 13,
  label,
  strong,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  fontSize?: number;
  label: string;
  strong?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        className="panel-box"
        stroke="var(--border-strong)"
        strokeWidth={1}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + fontSize * 0.35}
        textAnchor="middle"
        fontSize={fontSize}
        fontWeight={strong ? 700 : 500}
        fill="var(--text)"
      >
        {label}
      </text>
    </g>
  );
}

export function NrcOrgChart() {
  const { locale } = useLocale();
  const t = nrcText[locale].team.org;

  // Toutes les boîtes ont la même taille, posées sur une grille de trois
  // colonnes : les pairs et la collaboration sur les côtés, la ligne de
  // management (CPO, Design Manager) au centre. Tous les traits sont identiques.
  const boxW = 190;
  const boxH = 38;
  const colX = [15, 245, 475];

  const topY = 20;
  const leadY = 130;
  const repY = 290;
  const barY = 235;

  const line = "var(--border-strong)";

  return (
    <figure className="m-0">
      <div className="panel px-3 py-4 overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          style={{ minWidth: 560, display: "block" }}
          role="img"
          aria-label={`${t.lead}: ${t.reports.join(", ")}`}
        >
          {/* Les trois pairs du haut entre eux. */}
          <line x1={colX[0] + boxW} y1={topY + boxH / 2} x2={colX[2]} y2={topY + boxH / 2} stroke={line} strokeWidth={1} />

          {/* CTO et C-suite vers le Design Manager. */}
          <path
            d={`M ${colX[0] + boxW / 2} ${topY + boxH} V 95 H ${W / 2 - 40} V ${leadY}`}
            fill="none"
            stroke={line}
            strokeWidth={1}
          />
          <path
            d={`M ${colX[2] + boxW / 2} ${topY + boxH} V 95 H ${W / 2 + 40} V ${leadY}`}
            fill="none"
            stroke={line}
            strokeWidth={1}
          />

          {/* Devs et PM, de part et d'autre du Design Manager. */}
          <line x1={colX[0] + boxW} y1={leadY + boxH / 2} x2={colX[2]} y2={leadY + boxH / 2} stroke={line} strokeWidth={1} />

          {/* Le CPO au Design Manager, puis vers ses trois rattachements. */}
          <line x1={W / 2} y1={topY + boxH} x2={W / 2} y2={barY} stroke={line} strokeWidth={1} />
          <line x1={colX[0] + boxW / 2} y1={barY} x2={colX[2] + boxW / 2} y2={barY} stroke={line} strokeWidth={1} />
          {colX.map((x) => (
            <line key={x} x1={x + boxW / 2} y1={barY} x2={x + boxW / 2} y2={repY} stroke={line} strokeWidth={1} />
          ))}

          {t.top.map((label, i) => (
            <Box key={label} x={colX[i]} y={topY} w={boxW} label={label} />
          ))}
          <Box x={colX[0]} y={leadY} w={boxW} label={t.peers[0]} />
          <Box x={colX[1]} y={leadY} w={boxW} label={t.lead} strong />
          <Box x={colX[2]} y={leadY} w={boxW} label={t.peers[1]} />
          {t.reports.map((label, i) => (
            <Box key={label} x={colX[i]} y={repY} w={boxW} label={label} />
          ))}
        </svg>
      </div>
    </figure>
  );
}
