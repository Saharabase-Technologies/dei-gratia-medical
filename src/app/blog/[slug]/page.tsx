import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { site, bookingHref } from "@/config/site";
import { posts, getPost, formatDate, disclaimer, type Block } from "@/config/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found · Dei Gratia Medical Services" };
  return {
    title: `${post.title} · Dei Gratia Medical Services`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article>
      {/* Cover header */}
      <section aria-label={post.title} className="mx-auto max-w-310 px-5 pt-3 md:px-8 md:pt-5">
        <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-4xl bg-navy-950 px-6 py-12 md:min-h-[520px] md:px-16 md:py-16">
          <picture>
            <source srcSet={`${post.image}.avif`} type="image/avif" />
            <img
              src={`${post.image}.webp`}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </picture>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,26,46,0.35) 0%, rgba(14,26,46,0.55) 45%, rgba(14,26,46,0.92) 100%)",
            }}
          />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex rounded-pill bg-white/92 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
              {post.tag}
            </span>
            <h1 className="mt-5 font-black text-[clamp(2rem,4.8vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-white">
              {post.title}
            </h1>
            <p className="mt-5 text-[13.5px] font-semibold text-navy-100">
              {post.tag} · {formatDate(post.date)} · {post.readMinutes} min read
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-[46rem] px-5 py-16 md:px-8 md:py-24">
        <Reveal as="p" className="text-[19px] leading-[1.75] font-semibold text-foreground">
          {post.intro}
        </Reveal>

        <div className="mt-2">
          {post.body.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}
        </div>

        {/* A gentle note to close on */}
        <Reveal className="mt-12 rounded-3xl border border-border bg-panel-soft p-6 md:p-7">
          <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-foreground">
            <Icon name="heart" size={16} strokeWidth={2.2} className="text-accent" />
            A note from us
          </p>
          <p className="mt-3 text-[14.5px] leading-[1.7] text-body">{disclaimer}</p>
        </Reveal>

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent transition-colors duration-300 hover:text-accent-hover"
          >
            <Icon name="arrow" size={16} strokeWidth={2} className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
            All articles
          </Link>
        </div>
      </div>

      {/* Closing CTA */}
      <section aria-label="Contact" className="mx-auto max-w-310 px-5 pb-20 md:px-8 md:pb-28">
        <Reveal>
          <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-4xl bg-navy-950 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-14 md:py-14">
            <div
              className="aurora aurora-b bottom-[-40%] left-[-8%] h-[80%] w-[45%]"
              style={{ background: "radial-gradient(circle, rgba(47,107,216,0.26), transparent 64%)" }}
            />
            <div className="relative z-10 max-w-lg">
              <p className="font-display text-[24px] font-bold leading-[1.15] text-white md:text-[28px]">
                Have a health worry?
              </p>
              <p className="mt-2 text-[15.5px] leading-[1.6] text-navy-100/90">
                Do not wait on it. Book a visit, or talk it through with our team.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-3">
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
          </div>
        </Reveal>
      </section>
    </article>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h":
      return (
        <Reveal as="h2" className="mt-10 mb-1 text-[25px] leading-snug md:text-[27px]">
          {block.text}
        </Reveal>
      );
    case "p":
      return (
        <Reveal as="p" className="mt-4 text-[17px] leading-[1.8] text-slate-700">
          {block.text}
        </Reveal>
      );
    case "list":
      return (
        <Reveal as="ul" className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[16px] leading-[1.65] text-slate-700">
              <Icon name="check" size={19} strokeWidth={2.2} className="mt-0.5 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </Reveal>
      );
    case "note":
      return (
        <Reveal className="mt-8 rounded-3xl border border-accent/20 bg-accent-soft p-6 md:p-7">
          {block.title && (
            <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">
              <Icon name="heart" size={15} strokeWidth={2.2} />
              {block.title}
            </p>
          )}
          <p className={`text-[15.5px] leading-[1.7] text-slate-700 ${block.title ? "mt-2.5" : ""}`}>
            {block.text}
          </p>
        </Reveal>
      );
  }
}
