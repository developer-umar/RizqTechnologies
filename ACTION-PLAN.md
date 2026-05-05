# SEO Action Plan: Rizq Technologies

**Website:** https://rizq-technologies.vercel.app
**Current Score:** 63/100
**Target Score:** 85+/100
**Date:** May 4, 2026

---

## Priority Matrix

| Priority | Definition | Timeline |
|----------|-----------|----------|
| Critical | Blocks indexing or causes penalties | Fix immediately (48 hours) |
| High | Significantly impacts rankings | Fix within 1 week |
| Medium | Optimization opportunity | Fix within 1 month |
| Low | Nice to have | Backlog |

---

## Phase 1: Critical Fixes (48 Hours)

### 1. Add H1 Tags to Missing Pages
**Priority:** Critical | **Effort:** 10 minutes | **Impact:** High

**Affected pages:** `/about`, `/services`, `/portfolio`, `/contact`

Every page needs exactly one H1 tag that describes the page content and includes a target keyword:

```jsx
// /about — add:
<h1>About Rizq Technologies — Digital Agency for Elite Brands</h1>

// /services — add:
<h1>Digital Services — Web Development, AI & Branding</h1>

// /portfolio — add:
<h1>Our Portfolio — Case Studies & Digital Experiences</h1>

// /contact — add:
<h1>Contact Rizq Technologies — Let's Build Together</h1>
```

**Files to modify:**
- `app/about/page.jsx`
- `app/services/page.jsx`
- `app/portfolio/page.jsx`
- `app/contact/page.jsx`

---

### 2. Fix Privacy Policy and Terms of Service Links
**Priority:** Critical | **Effort:** 2 hours | **Impact:** High

Current: `href="#"` (dead links)
Fix: Create real pages or remove the links entirely.

**Options:**
- **Option A (Recommended):** Create `/privacy` and `/terms` pages with real content
- **Option B:** Remove the links until pages are ready
- **Option C:** Use a privacy policy generator (Termly, PrivacyPolicies.com) for quick setup

---

### 3. Fix Blog Canonical URL Mismatch
**Priority:** Critical | **Effort:** 5 minutes | **Impact:** High

Current: `https://rizqtechnologies.com/blog`
Should be: `https://rizq-technologies.vercel.app/blog`

**File to modify:** `app/blog/page.jsx` — fix the canonical URL generation to use the correct domain.

---

### 4. Replace "Rizq Team" with Named Authors
**Priority:** Critical | **Effort:** 1-2 hours | **Impact:** High

All blog posts attributed to "Rizq Team" violate Google's December 2025 authorship standards.

**Actions:**
1. Identify at least the founder/lead writer
2. Create author bio pages (`/team/[name]`)
3. Update all blog posts to use real author names
4. Add `Person` schema for each author

---

## Phase 2: High Priority (1 Week)

### 5. Shorten Title Tags
**Priority:** High | **Effort:** 15 minutes | **Impact:** Medium-High

| Page | Current (chars) | Recommended |
|------|----------------|-------------|
| `/services` | 71 chars | `Web Development, AI & Branding Services \| Rizq` (52) |
| `/portfolio` | 70 chars | `Case Studies & Digital Portfolio \| Rizq Tech` (47) |
| `/contact` | 68 chars | `Contact Us — Get in Touch \| Rizq Technologies` (49) |
| `/blog` | 67 chars | `Blog — Web, AI & Digital Insights \| Rizq` (46) |

**Files to modify:** Each page's metadata export.

---

### 6. Remove Duplicate Brand in Titles
**Priority:** High | **Effort:** 10 minutes | **Impact:** Medium

`/about`: "About Us \| Rizq Technologies - Go Global \| **Rizq Technologies**" (brand appears twice)
`/contact`: "Contact Us \| Get in Touch with **Rizq Technologies** \| **Rizq Technologies**" (brand appears twice)

Remove the trailing `\| Rizq Technologies` suffix.

---

### 7. Add OG Images to All Inner Pages
**Priority:** High | **Effort:** 1 hour | **Impact:** Medium

