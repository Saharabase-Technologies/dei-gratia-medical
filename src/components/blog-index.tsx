"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { formatDate, type Post } from "@/config/posts";

/**
 * Blog index: a highlighted lead article, a tag filter, then the rest as a
 * grid. Filtering is client-side so the page stays a fast static export.
 */
export function BlogIndex({ posts, tags }: { posts: Post[]; tags: string[] }) {
  const [active, setActive] = useState<string>("All");
  const featured = posts.find((p) => p.featured) ?? posts[0];

  const filtered = useMemo(() => {
    const rest = active === "All" ? posts.filter((p) => p !== featured) : posts;
    return active === "All" ? rest : rest.filter((p) => p.tag === active);
  }, [active, posts, featured]);

  const filters = ["All", ...tags];

  return (
    <section aria-label="Latest posts" className="mx-auto max-w-310 px-5 py-16 md:px-8 md:py-24">
      {/* Featured lead — only on the unfiltered view */}
      {active === "All" && featured && (
        <Reveal className="mb-14">
          <Link
            href={`/blog/${featured.slug}`}
            className="lift group grid overflow-hidden rounded-4xl border border-border bg-surface md:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-navy-900 md:aspect-auto md:min-h-[360px]">
              <picture>
                <source srcSet={`${featured.image}.avif`} type="image/avif" />
                <img
                  src={`${featured.image}.webp`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  loading="eager"
                  decoding="async"
                />
              </picture>
              <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-pill bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                <Icon name="cross" size={12} strokeWidth={2.6} />
                Latest
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-[12.5px] font-semibold text-muted-foreground">
                {featured.tag} · {formatDate(featured.date)} · {featured.readMinutes} min read
              </p>
              <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.15]">{featured.title}</h2>
              <p className="mt-4 max-w-md text-[15.5px] leading-[1.7] text-body">{featured.excerpt}</p>
              <span className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent">
                Read the article
                <Icon name="arrow" size={15} className="arrow-slide" strokeWidth={2} />
              </span>
            </div>
          </Link>
        </Reveal>
      )}

      {/* Filter chips */}
      <div className="mb-10 flex flex-wrap gap-2.5">
        {filters.map((f) => {
          const on = f === active;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={on}
              className={`inline-flex h-10 items-center rounded-pill border px-4 text-[13.5px] font-semibold transition-colors duration-300 ${
                on
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface text-foreground hover:border-navy-300"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <ul className="grid gap-5 md:grid-cols-3">
          {filtered.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={(i % 3) * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface"
              >
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
                  <p className="text-[12.5px] font-semibold text-muted-foreground">
                    {formatDate(post.date)} · {post.readMinutes} min read
                  </p>
                  <h3 className="mt-2 text-[21px] leading-[1.35]">{post.title}</h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-[1.6] text-body">{post.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent">
                    Read the article
                    <Icon name="arrow" size={14} className="arrow-slide" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      ) : (
        <p className="py-10 text-[15px] text-body">No articles in this topic yet, check back soon.</p>
      )}
    </section>
  );
}
