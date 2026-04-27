"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [btnText, setBtnText] = useState("Connect With Us");

  // 🔥 Flip logic (React Bits inspired)
  useEffect(() => {
    const interval = setInterval(() => {
      setBtnText((prev) => 
        prev === "Connect With Us" ? "+91 8127672157" : "Connect With Us"
      );
    }, 2500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center text-center px-6" id="home">
      
      {/* 1. CINEMATIC BACKGROUND (Optimized) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-30 max-w-6xl mx-auto w-full pt-10">
        
        {/* 🔥 BALANCED HEADING: SEMI-BOLD & CLEAN */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-[5.5rem] font-semibold text-white leading-[1.1] tracking-tight"
        >
          We engineer <span className="text-zinc-400 italic font-light">growth</span> <br />
          for businesses using <span className="text-amber-500 font-bold drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">technology.</span>
        </motion.h1>

        {/* REFINED SUBTEXT */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 text-sm md:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed tracking-wide font-medium"
        >
          Rizq Technologies turns ambitious ideas into high-performance <br className="hidden md:block" /> 
          digital experiences that deliver massive ROI.
        </motion.p>

        {/* 🔥 ACTION HUB: FIXED MOBILE CLICKS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative z-50 mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 mb-24 pointer-events-auto"
        >
          {/* CONNECT BUTTON */}
          <Link href="#contact" className="cursor-pointer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-[260px] h-[60px] rounded-full overflow-hidden border border-amber-500/30 bg-transparent transition-all duration-500 hover:border-amber-500"
            >
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

          {/* VIEW WORK - FIXED FOR TOUCH */}
          <Link 
            href="#portfolio" 
            className="group flex items-center gap-3 py-2 cursor-pointer touch-manipulation"
          >
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-500">
              <span className="text-white group-hover:text-black transition-colors text-lg">→</span>
            </div>
            <span className="text-white/60 group-hover:text-white font-bold uppercase tracking-widest text-[9px] transition-colors">
              See the work
            </span>
          </Link>
        </motion.div>
      </div>

      {/* 🔥 CLEAN SCROLL INDICATOR (Reduced Overlap) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[8px] text-zinc-600 uppercase tracking-[0.4em] font-medium">Scroll</span>
        <motion.div 
          animate={{ height: [20, 40, 20], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] bg-amber-500/50"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;