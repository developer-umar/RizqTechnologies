

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center text-center" id="home">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-105 opacity-50"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Minimalist Overlays */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-30 px-6 max-w-5xl mx-auto w-full">
        
        {/* MINIMALIST BADGE */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full w-fit mx-auto"
        >
          <span className="text-white/60 text-[10px] font-medium uppercase tracking-[0.5em]">Digital Strategy 2026</span>
        </motion.div>

        {/* MAIN HEADING: Minimal & Balanced */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] tracking-tight"
        >
          We build <span className="text-zinc-500 italic">brands</span> <br />
          and <span className="font-bold text-amber-500">scale businesses.</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          Rizq Technologies turns ambitious ideas into high-performance <br className="hidden md:block" /> digital experiences that deliver real ROI.
        </motion.p>

        {/* CENTERED CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link href="#contact">
            <button className="group relative bg-white text-black px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:bg-amber-500 hover:text-black">
              Connect With Us
            </button>
          </Link>

          <Link href="#work">
            <button className="text-white font-bold text-sm uppercase tracking-widest border-b border-white/20 pb-1 hover:border-amber-500 transition-all">
              View Our Work
            </button>
          </Link>
        </motion.div>
      </div>

      {/* MINIMAL SCROLL HINT */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
      >
        <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] rotate-90 origin-left ml-2">Scroll</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;