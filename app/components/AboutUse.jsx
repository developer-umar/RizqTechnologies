"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// High-End Animation Variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
};

export default function AboutUsFluid() {
  // Parallax effect for the background watermark
  const { scrollYProgress } = useScroll();
  const yWatermark = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="relative w-full bg-[#fcfcfc] text-zinc-950 overflow-hidden py-24 md:py-32 lg:py-48" id="about">
      
      {/* 1. THE WATERMARK: Premium Parallax Branding */}
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none select-none flex justify-center z-0 opacity-[0.03] md:opacity-[0.05]"
      >
        <h2 className="text-[20rem] md:text-[30rem] lg:text-[45rem] font-black text-black tracking-tighter whitespace-nowrap">
          RIZQ
        </h2>
      </motion.div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
        >
          
          {/* ==================== LEFT SIDE: CONTENT ==================== */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div variants={fadeUpVariants} className="inline-flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-amber-500" />
              <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-zinc-400">
                About Us
              </span>
            </motion.div>

            <motion.h3 
              variants={fadeUpVariants} 
              className="text-6xl md:text-8xl lg:text-[8.5rem] font-black tracking-tighter leading-[0.8] uppercase mb-10"
            >
              Scale <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-600">
                Faster.
              </span>
            </motion.h3>

            <div className="max-w-2xl space-y-8">
              <motion.p variants={fadeUpVariants} className="text-2xl md:text-3xl text-zinc-800 font-semibold leading-tight">
                We don't just build apps; we <span className="text-amber-600">engineer market leaders</span>. 
              </motion.p>
              
              <motion.p variants={fadeUpVariants} className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium">
                At <strong className="text-black font-bold">Rizq Technologies</strong>, we are a collective of innovators obsessed with brand elevation. By leveraging <span className="text-zinc-800 italic">cutting-edge digital architectures</span>, we transform your vision into a high-performance revenue engine—delivering elite, industry-level quality without the bloated enterprise overhead.<strong className="text-black font-bold">Our  sole focus is to build  your Brand   and Grow Your Business</strong>
              </motion.p>
            </div>

            {/* Performance Stats */}
            <motion.div variants={fadeUpVariants} className="grid grid-cols-2 gap-8 mt-16 pt-12 border-t border-zinc-200">
              <div>
                <p className="text-4xl md:text-5xl font-black text-black tracking-tighter">
                  Brand<span className="text-amber-500">.</span>
                </p>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mt-2 font-mono">Architecture</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-black text-black tracking-tighter">
                  ROI<span className="text-amber-500">+</span>
                </p>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mt-2 font-mono">Driven Growth</p>
              </div>
            </motion.div>
          </div>

          {/* ==================== RIGHT SIDE: THE VISUAL ==================== */}
          <div className="lg:col-span-5 relative">
            <motion.div
              variants={fadeUpVariants}
              className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group bg-zinc-200"
            >
              {/* IMAGE FIX: Added quality={100} and priority for crisp rendering */}
              <Image
                src="/about.jpg" 
                alt="Business Growth Strategy" 
                fill
                quality={100} 
                priority
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              {/* Animated Growth Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              
              {/* Floating Brand Badge */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl"
              >
                <p className="text-white text-xs font-bold tracking-widest uppercase">Global Quality</p>
                <div className="h-1 w-full bg-amber-500 mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>

              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white text-3xl font-black leading-none mb-2">BUILT FOR <br/>SUCCESS</p>
                <p className="text-zinc-300 text-sm font-medium tracking-wide">Optimized for Scalability & Conversion</p>
              </div>
            </motion.div>

            {/* Decorative Geometric Element */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}