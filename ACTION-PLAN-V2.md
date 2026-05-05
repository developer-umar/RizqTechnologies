# SEO Action Plan v2: Rizq Technologies

**Website:** https://rizq-technologies.vercel.app
**Current Score:** 79/100
**Target Score:** 85+/100
**Date:** May 5, 2026

---

## What's Already Done ✅

- H1 tags added to all pages
- Blog canonical URL fixed
- Privacy Policy & Terms pages created
- Named authors replacing "Rizq Team"
- Title tags shortened
- OG images added to inner pages
- Content-Security-Policy header added
- llms.txt created
- ProfessionalService schema added
- Logo filename fixed in schema

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

### 1. Compress OG Image (638KB → under 300KB)
**Priority:** Critical | **Effort:** 15 minutes | **Impact:** High

Current `/og-image.png` is 638KB. This slows down social share previews and hurts page speed.

**Action:**
- Convert to WebP format
- Target: under 200KB
- Use: `cwebp -q 80 public/og-image.png -o public/og-image.webp`
- Update all references in layout.js and page metadata

---

### 2. Fix H1 Visibility (sr-only → visible)
**Priority:** High | **Effort:** 30 minutes | **Impact:** High

H1 tags on about, services, portfolio, contact pages use `sr-only` class (hidden from users). Google prefers visible H1s for accessibility and user experience.

**Action:** Replace `sr-only` with visible but design-consistent H1 text on each page component.

---

### 3. Fix Services Meta Description Length
**Priority:** High | **Effort:** 5 minutes | **Impact:** Medium

Current meta description is 165+ chars (exceeds 155 recommended max). Will be truncated in SERPs.

**Current:** `Explore Rizq Technologies services: Web Development, Brand & UI Design, AI Solutions, Graphic Designing, Digital Marketing, App Development, and Custom Software.`

**Recommended:** `Web development, AI solutions, branding & more. Rizq Technologies builds elite digital products for growing brands.` (122 chars)

---

### 4. Standardize Twitter Handle
**Priority:** Medium | **Effort:** 10 minutes | **Impact:** Low

Ensure all pages use `@rizqtech` consistently. Check layout.js and all page metadata exports.

---

## Phase 2: Content Expansion (1 Week) — Biggest Impact

### 5. Expand About Page (157 → 500+ words)
**Priority:** High | **Effort:** 2 hours | **Impact:** Very High

Add:
- Founder story and background
- Company mission and values
- Team member bios with credentials
- Timeline/milestones
- What makes Rizq Technologies different
- Core technology stack expertise

---

### 6. Expand Services Page (226 → 800+ words)
**Priority:** High | **Effort:** 3 hours | **Impact:** Very High

Add 150+ words per service:
- Detailed process description
- Technology stack used
- Typical deliverables
- Pricing range indicators
- Timeline expectations
- FAQ section with schema

---

### 7. Convert Portfolio to Case Studies
**Priority:** High | **Effort:** 4 hours | **Impact:** Very High

Each portfolio item needs:
- Problem/Challenge statement
- Approach/Solution description
- Results/Metrics (even estimated)
- Technologies used
- Client testimonial (if available)
- Before/after comparison

Create individual pages: `/portfolio/[slug]`

---

### 8. Expand Contact Page (147 → 300+ words)
**Priority:** Medium | **Effort:** 1 hour | **Impact:** Medium

Add:
- FAQ section (response times, process, pricing)
- Office location (city/country at minimum)
- Phone number (if available)
- Response time expectations
- What to include in project inquiry

---

### 9. Expand Blog Posts (350-600 → 1,500+ words each)
**Priority:** Medium | **Effort:** 6 hours | **Impact:** High

Each blog post needs:
- Source citations for all statistics
- Additional sections with deeper analysis
- Internal links to relevant service pages
- Code examples or data tables where applicable
- Updated `dateModified` timestamps

---

## Phase 3: Technical Optimizations (1 Month)

### 10. Convert Service Images to Next.js Image Component
**Priority:** Medium | **Effort:** 1 hour | **Impact:** Medium

6 of 7 service card images use raw `<img>` tags. Convert to `<Image>` with:
- Proper srcSet and sizes attributes
- WebP/AVIF format
- q=80 quality
- Lazy loading

