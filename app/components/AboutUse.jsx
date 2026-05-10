"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Optimized Variants: Removed 'blur' filter for better performance
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.02 }
  }
};

export default function AboutUsFluid() {
  const { scrollYProgress } = useScroll();
  const yWatermark = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section className="relative w-full bg-[#fcfcfc] text-zinc-950 overflow-hidden" id="about">
      
      {/* 1. THE WATERMARK: Optimized for performance */}
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none select-none flex justify-center z-0 opacity-[0.03] md:opacity-[0.05]"
      >
        <h2 className="text-[18rem] md:text-[28rem] lg:text-[40rem] font-black text-black tracking-tighter whitespace-nowrap">
          RIZQ
        </h2>
      </motion.div>

      {/* ==================== HERO SECTION ==================== */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32 lg:py-40">
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
        >
          
          {/* ==================== LEFT SIDE: CONTENT ==================== */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div variants={fadeUpVariants} className="inline-flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-amber-500" />
              <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-zinc-400">
                Who We Are
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUpVariants} 
              className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-[0.85] uppercase mb-10"
            >
              Go <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-600">
                Global.
              </span>
            </motion.h1>

            <div className="max-w-2xl space-y-8">
              <motion.p variants={fadeUpVariants} className="text-2xl md:text-3xl text-zinc-800 font-semibold leading-tight">
                We build <span className="text-amber-600">scalable digital solutions</span> that turn growing businesses into global brands.
              </motion.p>
              
              <motion.p variants={fadeUpVariants} className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium">
                At <strong className="text-black font-bold">Rizq Technologies</strong>, we are a group of innovative professionals dedicated to your success. We do not just build websites — we deliver complete digital ecosystems. From high-performance platforms to smart automation, our focus is simple: <span className="text-zinc-800 italic">drive real growth, not just an online presence.</span>
              </motion.p>

              <motion.div variants={fadeUpVariants} className="pt-4 flex gap-4">
                <Link href="/services" className="px-8 py-4 bg-amber-500 hover:bg-black text-white font-bold tracking-wide uppercase rounded-full text-xs transition-all duration-300">
                  Explore Services
                </Link>
                <Link href="/contact" className="px-8 py-4 border border-zinc-300 hover:border-black text-black font-bold tracking-wide uppercase rounded-full text-xs transition-all duration-300">
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </div>

          {/* ==================== RIGHT SIDE: THE VISUAL ==================== */}
          <div className="lg:col-span-5 relative">
            <motion.div
              variants={fadeUpVariants}
              className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] group bg-zinc-200"
            >
              <Image
                src="/about.jpg" 
                alt="Rizq Technologies - Scalable Solutions" 
                fill
                quality={90} 
                priority // Ensures image loads immediately
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl"
              >
                <p className="text-white text-[10px] font-bold tracking-widest uppercase">Innovation Hub</p>
                <div className="h-[2px] w-full bg-amber-500 mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-3xl font-black leading-none mb-2">DRIVING <br/>REAL GROWTH</p>
                <p className="text-zinc-300 text-[12px] font-medium tracking-widest uppercase">Custom Software & Smart Automation</p>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}