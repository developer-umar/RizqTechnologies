"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [btnText, setBtnText] = useState("Connect With Us");

  // 🔥 logic for flipping button text (0.5s transition feel)
  useEffect(() => {
    const interval = setInterval(() => {
      setBtnText((prev) => 
        prev === "Connect With Us" ? "+91 8127672157" : "Connect With Us"
      );
    }, 3000); // 3 seconds interval for readability
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center text-center" id="home">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay loop muted playsInline 
          className="w-full h-full object-cover scale-110 opacity-40 blur-[2px]"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-30 px-6 max-w-6xl mx-auto w-full">
        
        {/* MINIMALIST BADGE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-3 bg-white/5 backdrop-blur-2xl border border-white/10 px-6 py-2 rounded-full w-fit mx-auto"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.5em]">Digital Strategy 2026</span>
        </motion.div>

        {/* 🔥 MAIN HEADING: RE-ENGINEERED */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-[0.95] tracking-tighter"
        >
          We engineer <span className="text-zinc-500 italic font-light">growth</span> <br />
          for businesses using <br />
          <span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.3)]">technology.</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Rizq Technologies turns ambitious ideas into high-performance <br className="hidden md:block" /> 
          digital experiences that deliver massive ROI.
        </motion.p>

        {/* 🔥 THE ACTION HUB */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-14 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          {/* CONNECT BUTTON with Animated Text & Fluid Fill */}
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-[300px] h-[70px] rounded-full overflow-hidden border border-yellow-400/40 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-yellow-400"
            >
              {/* Fluid Fill Layer */}
              <div className="absolute inset-0 bg-yellow-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              
              <div className="relative z-10 flex items-center justify-center h-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={btnText}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="text-yellow-400 group-hover:text-black font-black uppercase tracking-[0.2em] text-[11px]"
                  >
                    {btnText}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.button>
          </Link>

          {/* VIEW WORK - Rotating Text Style Indicator */}
          <Link href="#portfolio" className="group flex items-center gap-4">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative w-16 h-16 flex items-center justify-center"
            >
              <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text className="text-[10px] uppercase font-bold fill-zinc-500 tracking-[2px]">
                  <textPath xlinkHref="#circlePath">View Our Portfolio • View Our Portfolio •</textPath>
                </text>
              </svg>
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-yellow-400 transition-colors flex items-center justify-center">
                <span className="text-white group-hover:text-black transition-colors text-sm">→</span>
              </div>
            </motion.div>
            <span className="text-white/50 group-hover:text-white font-bold uppercase tracking-widest text-[10px] transition-colors">See the work</span>
          </Link>
        </motion.div>
      </div>

      {/* 🔥 AGENCY LEVEL SCROLL HINT */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] text-zinc-500 uppercase tracking-[0.6em] font-black">Scroll</span>
        <motion.div 
          animate={{ height: [20, 60, 20], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-gradient-to-b from-yellow-400 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;