Currently only the homepage has an `og:image`. Every page needs a unique OG image for proper social sharing.

**Recommended approach:**
- Generate OG images dynamically using Next.js OG Image Generation (`@vercel/og`)
- Or create static images for each page type in `public/og/`

```jsx
// Example metadata addition:
export const metadata = {
  openGraph: {
    images: ['/og-about.png'],
  },
};
```

---

### 8. Add Meta Description to Blog Posts
**Priority:** High | **Effort:** 30 minutes | **Impact:** Medium

Ensure each of the 6 blog posts has a unique, keyword-rich meta description (120-160 characters).

---

### 9. Add Content-Security-Policy Header
**Priority:** High | **Effort:** 30 minutes | **Impact:** Medium

Add CSP to `next.config.mjs`:

```js
{ key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';" }
```

Adjust directives based on your actual third-party scripts.

---

### 10. Expand Content on Thin Pages
**Priority:** High | **Effort:** 4-8 hours | **Impact:** Very High

| Page | Current | Target | What to Add |
|------|---------|--------|-------------|
| `/about` | 157 words | 500+ words | Founder story, team bios, company values, timeline, mission |
| `/services` | 226 words | 800+ words | 150+ words per service: process, tech stack, deliverables, pricing range |
| `/portfolio` | 163 words | 300+ words | Intro text + brief case study blurbs for each project |
| `/contact` | 147 words | 300+ words | FAQ section, response time expectations, process overview |

---

## Phase 3: Medium Priority (1 Month)

### 11. Add ProfessionalService Schema
**Priority:** Medium | **Effort:** 30 minutes | **Impact:** Medium

Add to homepage JSON-LD:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Rizq Technologies",
  "description": "...",
  "areaServed": "Worldwide",
  "priceRange": "$$",
  "serviceType": ["Web Development", "Branding", "AI Solutions"]
}
```

---

### 12. Add BlogPosting Schema to Blog Posts
**Priority:** Medium | **Effort:** 2 hours | **Impact:** Medium

Each blog post needs:
- `@type: BlogPosting`
- `headline`, `datePublished`, `dateModified`
- `author` (Person schema with name)
- `image`
- `publisher` (Organization reference)

---

### 13. Add FAQPage Schema
**Priority:** Medium | **Effort:** 1-2 hours | **Impact:** Medium

Services page, about page, and blog posts with FAQ sections should have `FAQPage` schema for rich results.

---

### 14. Convert Portfolio to Case Studies
**Priority:** Medium | **Effort:** 8-12 hours | **Impact:** Very High

Transform each portfolio item from a name + image into a real case study:
- Problem/Challenge
- Approach/Solution
- Results/Metrics
- Technologies Used
- Client testimonial (if available)

Create individual pages for each case study: `/portfolio/[slug]`

---

### 15. Add Testimonials/Social Proof
**Priority:** Medium | **Effort:** 2-4 hours | **Impact:** Very High

- Add "Trusted by" client logo section to homepage
- Add testimonial quotes with names and companies
- Consider adding a Google Reviews widget
- Add `AggregateRating` schema once reviews are collected

---

### 16. Add Original Imagery
**Priority:** Medium | **Effort:** 4-8 hours | **Impact:** High

Replace stock Unsplash photos with:
- Team photos
- Office/workspace shots
- Behind-the-scenes images
- Screenshots of actual projects
- Custom illustrations

---

### 17. Fix Sitemap — Add Portfolio Pages
**Priority:** Medium | **Effort:** 15 minutes | **Impact:** Low-Medium

Update `app/sitemap.js` to include individual portfolio/case study pages once they exist.

---

### 18. Create llms.txt
**Priority:** Medium | **Effort:** 30 minutes | **Impact:** Low-Medium

Create `public/llms.txt`:

```
# Rizq Technologies — AI Crawler Directives

Rizq Technologies builds high-performance digital products for elite brands.

