// components/AboutUsFluid.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Advanced Blur Fade-In Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const blurVariants = {
  hidden: { opacity: 0, filter: "blur(15px)", y: 20 },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)", 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function AboutUsFluid() {
  return (
    // Edge-to-edge fluid section. Light background to balance the dark theme.
    <section className="relative w-full bg-[#f9f9f9] text-zinc-900 overflow-hidden flex flex-col lg:flex-row" id="about">
      
      {/* Subtle Texture to prevent the background from looking completely flat */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* LEFT SIDE: Pure Typography & Blur Animations (Takes up 55% on Desktop) */}
      <div className="relative w-full lg:w-[55%] px-6 py-24 md:px-16 lg:px-24 flex flex-col justify-center z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-2xl"
        >
          {/* Subtle Accent Label */}
          <motion.div variants={blurVariants} className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-yellow-500" />
            <span className="text-xs font-bold tracking-[3px] uppercase text-zinc-500">Who We Are</span>
          </motion.div>

          {/* Heavy, Premium Typography with Blur Reveal */}
          <motion.h2 
            variants={blurVariants} 
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] uppercase mb-8"
          >
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900">
              Global Brands.
            </span>
          </motion.h2>

          <motion.p 
            variants={blurVariants} 
            className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed mb-6"
          >
            We are a modern engineering collective unburdened by legacy red tape. We partner with visionary businesses to transform their digital presence into dominant, high-performance revenue engines.
          </motion.p>

          <motion.p 
            variants={blurVariants} 
            className="text-base text-zinc-500 leading-relaxed mb-12"
          >
            From conceptualizing UI architectures to deploying globally scalable MERN stack infrastructures, we handle the technology so you can focus on scaling your empire. We don't just write code; we engineer market dominance.
          </motion.p>

          {/* Clean, Borderless Stats Layout */}
          <motion.div variants={blurVariants} className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-200/80">
            <div>
              <p className="text-4xl font-black text-zinc-900 tracking-tighter mb-1">
                100<span className="text-yellow-500">%</span>
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">In-House Code</p>
            </div>
            <div>
              <p className="text-4xl font-black text-zinc-900 tracking-tighter mb-1">
                Global
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Digital Footprint</p>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* RIGHT SIDE: Edge-to-Edge Image (Takes up 45% on Desktop) */}
      <div className="relative w-full lg:w-[45%] min-h-[500px] lg:min-h-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          {/* Unsplash Image: Young attractive professionals (girl & businessman) discussing growth */}
          <Image
            src="https://media.istockphoto.com/id/1307743458/photo/business-people-discussing-new-project-on-the-laptop-teamwork-concepts.jpg?s=1024x1024&w=is&k=20&c=jcF_j_YyopG0X1ovicFC7jV7DDjOpzcWGa1ONzTJ4kM=" 
            alt="Modern Business Growth Meeting"
            fill
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          {/* Subtle gradient to blend the image edge with the left side on desktop */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f9f9f9] to-transparent hidden lg:block" />
        </motion.div>
      </div>

    </section>
  );
}