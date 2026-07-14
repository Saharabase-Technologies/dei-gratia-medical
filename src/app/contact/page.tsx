import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact · Dei Gratia Medical Services, Tamale",
  description:
    "Get in touch with Dei Gratia Medical Services in Tamale. Book an appointment on WhatsApp, call, or email us. Open 24/7 for emergencies.",
};

// Booking goes through WhatsApp with the message ready to send.
const bookingHref = `${site.whatsappBooking.href}?text=${encodeURIComponent(
  "Hello Dei Gratia, I would like to book an appointment."
)}`;

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <Ways />
      <EmergencyHighlight />
    </>
  );
}

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

/* ------------------------------------------------------------------ */
/* 1 · Header                                                          */
/* ------------------------------------------------------------------ */

function ContactHeader() {
  return (
    <section aria-label="Contact" className="mx-auto max-w-310 px-5 pt-3 md:px-8 md:pt-5">
      <div className="relative overflow-hidden rounded-4xl bg-navy-950 px-6 pt-16 pb-16 md:px-16 md:pt-24 md:pb-20">
        <div
          className="aurora aurora-a top-[-30%] right-[-15%] h-[90%] w-[60%]"
          style={{ background: "radial-gradient(circle, rgba(47,107,216,0.32), transparent 62%)" }}
        />
        <div className="cross-grid absolute inset-0" aria-hidden />

        <div className="relative z-10 max-w-2xl">
          <Eyebrow light>Contact</Eyebrow>
          <h1 className="font-black text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.04] tracking-[-0.02em] text-white">
            Let&rsquo;s <em>talk.</em>
          </h1>
          <p className="mt-6 text-[17px] leading-[1.7] text-navy-100/90 md:text-[18px]">
            Reach us the way that&rsquo;s easiest for you. A real person will help.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2 · The ways to reach us — big, tappable, done                      */
/* ------------------------------------------------------------------ */

type Tile = {
  icon: IconName;
  label: string;
  sub: string;
  href: string;
  external?: boolean;
  tone: string;
  viewBox?: string;
};

const tiles: Tile[] = [
  {
    icon: "phone",
    label: "Call us",
    sub: site.phone.display,
    href: site.phone.href,
    tone: "bg-accent-soft text-accent",
  },
  {
    icon: "chat",
    label: "Email us",
    sub: site.email.display,
    href: site.email.href,
    tone: "bg-navy-50 text-navy-600",
  },
];

function Ways() {
  return (
    <section aria-label="Ways to reach us" className="mx-auto max-w-310 px-5 pt-16 pb-8 md:px-8 md:pt-20">
      <div className="mx-auto max-w-2xl space-y-3">
        {/* Booking — the primary action, straight to WhatsApp */}
        <Reveal>
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="lift group relative flex items-center gap-5 overflow-hidden rounded-3xl bg-navy-950 p-6 md:p-7"
          >
            <div
              className="aurora aurora-a top-[-60%] right-[-10%] h-[180%] w-[45%]"
              style={{ background: "radial-gradient(circle, rgba(47,107,216,0.30), transparent 62%)" }}
            />
            <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/12 text-white ring-1 ring-white/20">
              <Icon name="whatsapp" size={26} viewBox="0 0 32 32" />
            </span>
            <span className="relative z-10 min-w-0 flex-1">
              <span className="block text-[18px] font-bold text-white">Book an appointment</span>
              <span className="mt-0.5 block text-[14px] leading-[1.5] text-navy-100/90">
                Message us on WhatsApp and we&rsquo;ll find a time that works.
              </span>
            </span>
            <Icon name="arrow" size={20} className="arrow-slide relative z-10 shrink-0 text-white/80" strokeWidth={2} />
          </a>
        </Reveal>

        {/* Call + email */}
        <div className="grid gap-3 sm:grid-cols-2">
          {tiles.map((t, i) => {
            const inner = (
              <>
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${t.tone}`}>
                  <Icon name={t.icon} size={21} viewBox={t.viewBox} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15.5px] font-bold text-foreground">{t.label}</span>
                  <span className="mt-0.5 block truncate text-[13.5px] text-body">{t.sub}</span>
                </span>
                <Icon name="arrow" size={17} className="arrow-slide shrink-0 text-muted-foreground" />
              </>
            );
            const cls = "lift flex items-center gap-4 rounded-2xl border border-border bg-surface p-5";
            return (
              <Reveal key={t.label} delay={70 + i * 70}>
                {t.external ? (
                  <a href={t.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <a href={t.href} className={cls}>
                    {inner}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3 · Emergency — highlighted                                         */
/* ------------------------------------------------------------------ */

function EmergencyHighlight() {
  return (
    <section aria-label="Emergency" className="mx-auto max-w-310 px-5 pb-20 md:px-8 md:pb-28">
      <Reveal className="mx-auto max-w-2xl">
        <div className="flex flex-col gap-5 rounded-3xl bg-emergency-50 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emergency-500 text-white">
              <Icon name="siren" size={23} />
            </span>
            <div>
              <p className="font-display text-[20px] font-bold leading-tight text-foreground">
                Emergency care, 24/7
              </p>
              <p className="mt-1 text-[14.5px] leading-[1.6] text-body">
                Open every hour of the day. In an emergency, call us right away.
              </p>
            </div>
          </div>
          <a
            href={site.emergency.href}
            className="group inline-flex h-13 shrink-0 items-center justify-center gap-2.5 rounded-pill bg-emergency-500 px-7 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-emergency-600"
          >
            <Icon name="phone" size={16} />
            Call {site.emergency.display}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
