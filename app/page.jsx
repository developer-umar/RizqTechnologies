import CTA from "./components/CTA";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
// import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutUsFluid from "./components/AboutUse";
import TechSection from "./components/Technologies";
import ServicesBentoMagic from "./components/Services";
import ScrollManager from "./components/ScrollManager";

// import ClientCursor from "./components/cursor/clientCursor";



export const metadata = {
  title: "Rizq Technologies — Premier Digital Agency for Elite Brands",
  description: "Rizq Technologies builds high-performance digital products for elite brands. Specializing in Web Development, Branding, and AI Solutions.",
  keywords: ["Rizq Technologies", "Digital Agency", "Web Development", "AI Solutions", "Branding", "Custom Software", "App Development"],
  openGraph: {
    title: "Rizq Technologies — Premier Digital Agency for Elite Brands",
    description: "Rizq Technologies builds high-performance digital products, branding, and elite web solutions for forward-thinking brands.",
    url: "https://rizq-technologies.vercel.app",
    siteName: "Rizq Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rizq Technologies — Premier Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizq Technologies — Premier Digital Agency",
    description: "Rizq Technologies builds high-performance digital products for elite brands.",
    creator: "@rizq_tech",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <div id="home">
        <ScrollManager />
        {/* <ClientCursor /> */}
        <Navbar />
        <HeroSection />
        <AboutUsFluid />
        <ServicesBentoMagic />
        <TechSection />

        <Portfolio />
        {/* <Pricing /> */}
        <CTA />
        <Contact />
        <Footer />



      </div>

    </>
  );
}