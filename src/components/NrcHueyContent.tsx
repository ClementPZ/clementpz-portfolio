"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { nrcHueyText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

// Cas Huey, sous /nrc. Meme coquille que /nrc/design-system : Nav, BackHome
// (vers /nrc), pilule, Footer, max-w-3xl. Rejoue le canvas de design en
// composants du site : tout passe par les variables des deux themes, les
// schemas (marqueurs, drawer) sont du SVG et du CSS, sans image.

const ACCENT = "var(--accent)";
const INK = "var(--text)";
const MUTED = { color: "var(--text-muted)" } as const;

function Section({
  n,
  title,
  body,
  children,
}: {
  n: string;
  title: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <section className="pt-14">
      <p className="font-display font-bold text-sm mb-1" style={{ color: ACCENT }}>
        {n}
      </p>
      <h2 className="font-display text-2xl font-bold mb-2">{title}</h2>
      {body && (
        <p className="text-sm leading-relaxed max-w-xl mb-7" style={MUTED}>
          {body}
        </p>
      )}
      {!body && <div className="mb-5" />}
      {children}
    </section>
  );
}

function Eyebrow({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <span
      className="text-[11px] font-semibold uppercase tracking-wider"
      style={{ color: "var(--text-muted)", ...style }}
    >
      {children}
    </span>
  );
}

// Marqueur Huey : trois formes (une par principe), quatre variantes de graisse
// et de couleur. `shape` 0 boite, 1 cible, 2 croix.
function Marker({ shape, variant, size }: { shape: number; variant: number; size: number }) {
  const outline = variant === 0 || variant === 1 ? ACCENT : INK;
  const elem = variant === 1 ? INK : ACCENT;
  const hollow = variant === 0 || variant === 3;
  const sw = variant === 0 ? 1.5 : 2;
  const line = { fill: "none", stroke: outline, strokeWidth: sw } as const;
  const el = {
    fill: hollow ? "none" : elem,
    stroke: elem,
    strokeWidth: hollow ? sw : 0,
  } as const;
  const elLine = { fill: "none", stroke: elem, strokeWidth: sw, strokeLinecap: "round" } as const;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      {shape === 0 && (
        <>
          <rect x="5" y="15" width="30" height="24" rx="3" style={line} />
          <circle cx="35" cy="15" r="5" style={el} />
        </>
      )}
      {shape === 1 && (
        <>
          <circle cx="24" cy="24" r="9" style={line} />
          <circle cx="24" cy="24" r="2" style={{ ...el, fill: elem, strokeWidth: 0 }} />
          <path d="M24 5v6M24 37v6M5 24h6M37 24h6" style={elLine} />
        </>
      )}
      {shape === 2 && (
        <>
          <rect x="7" y="11" width="34" height="26" rx="3" style={line} />
          <path d="M16 18l16 12M32 18L16 30" style={elLine} />
        </>
      )}
    </svg>
  );
}

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

// Le drawer dessine en maquette. Les annotations sont posees a la main a cote
// (hauteur fixe) sur ecran large, et retombent en liste sur mobile.
const DRAWER_H = 400;
const ANNOTATION_TOPS = [4, 62, 132, 214, 352];

