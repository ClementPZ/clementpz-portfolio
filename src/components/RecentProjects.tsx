"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { recentProjects } from "../data/content";
import { projectText, statusText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

export function RecentProjects() {
  const { locale, t } = useLocale();
  const localized = projectText[locale];
  const status = statusText[locale];
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const builderIndex = Math.max(
    0,
    recentProjects.findIndex((p) => p.id === "builder-flow")
  );

  // Câble les flèches custom (btn-ghost) sur la navigation Swiper.
  const wireNav = (swiper: SwiperClass) => {
    const nav = swiper.params.navigation;
    if (nav && typeof nav !== "boolean") {
      nav.prevEl = prevRef.current;
      nav.nextEl = nextRef.current;
    }
  };

  return (
    <section id="recent" className="py-16" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-baseline justify-between mb-8">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">{t.recentTitle}</h2>
          <p className="text-sm mt-2 max-w-xl" style={{ color: "var(--text-muted)" }}>
            {t.recentSub}
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <button
            ref={prevRef}
            type="button"
            aria-label="Previous"
            className="btn-ghost"
            style={{ width: 44, height: 44, justifyContent: "center", padding: 0 }}
          >
            ←
          </button>
          <button
            ref={nextRef}
            type="button"
            aria-label="Next"
            className="btn-ghost"
            style={{ width: 44, height: 44, justifyContent: "center", padding: 0 }}
          >
            →
          </button>
        </div>
      </div>

      <Swiper
        modules={[EffectCoverflow, Navigation]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        spaceBetween={16}
        initialSlide={builderIndex}
        // Rotation/profondeur modérées : au-delà, les cartes se recouvrent au
        // point de rogner le titre de la voisine.
        coverflowEffect={{ rotate: 14, stretch: 0, depth: 120, modifier: 1, slideShadows: false }}
        navigation={{ enabled: true }}
        onBeforeInit={wireNav}
        style={{ paddingTop: 20, paddingBottom: 44 }}
      >
        {recentProjects.map((p) => {
          const lx = localized[p.id];
          // Défauts du deck : blanc translucide. Une carte ne les remplace que
          // si sa marque impose sa propre hiérarchie (p.brand).
          const badgeBg = p.brand?.badgeBg ?? "rgba(255,255,255,0.22)";
          const badgeText = p.brand?.badgeText ?? "#ffffff";
          const tagBg = p.brand?.tagBg ?? "rgba(255,255,255,0.14)";
          const motifColor = p.brand?.motif ?? "#cafe00";
          return (
            <SwiperSlide key={p.name} style={{ width: 320 }}>
              <article
                className="flex flex-col justify-end rounded-2xl p-6 relative overflow-hidden"
                style={{
                  minHeight: 420,
                  background: `linear-gradient(150deg, ${p.accent} 0%, ${p.accent2} 100%)`,
                  color: "#ffffff",
                  boxShadow: "0 22px 50px rgba(15, 4, 18, 0.55)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {p.image && (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt="" className="proj-img" />
                    <div className="proj-overlay" />
                  </>
                )}

                {/* Lien étiré : toute la carte devient cliquable (case study) */}
                {p.link && (
                  <a href={p.link} aria-label={p.name} className="absolute inset-0 z-10" />
                )}

                <span
                  className="absolute top-5 right-5 z-10 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{
                    // Pas de backdrop-filter ici : dans le contexte 3D de Swiper,
                    // il crée un contexte d'empilement qui échappe au clipping de
                    // la carte et vient flotter au-dessus de la slide voisine.
                    background: badgeBg,
                    color: badgeText,
                  }}
                >
                  {status[p.status]}
                </span>

                <div className="relative">
                  {/* Signe graphique du projet, au-dessus du titre comme sur la
                      page /spota. Meme polyline que ZIGZAG_POINTS la-bas. */}
                  {p.motif === "zigzag" && (
                    <svg
                      viewBox="0 0 316 18"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                      className="block w-full mb-4"
                      style={{ height: 14 }}
                    >
                      <polyline
                        points="1.2,13.8 28.8,3.8 54.7,13.8 79.5,3.8 101.7,13.8 132.5,3.8 150.6,13.8 179.4,3.8 197.1,13.8 226.9,3.8 246.0,13.8 271.9,3.8 293.4,13.8 314.2,3.8"
                        fill="none"
                        stroke={motifColor}
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  )}
                  <h3 className="font-display text-2xl font-bold mb-2 leading-tight">{p.name}</h3>
                  <p className="text-sm font-medium mb-3" style={{ color: "rgba(255,255,255,0.9)" }}>
                    {lx?.tagline}
                  </p>
                  <p
                    className="text-xs leading-relaxed mb-4"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                  >
                    {lx?.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider px-2 py-1 rounded"
                        style={{ background: tagBg, color: "#ffffff" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
