import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Icon, type IconName } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { HeroCarousel } from "@/components/hero-carousel";
import { ServicesScroller } from "@/components/services-scroller";
import { site, bookingHref } from "@/config/site";
import { posts } from "@/config/posts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <Marquee />
      <Grace />
      <Services />
      <WhyUs />
      <MaternalSpotlight />
      <VisitUs />
      <BlogTeaser />
      <ClosingInvitation />
      <OrganizationSchema />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function Eyebrow({
  children,
  light = false,
  center = false,
}: {
  children: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <p
      className={`mb-4 text-[12px] font-bold uppercase tracking-[0.24em] ${
        light ? "text-blue-300" : "text-accent"
      } ${center ? "text-center" : ""}`}
    >
      {children}
    </p>
  );
}

const delayStyle = (s: string) => ({ "--rise-delay": s }) as CSSProperties;

/**
 * Soft-grey band that fades in from white at the top AND back out to white at
 * the bottom, so a panel-soft section melts into the white sections on both
 * sides instead of meeting them at a hard line.
 */
const softBand: CSSProperties = {
  background:
    "linear-gradient(to bottom, #ffffff 0px, var(--panel-soft) 220px, var(--panel-soft) calc(100% - 220px), #ffffff 100%)",
};

/* ------------------------------------------------------------------ */
/* 1 · Hero                                                            */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section aria-label="Welcome" className="mx-auto max-w-310 px-5 pt-3 md:px-8 md:pt-5">
      <div className="hero-panel relative flex min-h-[540px] flex-col justify-center overflow-hidden rounded-4xl bg-navy-950 px-6 pt-14 pb-16 md:min-h-[600px] md:px-16 md:pt-24 md:pb-40">
        <HeroCarousel />

        <div className="relative z-10 max-w-4xl">
          <h1 className="font-black text-[clamp(2.6rem,6.4vw,4.9rem)] leading-[1.04] tracking-[-0.02em] text-white">
            <span className="hero-line">
              <span style={delayStyle("0.2s")}>Trusted care,</span>
            </span>
            <span className="hero-line">
              <span style={delayStyle("0.34s")}>
                <em className="pr-2 font-black">close to home.</em>
              </span>
            </span>
          </h1>

          <p
            className="hero-fade mt-6 max-w-lg text-[17px] leading-[1.65] text-navy-100/90 md:text-[18px]"
            style={delayStyle("0.62s")}
          >
            Modern medicine and genuine, compassionate care, right here in Tamale.
            The help your family needs, close to home.
          </p>
        </div>

        {/* Notched CTA shelf - the page flows into the panel (desktop) */}
        <div className="notch hidden md:block">
          <div className="flex items-center gap-3">
            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center gap-2.5 rounded-pill bg-primary px-7 text-[15px] font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary-hover"
            >
              Book an appointment
              <Icon name="arrow" size={16} className="arrow-slide" strokeWidth={2} />
            </a>
            <a
              href={site.phone.href}
              className="inline-flex h-14 items-center gap-2.5 rounded-pill border border-border bg-surface px-7 text-[15px] font-semibold text-foreground transition-colors duration-300 hover:border-navy-300"
            >
              <Icon name="phone" size={16} />
              Call us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile CTAs (the notch is a desktop flourish) */}
      <div className="mt-3 grid gap-2.5 md:hidden">
        <a
          href={bookingHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-13 items-center justify-center gap-2 rounded-pill bg-primary text-[15px] font-semibold text-primary-foreground"
        >
          Book an appointment
          <Icon name="arrow" size={16} strokeWidth={2} />
        </a>
        <a
          href={site.phone.href}
          className="flex h-13 items-center justify-center gap-2 rounded-pill border border-border text-[15px] font-semibold text-foreground"
        >
          <Icon name="phone" size={16} />
          Call us, {site.phone.display}
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2 · Quick access                                                    */
/* ------------------------------------------------------------------ */

function QuickAccess() {
  const items: {
    title: string;
    sub: string;
    href: string;
    icon: IconName;
    tone: string;
  }[] = [
    {
      title: "Emergency & Urgent Care",
      sub: "Open 24/7. Tap to call now.",
      href: site.phone.href,
      icon: "phone",
      tone: "bg-emergency-50 text-emergency",
    },
    {
      title: "Our Services",
      sub: "Everything under one roof.",
      href: "/services",
      icon: "stethoscope",
      tone: "bg-accent-soft text-accent",
    },
    {
      title: "Find Us",
      sub: "Hours & directions.",
      href: "/visit-us",
      icon: "pin",
      tone: "bg-navy-50 text-navy-600",
    },
  ];

  return (
    <section aria-label="Quick access" className="mx-auto mt-8 max-w-310 px-5 md:mt-10 md:px-8">
      <div className="grid gap-3 md:grid-cols-3">
        {items.map((item, i) => {
          const inner = (
            <>
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${item.tone}`}>
                <Icon name={item.icon} size={21} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15.5px] font-bold text-foreground">{item.title}</span>
                <span className="mt-0.5 block text-[13px] text-body">{item.sub}</span>
              </span>
              <Icon name="arrow" size={17} className="arrow-slide shrink-0 text-muted-foreground" />
            </>
          );
          const cls =
            "lift flex items-center gap-4 rounded-2xl border border-border bg-surface p-5";
          return (
            <Reveal key={item.title} delay={i * 70}>
              {item.href.startsWith("tel:") ? (
                <a href={item.href} className={cls}>
                  {inner}
                </a>
              ) : (
                <Link href={item.href} className={cls}>
                  {inner}
                </Link>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3 · Marquee - the factual ticker                                    */
/* ------------------------------------------------------------------ */

const marqueeItems = [
  "24/7 emergency care",
  "NHIS cards accepted",
  "Laboratory on-site",
  "X-ray & ultrasound",
  "Maternal & child health",
  "Pharmacy on-site",
];

function Marquee() {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.18em] text-slate-500">
            {item}
          </span>
          <Icon name="cross" size={13} strokeWidth={2.4} className="mx-8 shrink-0 text-blue-300" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="mt-14 overflow-hidden border-y border-border py-4 md:mt-20" aria-label="At a glance">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4 · Why we exist - Care, by grace                                   */
/* ------------------------------------------------------------------ */

function Grace() {
  return (
    <section aria-labelledby="grace-heading" className="mx-auto max-w-310 px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Why we exist</Eyebrow>
          <h2 id="grace-heading" className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
            Care, <em>by grace.</em>
          </h2>
        </Reveal>

        <div className="space-y-6 text-[17px] font-semibold leading-[1.75] text-slate-700 lg:col-span-6 lg:col-start-7">
          <Reveal as="p">
            <em className="mr-1 font-display font-bold text-foreground">Dei Gratia</em> means
            &ldquo;by the grace of God.&rdquo; We believe good healthcare is not a privilege to
            be earned. It is a grace every person deserves. Whoever you are, wherever you
            come from, you will be received here with dignity, patience, and real care.
          </Reveal>
          <Reveal as="p" delay={90}>
            For too long, families in the North have travelled far for care that should be
            close to home. We exist to change that: to bring trustworthy, modern medicine
            to our own community, and to give it the way care should be given, with warmth
            and with grace.
          </Reveal>
          <Reveal delay={160}>
            <Link
              href="/our-story"
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors duration-300 hover:text-accent-hover"
            >
              Read our story
              <Icon name="arrow" size={16} className="arrow-slide" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5 · Services (horizontal scroller)                                  */
/* ------------------------------------------------------------------ */

function Services() {
  return (
    <section aria-labelledby="services-heading" style={softBand} className="py-20 md:py-28">
      <div className="mx-auto max-w-310 px-5 md:px-8">
        <Reveal className="mb-8 max-w-2xl">
          <Eyebrow>Our services</Eyebrow>
          <h2 id="services-heading" className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
            How we care <em>for you</em>
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7]">
            From everyday check-ups to urgent moments and the arrival of new life, our
            care covers every stage, all under one roof.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <ServicesScroller
            cta={
              <Link
                href="/services"
                className="group inline-flex h-12 items-center gap-2 rounded-pill border border-navy-200 bg-surface px-6 text-[14px] font-semibold text-foreground transition-colors duration-300 hover:border-navy-400"
              >
                View all services
                <Icon name="arrow" size={15} className="arrow-slide" strokeWidth={2} />
              </Link>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6 · Why families choose Dei Gratia                                  */
/* ------------------------------------------------------------------ */

const reasons = [
  {
    title: "Close to home",
    body: "Quality care here in the North, so you don't have to travel south for it.",
  },
  {
    title: "Everything under one roof",
    body: "Consultation, lab, imaging, and pharmacy in one place. Less running around, less waiting.",
  },
  {
    title: "A modern facility",
    body: "Up-to-date equipment and clean, comfortable spaces.",
  },
  {
    title: "Cared for as a person",
    body: "Treated with patience and dignity, never as a number in a queue.",
  },
];

function WhyUs() {
  return (
    <section aria-labelledby="why-heading" className="mx-auto max-w-310 px-5 py-20 md:px-8 md:py-28">
      <Reveal className="mb-14 max-w-2xl">
        <Eyebrow>The promise</Eyebrow>
        <h2 id="why-heading" className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
          Why families <em>choose us</em>
        </h2>
      </Reveal>

      <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, i) => (
          <Reveal as="li" key={reason.title} delay={i * 80} className="border-t-2 border-accent pt-6">
            <span className="font-display text-[16px] font-bold italic text-accent">0{i + 1}</span>
            <h3 className="mt-3 text-[21px] leading-snug">{reason.title}</h3>
            <p className="mt-2.5 text-[14.5px] leading-[1.7]">{reason.body}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7 · Maternal & Child Health spotlight                               */
/* ------------------------------------------------------------------ */

function MaternalSpotlight() {
  return (
    <section aria-labelledby="maternal-heading" className="mx-auto max-w-310 px-5 md:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl bg-navy-950 px-6 py-16 md:px-16 md:py-28">
          {/* Mother-and-child photo, washed navy so the copy stays legible */}
          <picture>
            <source srcSet="/media/maternal.avif" type="image/avif" />
            <img
              src="/media/maternal.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
              loading="eager"
            />
          </picture>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(14,26,46,0.93) 0%, rgba(14,26,46,0.74) 46%, rgba(14,26,46,0.24) 100%)",
            }}
          />

          <div className="relative z-10 max-w-3xl">
            <Eyebrow light>Maternal &amp; Child Health</Eyebrow>
            <h2
              id="maternal-heading"
              className="text-[clamp(2.4rem,5.2vw,4.3rem)] leading-[1.04] text-white"
            >
              New life, <em>in caring hands</em>
            </h2>
            {/* CONFIRM before launch: this copy promises delivery, not antenatal only. */}
            <p className="mt-6 max-w-2xl text-[16.5px] leading-[1.75] text-navy-100/90">
              Few moments matter more than the arrival of a child. Our maternal and child
              health team walks with you through every step, from your first scan to
              delivery and your baby&rsquo;s early months, with the safety, warmth, and
              reassurance every family deserves.
            </p>
            <Link
              href="/services/maternal-child-health"
              className="group mt-9 inline-flex h-13 items-center gap-2.5 rounded-pill bg-white px-7 text-[14.5px] font-semibold text-navy-900 transition-colors duration-300 hover:bg-blue-50"
            >
              Maternal &amp; Child Health
              <Icon name="arrow" size={15} className="arrow-slide" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8 · Visit us                                                        */
/* ------------------------------------------------------------------ */

function VisitUs() {
  const rows: { icon: IconName; label: string; content: ReactNode }[] = [
    {
      icon: "pin",
      label: "Location",
      content: (
        <>
          {site.address.line1}, {site.address.line2}, {site.address.city}.{" "}
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:text-accent-hover"
          >
            Get directions
          </a>
        </>
      ),
    },
    {
      icon: "clock",
      label: "Hours",
      content: <>OPD open {site.hours}.</>,
    },
    {
      icon: "clipboard",
      label: "What to bring",
      content: <>Your NHIS card or ID, and any records or medicines you&rsquo;re already taking.</>,
    },
  ];

  return (
    <section aria-labelledby="visit-heading" style={softBand} className="py-20 md:py-28">
      <div className="mx-auto grid max-w-310 gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>Practical details</Eyebrow>
            <h2 id="visit-heading" className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
              Visiting <em>us</em>
            </h2>
          </Reveal>
          <ul className="mt-10 space-y-6">
            {rows.map((row, i) => (
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

        {/* Directions panel - stands in for the map embed until [MAP_EMBED] arrives */}
        <Reveal delay={150} className="lg:pt-6">
          <div className="relative flex h-full min-h-105 flex-col justify-between overflow-hidden rounded-4xl bg-navy-900 p-8 md:p-10">
            <div
              className="aurora aurora-a top-[-30%] right-[-20%] h-[90%] w-[70%]"
              style={{ background: "radial-gradient(circle, rgba(47,107,216,0.35), transparent 62%)" }}
            />
            <div className="cross-grid absolute inset-0" aria-hidden />

            <div className="relative z-10">
              <span className="grid h-13 w-13 place-items-center rounded-2xl border border-white/15 bg-white/8 text-white backdrop-blur-sm">
                <Icon name="pin" size={24} />
              </span>
              <p className="mt-7 font-display text-[26px] font-bold leading-[1.2] text-white md:text-[30px]">
                {site.address.line1}
              </p>
              <p className="mt-3 max-w-xs text-[15px] font-medium text-navy-100">
                {site.address.line2}
              </p>
              <p className="mt-3 text-[13.5px] text-navy-300">
                {site.address.city}, {site.address.region}, {site.address.country}
              </p>
            </div>

            <div className="relative z-10 mt-10 flex flex-wrap gap-3">
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-pill bg-white px-6 text-[14px] font-semibold text-navy-900 transition-colors duration-300 hover:bg-blue-50"
              >
                Get directions
                <Icon name="arrow" size={15} className="arrow-slide" strokeWidth={2} />
              </a>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-pill border border-white/25 px-6 text-[14px] font-semibold text-white transition-colors duration-300 hover:border-white/50"
              >
                <Icon name="whatsapp" size={17} viewBox="0 0 32 32" />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 9 · Health & Community (blog teaser)                                */
/* ------------------------------------------------------------------ */

// The three latest posts, straight from the blog content source.
const teaserPosts = posts.slice(0, 3);

function BlogTeaser() {
  return (
    <section aria-labelledby="blog-heading" className="mx-auto max-w-310 px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <Reveal className="max-w-2xl">
          <Eyebrow>Health &amp; Community</Eyebrow>
          <h2 id="blog-heading" className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
            Advice for life <em>in the North</em>
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7]">
            Practical health advice for life in the North, from staying well through the
            seasons to caring for your family.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <Link
            href="/blog"
            className="group inline-flex h-12 items-center gap-2 rounded-pill border border-navy-200 bg-surface px-6 text-[14px] font-semibold text-foreground transition-colors duration-300 hover:border-navy-400"
          >
            Visit the blog
            <Icon name="arrow" size={15} className="arrow-slide" strokeWidth={2} />
          </Link>
        </Reveal>
      </div>

      <ul className="grid gap-4 md:grid-cols-3">
        {teaserPosts.map((post, i) => (
          <Reveal as="li" key={post.slug} delay={i * 80}>
            <Link
              href={`/blog/${post.slug}`}
              className="lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface"
            >
              {/* Cover photo, with a soft navy wash so the tag pill stays legible */}
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                <picture>
                  <source srcSet={`${post.image}.avif`} type="image/avif" />
                  <img
                    src={`${post.image}.webp`}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(14,26,46,0.42) 0%, rgba(14,26,46,0) 34%)",
                  }}
                />
                <span className="absolute top-5 left-5 inline-flex rounded-pill bg-white/92 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                  {post.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-[21px] leading-[1.35]">{post.title}</h3>
                <span className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">
                  Read on the blog
                  <Icon name="arrow" size={14} className="arrow-slide" strokeWidth={2} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 10 · Closing invitation                                             */
/* ------------------------------------------------------------------ */

function ClosingInvitation() {
  return (
    <section aria-labelledby="closing-heading" className="border-t border-border">
      <div className="mx-auto max-w-310 px-5 py-24 text-center md:px-8 md:py-32">
        <Reveal>
          <Eyebrow center>You&rsquo;re welcome here</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2
            id="closing-heading"
            className="mx-auto max-w-3xl text-[clamp(2.6rem,5.6vw,4.6rem)] leading-[1.04]"
          >
            We&rsquo;re here when <em>you need us.</em>
          </h2>
        </Reveal>
        <Reveal as="p" delay={140} className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.7]">
          A routine check-up, an urgent worry, or a new addition to the family. You&rsquo;re
          welcome at Dei Gratia. Care, by grace, close to home.
        </Reveal>
        <Reveal delay={220} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-14 items-center gap-2.5 rounded-pill bg-primary px-8 text-[15px] font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary-hover"
          >
            Book an appointment
            <Icon name="arrow" size={16} className="arrow-slide" strokeWidth={2} />
          </a>
          <a
            href={site.phone.href}
            className="inline-flex h-14 items-center gap-2.5 rounded-pill border border-border px-8 text-[15px] font-semibold text-foreground transition-colors duration-300 hover:border-navy-300"
          >
            <Icon name="phone" size={16} />
            Call us
          </a>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2.5 rounded-pill border border-border px-8 text-[15px] font-semibold text-foreground transition-colors duration-300 hover:border-navy-300"
          >
            <Icon name="whatsapp" size={18} viewBox="0 0 32 32" className="text-teal-600" />
            WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Structured data - MedicalOrganization (per the SEO checklist)       */
/* ------------------------------------------------------------------ */

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: site.name,
    alternateName: site.shortName,
    telephone: site.phone.href.replace("tel:", ""),
    email: site.email.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: "GH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