function DrawerMock({
  disclaimer,
  user,
  ask,
}: {
  disclaimer: string;
  user: string;
  ask: string;
}) {
  const bar = (w: string) => (
    <div style={{ height: 8, width: w, borderRadius: 4, background: "var(--border)" }} />
  );
  return (
    <div
      aria-hidden
      className="flex flex-col shrink-0 w-full sm:w-[240px] overflow-hidden"
      style={{
        height: DRAWER_H,
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
      }}
    >
      <div
        className="flex items-center justify-between px-3"
        style={{ height: 44, borderBottom: "1px solid var(--border)" }}
      >
        <span className="flex items-center gap-2 text-xs font-semibold">
          <span style={{ width: 9, height: 9, borderRadius: 9999, background: ACCENT }} />
          Huey
        </span>
        <span className="flex gap-2.5" style={{ color: ACCENT }}>
          <svg {...iconProps} fill="currentColor" stroke="none">
            <circle cx="4" cy="10" r="1.6" />
            <circle cx="10" cy="10" r="1.6" />
            <circle cx="16" cy="10" r="1.6" />
          </svg>
          <svg {...iconProps}>
            <path d="M11 3h6v6M17 3l-7 7M15 12v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
          </svg>
          <svg {...iconProps}>
            <path d="M5 5l10 10M15 5L5 15" />
          </svg>
        </span>
      </div>
      <p
        className="px-3 py-2 text-[10px] leading-snug"
        style={{ ...MUTED, background: "var(--bg-elev)", borderBottom: "1px solid var(--border)" }}
      >
        {disclaimer}
      </p>
      <div className="flex-1 p-3 flex flex-col gap-3">
        <div
          className="self-end max-w-[80%] px-2.5 py-2 text-[11px] leading-snug"
          style={{ background: "var(--accent-subtle)", borderRadius: "var(--radius)" }}
        >
          {user}
        </div>
        <div className="grid gap-1.5">
          {bar("100%")}
          {bar("92%")}
          {bar("80%")}
          {bar("60%")}
        </div>
        <div className="flex gap-2" style={MUTED}>
          <svg {...iconProps}>
            <path d="M6 9l3-6a2 2 0 0 1 2 2v3h4a1.5 1.5 0 0 1 1.5 1.8l-1 5A2 2 0 0 1 13.5 16H6zM6 9H3v7h3" />
          </svg>
          <svg {...iconProps}>
            <path d="M14 11l-3 6a2 2 0 0 1-2-2v-3H5a1.5 1.5 0 0 1-1.5-1.8l1-5A2 2 0 0 1 6.5 4H14zM14 11h3V4h-3" />
          </svg>
        </div>
      </div>
      <div className="p-2.5" style={{ borderTop: "1px solid var(--border)" }}>
        <div
          className="flex items-center gap-2 px-2.5 text-xs"
          style={{ height: 40, border: "1px solid var(--border)", borderRadius: "var(--radius)" }}
        >
          <span style={{ width: 9, height: 9, borderRadius: 9999, background: ACCENT }} />
          <span className="flex-1" style={MUTED}>
            {ask}
          </span>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" style={{ color: ACCENT }}>
            <path d="M3 3l14 7-14 7 2-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function NrcHueyContent() {
  const { locale } = useLocale();
  const t = nrcHueyText[locale];
  const { axes, quadrants, questions, context } = t.map;

  const axisLabel = (text: string) => (
    <Eyebrow style={{ alignSelf: "center", textAlign: "center", lineHeight: 1.3 }}>{text}</Eyebrow>
  );
  const quad = (i: number, tint: string) => (
    <div className="p-3" style={{ background: tint, borderRadius: "var(--radius)" }}>
      <p className="text-sm font-semibold">{quadrants[i].title}</p>
      <p className="text-xs mt-1 leading-snug" style={MUTED}>
        {quadrants[i].body}
      </p>
    </div>
  );

  return (
    <div id="top">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="mb-10 flex items-center justify-between gap-4">
          <BackHome href="/nrc" label={t.backCase} />
          <span className="text-sm text-right" style={MUTED}>
            {t.period}
          </span>
        </div>

        {/* Hero */}
        <p className="text-sm font-semibold mb-4" style={{ color: ACCENT }}>
          {t.kicker}
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight mb-4">
          {t.title}
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={MUTED}>
          {t.intro}
        </p>
        <dl className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
          {t.meta.map((m) => (
            <div key={m.label}>
              <dt>
                <Eyebrow>{m.label}</Eyebrow>
              </dt>
              <dd className="text-sm font-medium mt-1">{m.value}</dd>
            </div>
          ))}
        </dl>

        {/* 01 Role */}
        <Section n="01" title={t.role.title}>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.role.items.map((r) => (
              <p key={r.verb} className="panel p-5 text-sm leading-relaxed">
                <b>{r.verb}</b> {r.rest}
              </p>
            ))}
          </div>
        </Section>

        {/* 02 Touchpoints */}
        <Section n="02" title={t.map.title} body={t.map.body}>
          <div className="panel p-4 sm:p-6">
            <div className="grid grid-cols-[4.5rem_1fr_1fr] sm:grid-cols-[7rem_1fr_1fr] gap-2 sm:gap-3">
              <span aria-hidden />
              {axisLabel(axes.left)}
              {axisLabel(axes.right)}
              {axisLabel(axes.top)}
              {quad(0, "var(--accent-subtle)")}
              {quad(1, "var(--accent-subtle)")}
              {axisLabel(axes.bottom)}
              {quad(2, "var(--bg-raised)")}
              {quad(3, "var(--bg-raised)")}
            </div>
          </div>
          <div className="grid gap-3 mt-3">
            {questions.map((q) => (
              <div key={q.label} className="panel p-5">
                <Eyebrow>{q.label}</Eyebrow>
                <div className="flex flex-wrap gap-2 mt-3">
                  {q.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs"
                      style={{ background: "var(--accent-subtle)", borderRadius: 9999 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="panel card-featured p-5">
              <Eyebrow>{context.label}</Eyebrow>
              <p className="font-display text-3xl font-bold mt-2">{context.big}</p>
              <p className="text-sm mt-1" style={MUTED}>
                {context.sub}
              </p>
            </div>
          </div>
        </Section>

        {/* 03 Principles */}
        <Section n="03" title={t.principles.title} body={t.principles.body}>
          <div className="grid gap-3 sm:grid-cols-3">
            {t.principles.items.map((p, i) => (
              <div key={p.name} className="panel p-6">
                <Marker shape={i} variant={2} size={56} />
                <p className="font-display font-bold text-sm mt-4" style={{ color: ACCENT }}>
                  {p.n}
                </p>
                <h3 className="font-display text-xl font-bold mt-1">{p.name}</h3>
                <p className="text-sm font-semibold mt-2 leading-snug">{p.tagline}</p>
                <p className="text-sm mt-2 leading-relaxed" style={MUTED}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* 04 Test */}
        <Section n="04" title={t.test.title} body={t.test.body}>
          <div className="grid gap-3">
            {t.test.items.map((it) => (
              <div key={it.tag} className="panel p-5 flex items-center gap-4">
                <span
                  className="shrink-0 flex items-center justify-center"
                  style={{ width: 32, height: 32, borderRadius: 9999, background: ACCENT }}
                  aria-hidden
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 10.5l3 3 7-7"
                      stroke="var(--accent-text)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="flex-1 text-sm font-medium leading-snug">{it.q}</p>
                <span
                  className="shrink-0 px-2.5 py-0.5 text-xs font-semibold"
                  style={{ background: "var(--accent-subtle)", borderRadius: "var(--radius)" }}
                >
                  {it.tag}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* 05 UI */}
        <Section n="05" title={t.ui.title} body={t.ui.body}>
          <div className="panel p-5 sm:p-6">
            <Eyebrow>{t.ui.markerLabel}</Eyebrow>
            <div className="grid grid-cols-3 gap-y-5 mt-5 justify-items-center">
              {t.ui.markerNames.map((name) => (
                <span key={name} className="text-xs font-semibold">
                  {name}
                </span>
              ))}
              {[0, 1, 2, 3].flatMap((v) =>
                [0, 1, 2].map((s) => <Marker key={`${v}-${s}`} shape={s} variant={v} size={52} />),
              )}
            </div>
          </div>
          <div className="panel p-5 sm:p-6 mt-3">
            <Eyebrow>{t.ui.drawerLabel}</Eyebrow>
            <div className="mt-5 flex flex-col sm:flex-row gap-5 sm:gap-8">
              <DrawerMock disclaimer={t.ui.mockDisclaimer} user={t.ui.mockUser} ask={t.ui.mockAsk} />
              <div className="grid gap-3 sm:block sm:relative sm:h-[400px] flex-1">
                {t.ui.annotations.map((a, i) => (
                  <div key={a.label} className="sm:absolute" style={{ top: ANNOTATION_TOPS[i] }}>
                    <p className="text-sm font-semibold" style={{ color: ACCENT }}>
                      {a.label}
                    </p>
                    <p className="text-xs mt-0.5" style={MUTED}>
                      {a.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* 06 Outcome */}
        <Section n="06" title={t.outcome.title} body={t.outcome.body} />

        <div className="mt-10">
          <Link href="/nrc" className="btn-ghost">
            {t.backCase}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
