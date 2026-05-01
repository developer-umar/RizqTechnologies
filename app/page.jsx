import CTA from "./components/CTA";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutUsFluid from "./components/AboutUse";
import TechSection from "./components/Technologies";
import ServicesBentoMagic from "./components/Services";


// import ClientCursor from "./components/cursor/clientCursor";



export const metadata = {
  title: "Mastering Craft | High-Performance Digital Products 2026",
  description: "Rizq Technologies builds high-performance digital products for elite brands. Specializing in Web Development, Branding, and AI Solutions.",
  openGraph: {
    title: "Mastering Craft | High-Performance Digital Products",
    description: "Built for 2026. Rizq Technologies is the premier digital agency for elite brands.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mastering Craft | High-Performance Digital Products",
    description: "Built for 2026. Rizq Technologies is the premier digital agency for elite brands.",
    creator: "@RizqTechnologies",
    images: ["/og-image.png"],
  },

};

export default function Home() {
  return (
    <>
      <div id="home">

        {/* <ClientCursor /> */}
        <Navbar />
        <HeroSection />
        <AboutUsFluid />
        <ServicesBentoMagic />
        <TechSection />

        <Portfolio />
        <Pricing />
        <CTA />
        <Contact />
        <Footer />



      </div>

    </>
  );
}