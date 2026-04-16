import { Geist, Geist_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import SEOExtras from "./components/SEOExtras";

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
    default: "Rizq Technologies | Premier Digital Agency 2026",
    template: "%s | Rizq Technologies",
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://rizqtechnologies.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rizq Technologies | Premier Digital Agency",
    description: "Crafting elite digital experiences for modern brands.",
    url: "https://rizqtechnologies.com",
    siteName: "Rizq Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizq Technologies | Premier Digital Agency",
    description: "Crafting elite digital experiences for modern brands.",
    creator: "@rizqtech",
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
    apple: "/l9_new.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "Yy3MgjgeIT1KzfiITWYJsXCEaJAIqiRauPjv7hNKs1Y",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body>
        <SEOExtras />
        {children}
      </body>
    </html>
  );
}
