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

  // Deux tailles : le management direct (CPO, Design Manager, ses trois
  // rattachements) en taille pleine, la collaboration (CTO, C-suite, devs, PM)
  // a 80 %. Tous les traits sont identiques, la hierarchie tient a la taille.
  const S = 0.8;
  const fullH = 38;
  const smallH = fullH * S;
  const fullFont = 13;
  const smallFont = fullFont * S;

  // Rangee du haut : CTO, CPO, C-suite.
  const topY = 20;
  const cpoW = 150;
  const cpoX = W / 2 - cpoW / 2;
  const smallW = 150 * S;
  const ctoX = 55;
  const csuiteX = 505;
  const smallTopY = topY + (fullH - smallH) / 2;

  // Rangee du milieu : devs, Design Manager (sous le CPO), PM.
  const leadW = 170;
  const leadX = W / 2 - leadW / 2;
  const leadY = 130;
  const smallMidY = leadY + (fullH - smallH) / 2;
  const devsX = 55;
  const pmsX = 505;

  // Les trois rattachements directs.
  const repW = 190;
  const repY = 290;
  const repX = [15, 245, 475];
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
          <line x1={ctoX + smallW} y1={topY + fullH / 2} x2={cpoX} y2={topY + fullH / 2} stroke={line} strokeWidth={1} />
          <line x1={cpoX + cpoW} y1={topY + fullH / 2} x2={csuiteX} y2={topY + fullH / 2} stroke={line} strokeWidth={1} />

          {/* CTO et C-suite vers le Design Manager. */}
          <path
            d={`M ${ctoX + smallW / 2} ${smallTopY + smallH} V 95 H ${W / 2 - 40} V ${leadY}`}
            fill="none"
            stroke={line}
            strokeWidth={1}
          />
          <path
            d={`M ${csuiteX + smallW / 2} ${smallTopY + smallH} V 95 H ${W / 2 + 40} V ${leadY}`}
            fill="none"
            stroke={line}
            strokeWidth={1}
          />

          {/* Devs et PM, de part et d'autre du Design Manager. */}
          <line x1={devsX + smallW} y1={leadY + fullH / 2} x2={leadX} y2={leadY + fullH / 2} stroke={line} strokeWidth={1} />
          <line x1={leadX + leadW} y1={leadY + fullH / 2} x2={pmsX} y2={leadY + fullH / 2} stroke={line} strokeWidth={1} />

          {/* Le CPO au Design Manager. */}
          <line x1={W / 2} y1={topY + fullH} x2={W / 2} y2={leadY} stroke={line} strokeWidth={1} />

          {/* Le Design Manager vers ses trois rattachements. */}
          <line x1={W / 2} y1={leadY + fullH} x2={W / 2} y2={barY} stroke={line} strokeWidth={1} />
          <line x1={repX[0] + repW / 2} y1={barY} x2={repX[2] + repW / 2} y2={barY} stroke={line} strokeWidth={1} />
          {repX.map((x) => (
            <line key={x} x1={x + repW / 2} y1={barY} x2={x + repW / 2} y2={repY} stroke={line} strokeWidth={1} />
          ))}

          <Box x={ctoX} y={smallTopY} w={smallW} h={smallH} fontSize={smallFont} label={t.top[0]} />
          <Box x={cpoX} y={topY} w={cpoW} label={t.top[1]} />
          <Box x={csuiteX} y={smallTopY} w={smallW} h={smallH} fontSize={smallFont} label={t.top[2]} />
          <Box x={devsX} y={smallMidY} w={smallW} h={smallH} fontSize={smallFont} label={t.peers[0]} />
          <Box x={pmsX} y={smallMidY} w={smallW} h={smallH} fontSize={smallFont} label={t.peers[1]} />
          <Box x={leadX} y={leadY} w={leadW} label={t.lead} strong />
          {t.reports.map((label, i) => (
            <Box key={label} x={repX[i]} y={repY} w={repW} label={label} />
          ))}
        </svg>
      </div>
    </figure>
  );
}
