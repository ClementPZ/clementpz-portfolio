"use client";

import { useRef, useState } from "react";
import type { NrcVisualText, VisualStep } from "../data/nrcVisuals";

// Visuels de /nrc : un comparateur avant/apres et des ecrans commentes.
// Les images sont des exports du canvas (public/nrc/<id>.webp), 1545 x 880.
// Le numero d'une note reprend celui du marqueur dessine sur l'image, d'ou la
// couleur bleue du canvas, en dur : c'est la couleur des marqueurs de l'image.

const MARKER = "oklch(56% 0.1 255)";
const RATIO = "1545 / 880";

// Les ecrans sont plus lisibles plus larges que la colonne de texte.
const BREAKOUT = "lg:-mx-24";

export function BeforeAfterSlider({ text }: { text: NrcVisualText["slider"] }) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function moveTo(clientX: number) {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }

  return (
    <figure className={`m-0 ${BREAKOUT}`}>
      <div
        ref={box}
        className="relative select-none overflow-hidden"
        style={{
          aspectRatio: RATIO,
          borderRadius: "var(--radius-lg)",
          background: "#ffffff",
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

        <span
          className="absolute top-3 left-3 text-xs font-medium px-2 py-1"
          style={{ background: "rgba(0,0,0,0.6)", color: "#ffffff", borderRadius: 6 }}
        >
          {text.before}
        </span>
        <span
          className="absolute top-3 right-3 text-xs font-medium px-2 py-1"
          style={{ background: "rgba(0,0,0,0.6)", color: "#ffffff", borderRadius: 6 }}
        >
          {text.after}
        </span>

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
          className="absolute top-0 bottom-0 flex items-center justify-center outline-none"
          style={{ left: `${pos}%`, width: 44, marginLeft: -22 }}
        >
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0"
            style={{ left: 21, width: 2, background: "#ffffff", boxShadow: "0 0 0 1px rgba(0,0,0,0.25)" }}
          />
          <span
            aria-hidden="true"
            className="relative flex items-center justify-center"
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
      <figcaption className="text-sm mt-3 lg:mx-24" style={{ color: "var(--text-muted)" }}>
        {text.caption}
      </figcaption>
    </figure>
  );
}

export function ScreenStep({ step, fullSize }: { step: VisualStep; fullSize: string }) {
  const src = `/nrc/${step.id}.webp`;
  return (
    <figure className="m-0">
      <h4 className="font-display text-base font-bold mb-3">{step.title}</h4>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        title={fullSize}
        className={`block overflow-hidden ${BREAKOUT}`}
        style={{ borderRadius: "var(--radius-lg)", background: "#ffffff" }}
      >
        <img
          src={src}
          alt={step.alt}
          width={1561}
          height={880}
          loading="lazy"
          className="block w-full h-auto"
        />
      </a>
      <ol className="grid gap-5 sm:grid-cols-2 mt-5 list-none p-0">
        {step.notes.map((n, i) => (
          <li key={n.heading} className="flex gap-3">
            <span
              aria-hidden="true"
              className="flex items-center justify-center shrink-0 text-xs font-semibold"
              style={{ width: 22, height: 22, borderRadius: 9999, background: MARKER, color: "#ffffff" }}
            >
              {i + 1}
            </span>
            <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <b style={{ color: "var(--text)" }}>{n.heading}</b>
              {n.lines.map((l) => (
                <p key={l.label} className="mt-1">
                  <span style={{ color: "var(--text)" }}>{l.label}. </span>
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
