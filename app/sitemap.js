// Import blog data so we can generate sitemap entries for all blog posts
import { getAllBlogs } from "@/lib/blogData";

export default function sitemap() {
  const baseUrl = "https://rizq-technologies.vercel.app";
  const today = new Date().toISOString().split("T")[0];

  // ── Static Routes ─────────────────────────────────────────
  // Priority 1.0 = home page, 0.8 = important pages, 0.7 = blog listing
  const staticRoutes = [
    { url: `${baseUrl}`, lastModified: new Date(today).toISOString(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(today).toISOString(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(today).toISOString(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(today).toISOString(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(today).toISOString(), changeFrequency: "monthly", priority: 0.8 },
    // Blog listing page — updated more frequently as new posts are added
    { url: `${baseUrl}/blog`, lastModified: new Date(today).toISOString(), changeFrequency: "weekly", priority: 0.7 },
  ];

  // ── Dynamic Blog Routes ───────────────────────────────────
  // Generates one sitemap entry per blog post.
  // lastModified uses the blog's own publish date for accuracy.
  const blogRoutes = getAllBlogs().map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date).toISOString(), // Use actual publish date (not today) for accuracy
    changeFrequency: "monthly",
    priority: 0.6, // Blog posts slightly lower priority than main service pages
  }));

  // Combine static + dynamic routes into one sitemap
  return [...staticRoutes, ...blogRoutes];
}

