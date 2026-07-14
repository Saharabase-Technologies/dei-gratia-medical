"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "@/components/icon";
import { services, type Service } from "@/config/site";

/** Gradient grounds for the placeholder image panels, keyed by service tone. */
const panelTone: Record<Service["tone"], string> = {
  blue: "from-blue-500 to-[#1f489a]",
  navy: "from-navy-600 to-navy-900",
  teal: "from-teal-500 to-teal-700",
  slate: "from-slate-500 to-slate-700",
  emergency: "from-emergency-500 to-[#8f2b25]",
};

/**
 * Horizontal, scroll-snapping services rail. Shows ~3 cards at a time on
 * desktop with prev/next controls; swipes naturally on touch. The flagship
 * service (Maternal & Child Health) is emphasised with a tag and accent ring.
 */
export function ServicesScroller({ cta }: { cta?: ReactNode }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 16;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>{cta}</div>
        <div className="flex shrink-0 gap-3">
          <ScrollButton dir={-1} disabled={atStart} onClick={() => scrollByCards(-1)} />
          <ScrollButton dir={1} disabled={atEnd} onClick={() => scrollByCards(1)} />
        </div>
      </div>

      <ul
        ref={trackRef}
        onScroll={update}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0"
      >
        {services.map((service, i) => (
          <li
            key={service.href}
            data-card
            className="w-[82%] shrink-0 snap-start sm:w-[47%] lg:w-[31.6%]"
          >
            <Link
              href={service.href}
              className="lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface"
            >
              {/* Image slot — photo tinted with the card's brand colour */}
              <div
                className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${panelTone[service.tone]}`}
              >
                {service.image ? (
                  <>
                    <picture>
                      <source srcSet={`${service.image}.avif`} type="image/avif" />
                      <img
                        src={`${service.image}.webp`}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        decoding="async"
                      />
                    </picture>
                    {/* Brand-colour veil over the photo: enough tint that the
                        set reads as one family, sheer enough to keep the picture
                        legible + a little bottom depth for the chip and tag. */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br opacity-[0.58] ${panelTone[service.tone]}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-navy-950/10" />
                  </>
                ) : (
                  <span className="pointer-events-none absolute -right-6 -bottom-6 text-white/15">
                    <Icon name={service.icon} size={150} strokeWidth={1.2} />
                  </span>
                )}
                <span className="absolute top-5 left-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
                  <Icon name={service.icon} size={24} />
                </span>
                <span className="absolute top-5 right-5 font-display text-[15px] font-bold text-white/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[21px] leading-snug">{service.title}</h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-[1.6] text-body">{service.blurb}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent">
                  Learn more
                  <Icon name="arrow" size={15} className="arrow-slide" strokeWidth={2} />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScrollButton({
  dir,
  disabled,
  onClick,
}: {
  dir: 1 | -1;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 1 ? "Next services" : "Previous services"}
      className="grid h-12 w-12 place-items-center rounded-full border border-navy-200 text-foreground transition-all duration-300 hover:border-navy-500 hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-navy-200 disabled:hover:bg-transparent disabled:hover:text-foreground"
    >
      <Icon name="arrow" size={18} strokeWidth={2} className={dir === -1 ? "rotate-180" : ""} />
    </button>
  );
}
