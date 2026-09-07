"use client";

import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { NrcOrgChart } from "./NrcOrgChart";
import { profile } from "../data/content";
import { nrcText, accessMailtoHref } from "../data/i18n";
import { useLocale } from "./LocaleProvider";
import { fireConfetti } from "../lib/confetti";

// Case study NRC Health. Meme coquille que /music-downloader : Nav, BackHome,
// pilule de periode, Footer, largeur max-w-3xl.
//
// Les visuels n'existent pas encore : Figure rend un cadre en pointilles qui
// nomme ce qui doit y aller. Remplacer un cadre = echanger le composant contre
// une <img>, sans toucher au reste. Seul l'organigramme est vraiment dessine.

function SectionTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <>
      <h2 className="font-display text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm max-w-xl mb-7" style={{ color: "var(--text-muted)" }}>
        {sub}
      </p>
    </>
  );
}

function Figure({ label, caption }: { label: string; caption: string }) {
  return (
    <figure className="m-0">
      <div
        className="flex items-center justify-center px-6 py-14 text-center"
        style={{
          border: "1px dashed var(--border-strong)",
          borderRadius: "var(--radius-lg)",
          background: "var(--accent-subtle)",
        }}
      >
        <span
          className="text-[10px] uppercase tracking-widest font-semibold"
          style={{ color: "var(--text-muted)" }}
        >
          {label}
        </span>
      </div>
      <figcaption className="text-sm mt-3" style={{ color: "var(--text-muted)" }}>
        {caption}
      </figcaption>
    </figure>
  );
}

export function NrcContent() {
  const { locale } = useLocale();
  const t = nrcText[locale];

  return (
    <div id="top">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="mb-10 flex items-center justify-between">
          <BackHome />
          <span className="pill">{t.period}</span>
        </div>

        {/* Hero */}
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-4"
          style={{ color: "var(--accent)" }}
        >
          {t.kicker}
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight mb-4">
          {t.title}
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
          {t.intro}
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {t.stack.map((s) => (
            <span key={s} className="pill">
              {s}
            </span>
          ))}
        </div>

        {/* 1. L'equipe */}
        <section className="pt-14">
          <SectionTitle title={t.team.title} sub={t.team.sub} />

          <div className="grid gap-2.5">
            {t.team.hiring.map((h) => (
              <div key={h.n} className="surface flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-4">
                <span
                  className="font-display font-bold text-sm shrink-0 w-7"
                  style={{ color: "var(--accent)" }}
                >
                  {h.n}
                </span>
                <div>
                  <h3 className="text-base font-semibold">{h.title}</h3>
                  <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {h.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <NrcOrgChart />
          </div>

          <div className="grid gap-3 sm:grid-cols-3 mt-8">
            {t.team.strategy.map((s) => (
              <div key={s.title} className="surface px-5 py-5">
                <h3 className="font-display text-base font-bold mb-1.5">{s.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-3.5 px-5 py-3.5 text-sm"
            style={{
              background: "var(--accent-subtle)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              color: "var(--text-muted)",
            }}
          >
            <b style={{ color: "var(--text)" }}>{t.team.asideBold}</b>
            {t.team.aside}
          </div>
        </section>

        {/* 2. Le design system */}
        <section className="pt-14">
          <SectionTitle title={t.system.title} sub={t.system.sub} />
          <div className="grid gap-2.5">
            {t.system.items.map((i) => (
              <div key={i.title} className="surface px-5 py-4">
                <h3 className="text-base font-semibold">{i.title}</h3>
                <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {i.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/builder" className="btn-ghost">
              {t.system.builderCta}
            </Link>
          </div>
          <div className="mt-8">
            <Figure label={t.figureLabel} caption={t.system.figure} />
          </div>
        </section>

        {/* 3. Les cas produit */}
        <section className="pt-14">
          <SectionTitle title={t.cases.title} sub={t.cases.sub} />
          <div className="grid gap-8">
            {t.cases.items.map((c) => (
              <article key={c.n} className="surface px-5 py-6 sm:px-7">
                <div className="flex items-baseline gap-3 mb-2">
                  <span
                    className="font-display font-bold text-sm"
                    style={{ color: "var(--accent)" }}
                  >
                    {c.n}
                  </span>
                  <h3 className="font-display text-lg font-bold">{c.name}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {c.problem}
                </p>
                <ul
                  className="text-sm leading-relaxed mt-4 space-y-2 pl-4"
                  style={{ listStyle: "disc", color: "var(--text-muted)" }}
                >
                  {c.moves.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                {c.result && (
                  <p
                    className="mt-4 px-4 py-3 text-sm font-semibold"
                    style={{
                      background: "var(--accent-subtle)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius)",
                      color: "var(--text)",
                    }}
                  >
                    {c.result}
                  </p>
                )}
                <div className="mt-5">
                  <Figure label={t.figureLabel} caption={c.figure} />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Analytics */}
        <section className="pt-14">
          <SectionTitle title={t.analytics.title} sub={t.analytics.sub} />
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {t.analytics.body}
          </p>
          <div className="grid gap-2.5 mt-6">
            {t.analytics.points.map((p) => (
              <div
                key={p}
                className="flex gap-4 items-baseline px-5 py-4"
                style={{
                  border: "1px dashed var(--border-strong)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <span className="font-bold shrink-0" style={{ color: "var(--accent)" }}>
                  →
                </span>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {p}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA contact */}
        <div
          className="mt-16 rounded-2xl p-8 flex items-center justify-center gap-4"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <a
            href={accessMailtoHref(profile.email, locale)}
            onClick={(e) => fireConfetti(e.currentTarget)}
            className="btn-accent shrink-0"
          >
            {t.contactCta}
          </a>
        </div>

        <div className="mt-10">
          <Link href="/" className="btn-ghost">
            {t.backHome}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