---

### 11. Add Blog → Service Page Internal Links
**Priority:** Medium | **Effort:** 1 hour | **Impact:** Medium

Each blog post should link to relevant service pages:
- Performance blog → Web Development service
- SEO/AEO blog → Digital Marketing service
- Branding blog → Brand & UI Design service
- Next.js vs WordPress blog → Web Development service
- AI Tools blog → AI Solutions service
- E-Commerce blog → Web Development service

---

### 12. Add Individual Author Pages
**Priority:** Medium | **Effort:** 2 hours | **Impact:** Medium

Create `/team/[name]` pages for each author with:
- Professional photo
- Bio and credentials
- Areas of expertise
- List of authored blog posts
- Social profiles
- Person schema markup

---

### 13. Add Testimonials/Social Proof Section
**Priority:** Medium | **Effort:** 2 hours | **Impact:** Very High

Add to homepage:
- "Trusted by" client logo section
- 3-5 testimonial quotes with names and companies
- AggregateRating schema once reviews are collected
- Consider Google Reviews widget

---

### 14. Add Source Citations to Blog Posts
**Priority:** Medium | **Effort:** 2 hours | **Impact:** Medium

Link all statistics to original sources:
- "7% conversion loss" → link to Google/Akamai study
- "0.05 seconds judgment" → link to research paper
- "43% of the web uses WordPress" → link to W3Techs
- "85% mobile traffic in India" → link to Statista/Meity

---

### 15. Update Sitemap to Include New Pages
**Priority:** Low | **Effort:** 15 minutes | **Impact:** Low

Ensure `app/sitemap.js` includes:
- `/privacy` page
- `/terms` page
- Individual portfolio/case study pages (when created)
- Accurate `lastmod` dates per page

---

## Phase 4: Backlog

### 16. Migrate to Custom Domain
**Effort:** 2-4 hours | **Impact:** High (long-term)

Move from `rizq-technologies.vercel.app` to `rizqtechnologies.com`.

---

### 17. Add `<noscript>` Fallback
**Effort:** 30 minutes | **Impact:** Low

Add basic noscript content for users with JavaScript disabled.

---

### 18. Verify Production Build
**Effort:** 30 minutes | **Impact:** Medium

Ensure deployment uses production build (no turbopack dev chunks).

---

### 19. Add Google Business Profile
**Effort:** 1 hour | **Impact:** High

Create/verify GBP listing for Rizq Technologies to improve local search visibility.

---

### 20. Add Original Imagery
**Effort:** 4-8 hours | **Impact:** High

Replace stock Unsplash photos with:
- Team photos
- Workspace/office shots
- Screenshots of actual projects
- Custom illustrations

---

## Implementation Roadmap

```
Week 1 (Critical)
├── Day 1: Compress OG image, fix H1 visibility, fix services meta description
├── Day 2: Expand About page content
└── Day 3: Expand Services page content + FAQ schema

Week 2 (High Impact)
├── Day 1-2: Convert portfolio to case studies with individual pages
├── Day 3: Expand Contact page with FAQ
└── Day 4-5: Add internal links (blog → services, portfolio → services)

Week 3 (Medium)
├── Day 1-2: Add author pages with Person schema
├── Day 3: Add testimonials/social proof section
├── Day 4: Convert service images to Next.js Image component
└── Day 5: Add source citations to blog posts

Week 4 (Final)
├── Day 1: Expand blog posts to 1,500+ words
├── Day 2: Update sitemap with all new pages
├── Day 3: Set up Google Business Profile
├── Day 4: Replace stock images with original imagery
└── Day 5: Final review, re-run SEO audit
```

---

## Expected Impact

| Fix | Estimated Score Improvement |
|-----|---------------------------|
| Content expansion (all pages) | +10 points |
| Case studies with metrics | +4 points |
| Testimonials/social proof | +3 points |
| Author pages | +2 points |
| Source citations in blog | +2 points |
| OG image compression | +1 point |
| Internal linking strategy | +2 points |
| **TOTAL** | **+24 points (79 → ~85+)** |

---

*Action plan v2 generated: May 5, 2026*
*Previous plan: May 4, 2026 (Score: 63 → 79)*
*Target: 85+ score after implementing all phases*
