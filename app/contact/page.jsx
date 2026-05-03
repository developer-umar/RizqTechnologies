import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export const metadata = {
  title: "Contact Us | Get in Touch with Rizq Technologies",
  description: "Ready to build? Contact Rizq Technologies for web development, branding, AI solutions, and digital strategy. Let us engineer your vision.",
  keywords: ["Contact Rizq Technologies", "Get a Quote", "Web Development Contact", "Digital Agency Contact"],
  openGraph: {
    title: "Contact Us | Rizq Technologies",
    description: "Ready to build? Reach out to Rizq Technologies for premium digital solutions.",
    url: "https://rizq-technologies.vercel.app/contact",
    siteName: "Rizq Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Rizq Technologies",
    description: "Ready to build? Reach out to Rizq Technologies.",
    creator: "@rizqtech",
  },
  alternates: {
    canonical: "https://rizq-technologies.vercel.app/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rizq-technologies.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Contact", item: "https://rizq-technologies.vercel.app/contact" },
        ],
      },
      {
        "@type": "ContactPage",
        name: "Contact Rizq Technologies",
        description: "Get in touch with Rizq Technologies for web development, branding, AI solutions, and digital strategy.",
        url: "https://rizq-technologies.vercel.app/contact",
        isPartOf: { "@type": "WebSite", name: "Rizq Technologies", url: "https://rizq-technologies.vercel.app" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div id="contact-page">
        <Navbar />
        <div className="pt-20">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
