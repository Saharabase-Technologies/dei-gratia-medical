import Link from "next/link";
import { site } from "@/config/site";

/**
 * The Dei Gratia lockup: the circular seal emblem + a typeset wordmark.
 * `inverted` swaps to the white seal + light text for dark backgrounds.
 * `warm` tints the wordmark to the logo's ivory (used in the footer) so the
 * type reads as part of the same mark rather than a colder pure white.
 */
export function BrandMark({
  inverted = false,
  warm = false,
}: {
  inverted?: boolean;
  warm?: boolean;
}) {
  const logo = inverted ? "/brand/logo-light" : "/brand/logo-dark";
  const wordColor = warm ? "#f2ede2" : inverted ? "#fff" : "var(--foreground)";
  const subColor = warm ? "var(--color-blue-300)" : inverted ? "#fff" : "var(--primary)";
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
      <picture>
        <source srcSet={`${logo}.avif`} type="image/avif" />
        <img
          src={`${logo}.webp`}
          alt=""
          width={48}
          height={48}
          className="h-11 w-11 shrink-0 md:h-12 md:w-12"
          decoding="async"
        />
      </picture>
      <span className="leading-none">
        <span
          className="block font-display text-[19px] font-black leading-none tracking-[-0.01em] md:text-[21px]"
          style={{ color: wordColor }}
        >
          Dei Gratia
        </span>
        <span
          className="mt-[3px] block text-[10px] font-black uppercase tracking-[0.1em]"
          style={{ color: subColor }}
        >
          Medical Services
        </span>
      </span>
    </Link>
  );
}
