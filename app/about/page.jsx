import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUsFluid from "../components/AboutUse";

export const metadata = {
  title: "About Us — Rizq Technologies",
  description: "Learn about Rizq Technologies — a team of innovative professionals building scalable digital solutions that turn growing businesses into global brands.",
  keywords: ["About Rizq Technologies", "Digital Agency About", "Web Development Company", "Rizq Team"],
  openGraph: {
    title: "About Us — Rizq Technologies",
    description: "We build scalable digital solutions that turn growing businesses into global brands.",
    url: "https://rizq-technologies.vercel.app/about",
    siteName: "Rizq Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://rizq-technologies.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Rizq Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Rizq Technologies",
    description: "Learn about the team behind Rizq Technologies.",
    creator: "@rizqtech",
    images: ["https://rizq-technologies.vercel.app/og-image.png"],
  },
  alternates: {
    canonical: "https://rizq-technologies.vercel.app/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rizq-technologies.vercel.app" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://rizq-technologies.vercel.app/about" },
        ],
      },
      {
        "@type": "AboutPage",
        name: "About Rizq Technologies",
        description: "A team of innovative professionals building scalable digital solutions that turn growing businesses into global brands.",
        url: "https://rizq-technologies.vercel.app/about",
        isPartOf: { "@type": "WebSite", name: "Rizq Technologies", url: "https://rizq-technologies.vercel.app" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div id="about-page">
        <Navbar />
        <div className="pt-20">
          <AboutUsFluid />
        </div>
        <Footer />
      </div>
    </>
  );
}
