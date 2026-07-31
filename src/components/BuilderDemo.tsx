"use client";

// Démo Builder, façon terminal Claude Code. Vit DANS la carte Highlight
// (gradient d'identité aubergine, texte blanc) : les couleurs sont donc des
// blancs translucides + un vert léger, comme le reste de la carte,
// indépendants du thème dark/light. Contenu terminal en anglais (CLI).
// Piloté depuis l'extérieur : le parent (Highlight) incrémente `trigger` au
// clic sur "Lancer demo" ; ce composant (re)joue le script à chaque changement.
import { useEffect, useRef, useState } from "react";

type Kind = "prompt" | "run" | "ok" | "gate" | "badge" | "done";
type Line = { kind: Kind; text: string };

// Un seul scénario : le changement de bouton (T1). Le prompt détaille le
// problème et l'intention pour que la démo se comprenne seule, sans légende.
const SCRIPT: Line[] = [
  {
    kind: "prompt",
    text: '"the secondary button is as visually strong as the primary one and competes for attention, reduce its weight (ghost style, no fill) so the primary CTA stands out"',
  },
  { kind: "run", text: "Triage" },
  { kind: "badge", text: "T1 · token-level change" },
  { kind: "run", text: "Plan · 1 file · Button.tsx" },
  { kind: "gate", text: "Write gate → approved" },
  { kind: "run", text: "Validating" },
  { kind: "ok", text: "in scope · nothing off-token · lint · typecheck" },
  { kind: "done", text: "Diff ready for engineer review" },
];

const MARK: Record<Kind, string> = {
  prompt: "›",
  run: "●",
  ok: "✓",
  gate: "◆",
  badge: "",
  done: "✓",
};

// Couleurs sur la carte d'identité (aubergine, texte blanc) : blancs
// translucides + accents clairs. Indépendantes du thème par design.
const INK = "rgba(255,255,255,0.92)";
const MUTED = "rgba(255,255,255,0.55)";
const OKC = "#8ef0c0";

function markColor(kind: Kind): string {
  if (kind === "ok" || kind === "done") return OKC;
  if (kind === "gate" || kind === "prompt") return "#ffffff";
  return MUTED;
}

export function BuilderDemo({ trigger }: { trigger: number }) {
  const [count, setCount] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (trigger === 0) return; // pas encore lancée : terminal au repos
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(SCRIPT.length);
      return;
    }
    setCount(0);
    let i = 0;
    timerRef.current = window.setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= SCRIPT.length && timerRef.current !== null) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, 520);
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [trigger]);

  const lines = SCRIPT.slice(0, count);
  const running = trigger > 0 && count < SCRIPT.length;
  const showCaret = trigger === 0 || running;

  return (
    <div
      className="w-full rounded-xl overflow-hidden font-mono text-[13px] leading-relaxed"
      style={{
        background: "rgba(10,6,14,0.55)",
        border: "1px solid rgba(255,255,255,0.16)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
      >
        <span className="flex gap-1.5" aria-hidden>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
        </span>
        <span style={{ color: MUTED }}>builder · claude code</span>
      </div>

      <div className="px-4 py-4 min-h-[232px]">
        {lines.map((l, idx) => (
          <div key={idx} className="flex gap-2.5 py-[3px]">
            {l.kind === "badge" ? (
              <span
                className="inline-block rounded px-2 py-0.5 text-[11px] font-semibold"
                style={{ background: "rgba(255,255,255,0.14)", color: INK }}
              >
                {l.text}
              </span>
            ) : (
              <>
                <span aria-hidden style={{ color: markColor(l.kind), width: 12, flexShrink: 0 }}>
                  {MARK[l.kind]}
                </span>
                <span
                  style={{
                    color: l.kind === "run" ? MUTED : INK,
                    fontWeight: l.kind === "done" ? 600 : 400,
                  }}
                >
                  {l.text}
                </span>
              </>
            )}
          </div>
        ))}
        {showCaret && (
          <span
            aria-hidden
            className="inline-block w-2 h-4 align-middle bd-caret"
            style={{ background: "rgba(255,255,255,0.7)", marginLeft: lines.length ? 2 : 0 }}
          />
        )}
      </div>

      <style>{`
        @keyframes bd-blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        .bd-caret { animation: bd-blink 1s step-end infinite; }
        @media (prefers-reduced-motion: reduce) { .bd-caret { animation: none; opacity: 0; } }
      `}</style>
    </div>
  );
}
