import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { site, bookingHref } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Team · Dei Gratia Medical Services, Tamale",
  description:
    "Meet the people behind your care at Dei Gratia Medical Services, Tamale: our doctors, midwives, nurses, laboratory, pharmacy, and emergency teams, and the leadership that guides them.",
};

export default function TeamPage() {
  return (
    <>
      <TeamHeader />
      <Teams />
      <Leadership />
      <ClosingCTA />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Shared                                                              */
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

/* ------------------------------------------------------------------ */
/* 1 · Header                                                          */
/* ------------------------------------------------------------------ */

function TeamHeader() {
  return (
    <section aria-label="Our team" className="mx-auto max-w-310 px-5 pt-3 md:px-8 md:pt-5">
      <div className="relative overflow-hidden rounded-4xl bg-navy-950 px-6 pt-16 pb-14 md:px-16 md:pt-24 md:pb-20">
        <div
          className="aurora aurora-a top-[-30%] right-[-15%] h-[90%] w-[60%]"
          style={{ background: "radial-gradient(circle, rgba(47,107,216,0.32), transparent 62%)" }}
        />
        <div className="cross-grid absolute inset-0" aria-hidden />

        <div className="relative z-10 max-w-3xl">
          <Eyebrow light>Our team</Eyebrow>
          <h1 className="font-black text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.04] tracking-[-0.02em] text-white">
            The people behind <em>your care</em>
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-navy-100/90 md:text-[18px]">
            Behind every visit is a team of doctors, midwives, nurses, and specialists who
            chose to bring their skill home to the North. Warm, attentive, and here for you.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2 · The care teams                                                  */
/* ------------------------------------------------------------------ */

type Team = { title: string; image: string; icon: IconName; body: string };

const teams: Team[] = [
  {
    title: "Medical & Clinical",
    image: "/media/team/clinical",
    icon: "stethoscope",
    body: "Our doctors and clinical officers, who listen, diagnose, and guide your care with unhurried attention.",
  },
  {
    title: "Maternal & Child Health",
    image: "/media/team/maternal",
    icon: "heart",
    body: "The midwives and nurses who walk with mothers from the very first scan through delivery and a baby's early months.",
  },
  {
    title: "Nursing",
    image: "/media/team/nursing",
    icon: "clipboard",
    body: "The nurses at the heart of daily care, watching over you with patience and skill at every hour.",
  },
  {
    title: "Laboratory & Diagnostics",
    image: "/media/team/lab",
    icon: "flask",
    body: "The scientists whose careful, accurate results help your answers come sooner, right here on-site.",
  },
  {
    title: "Pharmacy",
    image: "/media/team/pharmacy",
    icon: "pill",
    body: "The pharmacy team who dispense your medicines and take the time to explain them before you leave.",
  },
  {
    title: "Emergency",
    image: "/media/team/emergency",
    icon: "siren",
    body: "The team ready the moment you need us, calm and quick, every hour of the day and night.",
  },
];

function Teams() {
  return (
    <section aria-labelledby="teams-heading" className="mx-auto max-w-310 px-5 py-20 md:px-8 md:py-28">
      <Reveal className="mb-14 max-w-2xl">
        <Eyebrow>Meet the teams</Eyebrow>
        <h2 id="teams-heading" className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
          Care from every <em>corner of the clinic</em>
        </h2>
        <p className="mt-5 text-[16.5px] leading-[1.7]">
          The people you&rsquo;ll meet at Dei Gratia, each team a part of the same promise:
          trusted care, given with grace.
        </p>
      </Reveal>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teams.map((team, i) => (
          <Reveal as="li" key={team.title} delay={(i % 3) * 80}>
            <div className="lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface">
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
                <picture>
                  <source srcSet={`${team.image}.avif`} type="image/avif" />
                  <img
                    src={`${team.image}.webp`}
                    alt={`The ${team.title.toLowerCase()} team at Dei Gratia`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                <span className="absolute top-5 left-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
                  <Icon name={team.icon} size={23} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[21px] leading-snug">{team.title}</h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-[1.65] text-body">{team.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3 · Leadership                                                      */
/* ------------------------------------------------------------------ */

type Role = { role: string; icon: IconName; body: string };

const leadership: Role[] = [
  {
    role: "Medical Director",
    icon: "stethoscope",
    body: "Sets our clinical standards and safeguards the quality of every patient's care.",
  },
  {
    role: "Head of Nursing",
    icon: "heart",
    body: "Guides our nursing teams and the warmth and dignity of care at the bedside.",
  },
  {
    role: "Administration & Operations",
    icon: "clipboard",
    body: "Keeps the clinic running smoothly, so your care always comes first.",
  },
];

function Leadership() {
  return (
    <section
      aria-labelledby="leadership-heading"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0px, var(--panel-soft) 220px, var(--panel-soft) calc(100% - 220px), #ffffff 100%)",
      }}
      className="py-20 md:py-28"
    >
      <div className="mx-auto max-w-310 px-5 md:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow>Leadership</Eyebrow>
          <h2 id="leadership-heading" className="text-[clamp(2.3rem,4.6vw,3.6rem)] leading-[1.06]">
            The hands that <em>steer the ship</em>
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7]">
            A small, dedicated leadership team holds the standard for everyone else. Full
            profiles of our leaders will be introduced here soon.
          </p>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((person, i) => (
            <Reveal as="li" key={person.role} delay={i * 80}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-surface p-7">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-white shadow-[0_2px_8px_rgba(47,107,216,0.28)]">
                  <Icon name={person.icon} size={26} />
                </span>
                <h3 className="mt-5 text-[21px] leading-snug">{person.role}</h3>
                <p className="mt-1 text-[12.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Profile to follow
                </p>
                <p className="mt-3 flex-1 text-[14.5px] leading-[1.7] text-body">{person.body}</p>
              </div>
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
    <section aria-labelledby="team-cta-heading" className="mx-auto max-w-310 px-5 pb-20 md:px-8 md:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl bg-navy-950 px-6 py-16 text-center md:px-16 md:py-24">
          <div
            className="aurora aurora-b bottom-[-40%] left-[-10%] h-[80%] w-[60%]"
            style={{ background: "radial-gradient(circle, rgba(47,107,216,0.28), transparent 64%)" }}
          />
          <div className="cross-grid absolute inset-0" aria-hidden />

          <div className="relative z-10">
            <Eyebrow light>Meet us in person</Eyebrow>
            <h2
              id="team-cta-heading"
              className="mx-auto max-w-2xl text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] text-white"
            >
              We&rsquo;d be glad to <em>care for you.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16.5px] leading-[1.7] text-navy-100/90">
              Book an appointment and meet the team that will look after you and your family,
              close to home.
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
