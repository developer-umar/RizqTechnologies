"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [btnText, setBtnText] = useState("Connect With Us");

  useEffect(() => {
    const interval = setInterval(() => {
      setBtnText((prev) => 
        prev === "Connect With Us" ? "+91 8127672157" : "Connect With Us"
      );
    }, 2800); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center text-center px-6" id="home">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* 🔥 Aligned Content Wrapper: pt-32 for Navbar clearance */}
      <div className="relative z-30 max-w-5xl mx-auto w-full pt-32 md:pt-20">
        
        {/* MAIN HEADING */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl lg:text-7xl font-semibold text-white leading-[1.2] tracking-tight"
        >
          We engineer <span className="text-zinc-500 italic font-light">growth</span> <br />
          for businesses using <span className="text-amber-500 font-bold">technology.</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 text-xs md:text-sm text-zinc-500 max-w-lg mx-auto leading-relaxed tracking-wider font-medium px-4"
        >
          Rizq Technologies turns ambitious ideas into high-performance 
          digital experiences that deliver massive ROI.
        </motion.p>

        {/* 🔥 ACTION HUB: Optimized for Mobile Clicks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative z-[60] mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 mb-24 pointer-events-auto"
        >
          {/* CONNECT BUTTON */}
          <Link href="#contact" className="relative z-[70] block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-[260px] h-[60px] rounded-full overflow-hidden border border-amber-500/20 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/60"
            >
              <div className="absolute inset-0 bg-amber-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              <div className="relative z-10 flex items-center justify-center h-full text-amber-500 group-hover:text-black transition-colors duration-500">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={btnText}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="font-bold uppercase tracking-[0.25em] text-[10px]"
                  >
                    {btnText}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.button>
          </Link>

          {/* 🔥 VIEW WORK - Creative Ghost Button (Mobile Fixed) */}
          <Link href="#portfolio" className="relative z-[70] block">
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 py-3 px-6 rounded-full border border-white/5 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-500 transition-all duration-500">
                <span className="text-white text-lg group-hover:text-amber-500 transition-colors">→</span>
              </div>
              <span className="text-white/50 group-hover:text-white font-bold uppercase tracking-widest text-[9px] transition-colors">
                See the work
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* 🔥 IMPACTFUL SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[8px] text-zinc-500 uppercase tracking-[0.6em] font-bold">Scroll</span>
        <div className="relative h-16 w-[2px] bg-zinc-900 rounded-full overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)]">
           <motion.div 
             animate={{ y: [-64, 64] }}
             transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-amber-500 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.8)]"
           />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;