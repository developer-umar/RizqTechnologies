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
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center text-center px-6" id="home">
      
      {/* 1. Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-30 max-w-5xl mx-auto w-full pt-32 md:pt-20">
        
        {/* 🔥 HEADING: STAGGERED REVEAL ANIMATION */}
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-[5.5rem] font-semibold text-white leading-[1.1] tracking-tight"
          >
            We engineer <span className="text-zinc-500 italic font-light">growth</span> <br />
            for businesses using <span className="text-amber-500 font-bold drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">technology.</span>
          </motion.h1>
        </div>

        {/* 🔥 SUBTEXT: 20% FONT INCREASE & SOFT FADE */}
        <motion.p 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 text-sm md:text-[1.1rem] text-zinc-400 max-w-2xl mx-auto leading-relaxed tracking-wide font-medium px-4"
        >
          Rizq Technologies turns ambitious ideas into high-performance 
          digital experiences that deliver massive ROI.
        </motion.p>

        {/* Action Hub */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative z-[60] mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 mb-24 pointer-events-auto"
        >
          {/* 🔥 MAGIC BENTO CONNECT BUTTON WITH LASER ORBIT */}
          <Link href="#contact" className="relative z-[70] block group">
            
            {/* LASER BORDER EFFECT */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[2px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#facc15_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]"
            />

            <motion.button
              ref={btnRef}
              onMouseMove={handleMouseMove}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-[280px] h-[65px] rounded-full overflow-hidden border border-yellow-400/20 bg-black/40 backdrop-blur-md transition-all duration-500 hover:border-yellow-400/60"
            >
              {/* Mouse Glow */}
              <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{
                  background: useTransform(
                    [dx, dy],
                    ([x, y]) => `radial-gradient(100px circle at ${x}px ${y}px, rgba(250, 204, 21, 0.2), transparent 80%)`
                  ),
                }}
              />

              {/* Fluid Fill */}
              <div className="absolute inset-0 bg-yellow-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />

              <div className="relative z-20 flex items-center justify-center h-full text-yellow-400 group-hover:text-black transition-colors duration-500">
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

          {/* VIEW WORK - DESKTOP ONLY */}
          <Link href="#portfolio" className="relative z-[70] hidden md:flex items-center gap-4 py-3 px-6 group transition-all duration-300">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-yellow-400 transition-all duration-500">
              <span className="text-white text-lg group-hover:text-yellow-400 transition-colors">→</span>
            </div>
            <span className="text-white/50 group-hover:text-white font-bold uppercase tracking-widest text-[9px] transition-colors">
              See the work
            </span>
          </Link>
        </motion.div>
      </div>

      {/* 🔥 IMPACTFUL SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[9px] text-zinc-500 uppercase tracking-[0.6em] font-bold">Scroll</span>
        <div className="relative h-20 w-[2px] bg-zinc-900 rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.8)]">
           <motion.div 
             animate={{ y: [-80, 80] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-yellow-400 to-transparent shadow-[0_0_25px_rgba(250,204,21,1)]"
           />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;