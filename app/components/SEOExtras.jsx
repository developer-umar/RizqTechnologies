import Script from "next/script";

export default function SEOExtras() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rizq Technologies",
    "url": "https://rizqtechnologies.com",
    "logo": "https://rizqtechnologies.com/l9_new.png",
    "description": "Rizq Technologies builds high-performance digital products, branding, and elite web solutions.",
    "sameAs": [
      "https://twitter.com/rizqtech",
      "https://linkedin.com/company/rizqtech"
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rizqtechnologies.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://rizqtechnologies.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Portfolio",
        "item": "https://rizqtechnologies.com/#portfolio"
      }
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rizq Technologies",
    "url": "https://rizqtechnologies.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://rizqtechnologies.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Agency",
    "provider": {
      "@type": "Organization",
      "name": "Rizq Technologies"
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Branding & Design"
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  );
}
