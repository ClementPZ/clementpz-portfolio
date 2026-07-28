"use client";

// Démo interactive de Builder, façon terminal Claude Code. Vit DANS la carte
// Highlight (gradient d'identité aubergine, texte blanc) : les couleurs sont
// donc des blancs translucides + un vert/ambre légers, comme le reste de la
// carte, indépendants du thème dark/light. Contenu terminal en anglais (CLI).
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "./LocaleProvider";
import { builderDemoText } from "../data/i18n";

type Kind = "prompt" | "run" | "ok" | "warn" | "gate" | "badge" | "done";
type Line = { kind: Kind; text: string };
type ScenarioKey = "setup" | "audit" | "tweak";

const ORDER: ScenarioKey[] = ["setup", "audit", "tweak"];

const SCRIPTS: Record<ScenarioKey, Line[]> = {
  setup: [
    { kind: "prompt", text: "/builder setup" },
    { kind: "run", text: "Scanning repo" },
    { kind: "ok", text: "47 components · 12 routes · Tailwind v4" },
    { kind: "run", text: "Reading the design system" },
    { kind: "ok", text: "38 tokens · 9 patterns" },
    { kind: "run", text: "Drafting token contract (DTCG)" },
    { kind: "gate", text: "Ratify the contract?  →  approved" },
    { kind: "done", text: "Contract ready · Grade A" },
  ],
  tweak: [
    { kind: "prompt", text: '"make the secondary button less prominent"' },
    { kind: "run", text: "Triage" },
    { kind: "badge", text: "T1 · token-level change" },
    { kind: "run", text: "Plan · 1 file · Button.tsx" },
    { kind: "gate", text: "Write gate  →  approved" },
    { kind: "run", text: "Validating" },
    { kind: "ok", text: "in scope · nothing off-token · lint · typecheck" },
    { kind: "done", text: "Diff ready for engineer review" },
  ],
  audit: [
    { kind: "prompt", text: "/builder audit" },
    { kind: "run", text: "Checking 47 components against the contract" },
    { kind: "ok", text: "41 compliant" },
    { kind: "warn", text: "6 drifts · 4 off-token colors · 2 one-off spacings" },
    { kind: "run", text: "Writing report" },
    { kind: "done", text: "Compliance 87% · report saved" },
  ],
};

const MARK: Record<Kind, string> = {
  prompt: "›",
  run: "●",
  ok: "✓",
  warn: "!",
  gate: "◆",
  badge: "",
  done: "✓",
};

// Couleurs sur la carte d'identité (aubergine, texte blanc) : blancs
// translucides + accents clairs. Indépendantes du thème par design.
const INK = "rgba(255,255,255,0.92)";
const MUTED = "rgba(255,255,255,0.55)";
const OKC = "#8ef0c0";
const WARNC = "#ffce8a";

function markColor(kind: Kind): string {
  if (kind === "ok" || kind === "done") return OKC;
  if (kind === "warn") return WARNC;
  if (kind === "gate" || kind === "prompt") return "#ffffff";
  return MUTED;
}

export function BuilderDemo() {
  const { locale } = useLocale();
  const t = builderDemoText[locale];
  const [active, setActive] = useState<ScenarioKey>("setup");
  const [count, setCount] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const play = useCallback((key: ScenarioKey) => {
    clearTimer();
    setActive(key);
    const total = SCRIPTS[key].length;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setCount(total);
      return;
    }
    setCount(0);
    let i = 0;
    timerRef.current = window.setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= total) clearTimer();
    }, 520);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            play("setup");
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimer();
    };
  }, [play]);

  const lines = SCRIPTS[active].slice(0, count);
  const running = count < SCRIPTS[active].length;

  return (
    <div ref={rootRef}>
      {/* Fenêtre terminal */}
      <div
        className="rounded-xl overflow-hidden font-mono text-[13px] leading-relaxed"
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
            <div key={`${active}-${idx}`} className="flex gap-2.5 py-[3px]">
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
          {running && (
            <span
              aria-hidden
              className="inline-block w-2 h-4 align-middle bd-caret"
              style={{ background: "rgba(255,255,255,0.7)", marginLeft: 2 }}
            />
          )}
        </div>
      </div>

      {/* Sélecteur de scénario */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {ORDER.map((key) => {
          const on = key === active;
          return (
            <button
              key={key}
              type="button"
              onClick={() => play(key)}
              className="rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition-colors"
              style={{
                background: on ? "#ffffff" : "rgba(255,255,255,0.12)",
                color: on ? "#2a1436" : "rgba(255,255,255,0.85)",
              }}
            >
              {key}
            </button>
          );
        })}
        <span className="text-xs ml-1" style={{ color: MUTED }}>
          {t.hint}
        </span>
      </div>

      <style>{`
        @keyframes bd-blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        .bd-caret { animation: bd-blink 1s step-end infinite; }
        @media (prefers-reduced-motion: reduce) { .bd-caret { animation: none; opacity: 0; } }
      `}</style>
    </div>
  );
}
