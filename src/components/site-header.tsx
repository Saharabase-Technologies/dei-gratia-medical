"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/brand-mark";
import { Icon } from "@/components/icon";
import { site, primaryNav, bookingHref } from "@/config/site";

/**
 * Sticky header - quiet at the top of the page, gains a glass blur and
 * hairline once scrolled. Desktop: brand · nav · emergency call · CTA.
 * Mobile: full-screen navy overlay with staggered serif links.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation; lock the page scroll while it's open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-white/85 shadow-[0_1px_0_rgba(20,33,56,0.02)] backdrop-blur-xl"
            : "border-b border-transparent bg-white"
        }`}
      >
        <div
          className={`mx-auto flex max-w-310 items-center justify-between gap-6 px-5 transition-all duration-500 md:px-8 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <BrandMark />

          {/* Primary nav */}
          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="nav-link text-[13.5px] font-semibold tracking-[0.01em] text-slate-600 transition-colors duration-300 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phone.href}
              className="inline-flex h-11 items-center gap-2 rounded-pill border border-border px-5 text-[13.5px] font-semibold text-foreground transition-colors duration-300 hover:border-navy-300"
            >
              <Icon name="phone" size={15} />
              Call us
            </a>
            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-5 text-[13.5px] font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary-hover"
            >
              Book an appointment
              <Icon name="arrow" size={15} className="arrow-slide" strokeWidth={2} />
            </a>
          </div>

          {/* Mobile: call + menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={site.phone.href}
              aria-label={`Call ${site.name}`}
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground"
            >
              <Icon name="phone" size={18} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground"
            >
              <Icon name="menu" size={19} />
            </button>
          </div>
        </div>
      </div>

      {/* ---- Mobile overlay menu ---- */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-navy-950 transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "menu-open visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* Ambient light so the overlay matches the hero's material */}
        <div
          className="aurora aurora-a top-[-20%] right-[-25%] h-[60vh] w-[60vh]"
          style={{ background: "radial-gradient(circle, rgba(47,107,216,0.32), transparent 65%)" }}
        />

        <div className="flex h-20 items-center justify-between px-5 md:px-8">
          <BrandMark inverted />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white"
          >
            <Icon name="close" size={19} />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-6 md:px-10"
        >
          {[{ label: "Home", href: "/" }, ...primaryNav].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="menu-item group flex items-baseline gap-4 border-b border-white/10 py-4"
              style={{ "--menu-delay": `${120 + i * 65}ms` } as CSSProperties}
            >
              <span className="text-[11px] font-bold tabular-nums tracking-[0.18em] text-navy-300">
                0{i + 1}
              </span>
              <span className="font-display text-[2rem] font-medium leading-none text-white transition-colors duration-300 group-hover:text-blue-300">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div
          className="menu-item space-y-3 px-6 pb-8 md:px-10"
          style={{ "--menu-delay": "560ms" } as CSSProperties}
        >
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex h-13 items-center justify-center gap-2 rounded-pill bg-white text-[15px] font-semibold text-navy-900"
          >
            Book an appointment
            <Icon name="arrow" size={16} strokeWidth={2} />
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={site.phone.href}
              className="flex h-13 items-center justify-center gap-2 rounded-pill border border-white/25 text-[14px] font-semibold text-white"
            >
              <Icon name="phone" size={16} />
              Call us
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-13 items-center justify-center gap-2 rounded-pill border border-white/25 text-[14px] font-semibold text-white"
            >
              <Icon name="whatsapp" size={17} viewBox="0 0 32 32" />
              WhatsApp
            </a>
          </div>
          <p className="pt-2 text-center text-[12px] text-navy-300">
            24/7 emergency · {site.phone.display} · NHIS accepted
          </p>
        </div>
      </div>
    </header>
  );
}
