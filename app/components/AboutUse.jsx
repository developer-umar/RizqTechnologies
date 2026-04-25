// components/AboutUsFluid.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Smooth, "Halka Phulka" Animations
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export default function AboutUsFluid() {
  return (
    <section className="relative w-full bg-[#f4f4f5] text-zinc-950 overflow-hidden py-24 md:py-32 lg:py-40" id="about">
      
      {/* 1. THE WATERMARK: Massive background branding */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none select-none flex justify-center z-0 opacity-40">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[15rem] md:text-[25rem] lg:text-[35rem] font-black text-zinc-200 tracking-tighter whitespace-nowrap"
        >
          RIZQ
        </motion.h2>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* ==================== LEFT SIDE: COLOSSAL TYPOGRAPHY ==================== */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div variants={fadeUpVariants} className="inline-flex items-center gap-3 mb-8 md:mb-12">
              <span className="w-12 h-[2px] bg-yellow-500" />
              <span className="text-xs md:text-sm font-bold tracking-[4px] uppercase text-zinc-500">
                The Rizq Standard
              </span>
            </motion.div>

            {/* Typography matching your Contact.tsx energy */}
            <motion.h3 
              variants={fadeUpVariants} 
              className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.85] uppercase mb-8"
            >
              We Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">
                Value.
              </span>
            </motion.h3>

            <div className="max-w-2xl space-y-6">
              <motion.p variants={fadeUpVariants} className="text-xl md:text-2xl text-zinc-700 font-medium leading-relaxed">
                We don't just write MERN stack code. <strong className="text-black font-black">Rizq Technologies</strong> is an elite collective of innovative professionals engineered to dominate the digital landscape.
              </motion.p>
              
              <motion.p variants={fadeUpVariants} className="text-base md:text-lg text-zinc-500 leading-relaxed">
                From conceptualizing intuitive architectures to deploying globally scalable platforms, our fresh ideas transform outdated systems into high-performance revenue engines. We partner with visionary brands to deliver exceptional ROI at industry-leading efficiency.
              </motion.p>
            </div>

            {/* Minimalist Stats */}
            <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-12 mt-12 pt-12 border-t border-zinc-300">
              <div>
                <p className="text-5xl font-black text-black tracking-tighter mb-2">
                  Top <span className="text-yellow-500">Tier</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Engineering</p>
              </div>
              <div>
                <p className="text-5xl font-black text-black tracking-tighter mb-2">
                  100<span className="text-yellow-500">%</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Brand Growth</p>
              </div>
            </motion.div>

          </div>

          {/* ==================== RIGHT SIDE: EDITORIAL IMAGE ==================== */}
          <div className="lg:col-span-5 relative w-full mt-12 lg:mt-0">
            {/* FLAW FIXED: Instead of relying purely on height, we use an aspect ratio. 
              This mathematically guarantees the image container will not collapse on mobile.
            */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-300/50 group"
            >
              {/* Creative yellow accent behind the image */}
              <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10 mix-blend-overlay" />
              
              <Image
                // src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80"
                src="about.jpg"
                alt="Rizq Technologies Premium Engineering Team" 
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              
              {/* Floating Value Badge inside Image */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-white/40 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-black font-black uppercase tracking-widest text-sm">Strategic</p>
                <p className="text-zinc-500 font-medium text-xs mt-1">Brand Execution</p>
              </div>
            </motion.div>

            {/* Decorative Dots Pattern behind the image to make it look premium */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] bg-[length:16px_16px] -z-10 hidden md:block" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}