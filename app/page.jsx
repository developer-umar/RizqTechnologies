import CTA from "./components/CTA";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import ClientCursor from "./components/cursor/clientCursor";



export default function Home() {
  return (
    <>
      <div id="home">

        {/* <ClientCursor /> */}
        <Navbar />
        <HeroSection />
        <Services />
        <Portfolio />   
        <Pricing />
        <CTA />
        <Contact />
        <Footer />



      </div>

    </>
  );
}