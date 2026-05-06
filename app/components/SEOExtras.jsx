/**
 * SEOExtras.jsx
 *
 * Injects Schema.org JSON-LD structured data into every page via the root layout.
 * Google uses this to understand WHO we are, WHAT we offer, and HOW to reach us —
 * directly improving rich result eligibility and Knowledge Panel accuracy.
 *
 * Schemas included:
 *  1. Organization  — company identity, contact, social profiles
 *  2. ProfessionalService — business type for rich results
 *  3. WebSite       — site name + URL (enables Sitelinks Searchbox eligibility)
 *  4. WebPage       — describes the homepage
 *  5. ItemList      — all 7 services as a structured list (Service schema per item)
 */

import Script from "next/script";

const BASE_URL = "https://rizq-technologies.vercel.app";

// ── 1. Organization ──────────────────────────────────────────────────────────
// Tells Google: who is this company, how to contact them, and where they exist
// on the web (sameAs links help build the Knowledge Panel).
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Rizq Technologies",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/rizq-logo.png`,
    width: 512,
    height: 512,
  },
  description:
    "Rizq Technologies is a premier digital agency building high-performance web products, AI solutions, branding, and custom software for elite brands worldwide.",
  foundingDate: "2023",
  areaServed: "Worldwide",
  // contactPoint: how Google surfaces your contact info in search results
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English", "Urdu"],
    url: `${BASE_URL}/#contact`,
  },
  // sameAs: links to authoritative profiles — critical for Knowledge Panel
  sameAs: [
    "https://x.com/rizq_tech",
    "https://www.linkedin.com/company/rizqtechnologies/",
    "https://github.com/rizqtechnologies",
    "https://www.instagram.com/rizqtechnologies",
    "https://www.facebook.com/profile.php?id=61589274352434",
    "https://www.youtube.com/@rizqtechnologies"
  ],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#professionalservice`,
  name: "Rizq Technologies",
  description:
    "Rizq Technologies is a premier digital agency building high-performance web products, AI solutions, branding, and custom software for elite brands worldwide.",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/rizq-logo.png`,
  },
  areaServed: "Worldwide",
  priceRange: "$$",
  serviceType: [
    "Web Development",
    "Brand & UI Design",
    "AI Solutions",
    "Graphic Designing",
    "Digital Marketing",
    "App Development",
    "Custom Software",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contact.rizqtech@gmail.com",
    availableLanguage: ["English", "Urdu", "Hindi"],
    url: `${BASE_URL}/contact`,
  },
  sameAs: [
    "https://x.com/rizq_tech",
    "https://www.linkedin.com/company/rizqtechnologies/",
    "https://github.com/rizqtechnologies",
    "https://www.instagram.com/rizqtechnologies",
    "https://www.facebook.com/profile.php?id=61589274352434",
    "https://www.youtube.com/@rizqtechnologies",
  ],
};

// ── 2. WebSite ────────────────────────────────────────────────────────────────
// Declares the canonical website entity. The potentialAction enables
// Google's Sitelinks Searchbox feature in search results.
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Rizq Technologies",
  url: BASE_URL,
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ── 3. WebPage (Homepage) ─────────────────────────────────────────────────────
// Describes the homepage as a named entity with breadcrumb trail.
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "Rizq Technologies | Premier Digital Agency 2026",
  description:
    "Rizq Technologies builds high-performance digital products, branding, and elite web solutions for forward-thinking brands.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#organization` },
  breadcrumb: {
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
        name: "Services",
        item: `${BASE_URL}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Portfolio",
        item: `${BASE_URL}/#portfolio`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: `${BASE_URL}/#contact`,
      },
    ],
  },
};

// ── 4. Services (ItemList of Service schemas) ─────────────────────────────────
// Each service is a proper Service schema. Using ItemList lets Google understand
// the full offering in one structured block — improving rich results for queries
// like "web development agency" or "AI solutions company".
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/#services`,
  name: "Our Services",
  description: "Comprehensive digital services offered by Rizq Technologies",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Brand & UI Design",
        description:
          "Bold identities and stunning interfaces that make your brand unforgettable. Includes visual strategy, logo systems, UX research, and design systems.",
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: "Worldwide",
        url: `${BASE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Web Development",
        description:
          "High-performance websites built for speed, scale and conversions using Next.js, React, custom APIs, and cloud infrastructure.",
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: "Worldwide",
        url: `${BASE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "AI Solutions",
        description:
          "Integrating neural networks and predictive models into modern workflows including LLM integration, automated workflows, and custom AI bots.",
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: "Worldwide",
        url: `${BASE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Graphic Designing",
        description:
          "High-end visual storytelling through digital art and typography including 3D assets, print media, motion graphics, and art direction.",
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: "Worldwide",
        url: `${BASE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Digital Marketing",
        description:
          "Performance-driven marketing that turns traffic into revenue through ad management, growth hacking, market research, and funnel optimization.",
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: "Worldwide",
        url: `${BASE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "App Development",
        description:
          "Seamless mobile apps designed for engagement and performance on iOS and Android using React Native.",
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: "Worldwide",
        url: `${BASE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Service",
        name: "Custom Software",
        description:
          "Tailored software built exactly for your business including ERP systems, legacy migrations, security audits, and database design.",
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: "Worldwide",
        url: `${BASE_URL}/#services`,
      },
    },
  ],
};

export default function SEOExtras() {
  return (
    <>
      {/* Organization — who we are */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ProfessionalService — business type for rich results */}
      <Script
        id="schema-professionalservice"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />

      {/* WebSite — canonical site identity */}
      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* WebPage — homepage entity with breadcrumb */}
      <Script
        id="schema-webpage"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Services — all 7 services as structured list */}
      <Script
        id="schema-services"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
