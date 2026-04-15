"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-black" id="cta">
      
      {/* ==================== CINEMATIC IMAGE BACKGROUND (FIXED) ==================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* High-Res Unsplash Image - Optimized with next/image */}
        <Image 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80" 
          alt="The Rizq Studio Team"
          fill
          className="w-full h-full object-cover opacity-40 grayscale"
          sizes="100vw"
        />
        
        {/* Gradient Masks - Lightened to let the image show through */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        
        {/* Subtle grid on top of the image */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* ==================== FLOATING ACCENTS ==================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] border border-yellow-400/10 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 8 }}
          className="absolute -bottom-60 -right-60 w-[700px] h-[700px] border border-amber-300/10 rounded-full"
        />
      </div>

      {/* ==================== FOREGROUND CONTENT ==================== */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Badge added for extra premium feel */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-yellow-400 font-mono text-[10px] tracking-[3px] uppercase mx-auto shadow-[0_0_15px_rgba(250,204,21,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" /> Available for New Projects
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-white uppercase">
            Let’s Build Your <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(250,204,21,0.2)]">
              Next Success.
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          From concept to conversion — we engineer digital experiences that don’t just look good, they deliver measurable growth.
        </motion.p>

        {/* Creative Button */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-14 flex justify-center"
        >
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group relative px-12 md:px-16 py-6 bg-yellow-400 text-black font-black text-xl md:text-2xl rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(250,204,21,0.3)] hover:shadow-[0_0_60px_rgba(250,204,21,0.5)] transition-all duration-500 uppercase tracking-wide"
            >
              <span className="relative z-20 flex items-center gap-4">
                Start Your Project
                <motion.span 
                  className="text-3xl"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>

              {/* Shine + Glow Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-zinc-500 font-medium tracking-wide uppercase"
        >
          <span className="flex items-center gap-2"><span className="text-yellow-400">✓</span> Free Strategy Call</span>
          <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-700" />
          <span className="flex items-center gap-2"><span className="text-yellow-400">✓</span> High-Performance Code</span>
          <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-700" />
          <span className="flex items-center gap-2"><span className="text-yellow-400">✓</span> Dedicated Support</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;