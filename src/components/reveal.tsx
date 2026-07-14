"use client";

import {
  createElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Scroll-triggered reveal. Renders `as` with [data-reveal]; when the element
 * enters the viewport it gains `.is-inview` and the CSS in globals.css eases
 * it up. It re-triggers in BOTH directions: scroll it out of view and it
 * resets, so scrolling back (up or down) replays the animation.
 * `delay` (ms) staggers siblings. Reduced-motion users see it immediately.
 */
export function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("is-inview", entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className,
      "data-reveal": "",
      style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
    },
    children
  );
}
