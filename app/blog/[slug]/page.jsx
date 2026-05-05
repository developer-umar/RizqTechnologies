// ============================================================
// app/blog/[slug]/page.jsx
// Individual Blog Post Page — /blog/[slug]
// Server Component with dynamic params from the URL slug.
// Generates static pages at build time via generateStaticParams.
// ============================================================

import Link from "next/link";
import Image from "next/image"; // ← was missing — caused ReferenceError at build time
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllSlugs, getRelatedBlogs } from "@/lib/blogData";

// ── generateViewport ──────────────────────────────────────────
// Next.js 15+ requires themeColor to be in generateViewport,
// NOT in the metadata export — otherwise build throws a warning.
export function generateViewport() {
  return {
    themeColor: "#000000",
  };
}

// ── generateStaticParams ─────────────────────────────────────
// Tells Next.js to pre-render a page for every blog slug at build time.
// This gives us static HTML pages — maximum performance + SEO.
export async function generateStaticParams() {
  return getAllSlugs(); // returns [{ slug: "..." }, ...]
}

// ── generateMetadata ──────────────────────────────────────────
// Dynamically generates SEO metadata for each individual blog post.
// Next.js calls this before rendering the page and injects it into <head>.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  // If slug doesn't match any blog, return a fallback title
  if (!blog) {
    return { title: "Blog Post Not Found" };
  }

  return {
    // Page title uses the layout.js template: "[title] | Rizq Technologies"
    title: blog.title,
    description: blog.excerpt,
    keywords: blog.tags,
    // OpenGraph — controls social share previews (WhatsApp, LinkedIn, Twitter)
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://rizq-technologies.vercel.app/blog/${blog.slug}`,
      siteName: "Rizq Technologies",
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author.name],
      tags: blog.tags,
      images: [
        {
          url: blog.coverImage.startsWith("http")
            ? blog.coverImage
            : `https://rizq-technologies.vercel.app${blog.coverImage}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      creator: "@rizqtech",
      images: [
        blog.coverImage.startsWith("http")
          ? blog.coverImage
          : `https://rizq-technologies.vercel.app${blog.coverImage}`,
      ],
    },
    // Canonical URL — prevents duplicate content issues
    alternates: {
      canonical: `https://rizq-technologies.vercel.app/blog/${blog.slug}`,
    },
  };
}

// ── Date Formatter ────────────────────────────────────────────
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ── Category badge colours (same as listing page) ─────────────
const categoryColors = {
  Performance: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "SEO & AEO": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  Branding: "bg-pink-500/15 text-pink-400 border-pink-500/20",
  "Web Development": "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  "AI & Automation": "bg-green-500/15 text-green-400 border-green-500/20",
  "E-Commerce": "bg-orange-500/15 text-orange-400 border-orange-500/20",
};

