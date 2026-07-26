"use client";

// src/components/BuilderDiagram.tsx
// Schéma d'architecture Builder. Theme-aware (var() des 2 thèmes) + i18n (EN/FR/ES).
// Textes dans builderDiagramText[locale] ; la géométrie SVG reste fixe.
import { useLocale } from "./LocaleProvider";
import { builderDiagramText } from "../data/i18n";

export function BuilderDiagram() {
  const { locale } = useLocale();
  const t = builderDiagramText[locale];
  return (
    <svg
      viewBox="0 0 760 560"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-labelledby="builder-diagram-title builder-diagram-desc"
    >
      <title id="builder-diagram-title">{t.ariaTitle}</title>
      <desc id="builder-diagram-desc">{t.ariaDesc}</desc>
      <defs>
        <marker id="ah" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="var(--text-muted)" />
        </marker>
      </defs>
      <style>{`
        .bd-t{fill:var(--text);}
        .bd-m{fill:var(--text-muted);}
        .bd-a{fill:var(--accent);}
        .bd-node{fill:var(--bg-card);stroke:var(--border-strong);stroke-width:1;}
        .bd-soft{fill:var(--bg-elev);stroke:var(--border);stroke-width:1;}
        .bd-spine{stroke:var(--border-strong);stroke-width:2;fill:none;}
        .bd-dot{stroke:var(--border-strong);stroke-width:1.5;stroke-dasharray:2 4;fill:none;}
        .bd-pill{fill:var(--accent-subtle);stroke:var(--accent);stroke-width:1;}
      `}</style>

      <rect className="bd-pill" x="114" y="22" width="300" height="44" rx="22" />
      <text className="bd-a" x="264" y="49" textAnchor="middle" fontSize="14" fontWeight="700">{t.request}</text>
      <line className="bd-spine" x1="264" y1="66" x2="264" y2="88" markerEnd="url(#ah)" />

      <rect className="bd-node" x="40" y="90" width="448" height="66" rx="16" />
      <text className="bd-t" x="264" y="120" textAnchor="middle" fontSize="16" fontWeight="700">{t.orchestrator}</text>
      <text className="bd-m" x="264" y="142" textAnchor="middle" fontSize="12.5">{t.orchestratorSub}</text>
      <line className="bd-spine" x1="264" y1="156" x2="264" y2="180" markerEnd="url(#ah)" />

      <rect className="bd-soft" x="40" y="182" width="448" height="192" rx="16" />
      <text className="bd-m" x="60" y="205" fontSize="11.5" fontWeight="600" letterSpacing="1">{t.tiersLabel}</text>
      <text className="bd-m" x="472" y="205" textAnchor="end" fontSize="11.5">{t.doubtLabel}</text>

      <rect className="bd-node" x="56" y="216" width="416" height="44" rx="10" />
      <text className="bd-a" x="74" y="243" fontSize="13" fontWeight="700">T1</text>
      <text className="bd-t" x="104" y="243" fontSize="13" fontWeight="600">{t.t1}</text>
      <text className="bd-m" x="168" y="243" fontSize="12">{t.t1Sub}</text>

      <rect className="bd-node" x="56" y="266" width="416" height="44" rx="10" />
      <text className="bd-a" x="74" y="293" fontSize="13" fontWeight="700">T2</text>
      <text className="bd-t" x="104" y="293" fontSize="13" fontWeight="600">{t.t2}</text>
      <text className="bd-m" x="196" y="293" fontSize="12">{t.t2Sub}</text>

      <rect className="bd-node" x="56" y="316" width="416" height="44" rx="10" strokeDasharray="4 4" />
      <text className="bd-a" x="74" y="343" fontSize="13" fontWeight="700">T3</text>
      <text className="bd-t" x="104" y="343" fontSize="13" fontWeight="600">{t.t3}</text>
      <text className="bd-m" x="290" y="343" fontSize="12">{t.t3Sub}</text>

      <line className="bd-spine" x1="264" y1="374" x2="264" y2="396" markerEnd="url(#ah)" />

      <rect className="bd-node" x="40" y="396" width="448" height="66" rx="16" />
      <text className="bd-t" x="264" y="424" textAnchor="middle" fontSize="16" fontWeight="700">{t.validator}</text>
      <text className="bd-m" x="264" y="446" textAnchor="middle" fontSize="12.5">{t.validatorSub}</text>
      <line className="bd-spine" x1="264" y1="462" x2="264" y2="484" markerEnd="url(#ah)" />

      <rect className="bd-pill" x="114" y="486" width="300" height="44" rx="22" />
      <text className="bd-a" x="264" y="513" textAnchor="middle" fontSize="14" fontWeight="700">{t.diff}</text>

      <line className="bd-dot" x1="488" y1="123" x2="520" y2="123" />
      <rect className="bd-soft" x="520" y="98" width="208" height="50" rx="12" />
      <text className="bd-a" x="536" y="120" fontSize="12" fontWeight="700">{t.agentSetup}</text>
      <text className="bd-m" x="536" y="138" fontSize="11.5">{t.agentSetupSub}</text>
      <text className="bd-m" x="520" y="166" fontSize="11">{t.gateContract}</text>

      <line className="bd-dot" x1="488" y1="239" x2="520" y2="239" />
      <rect className="bd-soft" x="520" y="214" width="208" height="50" rx="12" />
      <text className="bd-a" x="536" y="236" fontSize="12" fontWeight="700">{t.agentContext}</text>
      <text className="bd-m" x="536" y="254" fontSize="11.5">{t.agentContextSub}</text>

      <line className="bd-dot" x1="472" y1="288" x2="520" y2="313" />
      <rect className="bd-soft" x="520" y="288" width="208" height="50" rx="12" />
      <text className="bd-a" x="536" y="310" fontSize="12" fontWeight="700">{t.agentExec}</text>
      <text className="bd-m" x="536" y="328" fontSize="11.5">{t.agentExecSub}</text>
      <text className="bd-m" x="520" y="356" fontSize="11">{t.gateWrite}</text>
    </svg>
  );
}
