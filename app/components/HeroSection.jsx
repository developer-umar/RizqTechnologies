// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const HeroSection = () => {
//     return (
//         <section className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col justify-center pt-32" id="home">
//             <div className="absolute inset-0 z-0">
//                 <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-110">
//                     <source src="/videos/hero.mp4" type="video/mp4" />
//                 </video>
//                 <div className="absolute inset-0 bg-black/60 z-10" />
//                 <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
//             </div>

//             <div className="relative z-30 px-8 md:px-20 max-w-7xl mx-auto w-full pb-20">
//                 <motion.div 
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mb-6 flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full w-fit"
//                 >
//                     <span className="relative flex h-2 w-2">
//                         <span className="animate-ping absolute h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
//                         <span className="relative h-2 w-2 rounded-full bg-yellow-500"></span>
//                     </span>
//                     <span className="text-white/60 text-[9px] font-black uppercase tracking-[0.3em]">Built for 2026</span>
//                 </motion.div>

//                 <div className="max-w-5xl">
//                     <motion.h1 
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="text-5xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter uppercase"
//                     >
//                         Mastering <br />
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-200 italic">Craft.</span>
//                     </motion.h1>
//                     <motion.p 
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.4 }}
//                         className="mt-8 text-lg text-gray-400 max-w-lg leading-relaxed font-medium"
//                     >
//                         We build high-performance digital products for elite brands.
//                     </motion.p>
//                 </div>

//                 <motion.div 
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 }}
//                     className="mt-10 flex flex-wrap gap-4"
//                 >
//                     <Link href="#contact">
//                         <button className="bg-yellow-400 hover:scale-105 transition-transform text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-yellow-400/20">
//                             Start Project
//                         </button>
//                     </Link>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center" id="home">
      
      {/* 1. CINEMATIC VIDEO ENGINE */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-105 opacity-80"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle Overlay: Lightened from 60 to 30 for better visibility */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        {/* Elite Gradient: Vignette effect to focus on center text */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      <div className="relative z-30 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto w-full pt-20">
        
        {/* STATUS BADGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 flex items-center gap-3 bg-white/5 backdrop-blur-2xl border border-white/10 px-5 py-2.5 rounded-full w-fit"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative h-2 w-2 rounded-full bg-amber-500"></span>
          </span>
          <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.4em]">Available for Global Projects</span>
        </motion.div>

        <div className="max-w-6xl">
          {/* MAIN HEADING: Focused on Growth */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13vw] md:text-[10vw] lg:text-[9.5rem] font-black text-white leading-[0.8] tracking-tighter uppercase"
          >
            Brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white italic">
              Growth.
            </span>
          </motion.h1>

          {/* SUBTEXT: Clean & Concise */}
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 text-xl md:text-2xl text-zinc-300 max-w-xl leading-snug font-medium border-l-2 border-amber-500 pl-6"
          >
            We don’t just build websites. We architect high-performance digital experiences that scale your business globally.
          </motion.p>
        </div>

        {/* CALL TO ACTIONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap gap-6"
        >
          <Link href="#contact">
            <button className="group relative overflow-hidden bg-amber-500 text-black px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]">
              <span className="relative z-10">Start Your Growth</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </button>
          </Link>

          <Link href="#about">
            <button className="px-12 py-6 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500">
              Our Method
            </button>
          </Link>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR: For that industry feel */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-amber-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;