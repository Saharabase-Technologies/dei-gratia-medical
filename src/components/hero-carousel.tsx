"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "@/config/site";

/**
 * Cross-fading hero background. Cycles the photos in `heroSlides` every 6s.
 * A navy scrim (.hero-scrim) sits on top so headline text stays legible on
 * any image. Pauses on reduced-motion and when the tab is hidden.
 */
export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (heroSlides.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = setInterval(() => {
      if (document.hidden) return;
      setActive((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden>
      {heroSlides.map((slide, i) => (
        <div key={slide.src} className={`hero-slide ${i === active ? "is-active" : ""}`}>
          <picture>
            <source srcSet={`${slide.src}.avif`} type="image/avif" />
            <img src={`${slide.src}.webp`} alt="" decoding="async" fetchPriority={i === 0 ? "high" : "low"} />
          </picture>
        </div>
      ))}
      <div className="hero-scrim" />
    </div>
  );
}
