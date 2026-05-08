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
  "url": "https://rizqtechnologies.online",
  "logo": "https://rizqtechnologies.online/rizq-logo.png",
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

Ye **free, high-authority** platforms hain jahan apna profile banana mandatory hai.

> [!NOTE]
> **Legend**: ✅ Done — link ready hai | ⏳ Pending — account abhi nahi banaya, baad mein banana hai

---

### 🇮🇳 Indian Business Directories

| Platform | DA Score | Type | Priority | Status | Link |
|----------|----------|------|----------|--------|------|
| **Google Business Profile** | 100 | Local Business | 🔴 Critical | ✅ Done | [Profile Link](https://share.google/bu1wcUJbZsnMLuop2) |
| **Justdial** | 71 | Indian Directory | 🔴 Critical | ✅ Done | [Profile Link](https://jsdl.in/DT-99GUPD5JEWG) |
| **IndiaMart** | 72 | B2B Directory | 🔴 Critical | ✅ Done | [Profile Link](https://buyer.indiamart.com/?tabname=profile) |
| **Sulekha** | 60 | Service Directory | 🟡 High | ⏳ Pending | — |
| **TradeIndia** | 55 | B2B Directory | 🟡 High | ⏳ Pending | — |

> [!WARNING]
> **Sulekha** aur **TradeIndia** pe abhi account nahi banaya. Dono pe profile banana hai:
> - Sulekha: https://www.sulekha.com/business/register
> - TradeIndia: https://www.tradeindia.com/free-registration.html

---

### 🌍 International Tech Directories (Most Powerful!)

| Platform | DA Score | Type | Priority | Status | Link |
|----------|----------|------|----------|--------|------|
| **Clutch.co** | 72 | Agency Reviews | 🔴 Critical | ✅ Done | [Profile Link](https://clutch.co/profile/rizq-technologies) |
| **Upwork** | 93 | Freelance Platform | 🟡 High | ✅ Done | [Profile Link](https://www.upwork.com/freelancers/~012fc931bb5fcd9b1f?viewMode=1) |
| **GoodFirms** | 65 | Agency Reviews | 🔴 Critical | ⏳ Pending | — |
| **DesignRush** | 61 | Agency Directory | 🟡 High | ⏳ Pending | — |
| **Agency Spotter** | 50 | Agency Directory | 🟡 High | ⏳ Pending | — |

> [!WARNING]
> **GoodFirms**, **DesignRush**, aur **Agency Spotter** pe abhi account nahi banaya:
> - GoodFirms: https://www.goodfirms.co/company/signup
> - DesignRush: https://www.designrush.com/agency/submit (free listing)
> - Agency Spotter: https://www.agencyspotter.com/agencies/new

---

### 👤 Social / Professional Profiles

> [!NOTE]
> User ne bataya hai ke Social/Professional profile links unke paas already hain — wahi use ho rahe hain.

| Platform | DA Score | Priority | Status | Link |
|----------|----------|----------|--------|------|
| **LinkedIn Company Page** | 98 | 🔴 Critical | ⏳ Pending | — |
| **GitHub Organization** | 95 | 🟡 High | ⏳ Pending | — |
| **AngelList/Wellfound** | 74 | 🟡 High | ⏳ Pending | — |
| **Crunchbase** | 91 | 🔴 Critical | ⏳ Pending | — |
| **Product Hunt** | 90 | 🟢 Medium | ⏳ Pending | — |

> [!WARNING]
> **LinkedIn**, **GitHub Org**, **AngelList**, **Crunchbase**, **Product Hunt** — inke links abhi nahi mile. Jab bhi accounts ban jayein ya links milein, yahan update karna hai:
> - LinkedIn Company: https://www.linkedin.com/company/setup/new/
> - GitHub Org: https://github.com/organizations/plan
> - Wellfound (AngelList): https://wellfound.com/company/add
> - Crunchbase: https://www.crunchbase.com/add-new-organization
> - Product Hunt: https://www.producthunt.com/makers

---

### 📊 Phase 2 Progress Tracker

| # | Platform | Status | Notes |
|---|----------|--------|-------|
| 1 | Google Business Profile | ✅ Done | Live link available |
| 2 | Justdial | ✅ Done | Live link available |
| 3 | IndiaMart | ✅ Done | Live link available |
| 4 | Clutch.co | ✅ Done | Live link available |
| 5 | Upwork | ✅ Done | Live link available |
| 6 | Sulekha | ⏳ Pending | Account banana baaki |
| 7 | TradeIndia | ⏳ Pending | Account banana baaki |
| 8 | GoodFirms | ⏳ Pending | Account banana baaki |
| 9 | DesignRush | ⏳ Pending | Account banana baaki |
| 10 | Agency Spotter | ⏳ Pending | Account banana baaki |
| 11 | LinkedIn Company | ⏳ Pending | Link milne pe update karna |
| 12 | GitHub Organization | ⏳ Pending | Link milne pe update karna |
| 13 | AngelList/Wellfound | ⏳ Pending | Link milne pe update karna |
| 14 | Crunchbase | ⏳ Pending | Link milne pe update karna |
| 15 | Product Hunt | ⏳ Pending | Link milne pe update karna |

**Completed: 5 / 15** — Jab bhi naya account banao, yahan update karo aur link add karo.

---

## Phase 3 — Content-Based Backlinks (Week 3-4)

Content banao jo log naturally share aur link karein:

### Blog Posts (Jo Backlinks Attract Karte Hain)
Ye topics write karo — log inhe reference karenge:

1. **"Top 10 Web Design Trends in India 2026"** — Stats-based, easily citable
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

### ✅ Phase 1 — On-Site (Code Changes) — COMPLETE:
1. ✅ **Organization Schema** → `layout.js` mein add kiya — Google Knowledge Panel ke liye
2. ✅ **sameAs Links** → Schema mein 5 confirmed directory links add kiye (Google Business, Justdial, IndiaMart, Clutch, Upwork)
3. ✅ **Press Kit** → `public/press-kit/` folder ready — `company-description.md` + `directory-submission-guide.md`
4. ⏳ **Google Search Console** → Sitemap submit karo (manual step — GSC dashboard mein jaake sitemap.xml submit karo)

### ⏳ Phase 2 — Directory Submissions — IN PROGRESS (5/15):
| Done ✅ | Pending ⏳ |
|---------|-----------|
| Google Business Profile | Sulekha |
| Justdial | TradeIndia |
| IndiaMart | GoodFirms |
| Clutch.co | DesignRush |
| Upwork | Agency Spotter |
| | LinkedIn Company Page |
| | GitHub Organization |
| | AngelList/Wellfound |
| | Crunchbase |
| | Product Hunt |

> 📋 **Submission Guide:** `public/press-kit/directory-submission-guide.md` — Har platform ke liye exact copy-paste content ready hai.

### Next Actions:
1. **Abhi karo**: Sulekha + TradeIndia + GoodFirms (easy aur fast)
2. **This week**: LinkedIn Company Page + Crunchbase (high DA — critical)
3. **Har naya account ke baad**: `layout.js` ka sameAs update karo + plan mein ✅ mark karo
4. **Week 3-4**: Blog posts publish karna (3-4 articles)

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
