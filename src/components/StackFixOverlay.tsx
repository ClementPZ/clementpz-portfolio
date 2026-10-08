"use client";

// Overlay de l'easter egg "Stack tags". Réutilise le glass du disclaimer
// (.overlay-root/.overlay-glass) et le langage terminal de BuilderDemo, mais
// en tokens de thème (l'overlay vit sur la page, pas sur une carte à couleurs
// fixes) : dark/light doivent tous les deux marcher.
// Rendu via portail dans document.body : #page-shift (PullToRefresh) porte un
// transform qui devient containing block des descendants position:fixed, donc
// un overlay monté à l'intérieur se centre sur la hauteur de page entière, pas
// le viewport visible (cf. piège documenté dans CLAUDE.md / LiveCursors.stick).
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "./LocaleProvider";
import { stackEggText } from "../data/i18n";

type Kind = "prompt" | "run" | "ok" | "gate" | "badge" | "done";
type Line = { kind: Kind; text: string };

// Script en anglais (convention CLI), cf. BuilderDemo.
const PROMPT = '"the stack tags react on hover but aren\'t interactive, fix the affordance"';
const SCRIPT: Line[] = [
  { kind: "prompt", text: PROMPT },
  { kind: "run", text: "Triage" },
  { kind: "badge", text: "T1 · token-level change" },
  { kind: "run", text: "Plan · 1 file · globals.css" },
  { kind: "gate", text: "Write gate → approved" },
  { kind: "run", text: "Validating" },
  { kind: "ok", text: "nothing off-token · lint · typecheck" },
  { kind: "done", text: "Diff ready for engineer review" },
];

const TYPE_MS = 44; // par lettre du prompt, deux fois plus lent que la carte Builder
const STEP_MS = 480; // entre deux lignes suivantes

const MARK: Record<Kind, string> = {
  prompt: "›",
  run: "●",
  ok: "✓",
  gate: "◆",
  badge: "",
  done: "✓",
};

export function StackFixOverlay({
  onDone,
  onClose,
}: {
  onDone: (anchor?: HTMLElement | null) => void;
  onClose: () => void;
}) {
  const { locale } = useLocale();
  const t = stackEggText[locale];
  const [count, setCount] = useState(0);
  const [typed, setTyped] = useState(0);
  // Compteur de lectures : "Relaunch demo" l'incrémente pour rejouer le script.
  const [run, setRun] = useState(1);
  const doneBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
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

  const lines = SCRIPT.slice(0, count);
  const finished = count >= SCRIPT.length;

  return createPortal(
    <div className="overlay-root" role="dialog" aria-modal="true" aria-label={t.badge}>
      <div className="overlay-glass" style={{ maxWidth: 480 }}>
        <p
          className="font-display font-bold"
          style={{ fontSize: "1.15rem", marginBottom: 18, color: "var(--text)" }}
        >
          {t.overlayLead}
        </p>

        <div
          className="rounded-xl overflow-hidden font-mono text-[13px] leading-relaxed text-left"
          style={{ background: "var(--bg-elev)", border: "1px solid var(--border)" }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2.5"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span className="flex gap-1.5" aria-hidden>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-strong)" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-strong)" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-strong)" }} />
            </span>
            <span style={{ color: "var(--text-muted)" }}>builder · claude code</span>
          </div>

          <div className="px-4 py-4 min-h-[190px]">
            {lines.map((l, idx) =>
              l.kind === "badge" ? (
                <div key={idx} className="py-[3px]">
                  <span
                    className="inline-block rounded px-2 py-0.5 text-[11px] font-semibold"
                    style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
                  >
                    {l.text}
                  </span>
                </div>
              ) : (
                <div key={idx} className="flex gap-2.5 py-[3px]">
                  <span aria-hidden style={{ color: "var(--accent)", width: 12, flexShrink: 0 }}>
                    {MARK[l.kind]}
                  </span>
                  <span
                    style={{
                      color: l.kind === "run" ? "var(--text-muted)" : "var(--text)",
                      fontWeight: l.kind === "done" ? 600 : 400,
                    }}
                  >
                    {l.kind === "prompt" ? (
                      <>
                        {l.text.slice(0, typed)}
                        {/* Le reste est invisible : la ligne garde sa hauteur
                            finale pendant la frappe, la fenêtre ne bouge pas. */}
                        <span style={{ visibility: "hidden" }}>{l.text.slice(typed)}</span>
                      </>
                    ) : (
                      l.text
                    )}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {finished ? (
          <>
            <p style={{ marginTop: 18, fontSize: "0.9rem", color: "var(--text-muted)" }}>
              {t.fixedFooter}
            </p>
            <button
              ref={doneBtnRef}
              type="button"
              onClick={() => onDone(doneBtnRef.current)}
              className="btn-accent"
              style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
            >
              {t.close}
            </button>
            <button
              type="button"
              onClick={() => setRun((n) => n + 1)}
              className="btn-ghost"
              style={{ marginTop: 10, width: "100%", justifyContent: "center" }}
            >
              {t.relaunch}
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={onClose}
            className="btn-ghost"
            style={{ marginTop: 18, width: "100%", justifyContent: "center" }}
          >
            {t.dismissAria}
          </button>
        )}
      </div>
    </div>,
    document.body
  );
}
