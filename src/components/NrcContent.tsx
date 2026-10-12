"use client";

import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { NrcOrgChart } from "./NrcOrgChart";
import { NrcRoadmap } from "./NrcRoadmap";
import { nrcText, visualsNotice } from "../data/i18n";
import { nrcVisuals } from "../data/nrcVisuals";
import { BeforeAfterSlider, ScreenStep } from "./NrcVisuals";
import { flowbite, flowbiteGround } from "../data/flowbiteSystem";
import { useLocale } from "./LocaleProvider";

// Case study NRC Health. Meme coquille que /music-quality-upgrader : Nav, BackHome,
// pilule de periode, Footer, largeur max-w-3xl.
//
// Cas a et c : visuels dans NrcVisuals (exports du canvas, textes dans
// nrcVisuals.ts). Cas b : pas de source, donc pas de visuel.

// Apercu du design system extrait : une bande de teintes et deux composants
// vivants et compacts, la page complete est /nrc/design-system.
const TEASER_SHADES = ["violet-600", "gray-500", "green-600", "amber-500", "red-600", "purple-600", "teal-600"];
const TEASER_PREVIEWS = [
  { name: "Badge", height: 90 },
  { name: "SearchInput", height: 90 },
];

function SectionTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <>
      <h2 className={`font-display text-2xl font-bold ${sub ? "mb-2" : "mb-7"}`}>{title}</h2>
      {sub && (
        <p className="text-sm max-w-xl mb-7" style={{ color: "var(--text-muted)" }}>
          {sub}
        </p>
      )}
    </>
  );
}

export function NrcContent() {
  const { locale } = useLocale();
  const t = nrcText[locale];
  const v = nrcVisuals[locale];

  return (
    <div id="top">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="mb-10 flex items-center justify-between">
          <BackHome />
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            {t.period}
          </span>
        </div>

        {/* Hero */}
        <p
          className="text-sm font-semibold mb-4"
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
        <p className="mt-6 text-sm" style={{ color: "var(--text-muted)" }}>
          {t.stack.join(" · ")}
        </p>
        <p className="mt-4 text-xs max-w-xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {visualsNotice[locale]}
        </p>

        {/* 1. L'equipe */}
        <hr className="section-rule mt-14" />
        <section className="pt-14">
          <SectionTitle title={t.team.title} />

          <NrcOrgChart />

          <div className="grid gap-8 mt-12">
            {t.team.strategy.map((s, i) => (
              <div key={s.title} className="grid grid-cols-[3.5rem_1fr] items-baseline">
                <span className="font-display text-3xl font-bold" style={{ color: "var(--accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold mb-1.5">{s.title}</h3>
                  <p className="text-base leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <NrcRoadmap />

          <div className="mt-16">
            <p className="font-display text-2xl sm:text-3xl font-bold leading-snug">
              {t.team.asideBold.trim()}
            </p>
            <p className="mt-4 text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
              {t.team.aside}
            </p>
          </div>
        </section>

        {/* 2. Les cas produit */}
        <hr className="section-rule mt-14" />
        <section className="pt-14">
          <SectionTitle title={t.cases.title} sub={t.cases.sub} />
          <p className="text-sm max-w-xl -mt-4 mb-7" style={{ color: "var(--text-muted)" }}>
            {v.disclaimer}
          </p>
          <div className="grid gap-16">
            {t.cases.items.map((c) => (
              <article key={c.n}>
                <div className="flex items-baseline gap-3 mb-2">
                  <span
                    className="font-display font-bold text-sm"
                    style={{ color: "var(--accent)" }}
                  >
                    {c.n}
                  </span>
                  <h3 className="font-display text-lg font-bold">{c.name}</h3>
                </div>
                {c.n === "a" && (
                  <div className="mt-6 mb-8">
                    <BeforeAfterSlider text={v.slider} />
                  </div>
                )}
                <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {c.problem}
                </p>
                <ul
                  className="text-base leading-relaxed mt-4 space-y-2 pl-4"
                  style={{ listStyle: "disc", color: "var(--text-muted)" }}
                >
                  {c.moves.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                {c.status && (
                  <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <b style={{ color: "var(--text)" }}>{c.status.label}</b>
                    {c.status.body}
                  </p>
                )}
                {c.result && (
                  <p className="mt-4 text-base font-semibold" style={{ color: "var(--text)" }}>
                    {c.result}
                  </p>
                )}
                {c.more && (
                  <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {c.more.body}
                  </p>
                )}
                {c.n === "b" && (
                  <figure className="m-0 mt-6" style={{ maxWidth: 480 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/nrc/outreach-email-after.webp"
                      alt={c.figure}
                      width={1280}
                      height={1800}
                      loading="lazy"
                      className="block w-full h-auto"
                      style={{
                        borderRadius: "var(--radius)",
                        border: "1px solid var(--border-strong)",
                        boxShadow: "var(--shadow)",
                      }}
                    />
                    <figcaption className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
                      {c.figure}
                    </figcaption>
                  </figure>
                )}
                {c.n === "a" && (
                  <div className="mt-6 grid gap-12">
                    {v.steps.map((step, i) => (
                      <ScreenStep key={step.id} step={step} index={i} fullSize={v.fullSize} />
                    ))}
                  </div>
                )}
                {c.n === "c" && (
                  <div className="mt-6 grid gap-12">
                    {v.huey.map((step, i) => (
                      <ScreenStep key={step.id} step={step} index={i} fullSize={v.fullSize} />
                    ))}
                  </div>
                )}
                {c.more && (
                  <div className="mt-8 flex justify-end">
                    <Link href="/nrc/huey" className="hover:underline" style={{ color: "var(--accent)" }}>
                      {c.more.cta} →
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* 3. Le design system */}
        <hr className="section-rule mt-14" />
        <section className="pt-14">
          <SectionTitle title={t.system.title} sub={t.system.sub} />
          <div className="grid gap-6">
            {t.system.items.map((i) => (
              <div key={i.title}>
                <h3 className="text-base font-semibold">{i.title}</h3>
                <p className="text-base mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {i.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 panel p-5">
            <div className="flex gap-1.5" aria-hidden>
              {TEASER_SHADES.map((n) => (
                <div
                  key={n}
                  className="flex-1"
                  style={{
                    height: 40,
                    borderRadius: "var(--radius)",
                    background: flowbite.colors.find((c) => c.name === n)?.value,
                  }}
                />
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 items-start mt-3">
              {TEASER_PREVIEWS.map(({ name, height }) => (
                <iframe
                  key={name}
                  src={`/flowbite/components/${name}.html`}
                  title={name}
                  loading="lazy"
                  scrolling="no"
                  className="w-full"
                  style={{
                    height,
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    background: flowbiteGround,
                  }}
                />
              ))}
            </div>
            <p className="text-sm mt-4" style={{ color: "var(--text-muted)" }}>
              {t.system.teaserCaption}
            </p>
            <div className="mt-4 flex justify-end">
              <Link href="/nrc/design-system" className="btn-ghost">
                {t.system.exploreCta} →
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Analytics */}
        <hr className="section-rule mt-14" />
        <section className="pt-14">
          <SectionTitle title={t.analytics.title} />
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {t.analytics.body}
          </p>
          <div className="grid gap-2.5 mt-6">
            {t.analytics.points.map((p) => (
              <div
                key={p}
                className="flex gap-4 items-baseline py-2"
              >
                <span className="font-bold shrink-0" style={{ color: "var(--accent)" }}>
                  →
                </span>
                <p className="text-base" style={{ color: "var(--text-muted)" }}>
                  {p}
                </p>
              </div>
            ))}
          </div>
        </section>

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
