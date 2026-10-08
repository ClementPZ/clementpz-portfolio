"use client";

// Démo Builder, façon terminal Claude Code. Vit DANS la carte Builder de SideProjects
// (gradient d'identité aubergine, texte blanc) : les couleurs sont donc des
// blancs translucides + un vert léger, comme le reste de la carte,
// indépendants du thème dark/light. Contenu terminal en anglais (CLI).
// Le script se joue seul la première fois que le terminal entre à l'écran (le
// prompt se tape lettre par lettre), puis le parent (SideProjects) incrémente
// `trigger` au clic sur "Lancer demo" pour le rejouer.
import { useEffect, useRef, useState } from "react";

type Kind = "prompt" | "run" | "ok" | "gate" | "badge" | "done";
type Line = { kind: Kind; text: string };

// Un seul scénario : la hiérarchie des deux actions d'une page (T1). Le prompt
// donne le problème et l'intention pour que la démo se comprenne seule.
const PROMPT =
  "\"There are 2 primary actions on the new feature page. The hierarchy is 'Launch' as the main action, 'Export' as secondary.\"";
const SCRIPT: Line[] = [
  { kind: "prompt", text: PROMPT },
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

const TYPE_MS = 22; // par lettre du prompt
const STEP_MS = 520; // entre deux lignes suivantes

export function BuilderDemo({ trigger }: { trigger: number }) {
  const [count, setCount] = useState(0);
  const [typed, setTyped] = useState(0);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Lance la première lecture quand le terminal est à moitié visible.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 0 = au repos, 1 = lecture automatique, 2+ = un clic sur "Lancer demo".
  const run = trigger > 0 ? trigger + 1 : inView ? 1 : 0;

  useEffect(() => {
    if (run === 0) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTyped(PROMPT.length);
      setCount(SCRIPT.length);
      return;
    }
    let cancelled = false;
    let timer: number | undefined;
    const wait = (ms: number) => new Promise<void>((r) => (timer = window.setTimeout(r, ms)));
    setTyped(0);
    setCount(1);
    (async () => {
      for (let c = 1; c <= PROMPT.length; c++) {
        await wait(TYPE_MS);
        if (cancelled) return;
        setTyped(c);
      }
      for (let i = 2; i <= SCRIPT.length; i++) {
        await wait(STEP_MS);
        if (cancelled) return;
        setCount(i);
      }
    })();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [run]);

  const idle = count === 0;

  return (
    <div
      ref={rootRef}
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

      {/* Toutes les lignes sont TOUJOURS rendues : seule l'opacité change. Le
          terminal garde donc la même hauteur au repos, pendant et après la
          démo (pas de reflow de la carte), et cette hauteur reste juste à
          toutes les largeurs, contrairement à une hauteur fixe en pixels. */}
      <div className="relative px-4 py-4">
        {SCRIPT.map((l, idx) => {
          const shown = idx < count;
          return (
            <div
              key={idx}
              className="flex gap-2.5 py-[3px]"
              style={{ opacity: shown ? 1 : 0, transition: "opacity 0.18s ease" }}
              aria-hidden={!shown}
            >
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
                    {l.kind === "prompt" ? (
                      <>
                        {l.text.slice(0, typed)}
                        {/* Le reste est rendu invisible : la ligne garde sa
                            hauteur finale pendant la frappe. */}
                        <span style={{ visibility: "hidden" }}>{l.text.slice(typed)}</span>
                      </>
                    ) : (
                      l.text
                    )}
                  </span>
                </>
              )}
            </div>
          );
        })}
        {/* Curseur d'attente, posé en absolu sur la première ligne (invisible)
            tant que la démo n'a pas démarré. */}
        {idle && (
          <span
            aria-hidden
            className="absolute inline-block w-2 h-4 bd-caret"
            style={{ background: "rgba(255,255,255,0.7)", top: 20, left: 16 }}
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
