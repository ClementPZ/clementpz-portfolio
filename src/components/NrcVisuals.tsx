"use client";

/* eslint-disable @next/next/no-img-element -- exports du canvas deja en webp, tailles connues */

import { useRef, useState } from "react";
import type { NrcVisualText, VisualStep } from "../data/nrcVisuals";

// Visuels de /nrc et de la carte NRC de la home : un comparateur avant/apres et
// des ecrans commentes. Les images sont des exports du canvas
// (public/nrc/<id>.webp), 1545 x 880. Le numero d'une note reprend celui du
// marqueur dessine sur l'image, d'ou la couleur bleue du canvas, en dur : c'est
// la couleur des marqueurs de l'image.

const MARKER = "oklch(56% 0.1 255)";
const RATIO = "1545 / 880";

// Cadre commun des captures : un filet et une ombre douce, rayon leger. Le
// fond blanc est celui des images, il evite un liseré sombre au bord en dark.
const FRAME: React.CSSProperties = {
  borderRadius: 12,
  background: "#ffffff",
  border: "1px solid var(--border-strong)",
  boxShadow: "var(--shadow)",
};

// Les ecrans sont plus lisibles plus larges que la colonne de texte.
const BREAKOUT = "lg:-mx-24";

export function BeforeAfterSlider({
  text,
  breakout = true,
}: {
  text: NrcVisualText["slider"];
  // false dans une carte de la home, ou la colonne est deja celle du visuel.
  breakout?: boolean;
}) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function moveTo(clientX: number) {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }

  // L'etiquette du cote le plus visible passe en texte plein.
  const beforeShown = pos > 50;

  return (
    <figure className={`m-0 ${breakout ? BREAKOUT : ""}`}>
      <div className="flex items-center justify-between text-xs font-medium mb-2.5 px-1">
        <span
          style={{ color: beforeShown ? "var(--text)" : "var(--text-muted)", transition: "color 0.2s" }}
        >
          {text.before}
        </span>
        <span
          style={{ color: beforeShown ? "var(--text-muted)" : "var(--text)", transition: "color 0.2s" }}
        >
          {text.after}
        </span>
      </div>
      <div
        ref={box}
        className="relative select-none overflow-hidden"
        style={{
          ...FRAME,
          aspectRatio: RATIO,
          cursor: "ew-resize",
          touchAction: "pan-y",
        }}
        onPointerDown={(e) => {
          dragging.current = true;
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch {
            // Sans capture, le glisser marche tant que le pointeur reste sur l'image.
          }
          moveTo(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) moveTo(e.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onPointerCancel={() => {
          dragging.current = false;
        }}
      >
        <img
          src="/nrc/before.webp"
          alt={text.before}
          width={1545}
          height={880}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 w-full h-full"
        />
        <img
          src="/nrc/after.webp"
          alt={text.after}
          width={1545}
          height={880}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        />

        <div
          role="slider"
          tabIndex={0}
          aria-label={text.ariaLabel}
          aria-orientation="horizontal"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
            else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
            else return;
            e.preventDefault();
          }}
          className="nrc-slider-handle absolute top-0 bottom-0 flex items-center justify-center outline-none"
          style={{ left: `${pos}%`, width: 44, marginLeft: -22 }}
        >
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0"
            style={{ left: 21, width: 2, background: "#ffffff", boxShadow: "0 0 0 1px rgba(0,0,0,0.25)" }}
          />
          <span
            aria-hidden="true"
            className="nrc-slider-knob relative flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              borderRadius: 9999,
              background: "#ffffff",
              color: "#322a36",
              boxShadow: "0 1px 6px rgba(0,0,0,0.35)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="m9 7-5 5 5 5M15 7l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <figcaption
        className={`text-sm mt-3 ${breakout ? "lg:mx-24" : ""}`}
        style={{ color: "var(--text-muted)" }}
      >
        {text.caption}
      </figcaption>
    </figure>
  );
}

// Visionneuse plein ecran : un <dialog> natif, Echap et clic hors de l'image
// ferment, le focus est rendu au bouton d'ouverture par le navigateur.
function Lightbox({
  dlg,
  src,
  alt,
}: {
  dlg: React.RefObject<HTMLDialogElement | null>;
  src: string;
  alt: string;
}) {
  return (
    <dialog
      ref={dlg}
      className="nrc-lightbox"
      aria-label={alt}
      onClick={(e) => {
        if (e.target === e.currentTarget) dlg.current?.close();
      }}
    >
      <img src={src} alt={alt} style={{ borderRadius: 12 }} />
      <button
        type="button"
        onClick={() => dlg.current?.close()}
        aria-label="Close"
        className="nrc-lightbox-close"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </dialog>
  );
}

function ExpandIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScreenStep({
  step,
  fullSize,
  index,
}: {
  step: VisualStep;
  fullSize: string;
  index: number;
}) {
  const src = `/nrc/${step.id}.webp`;
  const dlg = useRef<HTMLDialogElement>(null);
  const open = () => dlg.current?.showModal();
  return (
    <figure className={`m-0 ${BREAKOUT}`}>
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-baseline gap-3">
          <span className="font-display font-bold text-sm" style={{ color: "var(--accent)" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h4 className="font-display text-lg font-bold">{step.title}</h4>
        </div>
        <button
          type="button"
          onClick={open}
          className="inline-flex items-center gap-1.5 text-xs font-medium hover:underline"
          style={{ color: "var(--text-muted)" }}
        >
          <ExpandIcon />
          {fullSize}
        </button>
      </div>
      <button
        type="button"
        onClick={open}
        aria-label={fullSize}
        tabIndex={-1}
        className="nrc-shot block w-full p-0 overflow-hidden"
        style={{ ...FRAME, cursor: "zoom-in" }}
      >
        <img
          src={src}
          alt={step.alt}
          width={1561}
          height={880}
          loading="lazy"
          className="block w-full h-auto"
        />
      </button>
      <Lightbox dlg={dlg} src={src} alt={step.alt} />
      <ol
        className={`grid gap-3 mt-4 list-none p-0 sm:grid-cols-2 ${
          step.notes.length === 3 ? "lg:grid-cols-3" : ""
        }`}
      >
        {step.notes.map((n, i) => (
          <li
            key={n.heading}
            className="flex gap-3 p-4"
            style={{ background: "var(--bg-elev)", borderRadius: 12 }}
          >
            <span
              aria-hidden="true"
              className="flex items-center justify-center shrink-0 text-xs font-semibold"
              style={{ width: 22, height: 22, borderRadius: 9999, background: MARKER, color: "#ffffff" }}
            >
              {i + 1}
            </span>
            <div className="text-sm leading-relaxed min-w-0" style={{ color: "var(--text-muted)" }}>
              <b className="block" style={{ color: "var(--text)" }}>
                {n.heading}
              </b>
              {n.lines.map((l) => (
                <p key={l.label} className="mt-1.5">
                  <span className="font-semibold" style={{ color: "var(--text)" }}>
                    {l.label}.{" "}
                  </span>
                  {l.body}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
