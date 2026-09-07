"use client";

import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { BuilderDiagram } from "./BuilderDiagram";
import { profile } from "../data/content";
import { builderText, accessMailtoHref } from "../data/i18n";
import { useLocale } from "./LocaleProvider";
import { fireConfetti } from "../lib/confetti";

export function BuilderContent() {
  const { locale } = useLocale();
  const t = builderText[locale];
  return (
    <div id="top">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="mb-10">
          <BackHome />
        </div>
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-4"
          style={{ color: "var(--accent)" }}
        >
          {t.kicker}
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-tight mb-6">
          {t.title}
        </h1>
        <p
          className="text-lg sm:text-xl leading-relaxed mb-14"
          style={{ color: "var(--text-muted)" }}
        >
          {t.intro}
        </p>

        <div className="space-y-12">
          {t.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-3">{s.heading}</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {s.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-8">
          <BuilderDiagram />
        </div>

        {/* CTA contact : le bouton seul, pas de boite autour */}
        <div className="mt-16">
          <a
            href={accessMailtoHref(profile.email, locale)}
            onClick={(e) => fireConfetti(e.currentTarget)}
            className="btn-accent"
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
