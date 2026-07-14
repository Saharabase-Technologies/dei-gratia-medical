import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { services, site, bookingHref, type Service } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Services · Dei Gratia Medical Services, Tamale",
  description:
    "Everything under one roof in Tamale: maternal & child health, 24/7 emergency care, laboratory, imaging, outpatient consultations, pharmacy, screenings and specialist services. NHIS accepted.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <ServicesChapters />
      <OneRoof />
      <ClosingCTA />
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

/** Gradient grounds for the photo veils, keyed by service tone. */
const panelTone: Record<Service["tone"], string> = {
  blue: "from-blue-500 to-[#1f489a]",
  navy: "from-navy-600 to-navy-900",
  teal: "from-teal-500 to-teal-700",
  slate: "from-slate-500 to-slate-700",
  emergency: "from-emergency-500 to-[#8f2b25]",
};

/* ------------------------------------------------------------------ */
/* 1 · Header                                                          */
/* ------------------------------------------------------------------ */

const trustChips = ["Everything under one roof", "24/7 emergency care", "NHIS cards accepted"];

function ServicesHeader() {
  return (
    <section aria-label="Our services" className="mx-auto max-w-310 px-5 pt-3 md:px-8 md:pt-5">
      <div className="relative overflow-hidden rounded-4xl bg-navy-950 px-6 pt-16 pb-14 md:px-16 md:pt-24 md:pb-20">
        {/* Ambient light + cross texture, echoing the home hero */}
        <div
          className="aurora aurora-a top-[-30%] right-[-15%] h-[90%] w-[60%]"
          style={{ background: "radial-gradient(circle, rgba(47,107,216,0.32), transparent 62%)" }}
        />
        <div className="cross-grid absolute inset-0" aria-hidden />

        <div className="relative z-10 max-w-3xl">
          <Eyebrow light>Our services</Eyebrow>
          <h1 className="font-black text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.04] tracking-[-0.02em] text-white">
            How we care <em>for you</em>
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-navy-100/90 md:text-[18px]">
            From everyday check-ups to urgent moments and the arrival of new life, our care
            covers every stage of life, all under one roof here in Tamale.
          </p>

          <ul className="mt-9 flex flex-wrap gap-2.5">
            {trustChips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center rounded-pill border border-white/15 bg-white/8 px-4 py-2 text-[13px] font-semibold text-navy-100 backdrop-blur-sm"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2 · Services, told as chapters of care                              */
/* ------------------------------------------------------------------ */

const svc = (href: string) => services.find((s) => s.href === href)!;

/**
 * The opening chapter is a split hero: the two moments that matter most —
 * a new life and an emergency — shown side by side as one band, each half a
 * photo with its own tagline and link.
 */
const diptych = [
  {
    service: svc("/services/maternal-child-health"),
    tagline: "In caring hands from the very first scan, through delivery and your baby's early months.",
  },
  {
    service: svc("/services/emergency-urgent-care"),
    tagline: "Open 24/7, ready the instant you need us. Calm, quick, every hour of the day and night.",
  },
] as const;

/**
 * The remaining services follow in tidy rows, grouped by what they're for:
 * getting answers, and the everyday care of staying well.
 */
const chapters: { kicker: string; lead: string; items: Service[] }[] = [
  {
    kicker: "Answers, sooner",
    lead: "Testing, imaging, and screening on-site, so you don't wait long to know where you stand.",
    items: [
      svc("/services/laboratory-diagnostics"),
      svc("/services/imaging"),
      svc("/services/health-screenings"),
    ],
  },
  {
    kicker: "Everyday care",
    lead: "The day-to-day of staying well, from a doctor who listens to the medicine in your hand.",
    items: [
      svc("/services/outpatient"),
      svc("/services/pharmacy"),
      svc("/services/specialist-services"),
    ],
  },
];

function ServicesChapters() {
  return (
    <section aria-label="All services" className="mx-auto max-w-310 px-5 py-16 md:px-8 md:py-24">
      <div className="space-y-16 md:space-y-24">
        <ChapterBlock
          index={1}
          kicker="The moments that matter most"
          lead="When it counts most, a new arrival or an emergency, we're ready and close to home."
        >
          <DiptychBand />
        </ChapterBlock>

        {chapters.map((ch, ci) => (
          <ChapterBlock key={ch.kicker} index={ci + 2} kicker={ch.kicker} lead={ch.lead}>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ch.items.map((service, i) => (
                <Reveal as="li" key={service.href} delay={i * 80}>
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </ul>
          </ChapterBlock>
        ))}
      </div>
    </section>
  );
}

/** Numbered chapter heading + its content. */
function ChapterBlock({
  index,
  kicker,
  lead,
  children,
}: {
  index: number;
  kicker: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Reveal className="mb-8 max-w-2xl md:mb-10">
        <span className="font-display text-[15px] font-bold italic text-accent">0{index}</span>
        <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.08]">{kicker}</h2>
        <p className="mt-3 text-[16px] leading-[1.65]">{lead}</p>
      </Reveal>
      {children}
    </div>
  );
}

/** Photo + brand-colour veil + icon chip, shared by both card shapes. */
function ServicePhoto({ service, eager }: { service: Service; eager?: boolean }) {
  return (
    <>
      {service.image ? (
        <>
          <picture>
            <source srcSet={`${service.image}.avif`} type="image/avif" />
            <img
              src={`${service.image}.webp`}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading={eager ? "eager" : "lazy"}
              decoding="async"
            />
          </picture>
          <div
            className={`absolute inset-0 bg-gradient-to-br opacity-[0.58] ${panelTone[service.tone]}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-navy-950/10" />
        </>
      ) : (
        <span className="pointer-events-none absolute -right-6 -bottom-6 text-white/15">
          <Icon name={service.icon} size={150} strokeWidth={1.2} />
        </span>
      )}
      <span className="absolute top-5 left-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
        <Icon name={service.icon} size={24} />
      </span>
    </>
  );
}

/** Split hero: the two flagship moments side by side as one band. */
function DiptychBand() {
  return (
    <Reveal>
      <div className="grid overflow-hidden rounded-4xl border border-border md:grid-cols-2">
        {diptych.map((half, i) => (
          <DiptychHalf key={half.service.href} half={half} divider={i > 0} />
        ))}
      </div>
    </Reveal>
  );
}

function DiptychHalf({
  half,
  divider,
}: {
  half: (typeof diptych)[number];
  divider?: boolean;
}) {
  const { service, tagline } = half;
  return (
    <Link
      href={service.href}
      className={`group relative flex min-h-[380px] flex-col justify-end overflow-hidden bg-gradient-to-br p-8 md:min-h-[460px] md:p-10 ${panelTone[service.tone]} ${
        divider ? "border-t border-white/12 md:border-t-0 md:border-l" : ""
      }`}
    >
      {service.image && (
        <picture>
          <source srcSet={`${service.image}.avif`} type="image/avif" />
          <img
            src={`${service.image}.webp`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="eager"
            decoding="async"
          />
        </picture>
      )}
      {/* Brand-colour veil + a heavier bottom scrim so the white copy holds. */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-55 ${panelTone[service.tone]}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/88 via-navy-950/35 to-navy-950/8" />

      <span className="absolute top-6 left-6 grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
        <Icon name={service.icon} size={24} />
      </span>

      <div className="relative z-10">
        {service.flagship && (
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-pill bg-white/92 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-accent">
            <Icon name="heart" size={12} strokeWidth={2.2} />
            Flagship care
          </span>
        )}
        <h3 className="text-[25px] leading-tight text-white md:text-[29px]">{service.title}</h3>
        <p className="mt-2.5 max-w-sm text-[14.5px] leading-[1.6] text-navy-100">{tagline}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-white">
          Learn more
          <Icon name="arrow" size={16} className="arrow-slide" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}

/** Compact card for the row chapters. */
function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface"
    >
      <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${panelTone[service.tone]}`}>
        <ServicePhoto service={service} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[20px] leading-snug">{service.title}</h3>
        <p className="mt-2 flex-1 text-[14px] leading-[1.6] text-body">{service.blurb}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent">
          Learn more
          <Icon name="arrow" size={15} className="arrow-slide" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* 3 · Everything under one roof                                       */
/* ------------------------------------------------------------------ */

const roofPoints = [
  {
    icon: "pin" as const,
    title: "One place, one visit",
    body: "See a doctor, get your tests, have your scan, and collect your medicine, without travelling from place to place.",
  },
  {
    icon: "clock" as const,
    title: "Answers, sooner",
    body: "With the lab and imaging on-site, results come back quickly, so your care doesn't wait.",
  },
  {
    icon: "heart" as const,
    title: "Cared for as a person",
    body: "Unhurried, patient attention at every step, and treated with dignity, never as a number in a queue.",
  },
];

function OneRoof() {
  return (
    <section
      aria-labelledby="oneroof-heading"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0px, var(--panel-soft) 220px, var(--panel-soft) calc(100% - 220px), #ffffff 100%)",
      }}
      className="py-20 md:py-28"
    >
      <div className="mx-auto max-w-310 px-5 md:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow>Care, joined up</Eyebrow>
          <h2 id="oneroof-heading" className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
            Everything under <em>one roof</em>
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7]">
            Consultation, laboratory, imaging, and pharmacy, together in one modern facility.
            Less running around, less waiting, and a team that already knows your story.
          </p>
        </Reveal>

        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {roofPoints.map((point, i) => (
            <Reveal as="li" key={point.title} delay={i * 80} className="border-t-2 border-accent pt-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-white shadow-[0_2px_8px_rgba(47,107,216,0.28)]">
                <Icon name={point.icon} size={22} />
              </span>
              <h3 className="mt-5 text-[21px] leading-snug">{point.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7]">{point.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4 · Closing CTA                                                     */
/* ------------------------------------------------------------------ */

function ClosingCTA() {
  return (
    <section aria-labelledby="services-cta-heading" className="mx-auto max-w-310 px-5 pb-20 md:px-8 md:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl bg-navy-950 px-6 py-16 text-center md:px-16 md:py-24">
          <div
            className="aurora aurora-b bottom-[-40%] left-[-10%] h-[80%] w-[60%]"
            style={{ background: "radial-gradient(circle, rgba(47,107,216,0.28), transparent 64%)" }}
          />
          <div className="cross-grid absolute inset-0" aria-hidden />

          <div className="relative z-10">
            <Eyebrow light>Not sure where to start?</Eyebrow>
            <h2
              id="services-cta-heading"
              className="mx-auto max-w-2xl text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] text-white"
            >
              Tell us what you need. <em>We&rsquo;ll take it from here.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16.5px] leading-[1.7] text-navy-100/90">
              Book an appointment, or call and talk it through with our team. We&rsquo;ll point you
              to the right care, close to home.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center gap-2.5 rounded-pill bg-white px-8 text-[15px] font-semibold text-navy-900 transition-colors duration-300 hover:bg-blue-50"
              >
                Book an appointment
                <Icon name="arrow" size={16} className="arrow-slide" strokeWidth={2} />
              </a>
              <a
                href={site.phone.href}
                className="inline-flex h-14 items-center gap-2.5 rounded-pill border border-white/25 px-8 text-[15px] font-semibold text-white transition-colors duration-300 hover:border-white/50"
              >
                <Icon name="phone" size={16} />
                Call {site.phone.display}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
