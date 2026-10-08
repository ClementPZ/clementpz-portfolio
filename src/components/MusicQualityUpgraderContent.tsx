"use client";

import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { musicQualityUpgraderText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

// Case study Music Quality Upgrader — suit le sélecteur de langue (EN/FR/ES).
// Contenu localisé dans i18n.ts → musicQualityUpgraderText[locale].

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code
      className="px-1.5 py-0.5 rounded-md text-[0.82em]"
      style={{
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        background: "var(--accent-subtle)",
        border: "1px solid var(--border)",
        color: "var(--tag-text)",
      }}
    >
      {children}
    </code>
  );
}

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

type Flow = (typeof musicQualityUpgraderText)["en"]["flow"];

function FlowSection({ flow }: { flow: Flow }) {
  return (
    <section className="pt-12">
      <SectionTitle title={flow.title} sub={flow.sub} />
      <div className="grid gap-2.5">
        {flow.steps.map((s) => (
          <div key={s.n} className="surface flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-4">
            <span
              className="font-display font-bold text-sm shrink-0 w-7"
              style={{ color: "var(--accent)" }}
            >
              {s.n}
            </span>
            <div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                {s.code && <Code>{s.code}</Code>}
                {s.body}
              </p>
            </div>
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
        <b style={{ color: "var(--text)" }}>{flow.asideBold}</b>
        {flow.aside}
      </div>
    </section>
  );
}

export function MusicQualityUpgraderContent() {
  const { locale } = useLocale();
  const t = musicQualityUpgraderText[locale];

  return (
    <div id="top">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="mb-10 flex items-center justify-between">
          <BackHome />
          <span className="pill">{t.period}</span>
        </div>

        {/* Hero */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight mb-4">
          {t.title}
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
          {t.introPre}
          <b style={{ color: "var(--text)" }}>{t.introBold}</b>
          {t.introPost}
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {t.stack.map((s) => (
            <span key={s} className="pill">
              {s}
            </span>
          ))}
        </div>

        {/* Boucle d'upgrade, puis entrée d'un nouveau morceau */}
        <FlowSection flow={t.upgrade} />
        <FlowSection flow={t.flow} />

        {/* Outils */}
        <section className="pt-12">
          <SectionTitle title={t.tools.title} sub={t.tools.sub} />
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {t.tools.cols.map((h) => (
                  <th
                    key={h}
                    className="text-left text-xs uppercase tracking-wider font-semibold pb-2.5 px-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.tools.rows.map((tl) => (
                <tr key={tl.name}>
                  <td
                    className="px-3 py-3 font-semibold whitespace-nowrap align-top"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    {tl.name}
                  </td>
                  <td
                    className="px-3 py-3 align-top"
                    style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
                  >
                    {tl.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Modes */}
        <section className="pt-12">
          <SectionTitle title={t.modes.title} sub={t.modes.sub} />
          <div className="grid gap-3 sm:grid-cols-2">
            {t.modes.items.map((m, i) => (
              <div key={m.title} className={`surface px-5 py-5${i === 0 ? " card-featured" : ""}`}>
                <h3 className="font-display text-base font-bold mb-1.5">{m.title}</h3>
                <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
                  {m.body}
                </p>
                <Code>{m.cmd}</Code>
              </div>
            ))}
          </div>
        </section>

        {/* Versions */}
        <section className="pt-12">
          <SectionTitle title={t.versions.title} sub={t.versions.sub} />
          <div className="grid gap-2.5">
            {t.versions.items.map((v) => (
              <div key={v.v} className="surface grid sm:grid-cols-[64px_1fr] gap-2 sm:gap-4 px-5 py-4">
                <span className="font-display font-bold" style={{ color: "var(--accent)" }}>
                  {v.v}
                </span>
                <div>
                  <h3 className="text-base font-semibold mb-1.5">{v.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {v.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: "var(--tag-bg)", color: "var(--tag-text)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="pt-12">
          <SectionTitle title={t.roadmap.title} sub={t.roadmap.sub} />
          <div className="grid gap-2.5">
            {t.roadmap.items.map((r) => (
              <div
                key={r.title}
                className="flex gap-4 items-baseline px-5 py-4"
                style={{
                  border: "1px dashed var(--border-strong)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <span className="font-bold shrink-0" style={{ color: "var(--accent)" }}>
                  →
                </span>
                <div>
                  <h3 className="text-base font-semibold">{r.title}</h3>
                  <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note légale */}
        <div
          className="mt-14 px-5 py-3.5 text-xs"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            color: "var(--text-muted)",
          }}
        >
          {t.legal}
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
