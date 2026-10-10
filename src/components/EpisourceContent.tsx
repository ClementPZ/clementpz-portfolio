"use client";

import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { ScreenStep } from "./NrcVisuals";
import { work } from "../data/content";
import { episourceText, workText } from "../data/i18n";
import { EPISOURCE_SCREEN, episourceVisual } from "../data/episourceVisual";
import { useLocale } from "./LocaleProvider";

// Page Episource : le detail de la carte de la home. Meme coquille que /nrc
// (Nav, BackHome, pilule de periode, Footer, largeur max-w-3xl). Les cinq
// paragraphes sont les puces de workText.episource, un titre chacune. Le cas
// d'usage est l'ecran Click to Code : une recreation fictive, les chiffres sont
// ceux deja publies.

export function EpisourceContent() {
  const { locale } = useLocale();
  const t = episourceText[locale];
  const v = episourceVisual[locale];
  const w = work.find((x) => x.id === "episource");
  const bullets = workText[locale].episource.bullets;

  return (
    <div id="top">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="mb-10 flex items-center justify-between">
          <BackHome />
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            {w?.period}
          </span>
        </div>

        <p className="text-sm font-semibold mb-4" style={{ color: "var(--accent)" }}>
          {t.kicker}
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight mb-4">
          Episource
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
          {t.intro}
        </p>
        {w && (
          <p className="mt-6 text-sm" style={{ color: "var(--text-muted)" }}>
            {w.tags.join(" · ")}
          </p>
        )}

        <hr className="section-rule mt-14" />
        <section className="pt-14">
          <div className="grid gap-8">
            {bullets.map((body, i) => (
              <div key={t.sectionTitles[i]} className="grid grid-cols-[3.5rem_1fr] items-baseline">
                <span className="font-display text-3xl font-bold" style={{ color: "var(--accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold mb-1.5">{t.sectionTitles[i]}</h2>
                  <p className="text-base leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="section-rule mt-14" />
        <section id="click-to-code" className="pt-14 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold mb-2">{t.useCase.title}</h2>
          <p className="text-sm max-w-xl mb-7" style={{ color: "var(--text-muted)" }}>
            {t.useCase.intro}
          </p>
          <ScreenStep step={v.step} fullSize={v.fullSize} src={EPISOURCE_SCREEN} />
          <p className="text-xs mt-6" style={{ color: "var(--text-muted)" }}>
            {v.disclaimer}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
