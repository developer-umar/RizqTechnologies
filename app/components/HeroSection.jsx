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
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center text-center px-6 pt-20 md:pt-0" id="home">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-30 max-w-5xl mx-auto w-full">
        
        {/* 🔥 BALANCED HEADING: Optimized for No-Overlap */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl lg:text-7xl font-semibold text-white leading-[1.2] tracking-tight"
        >
          We engineer <span className="text-zinc-500 italic font-light">growth</span> <br />
          for businesses using <span className="text-amber-500 font-bold">technology.</span>
        </motion.h1>

        {/* REFINED SUBTEXT */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-xs md:text-sm text-zinc-500 max-w-lg mx-auto leading-relaxed tracking-wider font-medium"
        >
          Rizq Technologies turns ambitious ideas into high-performance 
          digital experiences that deliver massive ROI.
        </motion.p>

        {/* 🔥 HIGH-PERFORMANCE CREATIVE ACTION HUB */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative z-50 mt-12 flex flex-col sm:flex-row items-center justify-center gap-10 mb-20 pointer-events-auto"
        >
          {/* CREATIVE CONNECT BUTTON */}
          <Link href="#contact" className="relative group">
            <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0 blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-[240px] h-[55px] rounded-full overflow-hidden border border-amber-500/20 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-amber-500/60"
            >
              {/* Fluid Fill Layer */}
              <div className="absolute inset-0 bg-amber-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              
              {/* Particles/Glow effect on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/40 rounded-full group-hover:w-full group-hover:h-full group-hover:opacity-0 transition-all duration-700 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-center h-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={btnText}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-amber-500 group-hover:text-black font-bold uppercase tracking-[0.25em] text-[9px]"
                  >
                    {btnText}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.button>
          </Link>

          {/* VIEW WORK - MINIMAL CIRCLE HOVER */}
          <Link 
            href="#portfolio" 
            className="group flex items-center gap-4 py-2 cursor-pointer transition-all duration-300"
          >
            <div className="relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-amber-500">
               <motion.div 
                 className="absolute inset-0 rounded-full bg-amber-500 scale-0 group-hover:scale-100 transition-transform duration-500"
               />
              <span className="relative z-10 text-white group-hover:text-black transition-colors text-lg">→</span>
            </div>
            <div className="flex flex-col items-start">
               <span className="text-white/50 group-hover:text-white font-bold uppercase tracking-widest text-[9px] transition-colors">
                View Work
               </span>
               <div className="h-[1px] w-0 bg-amber-500 group-hover:w-full transition-all duration-500" />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* 🔥 REFINED SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[7px] text-zinc-600 uppercase tracking-[0.5em] font-bold">Scroll</span>
        <div className="relative h-10 w-[1px] bg-zinc-800 overflow-hidden">
           <motion.div 
             animate={{ y: [-40, 40] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-amber-500 to-transparent"
           />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;