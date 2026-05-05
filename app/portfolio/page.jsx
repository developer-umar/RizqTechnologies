import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EliteSliderPortfolio from "../components/Portfolio";

export const metadata = {
  title: "Case Studies & Digital Portfolio | Rizq Tech",
  description: "Explore Rizq Technologies portfolio: premium websites, branding, and digital experiences built for elite brands worldwide.",
  keywords: ["Portfolio", "Case Studies", "Web Design Portfolio", "Branding Work", "Rizq Technologies Projects"],
  openGraph: {
    title: "Our Portfolio — Rizq Technologies",
    description: "Curated case studies of premium digital experiences crafted by Rizq Technologies.",
    url: "https://rizq-technologies.vercel.app/portfolio",
    siteName: "Rizq Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://rizq-technologies.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rizq Technologies Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio — Rizq Technologies",
    description: "Curated case studies of premium digital experiences.",
    creator: "@rizqtech",
    images: ["https://rizq-technologies.vercel.app/og-image.png"],
  },
  alternates: {
    canonical: "https://rizq-technologies.vercel.app/portfolio",
  },
};

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rizq-technologies.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://rizq-technologies.vercel.app/portfolio" },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Rizq Technologies Portfolio",
        description: "Curated case studies of premium digital experiences built for elite brands.",
        url: "https://rizq-technologies.vercel.app/portfolio",
        isPartOf: { "@type": "WebSite", name: "Rizq Technologies", url: "https://rizq-technologies.vercel.app" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div id="portfolio-page">
        <Navbar />
        <div className="pt-20">
          <EliteSliderPortfolio />
        </div>
        <Footer />
      </div>
    </>
  );
}
