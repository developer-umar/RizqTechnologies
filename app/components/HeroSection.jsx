"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [btnText, setBtnText] = useState("Connect With Us");
  const btnRef = useRef(null);

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
        prev === "Connect With Us" ? "+91 8127672157" : "Connect With Us"
      );
    }, 2800); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col items-center justify-start text-center px-6" id="home">
      
      {/* 1. Cinematic Background - Reduced opacity for higher contrast */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Container with improved Padding-Top for Navbar clearance */}
      <div className="relative z-30 max-w-5xl mx-auto w-full pt-44 md:pt-52 lg:pt-60">
        
        {/* 🔥 HEADING: Optimized Font Weights */}
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-[5rem] font-semibold text-white leading-[1.1] tracking-tight"
          >
            We engineer <span className="text-zinc-500 italic font-light">growth</span> <br />
            for businesses using <span className="text-amber-400 font-medium drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">technology.</span>
          </motion.h1>
        </div>

        {/* 🔥 SUBTEXT: Better Balance & Readability */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed tracking-normal font-normal px-4 opacity-90"
        >
          Rizq Technologies turns ambitious ideas into high-performance 
          digital experiences that deliver massive ROI.
        </motion.p>

        {/* Action Hub: Clean Alignment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative z-[60] mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 pointer-events-auto"
        >
          {/* CONNECT BUTTON */}
          <Link href="#contact" className="relative z-[70] block group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[1.5px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#fbbf24_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]"
            />

            <motion.button
              ref={btnRef}
              onMouseMove={handleMouseMove}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-[260px] h-[60px] rounded-full overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-xl transition-all duration-500 group-hover:border-amber-400/40"
            >
              {/* Mouse Glow */}
              <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{
                  background: useTransform(
                    [dx, dy],
                    ([x, y]) => `radial-gradient(80px circle at ${x}px ${y}px, rgba(251, 191, 36, 0.15), transparent 80%)`
                  ),
                }}
              />

              {/* Fluid Fill */}
              <div className="absolute inset-0 bg-amber-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />

              <div className="relative z-20 flex items-center justify-center h-full text-amber-400 group-hover:text-black transition-colors duration-500">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={btnText}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="font-semibold uppercase tracking-[0.2em] text-[11px]"
                  >
                    {btnText}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.button>
          </Link>

          {/* VIEW WORK */}
          <Link href="#portfolio" className="relative z-[70] flex items-center gap-3 py-3 px-2 group transition-all duration-300">
            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-400/5 transition-all duration-500">
              <span className="text-white text-sm group-hover:text-amber-400 transition-colors">→</span>
            </div>
            <span className="text-zinc-500 group-hover:text-white font-semibold uppercase tracking-[0.2em] text-[10px] transition-colors">
              See the work
            </span>
          </Link>
        </motion.div>
      </div>

      {/* 🔥 SCROLL INDICATOR: Slightly more minimal */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[10px] text-zinc-600 uppercase tracking-[0.5em] font-medium">Scroll</span>
        <div className="relative h-16 w-[1.5px] bg-zinc-900 rounded-full overflow-hidden">
           <motion.div 
             animate={{ y: [-64, 64] }}
             transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-amber-400 to-transparent"
           />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;