// ============================================================
// app/blog/page.jsx
// Blog Listing Page — /blog
// Server Component (no "use client" needed — no interactivity here)
// This page shows all blog posts in a premium dark-themed grid.
// ============================================================

import Link from "next/link";
import { getAllBlogs } from "@/lib/blogData";

// ── SEO Metadata ─────────────────────────────────────────────
// Next.js reads this export and injects it into <head>
// The `template` from layout.js appends "| Rizq Technologies"
export const metadata = {
  title: "Blog | Insights on Web, AI & Digital Growth",
  description:
    "Expert insights on web development, SEO, AEO, branding, AI tools, and digital growth strategies from the Rizq Technologies team.",
  keywords: [
    "Web Development Blog",
    "SEO Tips 2026",
    "AEO Strategy",
    "AI Tools India",
    "Digital Agency Blog",
    "Rizq Technologies",
  ],
  // OpenGraph — controls how the link looks when shared on WhatsApp, LinkedIn etc.
  openGraph: {
    title: "Rizq Technologies Blog | Web, AI & Digital Growth",
    description:
      "Expert insights on web development, SEO, branding, and AI tools for modern businesses.",
    url: "https://rizqtechnologies.com/blog",
    siteName: "Rizq Technologies",
    locale: "en_US",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Rizq Technologies Blog | Web, AI & Digital Growth",
    description:
      "Expert insights on web development, SEO, branding, and AI tools.",
    creator: "@rizqtech",
  },
  // Canonical URL — prevents duplicate content issues
  alternates: {
    canonical: "https://rizqtechnologies.com/blog",
  },
};

// ── Category colours for the badge on each card ──────────────
// Add new categories here as you add more blog posts
const categoryColors = {
  Performance: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "SEO & AEO": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  Branding: "bg-pink-500/15 text-pink-400 border-pink-500/20",
  "Web Development": "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  "AI & Automation": "bg-green-500/15 text-green-400 border-green-500/20",
  "E-Commerce": "bg-orange-500/15 text-orange-400 border-orange-500/20",
};

// ── Date Formatter ────────────────────────────────────────────
// Converts "2026-04-22" → "April 22, 2026"
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogListingPage() {
  // Fetch all blogs (sorted newest first) from our data store
  const blogs = getAllBlogs();

  // ── JSON-LD Structured Data ───────────────────────────────
  // 1. ItemList schema — tells Google this is a list of articles
  // 2. BreadcrumbList schema — shows Home > Blog in search results
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // ItemList: Lists all blog articles for Google Discover & rich results
      {
        "@type": "ItemList",
        name: "Rizq Technologies Blog",
        description:
          "Expert insights on web development, SEO, AEO, branding, AI, and digital growth.",
        url: "https://rizqtechnologies.com/blog",
        numberOfItems: blogs.length,
        itemListElement: blogs.map((blog, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: blog.title,
          url: `https://rizqtechnologies.com/blog/${blog.slug}`,
        })),
      },
      // BreadcrumbList: Displays "Home > Blog" in Google search snippets
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://rizqtechnologies.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://rizqtechnologies.com/blog",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Inject JSON-LD schema into the page <head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-black text-white">
        {/* ── Navbar Spacer ──────────────────────────────────────
            The fixed Navbar is 80px tall — push content below it */}
        <div className="pt-24" />

        {/* ── Back to Home Link ───────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-yellow-400 transition-colors uppercase tracking-widest font-bold"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* ── Hero Header ────────────────────────────────────────
            Decorative header section with gradient glow and title */}
        <section className="relative max-w-7xl mx-auto px-6 mb-20">
          {/* Radial glow behind the heading */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-400/5 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 text-center py-16">
            {/* Eyebrow label */}
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.4em] mb-6">
              Rizq Technologies
            </p>

            {/* Main H1 — one per page for SEO best practices */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Insights &{" "}
              <span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.4)]">
                Ideas
              </span>
            </h1>

            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Expert perspectives on web development, SEO, AI, and the digital
              strategies powering elite brands in 2026.
            </p>

            {/* Decorative horizontal rule */}
            <div className="mt-12 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
          </div>
        </section>

        {/* ── Blog Cards Grid ─────────────────────────────────────
            3 columns on desktop, 2 on tablet, 1 on mobile */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.slug} blog={blog} index={index} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

// ── BlogCard Component ────────────────────────────────────────
// Extracted as a separate function for readability.
// Each card links to /blog/[slug] for the individual blog page.
function BlogCard({ blog, index }) {
  // Get the colour class for this blog's category badge
  const badgeClass =
    categoryColors[blog.category] ||
    "bg-white/10 text-white/60 border-white/10";

  return (
    <Link
      href={`/blog/${blog.slug}`}
      // "group" class enables child hover effects (e.g., group-hover:text-yellow-400)
      className="group relative flex flex-col bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-500 hover:bg-white/[0.05]"
      aria-label={`Read article: ${blog.title}`}
    >
      {/* ── Top Accent Bar ─────────────────────────────────────
          Animated yellow bar that slides in on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-400/0 via-yellow-400 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* ── Card Header (Category Badge + Read Time) ───────── */}
      <div className="p-6 pb-4 flex items-center justify-between">
        {/* Category badge */}
        <span
          className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${badgeClass}`}
        >
          {blog.category}
        </span>
        {/* Read time */}
        <span className="text-white/30 text-xs font-medium">
          {blog.readTime}
        </span>
      </div>

      {/* ── Card Body (Title + Excerpt) ────────────────────── */}
      <div className="px-6 flex-1 flex flex-col">
        {/* Blog title — transitions to yellow on hover */}
        <h2 className="text-white font-bold text-xl leading-[1.3] mb-3 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-3">
          {blog.title}
        </h2>
        {/* Excerpt — clamped to 3 lines */}
        <p className="text-white/45 text-sm leading-relaxed line-clamp-3 flex-1">
          {blog.excerpt}
        </p>
      </div>

      {/* ── Card Footer (Author + Date + Arrow) ────────────── */}
      <div className="p-6 pt-5 mt-auto">
        {/* Divider */}
        <div className="h-[1px] bg-white/5 mb-5" />

        <div className="flex items-center justify-between">
          {/* Author info */}
          <div className="flex items-center gap-3">
            {/* Avatar placeholder with initials */}
            <div className="w-8 h-8 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
              <span className="text-yellow-400 text-xs font-bold">
                {/* First letter of author name */}
                {blog.author.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-white/80 text-xs font-semibold leading-none mb-0.5">
                {blog.author.name}
              </p>
              <p className="text-white/30 text-[10px] uppercase tracking-wider">
                {formatDate(blog.date)}
              </p>
            </div>
          </div>

          {/* Read more arrow — animates on hover */}
          <span className="text-yellow-400/50 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300 text-lg">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
