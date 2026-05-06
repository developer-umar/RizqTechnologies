import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesBentoMagic from "../components/Services";

export const metadata = {
  title: "Web Development, AI & Branding Services — Rizq",
  description: "Web development, AI solutions, branding & more. Rizq Technologies builds elite digital products for growing brands.",
  keywords: ["Web Development Services", "AI Solutions", "Brand Design", "Digital Marketing", "App Development", "Custom Software", "Rizq Technologies"],
  openGraph: {
    title: "Our Services — Rizq Technologies",
    description: "Premium digital services from Rizq Technologies — Web Development, AI Solutions, Branding, Marketing, and Custom Software for elite brands.",
    url: "https://rizq-technologies.vercel.app/services",
    siteName: "Rizq Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://rizq-technologies.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rizq Technologies Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services — Rizq Technologies",
    description: "Premium digital services from Rizq Technologies.",
    creator: "@rizq_tech",
    images: ["https://rizq-technologies.vercel.app/og-image.png"],
  },
  alternates: {
    canonical: "https://rizq-technologies.vercel.app/services",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rizq-technologies.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://rizq-technologies.vercel.app/services" },
        ],
      },
      {
        "@type": "Service",
        name: "Web Development",
        provider: { "@type": "Organization", name: "Rizq Technologies", url: "https://rizq-technologies.vercel.app" },
        serviceType: "Web Development",
        areaServed: "Worldwide",
        url: "https://rizq-technologies.vercel.app/services",
      },
      {
        "@type": "Service",
        name: "Brand & UI Design",
        provider: { "@type": "Organization", name: "Rizq Technologies", url: "https://rizq-technologies.vercel.app" },
        serviceType: "Brand & UI Design",
        areaServed: "Worldwide",
        url: "https://rizq-technologies.vercel.app/services",
      },
      {
        "@type": "Service",
        name: "AI Solutions",
        provider: { "@type": "Organization", name: "Rizq Technologies", url: "https://rizq-technologies.vercel.app" },
        serviceType: "AI Solutions",
        areaServed: "Worldwide",
        url: "https://rizq-technologies.vercel.app/services",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div id="services-page">
        <Navbar />
        <div className="pt-20">
          <ServicesBentoMagic />
        </div>
        <Footer />
      </div>
    </>
  );
}
