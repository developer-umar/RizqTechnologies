// components/AboutUsPremium.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsPremium() {
  return (
    // The outer section stays BLACK to seamlessly connect with your Hero and Pricing sections
    <section className="relative w-full bg-black py-16 px-4 md:px-8" id="about">
      
      {/* The "Layered Card" - This creates the light theme but visually proves 
        it belongs on the dark website by floating above it. 
      */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Custom premium easing
        className="relative max-w-7xl mx-auto bg-[#fafafa] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-zinc-200"
      >
        {/* Accent Bar tying back to your main theme */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 p-8 md:p-16 lg:p-24 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-zinc-900 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-white">The Studio</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-zinc-950 mb-8 uppercase"
            >
              Engineering <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">Brand Growth.</span>
                {/* Yellow highlight stroke connecting to your theme */}
                <span className="absolute bottom-1 left-0 w-full h-4 bg-yellow-400/40 -rotate-1 z-0" />
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed mb-6"
            >
              We are a modern engineering collective unburdened by legacy tech. We don't just build websites; we architect digital revenue engines.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-8 pt-8 mt-4 border-t border-zinc-200"
            >
              <div>
                <h4 className="font-black text-zinc-950 text-xl uppercase tracking-tight">Agile Execution</h4>
                <p className="text-sm text-zinc-500 mt-2 font-medium">Faster delivery. Zero corporate bloat. Pure ROI.</p>
              </div>
              <div className="hidden sm:block w-px h-auto bg-zinc-200" />
              <div>
                <h4 className="font-black text-zinc-950 text-xl uppercase tracking-tight">Modern Stack</h4>
                <p className="text-sm text-zinc-500 mt-2 font-medium">High-performance Next.js architectures.</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Real-World Image with Theme-Connecting Shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full aspect-[4/5] lg:aspect-square"
          >
            {/* The Solid Yellow Offset Shadow - This makes it highly creative and connects the theme */}
            <div className="absolute top-6 left-6 w-full h-full bg-yellow-400 rounded-3xl" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-zinc-200 border-2 border-zinc-950">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" 
                alt="Engineering Team Collaborating"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 -left-4 lg:-left-10 z-20 bg-zinc-950 p-5 rounded-2xl shadow-xl border border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 mb-1">Our Focus</p>
                <p className="text-xl font-black tracking-tight text-white uppercase">100% Client ROI</p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}