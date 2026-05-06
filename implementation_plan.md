# 🔗 Backlink Building Plan — Rizq Technologies

## Goal
Rizq Technologies ka **Domain Authority (DA)** badhana aur Google pe **top rankings** hasil karna — specifically "digital agency India", "web design agency", aur city-specific keywords ke liye.

Backlinks do tarike se aate hain:
1. **Technical (On-Site)** — Apni website ko itna valuable banao ki log khud link karein
2. **Active Outreach (Off-Site)** — Manually quality platforms pe apna link submit karo

---

## User Review Required

> [!IMPORTANT]
> Ye plan **100% white-hat (safe)** hai — koi paid backlinks ya spam nahi. Google guidelines ke andar kaam karega.

> [!WARNING]
> **City-wise SEO baad mein karenge** — abhi sirf backlinks pe focus.

---

## Phase 1 — Technical On-Site Changes (Code Mein)

Ye changes backend mein karne hain jisse websites automatically reference karein aur Google bhi trust kare.

### ─── Schema Markup (Structured Data) ───

#### [MODIFY] [layout.js](file:///d:/RizqTechnologies/app/layout.js)
- **Organization Schema** add karna — Google Knowledge Panel ke liye zaroori
- Ye schema Google ko batata hai ki Rizq Technologies ek legitimate organization hai
- Isse other sites jab mention karein, Google automatically link association build karta hai

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rizq Technologies",
  "url": "https://rizq-technologies.vercel.app",
  "logo": "https://rizq-technologies.vercel.app/rizq-logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/rizq-technologies",
    "https://twitter.com/rizqtech",
    "https://www.instagram.com/rizqtechnologies"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"]
  }
}
```

#### [NEW] `public/press-kit/` folder
- Logo PNG (transparent background) — press aur blogs ke liye
- Brand colors PDF
- Company description (short + long version)
- Jab koi blog ya news site tumhare baare mein likhna chahega, ye ready material dega → natural backlinks

#### [MODIFY] [sitemap.js](file:///d:/RizqTechnologies/app/sitemap.js)
- Sitemap already hai — bas verify karna ki Google Search Console mein submitted hai
- Isse Googlebot har page crawl karega jise directories reference karengi

---

## Phase 2 — Directory Submissions (Week 1-2)

Ye **free, high-authority** platforms hain jahan apna profile banana mandatory hai:

### Indian Business Directories

| Platform | DA Score | Type | Priority |
|----------|----------|------|----------|
| **Google Business Profile** | 100 | Local Business | 🔴 Critical |
| **Justdial** | 71 | Indian Directory | 🔴 Critical |
| **IndiaMart** | 72 | B2B Directory | 🔴 Critical |
| **Sulekha** | 60 | Service Directory | 🟡 High |
| **TradeIndia** | 55 | B2B Directory | 🟡 High |

### International Tech Directories (Most Powerful!)

| Platform | DA Score | Type | Priority |
|----------|----------|------|----------|
| **Clutch.co** | 72 | Agency Reviews | 🔴 Critical |
| **GoodFirms** | 65 | Agency Reviews | 🔴 Critical |
| **DesignRush** | 61 | Agency Directory | 🟡 High |
| **Agency Spotter** | 50 | Agency Directory | 🟡 High |
| **Upwork Company** | 93 | Freelance Platform | 🟡 High |

### Social / Professional Profiles

| Platform | DA Score | Priority |
|----------|----------|----------|
| **LinkedIn Company Page** | 98 | 🔴 Critical |
| **GitHub Organization** | 95 | 🟡 High |
| **AngelList/Wellfound** | 74 | 🟡 High |
| **Crunchbase** | 91 | 🔴 Critical |
| **Product Hunt** | 90 | 🟢 Medium |

---

## Phase 3 — Content-Based Backlinks (Week 3-4)

Content banao jo log naturally share aur link karein:

### Blog Posts (Jo Backlinks Attract Karte Hain)
Ye topics write karo — log inhe reference karenge:

1. **"Top 10 Web Design Trends in India 2025"** — Stats-based, easily citable
2. **"How Much Does a Website Cost in India? (Complete Breakdown)"** — Every agency will link this
3. **"Shopify vs WooCommerce vs Custom — Which is Best for Indian Businesses?"** — Comparison posts = tons of links
4. **"Case Study: How We Increased [Client]'s Revenue by 200% Through Digital Marketing"** — Social proof = links

### Free Tools / Resources (Linkbait)
- **Website Speed Checker** (embed GTmetrix API) — People bookmark aur share karte hain
- **SEO Checklist PDF** — Downloadable resource = links
- **Free Website Audit** landing page — Lead generation + backlinks

---

## Phase 4 — Outreach Backlinks (Month 2)

### Guest Posting Targets

| Website | Niche | How to Approach |
|---------|-------|-----------------|
| **YourStory.com** | Indian Startups | Pitch a startup/tech story |
| **Inc42.com** | Indian Business | Pitch tech article |
| **Techcrunch India** | Tech News | Press release |
| **Medium.com** | General Tech | Publish articles with link |
| **Dev.to** | Developer Community | Technical articles |

### Link Reclamation
- Koi already tumhara naam mention karta hai without linking?
- Tools se dhundho: Google Alert for "Rizq Technologies"
- Email karo aur link add karne ka request karo

---

## Phase 5 — Social Signals (Ongoing)

Google social media links ko direct backlinks nahi count karta, but:
- Traffic laate hain → indirect ranking boost
- Brand mentions badhate hain

### Must-Do Social Actions:
- LinkedIn pe weekly posts with website link
- Twitter/X pe tech threads
- Instagram pe portfolio showcases
- Quora pe answers (web design, digital marketing questions)
- Reddit: r/india, r/webdev, r/entrepreneur

---

## Proposed Changes Summary

### On-Site (Code Changes):
1. **Organization Schema** → `layout.js` mein add karna
2. **Press Kit** → `public/press-kit/` folder banana
3. **Google Search Console** → Sitemap submit karna (agar nahi hua)

### Off-Site (Manual Actions):
1. **Week 1**: Google Business + Clutch + GoodFirms + Crunchbase
2. **Week 2**: Justdial + IndiaMart + Sulekha + LinkedIn Company Page
3. **Week 3-4**: Blog posts publish karna (3-4 articles)
4. **Month 2**: Guest post outreach

---

## Verification Plan

### After 2 Weeks:
- Google Search Console → Links report check karo
- Ahrefs Free (ahrefs.com/free-tools) → Backlink checker

### After 1 Month:
- "Rizq Technologies" Google pe search karo — Knowledge Panel aana chahiye
- Domain Authority Moz Checker pe check karo (mozbar.com)

### KPIs to Track:

| Metric | Current (Est.) | Target (3 Months) |
|--------|----------------|-------------------|
| Domain Authority | ~5 | 20+ |
| Total Backlinks | <10 | 50+ |
| Referring Domains | <5 | 25+ |
| Google Knowledge Panel | ❌ | ✅ |
| Clutch Profile | ❌ | ✅ |

---

## Open Questions

> [!IMPORTANT]
> **Q1**: Kya tumhare paas clients ke reviews hain jo Clutch.co pe daal sako? (Clutch ke liye client reviews mandatory hain)

> [!IMPORTANT]
> **Q2**: Kya company ka WhatsApp number/email address Google Business Profile pe dalna chahte ho? (public ho jaega)

> [!IMPORTANT]
> **Q3**: Kya LinkedIn Company Page already bana hua hai Rizq Technologies ka?

> [!NOTE]
> In questions ke answers ke basis pe plan adjust ho sakta hai.
