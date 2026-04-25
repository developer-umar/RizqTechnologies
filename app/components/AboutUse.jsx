// components/AboutUsFluid.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Subtle Stagger Animations ("Halka Phulka")
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutUsFluid() {
  return (
    // Edge-to-edge fluid section. No max-w containers restricting the background.
    <section className="relative w-full bg-[#f9f9f9] text-zinc-900 overflow-hidden flex flex-col lg:flex-row" id="about">
      
      {/* Subtle Texture to prevent the background from looking completely flat/dead */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* LEFT SIDE: Pure Typography & Content (Takes up 55% on Desktop) */}
      <div className="relative w-full lg:w-[55%] px-6 py-24 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-2xl"
        >
          {/* Subtle Accent Label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-yellow-500" />
            <span className="text-xs font-bold tracking-[3px] uppercase text-zinc-500">The Agency</span>
          </motion.div>

          {/* Heavy, Premium Typography */}
          <motion.h2 
            variants={itemVariants} 
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] uppercase mb-8"
          >
            We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900">
              To Scale.
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed mb-6"
          >
            We don't just write code. We partner with Kanpur's leading industries and global tech startups to architect digital experiences that drive measurable business growth.
          </motion.p>

          <motion.p 
            variants={itemVariants} 
            className="text-base text-zinc-500 leading-relaxed mb-12"
          >
            By bridging the gap between cutting-edge MERN stack infrastructure and real-world business logic, we transform outdated systems into high-performance revenue engines. No bloated templates. Just pure engineering.
          </motion.p>

          {/* Clean, Borderless Stats Layout */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-200/80">
            <div>
              <p className="text-4xl font-black text-zinc-900 tracking-tighter mb-1">
                100<span className="text-yellow-500">%</span>
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">In-House Code</p>
            </div>
            <div>
              <p className="text-4xl font-black text-zinc-900 tracking-tighter mb-1">
                24<span className="text-yellow-500">/7</span>
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Dedicated Support</p>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* RIGHT SIDE: Edge-to-Edge Image (Takes up 45% on Desktop) */}
      <div className="relative w-full lg:w-[45%] min-h-[500px] lg:min-h-auto overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80" 
            alt="Engineering Workspace"
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