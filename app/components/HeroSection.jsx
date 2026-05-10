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
          <Link href="/contact" onClick={(e) => handleLinkClick(e, "/contact", "contact")} className="relative z-[70] block group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[1.5px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#fbbf24_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]"
            />

            <motion.button
              ref={btnRef}
              onMouseMove={handleMouseMove}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-[240px] sm:w-[270px] h-[64px] rounded-full overflow-hidden border border-amber-400/20 bg-amber-400 transition-all duration-500 group-hover:border-white/20 shadow-[0_0_30px_rgba(251,191,36,0.2)]"
            >
              {/* Spotlight Effect */}
              <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{
                  background: useTransform(
                    [dx, dy],
                    ([x, y]) => `radial-gradient(100px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3), transparent 80%)`
                  ),
                }}
              />

              {/* Fluid Fill - Inverse Black Effect */}
              <div className="absolute inset-0 bg-zinc-950 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />

              <div className="relative z-20 flex items-center justify-center h-full text-black group-hover:text-amber-400 transition-colors duration-500">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={btnText}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="font-black uppercase tracking-[0.3em] text-[10px] sm:text-[12px]"
                  >
                    {btnText}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.button>
          </Link>

          {/* VIEW WORK */}
          <Link href="/portfolio" onClick={(e) => handleLinkClick(e, "/portfolio", "portfolio")} className="relative z-[70] hidden md:flex items-center gap-4 group transition-all duration-300">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-400/5 transition-all duration-500 shadow-xl">
              <span className="text-white text-xl group-hover:text-amber-400 transition-all duration-300 transform group-hover:translate-x-1">→</span>
            </div>
            <span className="text-zinc-500 group-hover:text-white font-black uppercase tracking-[0.25em] text-[10px] transition-colors">
              See the work
            </span>
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