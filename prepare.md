# SEO Preparation Plan - Rizq Technologies

This document outlines the current state of the project and the steps required to optimize it for Search Engines (SEO).

## 📊 Current Project Analysis

| Feature | Status | Notes |
| :--- | :--- | :--- |
| **Framework** | ✅ Next.js 16 | Modern, SSR/SSG capable. |
| **Metadata API** | ❌ Missing | No global or page-level metadata defined. |
| **Semantic HTML** | 🟡 Partial | Some components use `<h1>`, `section`, etc. |
| **Favicons** | 🟡 Basic | Only standard `favicon.ico` present. |
| **Open Graph/Twitter** | ❌ Missing | No social sharing cards defined. |
| **Robots.txt** | ❌ Missing | Search engines have no indexing instructions. |
| **Sitemap.xml** | ❌ Missing | No crawler map for the site. |
| **Performance (Vitals)** | 🟡 Needs Review | Heavy use of animations (GSAP/Motion) and video background. |

## 📄 Page-by-Page SEO Breakdown

Since this is currently a Single-Page Application (SPA) structure, we will treat each section as a primary SEO target using anchor optimization and individual metadata (where possible).

| Page / Section | Status | Target Keywords | Implementation |
| :--- | :--- | :--- | :--- |
| **Home (Hero)** | ✅ Live | Brand Name, Agency Identity | `h1` Title, Meta Description |
| **Services** | ✅ Live | Web Dev, SEO, Design, Branding | `h2` Tags, Semantic Lists |
| **Portfolio** | ✅ Live | Case Studies, Client Work | Image Alt Text, Project Descriptions |
| **Pricing** | ✅ Live | Packages, Strategy, SaaS | Comparison Table, Conversion Optimization |
| **Contact** | ✅ Live | Lead Gen, Quote, Location | Form Labels, Structured Data |
| **Blog** | ❌ Planned | Industry news, tutorials | Needs dedicated `/blog` route |
| **Privacy Policy** | ❌ Missing | Compliance, Terms | Footer link, `/privacy` page |

---

## 🚀 SEO Strategy & Implementation Steps

### 1. Metadata Implementation (Highest Priority)
Next.js 13+ handles metadata through the `Metadata` API. We need to:
- Add `public/metadata` assets (Logo, OG images).
- Configure `app/layout.js` with global metadata (Title Template, Description, Icons).
- Configure `app/page.jsx` with specific page metadata.

### 2. Search Engine Visibility
- **Robots.txt**: Create `app/robots.js` to manage crawler access.
- **Sitemap**: Create `app/sitemap.js` to automatically generate `sitemap.xml`.
- **Google Search Console**: Setup verification tags.

### 3. Content Optimization
- **Keyword Research**: Define core keywords (e.g., "Digital Agency", "Web Development", "2026 Tech Trends").
- **Header Hierarchy**: Ensure only one `<h1>` per page and progressive `<h2>`-`<h6>` usage.
- **Image/Video Alt Text**: Add descriptive labels to all media for accessibility and SEO.

### 4. Technical SEO
- **Canonical URLs**: Prevent duplicate content issues.
- **JSON-LD Schema**: Add structured data (Organization, LocalBusiness) to help Google understand the site.
- **Performance**: Optimize `hero.mp4` and ensure fast LCP (Largest Contentful Paint).

---

## 🛠 Required Tasks

- [ ] Create `app/layout.js` metadata configuration.
- [ ] Create `app/robots.js` and `app/sitemap.js`.
- [ ] Add Open Graph (OG) image to `public/`.
- [ ] Add JSON-LD Structured Data in `app/components/SEOExtras.jsx`.
- [ ] Optimize Header tags across all components.
- [ ] Implement `next-sitemap` or native Next.js handlers.

## 📈 Next Steps
1. **Approval**: Confirm which project title and description you want to use.
2. **Assets**: Provide a logo or high-quality image for social media sharing cards.
3. **Execution**: Start with the `layout.js` metadata setup.
