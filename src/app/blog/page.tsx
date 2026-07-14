import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BlogIndex } from "@/components/blog-index";
import { posts, postTags } from "@/config/posts";

export const metadata: Metadata = {
  title: "Health & Community · Dei Gratia Medical Services, Tamale",
  description:
    "Practical health advice for life in the Northern Region, from staying well through the seasons to caring for your family. From the team at Dei Gratia Medical Services.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHeader />
      <BlogIndex posts={posts} tags={postTags} />
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

function BlogHeader() {
  return (
    <section aria-label="Health and community" className="mx-auto max-w-310 px-5 pt-3 md:px-8 md:pt-5">
      <div className="relative overflow-hidden rounded-4xl bg-navy-950 px-6 pt-16 pb-14 md:px-16 md:pt-24 md:pb-20">
        <div
          className="aurora aurora-a top-[-30%] right-[-15%] h-[90%] w-[60%]"
          style={{ background: "radial-gradient(circle, rgba(47,107,216,0.32), transparent 62%)" }}
        />
        <div className="cross-grid absolute inset-0" aria-hidden />

        <div className="relative z-10 max-w-3xl">
          <Eyebrow light>Health &amp; Community</Eyebrow>
          <h1 className="font-black text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.04] tracking-[-0.02em] text-white">
            Advice for life <em>in the North</em>
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-navy-100/90 md:text-[18px]">
            Practical health advice for life in the Northern Region, from staying well through the
            seasons to caring for your family, from the team at Dei Gratia.
          </p>
        </div>
      </div>
    </section>
  );
}
