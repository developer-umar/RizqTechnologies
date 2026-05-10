"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const HeroSection = () => {
  const [btnText, setBtnText] = useState("Connect With Us");
  const btnRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (e, href, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem && pathname === '/') {
        const topPos = elem.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
        window.history.pushState(null, '', href);
    } else {
        router.push(href);
    }
  };

  // Magnetic/Spotlight effect logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const springConfig = { damping: 20, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      setBtnText((prev) => 
        prev === "Connect With Us" ? "+91 8576057583" : "Connect With Us"
      );
    }, 2800); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center text-center px-4 sm:px-6" id="home">
      
      {/* 1. Cinematic Background with heavy vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 grayscale-[0.5]">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-30 max-w-5xl mx-auto w-full flex flex-col items-center justify-center pt-10">
        
        {/* HEADING - Refined Typography */}
        <div className="overflow-hidden mb-8 md:mb-14">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1] tracking-tighter"
          >
            We engineer <span className="text-zinc-500 italic font-extralight tracking-normal">growth</span> <br />
            for brands via <span className="text-amber-400 font-semibold drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]">tech.</span>
          </motion.h1>
        </div>

        {/* Action Hub */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-[60] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full"
        >
          {/* CONNECT BUTTON - Creative Yellow Interaction */}
          <Link href="/contact" onClick={(e) => handleLinkClick(e, "/contact", "contact")} className="relative z-[70] block group">
            {/* Animated Border Glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[2px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#fbbf24_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"
            />

            <motion.button
              ref={btnRef}
              onMouseMove={handleMouseMove}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-[260px] sm:w-[280px] h-[68px] rounded-full overflow-hidden border border-amber-400 bg-amber-400 transition-all duration-500 group-hover:border-amber-400/50 shadow-[0_10px_40px_-10px_rgba(251,191,36,0.5)]"
            >
              {/* Spotlight Effect (White glow over yellow) */}
              <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{
                  background: useTransform(
                    [dx, dy],
                    ([x, y]) => `radial-gradient(120px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.4), transparent 80%)`
                  ),
                }}
              />

              {/* Fluid Fill - Dark background slide up */}
              <div className="absolute inset-0 bg-zinc-950 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] z-0" />

              {/* Text Layer */}
              <div className="relative z-20 flex items-center justify-center h-full text-black group-hover:text-amber-400 transition-colors duration-500">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={btnText}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "anticipate" }}
                    className="font-bold uppercase tracking-[0.2em] text-[11px] sm:text-[13px]"
                  >
                    {btnText}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.button>
          </Link>

          {/* VIEW WORK - Refined with subtle Amber accents */}
          <Link href="/portfolio" onClick={(e) => handleLinkClick(e, "/portfolio", "portfolio")} className="relative z-[70] flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-400/10 transition-all duration-500">
              <span className="text-white text-lg group-hover:text-amber-400 transition-transform group-hover:translate-x-1 duration-300">→</span>
            </div>
            <span className="text-zinc-400 group-hover:text-white font-semibold uppercase tracking-[0.2em] text-[11px] transition-colors">
              Explore Portfolio
            </span>
          </Link>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR - Matching Amber Theme */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none"
      >
        <div className="relative h-14 w-[1px] bg-zinc-800 rounded-full overflow-hidden">
           <motion.div 
             animate={{ y: [-56, 56] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-amber-400 to-transparent shadow-[0_0_8px_#fbbf24]"
           />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;