Services: Web Development, Brand & UI Design, AI Solutions, Graphic Designing, Digital Marketing, App Development, Custom Software

Founded: 2023
Location: India
Contact: contact.rizqtech@gmail.com

Preferred URLs for citation:
- Homepage: https://rizq-technologies.vercel.app/
- Services: https://rizq-technologies.vercel.app/services
- About: https://rizq-technologies.vercel.app/about
- Portfolio: https://rizq-technologies.vercel.app/portfolio
- Blog: https://rizq-technologies.vercel.app/blog
- Contact: https://rizq-technologies.vercel.app/contact

Brand guidelines: Refer to us as "Rizq Technologies" or "Rizq".
```

---

### 19. Build Internal Linking Strategy
**Priority:** Medium | **Effort:** 2 hours | **Impact:** Medium

- Interlink blog posts as topical clusters
- Add related posts section to each blog post
- Link from blog posts to relevant service pages
- Add contextual links within service pages to portfolio items

---

### 20. Add Phone Number and Business Address
**Priority:** Medium | **Effort:** 15 minutes | **Impact:** Medium

Add to contact page and footer:
- Phone number (if available)
- City/country at minimum (even for remote agency)
- Update Organization schema with address

---

## Phase 4: Low Priority (Backlog)

### 21. Migrate to Custom Domain
**Effort:** 2-4 hours | **Impact:** High (long-term)

Move from `rizq-technologies.vercel.app` to `rizqtechnologies.com` (or similar).

---

### 22. Restrict CORS Policy
**Effort:** 15 minutes | **Impact:** Low

Change `Access-Control-Allow-Origin: *` to specific allowed origins.

---

### 23. Verify Production Build
**Effort:** 30 minutes | **Impact:** Medium

Ensure deployment uses `next build` not `next dev`. The turbopack chunk suggests a dev-mode build.

---

### 24. Add `<noscript>` Fallback
**Effort:** 30 minutes | **Impact:** Low

Add basic noscript content for users with JavaScript disabled.

---

### 25. Expand Permissions-Policy
**Effort:** 10 minutes | **Impact:** Low

Add more restricted APIs: `midi=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=`

---

### 26. Add Source Citations to Blog Posts
**Effort:** 2 hours | **Impact:** Medium

Link all statistics to their original sources (Google studies, industry reports, etc.).

---

### 27. Add "Last Updated" Dates
**Effort:** 30 minutes | **Impact:** Low

Add `dateModified` to blog posts and display "Last updated" on the frontend.

---

### 28. Add Mobile Web App Meta Tags
**Effort:** 15 minutes | **Impact:** Low

```html
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="#FABF24">
```

---

## Implementation Roadmap

```
Week 1 (Critical)
├── Day 1: Add H1 tags, fix canonical, fix Privacy/Terms links
├── Day 2: Replace "Rizq Team" with named authors
└── Day 3: Shorten titles, remove duplicate brand, add OG images

Week 2 (High)
├── Day 1: Add CSP header, fix meta descriptions
├── Day 2-3: Expand About page content
└── Day 4-5: Expand Services page content

Week 3 (Medium)
├── Day 1-2: Add schema (ProfessionalService, BlogPosting, FAQPage)
├── Day 3-4: Convert portfolio to case studies
└── Day 5: Add testimonials and social proof

Week 4 (Medium)
├── Day 1-2: Replace stock images with original imagery
├── Day 3: Build internal linking strategy
├── Day 4: Create llms.txt, add phone/address
└── Day 5: Final review, test all changes
```

---

## Expected Impact

| Fix | Estimated Score Improvement |
|-----|---------------------------|
| H1 tags | +5 points |
| Content expansion | +15 points |
| Author identity | +8 points |
| Social proof | +5 points |
| Schema additions | +4 points |
| Title/meta fixes | +3 points |
| OG images | +2 points |
| CSP header | +2 points |
| Internal linking | +3 points |
| **TOTAL** | **+47 points (63 → ~85)** |

---

*Action plan generated: May 4, 2026*
*Review and adjust priorities based on available resources*
