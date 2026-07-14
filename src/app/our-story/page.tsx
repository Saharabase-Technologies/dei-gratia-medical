import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { site, bookingHref } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Story · Dei Gratia Medical Services, Tamale",
  description:
    "Dei Gratia means “by the grace of God.” A short story of why we exist: trusted, modern care given with warmth, right here in Tamale, close to home.",
};

export default function OurStoryPage() {
  return (
    <section aria-label="Our story" className="mx-auto max-w-310 px-5 py-3 md:px-8 md:py-8">
      <div className="relative mx-auto flex min-h-[82vh] max-w-4xl flex-col items-center justify-center overflow-hidden rounded-4xl bg-navy-950 px-6 py-24 text-center md:px-16 md:py-32">
        {/* Two slow auroras so the panel feels alive, not flat */}
        <div
          className="aurora aurora-a top-[-25%] left-[-10%] h-[70%] w-[55%]"
          style={{ background: "radial-gradient(circle, rgba(47,107,216,0.30), transparent 62%)" }}
        />
        <div
          className="aurora aurora-b right-[-12%] bottom-[-25%] h-[70%] w-[55%]"
          style={{ background: "radial-gradient(circle, rgba(47,107,216,0.22), transparent 64%)" }}
        />
        <div className="cross-grid absolute inset-0" aria-hidden />

        <div className="relative z-10 mx-auto max-w-2xl">
          {/* The seal, like a letterhead */}
          <Reveal>
            <picture>
              <source srcSet="/brand/logo-light.avif" type="image/avif" />
              <img
                src="/brand/logo-light.webp"
                alt=""
                width={64}
                height={64}
                className="mx-auto h-14 w-14 opacity-90"
                decoding="async"
              />
            </picture>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.24em] text-blue-300">
              Our story
            </p>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mt-5 text-[clamp(2rem,4.6vw,3.3rem)] leading-[1.14] font-black text-white">
              Dei Gratia means <em>&ldquo;by the grace of God.&rdquo;</em>
            </h1>
          </Reveal>

          <div className="mt-8 space-y-6 text-[17px] leading-[1.8] text-navy-100/90 md:text-[18px]">
            <Reveal as="p" delay={220}>
              We chose the name because we believe good care is not something you should have to
              earn. It is a grace, owed to every person, whoever you are and wherever you come from.
            </Reveal>
            <Reveal as="p" delay={300}>
              For too long, families here in the North have travelled far for care that should have
              been close to home. We couldn&rsquo;t accept that. So we built a place where modern
              medicine and genuine kindness sit together under one roof, right here in Tamale.
            </Reveal>
            <Reveal as="p" delay={380}>
              That is the heart of it. To welcome you like family, to care for you with skill and
              warmth, and to send you home well.
            </Reveal>
          </div>

          <Reveal delay={480}>
            <p className="mt-11 font-display text-[clamp(1.5rem,3.4vw,2.1rem)] leading-[1.2] text-white">
              Care, <em>by grace.</em> Close to home.
            </p>
          </Reveal>

          <Reveal delay={580}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-13 items-center gap-2.5 rounded-pill bg-white px-7 text-[14.5px] font-semibold text-navy-900 transition-colors duration-300 hover:bg-blue-50"
              >
                Book an appointment
                <Icon name="arrow" size={15} className="arrow-slide" strokeWidth={2} />
              </a>
              <a
                href={site.phone.href}
                className="inline-flex h-13 items-center gap-2.5 rounded-pill border border-white/25 px-7 text-[14.5px] font-semibold text-white transition-colors duration-300 hover:border-white/50"
              >
                <Icon name="phone" size={15} />
                Call us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
