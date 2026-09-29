"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { nrcSystemText } from "../data/i18n";
import { flowbite, flowbiteGround, type FlowbiteColor } from "../data/flowbiteSystem";
import { useLocale } from "./LocaleProvider";
import { FlowbiteIconBrowser } from "./FlowbiteIconBrowser";

// Extraction Flowbite, sous /nrc. Meme coquille que /nrc : Nav, BackHome (vers
// /nrc), pilule, Footer, max-w-3xl. Les valeurs de l'extraction (couleurs,
// ombres, apercus) sont des DONNEES copiees de la source, donc en dur par
// nature, comme les couleurs d'identite des cartes projet. Tout le reste de la
// page passe par les variables du site. Notes d'usage et guides en anglais.

const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";
const SYSTEM_FONT = "ui-sans-serif, system-ui, sans-serif";
const GROUP_ORDER = ["Actions", "Forms", "Navigation", "Surfaces", "Feedback"];

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

// Inline minimal des guides : `code` et **gras**, rien d'autre.
function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*|`[^`]+`)/).map((part, i) => {
        if (part.startsWith("**")) {
          return (
            <b key={i} style={{ color: "var(--text)" }}>
              {part.slice(2, -2)}
            </b>
          );
        }
        if (part.startsWith("`")) {
          return (
            <code
              key={i}
              className="px-1 py-0.5 rounded text-[0.85em]"
              style={{
                fontFamily: MONO,
                background: "var(--accent-subtle)",
                color: "var(--tag-text)",
              }}
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

function Guide({ text }: { text: string }) {
  const blocks = text.split(/\n\s*\n/).filter(Boolean);
  return (
    <div className="grid gap-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i} className="grid gap-1.5 pl-4" style={{ listStyle: "disc" }}>
              {lines.map((l) => (
                <li key={l}>
                  <Inline text={l.slice(2)} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i}>
            <Inline text={block.replace(/\n/g, " ")} />
          </p>
        );
      })}
    </div>
  );
}

function ColorCard({ c }: { c: FlowbiteColor }) {
  return (
    <div className="surface flex gap-3 p-3">
      <div
        className="shrink-0"
        style={{
          width: 44,
          height: 44,
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)",
          background: c.value,
        }}
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold">
          {c.name}
          <span className="ml-2 text-[11px] font-normal" style={{ fontFamily: MONO, color: "var(--text-muted)" }}>
            {c.value}
          </span>
        </p>
        <p className="text-xs mt-0.5 leading-snug" style={{ color: "var(--text-muted)" }}>
          {c.usage}
        </p>
      </div>
    </div>
  );
}

