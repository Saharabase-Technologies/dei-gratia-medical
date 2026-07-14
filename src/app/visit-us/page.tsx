import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { Icon, type IconName } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Visit Us · Dei Gratia Medical Services, Tamale",
  description:
    "Find Dei Gratia Medical Services on the Tamale-Bolgatanga road, opposite Quantum filling station. Directions, hours, 24/7 emergency care, and NHIS accepted.",
};

// Live Google Maps embed from the confirmed coordinates (no API key needed).
const mapEmbed = `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=15&hl=en&output=embed`;

export default function VisitUsPage() {
  return (
    <>
      <VisitHeader />
      <MapAndDetails />
      <BeforeYouCome />
      <EmergencyStrip />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-4 text-[12px] font-bold uppercase tracking-[0.24em] ${
        light ? "text-blue-300" : "text-accent"
      }`}
    >
      {children}
    </p>
  );
}

const softBand: CSSProperties = {
  background:
    "linear-gradient(to bottom, #ffffff 0px, var(--panel-soft) 220px, var(--panel-soft) calc(100% - 220px), #ffffff 100%)",
};

/* ------------------------------------------------------------------ */
/* 1 · Header — address + the actions people actually want            */
/* ------------------------------------------------------------------ */

function VisitHeader() {
  return (
    <section aria-label="Visit us" className="mx-auto max-w-310 px-5 pt-3 md:px-8 md:pt-5">
      <div className="relative overflow-hidden rounded-4xl bg-navy-950 px-6 pt-16 pb-14 md:px-16 md:pt-24 md:pb-20">
        <div
          className="aurora aurora-a top-[-30%] right-[-15%] h-[90%] w-[60%]"
          style={{ background: "radial-gradient(circle, rgba(47,107,216,0.32), transparent 62%)" }}
        />
        <div className="cross-grid absolute inset-0" aria-hidden />

        <div className="relative z-10 max-w-3xl">
          <Eyebrow light>Visit us</Eyebrow>
          <h1 className="font-black text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.04] tracking-[-0.02em] text-white">
            We&rsquo;d love to <em>see you.</em>
          </h1>

          <p className="mt-6 text-[18px] font-semibold leading-[1.5] text-white md:text-[20px]">
            {site.address.line1}
          </p>
          <p className="mt-1 text-[15.5px] leading-[1.6] text-navy-100/90">
            {site.address.line2} · {site.address.city}, {site.address.region}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-13 items-center gap-2.5 rounded-pill bg-white px-7 text-[14.5px] font-semibold text-navy-900 transition-colors duration-300 hover:bg-blue-50"
            >
              Get directions
              <Icon name="arrow" size={15} className="arrow-slide" strokeWidth={2} />
            </a>
            <a
              href={site.phone.href}
              className="inline-flex h-13 items-center gap-2.5 rounded-pill border border-white/25 px-7 text-[14.5px] font-semibold text-white transition-colors duration-300 hover:border-white/50"
            >
              <Icon name="phone" size={15} />
              Call us
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center gap-2.5 rounded-pill border border-white/25 px-7 text-[14.5px] font-semibold text-white transition-colors duration-300 hover:border-white/50"
            >
              <Icon name="whatsapp" size={17} viewBox="0 0 32 32" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2 · The map + the details that convert                             */
/* ------------------------------------------------------------------ */

const details: { icon: IconName; label: string; content: ReactNode }[] = [
  {
    icon: "clock",
    label: "Opening hours",
    content: <>OPD open {site.hours}.</>,
  },
  {
    icon: "siren",
    label: "Emergency",
    content: (
      <>
        Open 24 hours, every day.{" "}
        <a href={site.phone.href} className="font-semibold text-accent hover:text-accent-hover">
          Call {site.phone.display}
        </a>
      </>
    ),
  },
  {
    icon: "phone",
    label: "Talk to us",
    content: (
      <>
        <a href={site.phone.href} className="font-semibold text-accent hover:text-accent-hover">
          {site.phone.display}
        </a>{" "}
        or{" "}
        <a
          href={site.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent hover:text-accent-hover"
        >
          message us on WhatsApp
        </a>
        .
      </>
    ),
  },
];

function MapAndDetails() {
  return (
    <section aria-label="Directions and details" className="mx-auto max-w-310 px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Details */}
        <div>
          <Reveal>
            <Eyebrow>Getting here</Eyebrow>
            <h2 className="text-[clamp(2.2rem,4.4vw,3.4rem)] leading-[1.06]">
              On the Tamale-Bolgatanga road
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-[1.7]">
              You&rsquo;ll find us at {site.address.line1}, {site.address.line2.toLowerCase()}.
              Easy to reach from town, with room to park.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {details.map((row, i) => (
              <Reveal as="li" key={row.label} delay={i * 60} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-white shadow-[0_2px_8px_rgba(47,107,216,0.28)]">
                  <Icon name={row.icon} size={19} />
                </span>
                <span className="pt-0.5">
                  <span className="block text-[13px] font-bold uppercase tracking-[0.1em] text-foreground">
                    {row.label}
                  </span>
                  <span className="mt-1 block text-[15px] leading-[1.65]">{row.content}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Live map */}
        <Reveal delay={120} className="lg:pt-2">
          <div className="overflow-hidden rounded-4xl border border-border shadow-card">
            <iframe
              src={mapEmbed}
              title={`Map to ${site.name}`}
              className="block h-full min-h-[420px] w-full lg:min-h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              allowFullScreen
            />
            {/* A prominent, full-width action rather than a thin text link. */}
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 items-center justify-center gap-2.5 border-t border-border bg-primary text-[15px] font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary-hover"
            >
              <Icon name="pin" size={17} />
              Open in Google Maps
              <Icon name="arrow" size={16} className="arrow-slide" strokeWidth={2} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3 · Before your visit                                              */
/* ------------------------------------------------------------------ */

function BeforeYouCome() {
  return (
    <section aria-labelledby="before-heading" style={softBand} className="py-20 md:py-28">
      <div className="mx-auto grid max-w-310 gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>Before your visit</Eyebrow>
          <h2 id="before-heading" className="text-[clamp(2.2rem,4.4vw,3.4rem)] leading-[1.06]">
            A little easier, <em>for you.</em>
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-[1.7]">
            There&rsquo;s no need to book ahead for the OPD, walk in and we&rsquo;ll take care of
            you. If you&rsquo;d rather plan your visit or ask a question first, a quick call or
            WhatsApp is always welcome.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-4xl border border-border bg-surface p-8 md:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-white shadow-[0_2px_8px_rgba(47,107,216,0.28)]">
              <Icon name="clipboard" size={22} />
            </span>
            <h3 className="mt-5 text-[21px] leading-snug">What to bring</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Your NHIS card, or a valid ID.",
                "Any records or test results you already have.",
                "Any medicines you're currently taking.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-[1.6]">
                  <Icon name="check" size={18} strokeWidth={2.2} className="mt-0.5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4 · Emergency reassurance                                          */
/* ------------------------------------------------------------------ */

function EmergencyStrip() {
  return (
    <section aria-label="Emergency" className="mx-auto max-w-310 px-5 pb-20 md:px-8 md:pb-28">
      <Reveal>
        <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-4xl bg-navy-950 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-14 md:py-14">
          <div
            className="aurora aurora-b bottom-[-40%] left-[-8%] h-[80%] w-[45%]"
            style={{ background: "radial-gradient(circle, rgba(47,107,216,0.26), transparent 64%)" }}
          />
          <div className="relative z-10 flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/12 text-white ring-1 ring-white/20">
              <Icon name="siren" size={24} />
            </span>
            <div>
              <p className="font-display text-[24px] font-bold leading-[1.15] text-white md:text-[28px]">
                In an emergency, we&rsquo;re here.
              </p>
              <p className="mt-2 text-[15.5px] leading-[1.6] text-navy-100/90">
                Open 24 hours a day, every day of the year.
              </p>
            </div>
          </div>
          <a
            href={site.phone.href}
            className="group relative z-10 inline-flex h-14 shrink-0 items-center gap-2.5 rounded-pill bg-white px-8 text-[15px] font-semibold text-navy-900 transition-colors duration-300 hover:bg-blue-50"
          >
            <Icon name="phone" size={16} />
            Call {site.phone.display}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
