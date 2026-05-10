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
        window.scrollTo({
            top: topPos,
            behavior: 'smooth'
        });
        window.history.pushState(null, '', href);
    } else {
        router.push(href);
    }
  };

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
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center text-center px-6" id="home">
      
      {/* 1. Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-30 max-w-5xl mx-auto w-full flex flex-col items-center justify-center pt-10">
        
        {/* HEADING */}
        <div className="overflow-hidden mb-10 md:mb-14">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-white leading-[1.1] tracking-tight px-4"
          >
            We engineer <span className="text-zinc-500 italic font-light">growth</span> <br />
            for businesses using <span className="text-amber-400 font-medium drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">technology.</span>
          </motion.h1>
        </div>

       
{/* Action Hub */}
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 1 }}
  className="relative z-[60] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
>
  {/* CONNECT BUTTON (Professional Yellow Theme) */}
  <Link 
    href="/contact" 
    onClick={(e) => handleLinkClick(e, "/contact", "contact")} 
    className="relative z-[70] block group"
  >
    {/* Outer Glow Ring - Constant breathing effect */}
    <motion.div
      animate={{ 
        scale: [1, 1.05, 1],
        opacity: [0.3, 0.6, 0.3] 
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -inset-1 rounded-full bg-amber-400/30 blur-md group-hover:bg-amber-400/50 transition-all duration-500"
    />

    <motion.button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-[260px] sm:w-[280px] h-[66px] rounded-full overflow-hidden border-2 border-amber-400 bg-amber-400 shadow-[0_20px_50px_-10px_rgba(251,191,36,0.4)] transition-all duration-500"
    >
      {/* 1. CREATIVE SHIMMER: A light streak that passes through on hover */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />

      {/* 2. SPOTLIGHT: Follows the mouse cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background: useTransform(
            [dx, dy],
            ([x, y]) => `radial-gradient(120px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.5), transparent 80%)`
          ),
        }}
      />

      {/* 3. TEXT LAYER: High contrast for professionalism */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <AnimatePresence mode="wait">
          <motion.span
            key={btnText}
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            exit={{ opacity: 0, letterSpacing: "0.1em" }}
            transition={{ duration: 0.4 }}
            className="text-black font-black uppercase text-[11px] sm:text-[13px] pointer-events-none"
          >
            {btnText}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Subtle Inner Shadow for Depth */}
      <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] pointer-events-none" />
    </motion.button>
  </Link>

  {/* VIEW WORK - Matching professional style */}
  <Link 
    href="/portfolio" 
    onClick={(e) => handleLinkClick(e, "/portfolio", "portfolio")} 
    className="relative z-[70] hidden md:flex items-center gap-5 group transition-all duration-300"
  >
    <div className="relative w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]">
      <motion.div 
        className="absolute inset-0 bg-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500" 
      />
      <span className="relative z-10 text-white text-xl group-hover:text-black transition-colors duration-300 transform group-hover:translate-x-1">
        →
      </span>
    </div>
    <div className="flex flex-col">
      <span className="text-zinc-500 group-hover:text-white font-bold uppercase tracking-[0.2em] text-[10px] transition-colors">
        See the work
      </span>
      <div className="h-[1px] w-0 group-hover:w-full bg-amber-400 transition-all duration-500" />
    </div>
  </Link>
</motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none"
      >
        <div className="relative h-16 w-[1px] bg-zinc-800 rounded-full overflow-hidden">
           <motion.div 
             animate={{ y: [-64, 64] }}
             transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-amber-400 to-transparent"
           />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;