// ── Main Page Component ───────────────────────────────────────
export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  // Look up this blog post by its slug
  const blog = getBlogBySlug(slug);

  // If no blog found for this slug → show Next.js 404 page
  if (!blog) {
    notFound();
  }

  // Get up to 3 related posts (prefers same category)
  const relatedBlogs = getRelatedBlogs(slug, blog.category);

  const badgeClass =
    categoryColors[blog.category] ||
    "bg-white/10 text-white/60 border-white/10";

  // ── JSON-LD Structured Data ─────────────────────────────────
  // 1. Article schema — tells Google this is an article (for rich results)
  // 2. FAQPage schema — feeds People Also Ask / AI answer engines (AEO)
  // 3. BreadcrumbList — shows "Home > Blog > Post Title" in search
  const BASE_URL = "https://rizq-technologies.vercel.app";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // Article Schema — used by Google for article-rich results
      {
        "@type": "Article",
        "@id": `${BASE_URL}/blog/${blog.slug}/#article`,
        headline: blog.title,
        description: blog.excerpt,
        datePublished: blog.date,
        dateModified: blog.date,
        author: {
          "@type": "Person",
          name: blog.author.name,
          worksFor: {
            // Links to the global Organization schema in SEOExtras.jsx
            "@id": `${BASE_URL}/#organization`,
          },
        },
        // publisher links back to global Organization @id for cross-schema consistency
        publisher: { "@id": `${BASE_URL}/#organization` },
        url: `${BASE_URL}/blog/${blog.slug}`,
        mainEntityOfPage: `${BASE_URL}/blog/${blog.slug}`,
        keywords: blog.tags.join(", "),
        image: blog.coverImage || `${BASE_URL}/og-image.png`,
      },

      // FAQPage Schema — this is the core AEO implementation.
      // Google uses this to power "People Also Ask" boxes,
      // and AI engines (ChatGPT, Perplexity) use it to answer questions.
      {
        "@type": "FAQPage",
        mainEntity: blog.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },

      // BreadcrumbList Schema — shows "Home > Blog > Post Title" in SERPs
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${BASE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
            item: `${BASE_URL}/blog/${blog.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Inject all JSON-LD schemas into the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-black text-white">
        {/* ── Navbar Spacer ───────────────────────────────────── */}
        <div className="pt-24" />

        {/* ── Breadcrumb Navigation (visual, not just schema) ── */}
        <div className="max-w-4xl mx-auto px-6 mb-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-white/30"
          >
            <Link
              href="/"
              className="hover:text-yellow-400 transition-colors font-medium"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-yellow-400 transition-colors font-medium"
            >
              Blog
            </Link>
            <span>/</span>
            {/* Current page — truncated for readability */}
            <span className="text-white/60 truncate max-w-[200px]">
              {blog.title}
            </span>
          </nav>
        </div>

        {/* ── Cover Image Hero ─────────────────────────────────
            Full-width banner image at the top of the post.
            Uses aspect-video (16:9) with object-cover fill. */}
        <div className="max-w-4xl mx-auto px-6 mb-10">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-900">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              priority // Hero image should always load first
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
            {/* Gradient overlay: darkens edges for premium look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
          </div>
        </div>


        {/* ── Article Hero ─────────────────────────────────────── */}
        <article
          // itemScope + itemType mark this as a schema.org Article for crawlers
          itemScope
          itemType="https://schema.org/Article"
          className="max-w-4xl mx-auto px-6"
        >
          {/* ── Post Header ──────────────────────────────────── */}
          <header className="mb-14 relative">
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-yellow-400/5 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10">
              {/* Category Badge */}
              <div className="flex items-center gap-4 mb-6">
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${badgeClass}`}
                >
                  {blog.category}
                </span>
                <span className="text-white/30 text-xs">{blog.readTime}</span>
              </div>

              {/* H1 — Main article title (SEO critical, one per page) */}
              {/* itemProp="headline" marks it for Article schema */}
              <h1
                itemProp="headline"
                className="text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight mb-6 text-white"
              >
                {blog.title}
              </h1>

              {/* Excerpt / lead paragraph */}
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                {blog.excerpt}
              </p>

              {/* Author + Date row */}
              <div className="flex flex-wrap items-center gap-6 py-6 border-t border-b border-white/8">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                    <span className="text-yellow-400 font-bold text-sm">
                      {blog.author.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p
                      itemProp="author"
                      className="text-white text-sm font-semibold"
                    >
                      {blog.author.name}
                    </p>
                    <p className="text-white/40 text-xs">{blog.author.role}</p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  {/* itemProp="datePublished" — used by Article schema */}
                  <time itemProp="datePublished" dateTime={blog.date}>
                    {formatDate(blog.date)}
                  </time>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 ml-auto">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-white/30 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* ── Article Body ──────────────────────────────────────
              Content is stored as HTML string in blogData.js.
              The CSS classes below style h2, p, ul, blockquote
              using Tailwind's `prose`-like selectors. */}
          <div
            itemProp="articleBody"
            className="blog-content mb-16"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* ── FAQ Section ──────────────────────────────────────
              This serves dual purpose:
              1. Visual accordion for human readers
              2. FAQPage JSON-LD schema above feeds AI/search engines (AEO) */}
          {blog.faqs && blog.faqs.length > 0 && (
            <section className="mb-16" aria-labelledby="faq-heading">
              {/* Section header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-[1px] bg-white/8" />
                <h2
                  id="faq-heading"
                  className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]"
                >
                  Frequently Asked Questions
                </h2>
                <div className="flex-1 h-[1px] bg-white/8" />
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {blog.faqs.map((faq, i) => (
                  <FaqItem key={i} faq={faq} />
                ))}
              </div>
            </section>
          )}

          {/* ── CTA Banner ───────────────────────────────────────
              Encourage readers to contact Rizq */}
          <div className="relative rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-8 md:p-10 mb-16 overflow-hidden">
            {/* Glow accent */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.08),transparent_60%)] pointer-events-none"
            />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">
                  Ready to grow?
                </p>
                <h3 className="text-white text-2xl font-bold leading-tight">
                  Let&apos;s build something exceptional together.
                </h3>
                <p className="text-white/50 text-sm mt-2">
                  Talk to our team about your project — no commitment required.
                </p>
              </div>
              <Link
                href="/#contact"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-yellow-400 text-black px-7 py-3.5 rounded-full font-black text-sm uppercase tracking-wide hover:bg-yellow-300 transition-colors"
              >
                Get Started <span>→</span>
              </Link>
            </div>
          </div>
        </article>

        {/* ── Related Posts ─────────────────────────────────────── */}
        {relatedBlogs.length > 0 && (
          <section
            className="max-w-4xl mx-auto px-6 pb-32"
            aria-labelledby="related-heading"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-[1px] bg-white/8" />
              <h2
                id="related-heading"
                className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]"
              >
                More Articles
              </h2>
              <div className="flex-1 h-[1px] bg-white/8" />
            </div>

            {/* Related posts grid — 1-3 cards depending on available posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedBlogs.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group p-5 bg-white/[0.02] border border-white/8 rounded-xl hover:border-yellow-400/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  {/* Category badge */}
                  <span
                    className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                      categoryColors[related.category] ||
                      "bg-white/10 text-white/60 border-white/10"
                    } inline-block mb-3`}
                  >
                    {related.category}
                  </span>
                  {/* Title */}
                  <h3 className="text-white text-sm font-semibold leading-snug line-clamp-3 group-hover:text-yellow-400 transition-colors">
                    {related.title}
                  </h3>
                  {/* Read time + arrow */}
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-white/25 text-[10px]">
                      {related.readTime}
                    </span>
                    <span className="text-yellow-400/40 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all text-sm">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Back to all blogs */}
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-yellow-400 transition-colors uppercase tracking-widest font-bold"
              >
                <span>←</span>
                <span>All Articles</span>
              </Link>
            </div>
          </section>
        )}
      </main>

      {/* ── Article Content Styles ───────────────────────────────
          Tailwind doesn't style raw HTML by default.
          These styles target the blog content rendered via
          dangerouslySetInnerHTML inside .blog-content */}
      <style>{`
        .blog-content {
          color: rgba(255,255,255,0.75);
          font-size: 1.0625rem;
          line-height: 1.85;
        }
        /* Headings */
        .blog-content h2 {
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .blog-content h3 {
          color: rgba(255,255,255,0.9);
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        /* Paragraphs */
        .blog-content p {
          margin-bottom: 1.25rem;
        }
        /* Blockquote — visually highlighted pull-quote */
        .blog-content blockquote {
          border-left: 3px solid #FACC15;
          padding: 1rem 1.5rem;
          margin: 2rem 0;
          background: rgba(250,204,21,0.04);
          border-radius: 0 0.75rem 0.75rem 0;
          color: rgba(255,255,255,0.85);
          font-style: italic;
          font-size: 1.1rem;
        }
        /* Lists */
        .blog-content ul {
          margin-bottom: 1.25rem;
          padding-left: 0;
          list-style: none;
        }
        .blog-content ul li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.6rem;
          color: rgba(255,255,255,0.7);
        }
        /* Custom yellow bullet */
        .blog-content ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.65rem;
          width: 6px;
          height: 6px;
          background: #FACC15;
          border-radius: 50%;
        }
        /* Strong / bold text */
        .blog-content strong {
          color: #ffffff;
          font-weight: 700;
        }
        /* Italic */
        .blog-content em {
          color: rgba(255,255,255,0.9);
        }
        /* Inline code */
        .blog-content code {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          padding: 0.1em 0.4em;
          font-size: 0.875em;
          color: #FACC15;
        }
        /* Links inside content */
        .blog-content a {
          color: #FACC15;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .blog-content a:hover {
          color: #FDE68A;
        }
      `}</style>
    </>
  );
}

// ── FaqItem Component ─────────────────────────────────────────
// A simple server-side FAQ item with native HTML <details>/<summary>
// so it works without JavaScript AND is fully accessible.
// The FAQPage JSON-LD schema above also marks these up for Google.
function FaqItem({ faq }) {
  return (
    <details className="group border border-white/8 rounded-xl bg-white/[0.02] hover:border-white/15 transition-colors">
      <summary
        // Remove default browser triangle — we use our own icon
        className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none"
      >
        <span className="text-white text-sm font-semibold leading-snug flex-1">
          {faq.question}
        </span>
        {/* Toggle icon — rotates 45deg when open via CSS group-open */}
        <span className="text-yellow-400 text-xl flex-shrink-0 transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      {/* Answer — visible when <details> is open */}
      <p className="px-5 pb-5 text-white/55 text-sm leading-relaxed border-t border-white/8 pt-4">
        {faq.answer}
      </p>
    </details>
  );
}
