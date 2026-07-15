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
        initialSlide={builderIndex}
        coverflowEffect={{ rotate: 26, stretch: 0, depth: 160, modifier: 1, slideShadows: false }}
        navigation={{ enabled: true }}
        onBeforeInit={wireNav}
        style={{ paddingTop: 20, paddingBottom: 44 }}
      >
        {recentProjects.map((p) => {
          const lx = localized[p.id];
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
                  className="absolute top-5 right-5 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    color: "#ffffff",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {status[p.status]}
                </span>

                <div className="relative">
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
                        style={{ background: "rgba(255,255,255,0.14)", color: "#ffffff" }}
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