export function NrcDesignSystemContent() {
  const { locale } = useLocale();
  const t = nrcSystemText[locale];

  // Une rangee par teinte : le prefixe du nom (gray, blue, green...).
  const hues: { hue: string; colors: FlowbiteColor[] }[] = [];
  for (const c of flowbite.colors) {
    const hue = c.name.split("-")[0];
    const row = hues.find((h) => h.hue === hue);
    if (row) row.colors.push(c);
    else hues.push({ hue, colors: [c] });
  }
  const shade = (name: string) => flowbite.colors.find((c) => c.name === name)?.value;
  const panel = shade("gray-100");

  return (
    <div id="top">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="mb-10 flex items-center justify-between">
          <BackHome href="/nrc" label={t.backCase} />
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
        <div
          className="mt-6 px-5 py-3.5 text-sm"
          style={{
            background: "var(--accent-subtle)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            color: "var(--text-muted)",
          }}
        >
          <b style={{ color: "var(--text)" }}>{t.disclaimerBold}</b>
          {t.disclaimer}{" "}
          <a
            href="https://flowbite.com/docs/getting-started/introduction/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "var(--accent)" }}
          >
            {t.sourceLabel}
          </a>
        </div>

        {/* Couleur */}
        <section className="pt-14">
          <SectionTitle title={t.color.title} sub={t.color.sub} />
          <div className="grid gap-8">
            {hues.map(({ hue, colors }) => (
              <div key={hue}>
                <h3
                  className="text-xs uppercase tracking-widest font-semibold mb-2.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {hue}
                </h3>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {colors.map((c) => (
                    <ColorCard key={c.name} c={c} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typographie */}
        <section className="pt-14">
          <SectionTitle title={t.type.title} sub={t.type.sub} />
          <div className="grid gap-8">
            {flowbite.type.map((g) => (
              <div key={g.name}>
                <h3
                  className="text-xs uppercase tracking-widest font-semibold mb-2.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {g.name} · {flowbite.family}
                </h3>
                <div className="grid gap-2.5">
                  {g.styles.map((s) => (
                    <div key={s.name} className="surface px-5 py-4">
                      <p
                        className="overflow-hidden text-ellipsis whitespace-nowrap"
                        style={{
                          fontFamily: SYSTEM_FONT,
                          fontSize: s.fontSize,
                          lineHeight: s.lineHeight,
                          fontWeight: s.fontWeight,
                        }}
                      >
                        Patient experience
                      </p>
                      <p className="text-xs mt-2" style={{ fontFamily: MONO, color: "var(--text-muted)" }}>
                        {s.name} · {s.fontSize} / {s.lineHeight} · {s.fontWeight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Espacements */}
        <section className="pt-14">
          <SectionTitle title={t.spacing.title} sub={t.spacing.sub} />
          <div className="grid gap-2.5">
            {flowbite.spacing.map((s) => (
              <div key={s.name} className="surface px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold shrink-0 w-20">{s.name}</span>
                  <span
                    className="text-xs shrink-0 w-12"
                    style={{ fontFamily: MONO, color: "var(--text-muted)" }}
                  >
                    {s.value}
                  </span>
                  <span
                    aria-hidden
                    style={{
                      display: "block",
                      height: 12,
                      width: s.value,
                      maxWidth: "100%",
                      borderRadius: 2,
                      background: "var(--accent)",
                    }}
                  />
                </div>
                <p className="text-xs mt-1.5" style={{ color: "var(--text-muted)" }}>
                  {s.usage}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Arrondis */}
        <section className="pt-14">
          <SectionTitle title={t.radius.title} sub={t.radius.sub} />
          <div className="grid gap-2.5 grid-cols-2 sm:grid-cols-3">
            {flowbite.radius.map((r) => (
              <div key={r.name} className="surface p-4">
                <div
                  aria-hidden
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: r.value,
                    background: "var(--accent-subtle)",
                    border: "2px solid var(--accent)",
                  }}
                />
                <p className="text-sm font-semibold mt-3">{r.name}</p>
                <p className="text-[11px]" style={{ fontFamily: MONO, color: "var(--text-muted)" }}>
                  {r.value}
                </p>
                <p className="text-xs mt-1 leading-snug" style={{ color: "var(--text-muted)" }}>
                  {r.usage}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ombres : posees sur un panneau gris clair, l'extraction est en mode clair */}
        <section className="pt-14">
          <SectionTitle title={t.shadow.title} sub={t.shadow.sub} />
          <div
            className="grid gap-4 sm:grid-cols-3 p-5"
            style={{ background: panel, borderRadius: "var(--radius-lg)" }}
          >
            {flowbite.shadow.map((s) => (
              <div
                key={s.name}
                className="p-4"
                style={{
                  background: flowbiteGround,
                  borderRadius: 8,
                  boxShadow: s.value,
                  color: shade("gray-900"),
                }}
              >
                <p className="text-sm font-semibold">{s.name}</p>
                <p className="text-xs mt-1 leading-snug" style={{ color: shade("gray-600") }}>
                  {s.usage}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Icones */}
        <section className="pt-14">
          <SectionTitle title={t.icons.title} sub={t.icons.sub} />
          <FlowbiteIconBrowser text={t.icons} />
        </section>

        {/* Composants */}
        <section className="pt-14">
          <SectionTitle title={t.components.title} sub={t.components.sub} />
          <div className="grid gap-12">
            {GROUP_ORDER.map((group) => {
              const items = flowbite.components.filter((c) => c.group === group);
              if (items.length === 0) return null;
              return (
                <div key={group}>
                  <h3
                    className="text-xs uppercase tracking-widest font-semibold mb-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.groups[group] ?? group}
                  </h3>
                  <div className="grid gap-6">
                    {items.map((c) => (
                      <article key={c.name} className="surface px-5 py-5 sm:px-6">
                        <h4 className="font-display text-lg font-bold mb-2">{c.name}</h4>
                        <Guide text={c.guide} />
                        <iframe
                          src={`/flowbite/components/${c.name}.html`}
                          title={c.name}
                          loading="lazy"
                          className="w-full mt-5"
                          style={{
                            height: c.height,
                            border: "1px solid var(--border)",
                            borderRadius: "var(--radius)",
                            background: flowbiteGround,
                          }}
                        />
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-sm mt-8" style={{ color: "var(--text-muted)" }}>
            {t.components.notBuilt}
          </p>
        </section>

        <div className="mt-16">
          <Link href="/nrc" className="btn-ghost">
            {t.backCase}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
