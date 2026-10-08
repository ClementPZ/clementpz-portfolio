"use client";

import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { musicQualityUpgraderText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

// Case study Music Quality Upgrader — suit le sélecteur de langue (EN/FR/ES).
// Contenu localisé dans i18n.ts → musicQualityUpgraderText[locale].
// Même langage que /nrc : pas de cartes ni de bordures, des rangées numérotées
// posées sur la page, un texte discret au lieu de pilules.

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code
      className="px-1.5 py-0.5 rounded-md text-[0.82em]"
      style={{
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        background: "var(--accent-subtle)",
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
      <p className="text-sm max-w-xl mb-8" style={{ color: "var(--text-muted)" }}>
        {sub}
      </p>
    </>
  );
}

// Rangée numérotée : le numéro en accent, un titre, un texte. Sert aux étapes
// et aux itérations.
function Row({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[3.5rem_1fr] items-baseline">
      <span className="font-display text-3xl font-bold" style={{ color: "var(--accent)" }}>
        {n}
      </span>
      <div>
        <h3 className="font-display text-lg font-bold mb-1.5">{title}</h3>
        <div className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

type Flow = (typeof musicQualityUpgraderText)["en"]["flow"];

function FlowSection({ flow }: { flow: Flow }) {
  return (
    <section className="pt-16">
      <SectionTitle title={flow.title} sub={flow.sub} />
      <div className="grid gap-8">
        {flow.steps.map((s) => (
          <Row key={s.n} n={s.n} title={s.title}>
            <p>
              {s.code && <Code>{s.code}</Code>}
              {s.body}
            </p>
          </Row>
        ))}
      </div>
      <p className="mt-10 text-sm leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
        <b style={{ color: "var(--text)" }}>{flow.asideBold}</b>
        {flow.aside}
      </p>
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
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {t.period}
          </span>
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
        <p className="mt-6 text-sm" style={{ color: "var(--text-muted)" }}>
          {t.stack.join(" · ")}
        </p>

        {/* Boucle d'upgrade, puis entrée d'un nouveau morceau */}
        <FlowSection flow={t.upgrade} />
        <FlowSection flow={t.flow} />

        {/* Outils */}
        <section className="pt-16">
          <SectionTitle title={t.tools.title} sub={t.tools.sub} />
          <dl className="grid gap-6">
            {t.tools.rows.map((tl) => (
              <div key={tl.name} className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="text-sm font-semibold">{tl.name}</dt>
                <dd className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {tl.role}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Modes */}
        <section className="pt-16">
          <SectionTitle title={t.modes.title} sub={t.modes.sub} />
          <div className="grid gap-8 sm:grid-cols-2">
            {t.modes.items.map((m) => (
              <div key={m.title}>
                <h3 className="font-display text-lg font-bold mb-1.5">{m.title}</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
                  {m.body}
                </p>
                <Code>{m.cmd}</Code>
              </div>
            ))}
          </div>
        </section>

        {/* Versions */}
        <section className="pt-16">
          <SectionTitle title={t.versions.title} sub={t.versions.sub} />
          <div className="grid gap-8">
            {t.versions.items.map((v) => (
              <Row key={v.v} n={v.v} title={v.title}>
                <p>{v.tags.join(" · ")}</p>
              </Row>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="pt-16">
          <SectionTitle title={t.roadmap.title} sub={t.roadmap.sub} />
          <div className="grid gap-6">
            {t.roadmap.items.map((r) => (
              <div key={r.title} className="grid grid-cols-[3.5rem_1fr] items-baseline">
                <span className="font-display text-xl font-bold" style={{ color: "var(--accent)" }}>
                  →
                </span>
                <div>
                  <h3 className="text-base font-semibold">{r.title}</h3>
                  <p className="text-sm leading-relaxed max-w-xl mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note légale */}
        <p className="mt-16 text-xs leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
          {t.legal}
        </p>

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
