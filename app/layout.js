import { Geist, Geist_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import SEOExtras from "./components/SEOExtras";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Rizq Technologies — Premier Digital Agency for Elite Brands",
    template: "%s — Rizq Technologies",
  },
  description: "Rizq Technologies builds high-performance digital products, branding, and elite web solutions for forward-thinking brands.",
  keywords: ["Digital Agency", "Web Development", "2026 tech trends", "Branding", "Rizq Technologies"],
  authors: [{ name: "Rizq Technologies" }],
  creator: "Rizq Technologies",
  publisher: "Rizq Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://rizq-technologies.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rizq Technologies | Premier Digital Agency",
    description: "Crafting elite digital experiences for modern brands.",
    url: "https://rizq-technologies.vercel.app",
    siteName: "Rizq Technologies",
    locale: "en_US",
    type: "website",
    modifiedTime: new Date().toISOString(),
    images: [
      {
        url: "https://rizq-technologies.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rizq Technologies | Premier Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizq Technologies | Premier Digital Agency",
    description: "Crafting elite digital experiences for modern brands.",
    creator: "@rizq_tech",
    images: ["https://rizq-technologies.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  verification: {
    google: "jj7Fer3uebcY-mk9DZeTF5FxZo_IEczd1qeYokAuaoM",
  },
};

// ── Viewport Export ────────────────────────────────────────────
// Next.js 15+ requires themeColor to be exported separately
// via generateViewport or a viewport export — NOT inside metadata.
// This controls the browser tab/address bar background color.
export const viewport = {
  themeColor: "#000000",
};


// ── Organization Schema (JSON-LD) ──────────────────────────────
// This tells Google that Rizq Technologies is a real, verified organization.
// It triggers the Google Knowledge Panel and strengthens backlink authority
// by linking all our social profiles together (sameAs = entity consolidation).
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rizq Technologies",
  url: "https://rizq-technologies.vercel.app",
  logo: {
    "@type": "ImageObject",
    url: "https://rizq-technologies.vercel.app/rizq-logo.png",
    width: 200,
    height: 60,
  },
  description:
    "Rizq Technologies is a premier digital agency specializing in web development, branding, UI/UX design, and AI solutions for elite brands across India.",
  foundingDate: "2023",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City", name: "Kanpur" },
    { "@type": "City", name: "Kanpur Dehat" },
    { "@type": "City", name: "Kanpur Nagar" },
    { "@type": "City", name: "Unnao" },
    { "@type": "City", name: "Lucknow" },
    { "@type": "City", name: "Aurangabad" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Bangalore" },
  ],
  serviceType: [
    "Web Development",
    "UI/UX Design",
    "Branding",
    "Digital Marketing",
    "SEO",
    "Mobile App Development",
    "AI Solutions",
  ],
  // sameAs links all our profiles — Google treats these as one entity.
  // This is the single most important backlink signal for a Knowledge Panel.
  sameAs: [
    "https://www.linkedin.com/company/rizqtechnologies",
    "https://twitter.com/rizq_tech",
    "https://x.com/rizq_tech",
    "https://www.instagram.com/rizqtechnologies",
    "https://www.facebook.com/profile.php?id=61589274352434",
    "https://github.com/rizqtechnologies",
    "https://www.youtube.com/@rizqtechnologies",
    "https://www.crunchbase.com/organization/rizq-technologies",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
    areaServed: "IN",
  },
};

// ── Website Schema (JSON-LD) ────────────────────────────────────
// Enables Google Sitelinks Searchbox and strengthens domain identity.
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Rizq Technologies",
  url: "https://rizq-technologies.vercel.app",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://rizq-technologies.vercel.app/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body>
        {/* Organization Schema — for Google Knowledge Panel & backlink entity recognition */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Website Schema — for Sitelinks Searchbox & domain authority */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SEOExtras />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
