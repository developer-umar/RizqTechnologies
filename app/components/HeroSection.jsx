"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [btnText, setBtnText] = useState("Connect With Us");

  // 🔥 logic for flipping button text (React Bits Style)
  useEffect(() => {
    const interval = setInterval(() => {
      setBtnText((prev) => 
        prev === "Connect With Us" ? "+91 8127672157" : "Connect With Us"
      );
    }, 2500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center text-center px-4" id="home">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105 opacity-50">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-30 max-w-5xl mx-auto w-full pt-20">
        
        {/* 🔥 MAIN HEADING: CLEAN & PROFESSIONAL */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight"
        >
          We engineer <span className="text-zinc-500 italic font-light">growth</span> <br />
          for businesses using <span className="text-amber-500 font-extrabold drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">technology.</span>
        </motion.h1>

        {/* SUBTEXT: REFINED */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          Rizq Technologies turns ambitious ideas into high-performance <br className="hidden md:block" /> 
          digital experiences that deliver massive ROI.
        </motion.p>

        {/* 🔥 ACTION HUB: ALIGNED & RESPONSIVE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 mb-20"
        >
          {/* CONNECT BUTTON - Clean Fluid Fill */}
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-[260px] h-[60px] rounded-full overflow-hidden border border-amber-500/40 bg-transparent transition-all duration-500 hover:border-amber-500 shadow-lg"
            >
              {/* Fluid Fill Layer */}
              <div className="absolute inset-0 bg-amber-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              
              <div className="relative z-10 flex items-center justify-center h-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={btnText}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-amber-500 group-hover:text-black font-bold uppercase tracking-[0.2em] text-[10px]"
                  >
                    {btnText}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.button>
          </Link>

          {/* VIEW WORK - Clean Link Style */}
          <Link href="#portfolio" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-500">
              <span className="text-white group-hover:text-black transition-colors text-lg">→</span>
            </div>
            <span className="text-white/70 group-hover:text-white font-bold uppercase tracking-widest text-[10px] transition-colors">See the work</span>
          </Link>
        </motion.div>
      </div>

      {/* 🔥 CLEAN SCROLL INDICATOR (Fixed Overlap) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] text-zinc-500 uppercase tracking-[0.4em] font-medium">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-amber-500 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;