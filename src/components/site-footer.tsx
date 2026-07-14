import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { Icon } from "@/components/icon";
import { site, primaryNav, services } from "@/config/site";

const PLACEHOLDER = "PLACEHOLDER";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "Facebook", href: site.social.facebook },
    { label: "Instagram", href: site.social.instagram },
    { label: "TikTok", href: site.social.tiktok },
  ].filter((s) => s.href !== PLACEHOLDER);

  return (
    <footer className="pt-8 md:pt-12">
      {/* Curved navy panel — full-bleed background, content held to nav width. */}
      <div
        className="relative overflow-hidden rounded-t-[2.25rem] text-navy-200 md:rounded-t-[3rem]"
        style={{ background: "linear-gradient(158deg, #16294a 0%, #0e1a2e 58%)" }}
      >
        {/* Ambient light + faint cross texture, the same material as the mobile menu */}
        <div
          className="aurora aurora-a top-[-25%] right-[-12%] h-[70vh] w-[55vh] opacity-80"
          style={{ background: "radial-gradient(circle, rgba(47,107,216,0.30), transparent 64%)" }}
        />
        <div
          className="aurora aurora-b bottom-[-30%] left-[-12%] h-[60vh] w-[55vh] opacity-70"
          style={{ background: "radial-gradient(circle, rgba(47,107,216,0.20), transparent 66%)" }}
        />
        <div className="cross-grid absolute inset-0" aria-hidden />

        <div className="relative mx-auto flex min-h-[80vh] max-w-310 flex-col px-6 pt-20 pb-8 md:min-h-[88vh] md:px-14 md:pt-32 md:pb-12">
          {/* Brand + link columns */}
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <BrandMark inverted warm />
              <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-navy-300">
                Modern medicine and patient, compassionate care, right here in
                Tamale, Northern Region.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <a
                  href={site.phone.href}
                  className="inline-flex h-10 items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-4 text-[13px] font-semibold text-white transition-colors duration-300 hover:border-white/40"
                >
                  <Icon name="phone" size={14} />
                  {site.phone.display}
                </a>
                <a
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-4 text-[13px] font-semibold text-white transition-colors duration-300 hover:border-white/40"
                >
                  <Icon name="whatsapp" size={15} viewBox="0 0 32 32" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Four compact columns — 2×2 on mobile, a row on desktop */}
            <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4">
              <FooterNav label="Explore">
                {[{ label: "Home", href: "/" }, ...primaryNav].map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </FooterNav>

              <FooterNav label="Services">
                {services.slice(0, 6).map((s) => (
                  <FooterLink key={s.href} href={s.href}>
                    {s.title}
                  </FooterLink>
                ))}
              </FooterNav>

              <div>
                <ColHeading>Visit us</ColHeading>
                <address className="space-y-1.5 text-[13.5px] not-italic leading-relaxed">
                  <p className="font-semibold text-white">{site.address.line1}</p>
                  <p className="text-[13px] text-navy-300">{site.address.line2}</p>
                  <p className="text-[13px] text-navy-300">
                    {site.address.city}, {site.address.region}
                  </p>
                  <a
                    href={site.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2 inline-flex items-center gap-1.5 font-semibold text-blue-300 transition-colors duration-300 hover:text-white"
                  >
                    Get directions
                    <Icon name="arrow" size={14} className="arrow-slide" strokeWidth={2} />
                  </a>
                </address>
              </div>

              <div>
                <ColHeading>Talk to us</ColHeading>
                <ul className="space-y-2 text-[13.5px]">
                  <li>
                    <a href={site.phoneAlt.href} className="transition-colors duration-300 hover:text-white">
                      {site.phoneAlt.display}
                    </a>
                  </li>
                  <li>
                    <a href={site.email.href} className="break-all transition-colors duration-300 hover:text-white">
                      {site.email.display}
                    </a>
                  </li>
                  <li className="text-navy-300">OPD {site.hours}</li>
                  <li className="font-semibold text-blue-300">Emergency 24/7</li>
                </ul>
                {socials.length > 0 && (
                  <ul className="mt-4 flex gap-4">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[13px] font-semibold text-navy-300 transition-colors duration-300 hover:text-white"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Bottom bar + credit, pinned to the base of the tall footer */}
          <div className="mt-auto pt-16 md:pt-24">
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-[12.5px] text-navy-400">
              © {year} {site.name}. All rights reserved.
            </p>
            <p className="font-display text-[14px] italic text-navy-300">
              Dei Gratia, by the grace of God.
            </p>
          </div>

          {/* Maker credit — given its own line, made prominent */}
          <div className="mt-5 flex items-center justify-center gap-2 border-t border-white/10 pt-5 text-center">
            <span className="text-[12.5px] text-navy-400">Designed &amp; built by</span>
            <a
              href="https://saharabasetech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-bold text-white underline decoration-blue-400/50 underline-offset-4 transition-colors duration-300 hover:decoration-blue-400"
            >
              Saharabase Technologies
            </a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">{children}</p>
  );
}

function FooterNav({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <nav aria-label={`Footer — ${label.toLowerCase()}`}>
      <ColHeading>{label}</ColHeading>
      <ul className="space-y-2">{children}</ul>
    </nav>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[13.5px] text-navy-200 transition-colors duration-300 hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
