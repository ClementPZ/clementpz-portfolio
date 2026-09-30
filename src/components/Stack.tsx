"use client";

import { useEffect, useState } from "react";
import { stack } from "../data/content";
import { useLocale } from "./LocaleProvider";
import { StackIcon } from "./StackIcon";
import { stackEggText } from "../data/i18n";
import { StackFixOverlay } from "./StackFixOverlay";
import { fireConfetti } from "../lib/confetti";

// Easter egg : les tags ont un hover qui les fait ressembler à des boutons →
// on en profite. Clic sur un tag = callout "Bad UX!" ; son CTA ouvre un
// overlay façon disclaimer montrant Builder "corriger" l'affordance. Une fois
// fixé (persisté en session), les tags redeviennent des spans inertes et
// perdent leur hover — la blague se referme visuellement.
export function Stack() {
  const { t, locale } = useLocale();
  const egg = stackEggText[locale];
  const [calloutOpen, setCalloutOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (sessionStorage.getItem("stack-egg-fixed")) setFixed(true);
    } catch {}
  }, []);

  const handleFixed = (anchor?: HTMLElement | null) => {
    setOverlayOpen(false);
    setCalloutOpen(false);
    setFixed(true);
    try {
      sessionStorage.setItem("stack-egg-fixed", "1");
    } catch {}
    fireConfetti(anchor);
  };

  return (
    <section
      id="stack"
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">{t.stackTitle}</h2>
      </div>
      {/* stack-egg-anchor : le callout est en position:absolute ancré à ce
          conteneur, il flotte donc par-dessus la suite de la page au lieu
          de pousser tout vers le bas quand il apparaît. */}
      <div className="stack-egg-anchor">
        <div className="flex flex-wrap gap-2">
          {stack.map((s) => {
            const inner = (
              <>
                <span style={{ display: "inline-flex", color: "var(--accent)" }}>
                  <StackIcon icon={s.icon} />
                </span>
                {s.label}
              </>
            );
            return fixed ? (
              <span key={s.label} className="pill" data-fixed="true" style={{ gap: 8 }}>
                {inner}
              </span>
            ) : (
              <button
                key={s.label}
                type="button"
                className="pill"
                style={{ gap: 8, cursor: "pointer" }}
                onClick={() => setCalloutOpen(true)}
              >
                {inner}
              </button>
            );
          })}
        </div>

        {calloutOpen && !fixed && (
          <div className="stack-egg-callout" role="status">
            <span className="stack-egg-badge">{egg.badge}</span>
            <p>{egg.body}</p>
            <div className="stack-egg-actions">
              <button
                type="button"
                className="btn-accent"
                onClick={() => {
                  setCalloutOpen(false);
                  setOverlayOpen(true);
                }}
              >
                {egg.cta}
              </button>
              <button
                type="button"
                className="stack-egg-dismiss"
                aria-label={egg.dismissAria}
                onClick={() => setCalloutOpen(false)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>

      {overlayOpen && (
        <StackFixOverlay onDone={handleFixed} onClose={() => setOverlayOpen(false)} />
      )}
    </section>
  );
}
