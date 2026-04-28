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
      
      {/* 1. Cinematic Background - Optimized Visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      {/* Main Content Container with proper padding-top and center alignment */}
      <div className="relative z-30 max-w-5xl mx-auto w-full pt-40 md:pt-48 lg:pt-56 flex flex-col items-center justify-center mb-24 md:mb-36">
        
        {/* 🔥 HEADING: Clear & Impactful with spacing */}
        <div className="overflow-hidden mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-[4.75rem] font-semibold text-white leading-[1.2] tracking-tight"
          >
            We engineer <span className="text-zinc-500 italic font-light">growth</span> <br />
            for businesses using <span className="text-amber-400 font-medium drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">technology.</span>
          </motion.h1>
        </div>

        {/* Action Hub: Spaced from header and properly aligned */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-[60] flex flex-row items-center justify-center gap-10 pointer-events-auto mt-6 md:mt-10"
        >
          {/* CONNECT BUTTON - Clean & Professional */}
          <Link href="#contact" className="relative z-[70] block group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[1px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#fbbf24_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.3px]"
            />

            <motion.button
              ref={btnRef}
              onMouseMove={handleMouseMove}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="relative w-[240px] h-[55px] rounded-full overflow-hidden border border-white/10 bg-zinc-950/40 backdrop-blur-lg transition-all duration-500 group-hover:border-amber-400/40"
            >
              {/* Mouse Glow */}
              <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{
                  background: useTransform(
                    [dx, dy],
                    ([x, y]) => `radial-gradient(70px circle at ${x}px ${y}px, rgba(251, 191, 36, 0.12), transparent 80%)`
                  ),
                }}
              />

              {/* Fluid Fill */}
              <div className="absolute inset-0 bg-amber-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.2,1,0.25,1)] z-0" />

              <div className="relative z-20 flex items-center justify-center h-full text-amber-400 group-hover:text-black transition-colors duration-500">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={btnText}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="font-medium uppercase tracking-[0.18em] text-[10px]"
                  >
                    {btnText}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.button>
          </Link>

          {/* VIEW WORK - Refined with clean layout logic */}
          <Link href="#portfolio" className="relative z-[70] flex items-center gap-2 group transition-all duration-300">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-400/5 transition-all duration-500">
              <span className="text-white text-xs group-hover:text-amber-400 transition-colors">→</span>
            </div>
            <span className="text-zinc-600 group-hover:text-white font-medium uppercase tracking-[0.18em] text-[9px] transition-colors">
              See the work
            </span>
          </Link>
        </motion.div>
      </div>

      {/* 🔥 SCROLL INDICATOR: Standard Bottom Alignment */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
      >
        <span className="text-[9px] text-zinc-600 uppercase tracking-[0.6em] font-medium mb-3">Scroll</span>
        <div className="relative h-14 w-[1.2px] bg-zinc-900 rounded-full overflow-hidden">
           <motion.div 
             animate={{ y: [-56, 56] }}
             transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-amber-400 to-transparent shadow-[0_0_10px_rgba(251,191,36,0.6)]"
           />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;