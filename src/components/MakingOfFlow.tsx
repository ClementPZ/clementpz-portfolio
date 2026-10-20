"use client";

// Schéma d'une session pour /making-of : les étapes à gauche, et à droite le
// hook, skill ou commande qui agit à cette étape. Theme-aware + i18n
// (makingOfText[locale].flow), la géométrie SVG reste fixe.
import { useLocale } from "./LocaleProvider";
import { makingOfText } from "../data/i18n";

const PITCH = 64;
const NODE_H = 44;

export function MakingOfFlow() {
  const { locale } = useLocale();
  const t = (makingOfText[locale] ?? makingOfText.en).flow;
  const height = 16 + (t.steps.length - 1) * PITCH + NODE_H;
  return (
    <svg
      viewBox={`0 0 520 ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-labelledby="makingof-flow-title makingof-flow-desc"
    >
      <title id="makingof-flow-title">{t.ariaTitle}</title>
      <desc id="makingof-flow-desc">{t.ariaDesc}</desc>
      <defs>
        <marker id="mf-ah" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="var(--text-muted)" />
        </marker>
      </defs>
      <style>{`
        .mf-t{fill:var(--text);}
        .mf-m{fill:var(--text-muted);}
        .mf-a{fill:var(--accent);}
        .mf-node{fill:var(--bg-raised);stroke:var(--border-strong);stroke-width:1;}
        .mf-spine{stroke:var(--border-strong);stroke-width:1;fill:none;}
        .mf-dot{stroke:var(--border-strong);stroke-width:1;stroke-dasharray:2 4;fill:none;}
      `}</style>

      {t.steps.map((s, i) => {
        const y = 8 + i * PITCH;
        const last = i === t.steps.length - 1;
        return (
          <g key={s.step}>
            <rect className="mf-node" x="1" y={y} width="220" height={NODE_H} rx="22" />
            <text className="mf-t" x="111" y={y + 27} textAnchor="middle" fontSize="15" fontWeight="700">
              {s.step}
            </text>
            {!last && (
              <line className="mf-spine" x1="111" y1={y + NODE_H} x2="111" y2={y + PITCH - 2} markerEnd="url(#mf-ah)" />
            )}
            <line className="mf-dot" x1="221" y1={y + NODE_H / 2} x2="252" y2={y + NODE_H / 2} />
            <rect className="mf-node" x="252" y={y} width="267" height={NODE_H} rx="12" />
            <text className="mf-a" x="268" y={y + 18} fontSize="12" fontWeight="700">
              {s.kind}
            </text>
            <text className="mf-m" x="268" y={y + 35} fontSize="14">
              {s.what}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
