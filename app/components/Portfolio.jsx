'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const projects = [
  { id: "01", title: "Leather Craft", cat: "Core System", img: "/leather_craft_premium.png" },
  { id: "02", title: "GLOW Luxury", cat: "Branding", img: "https://images.unsplash.com/photo-1631730486784-029750059e0a?q=80&w=800" },
  { id: "03", title: "RIZQ Fintech", cat: "Digital Identity", img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800" },
  { id: "04", title: "AETHER AI", cat: "Visualization", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800" },
];

export default function SmoothSliderPortfolio() {
  // We duplicate the array for a seamless loop effect
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="relative bg-[#050505] py-24 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* ==================== CREATIVE BACKGROUND ==================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-600/[0.02] blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10">
        {/* ==================== HEADER ==================== */}
        <div className="px-6 md:px-20 mb-16">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            Selected <br /> <span className="text-yellow-400">Creations.</span>
          </h2>
        </div>

        {/* ==================== SLIDER WRAPPER ==================== */}
        <div className="flex overflow-hidden group">
          <motion.div 
            className="flex gap-6 px-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 60 } }} // Slows down on hover
          >
            {duplicatedProjects.map((project, index) => (
              <div 
                key={index}
                className="relative shrink-0 w-[85vw] md:w-[30vw] aspect-[4/5] md:aspect-[3/4] rounded-[40px] overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-xl group/card"
              >
                {/* Image */}
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-50 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700 saturate-50 group-hover/card:saturate-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-yellow-400 text-xs tracking-widest">{project.id}</span>
                    <div className="p-3 rounded-full bg-white/5 backdrop-blur-md text-white border border-white/10 opacity-0 group-hover/card:opacity-100 transition-opacity">
                      <ExternalIcon />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[3px] mb-2 block">
                      {project.cat}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Yellow Glow Border on Hover */}
                <div className="absolute inset-0 border-2 border-yellow-400/0 group-hover/card:border-yellow-400/40 rounded-[40px] transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-20 px-6 md:px-20 flex justify-between items-center opacity-30">
        <span className="text-[10px] font-mono text-white tracking-[10px] uppercase">Agency Standard</span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent mx-10 hidden md:block" />
        <span className="text-[10px] font-mono text-yellow-400 tracking-[5px] uppercase">Autoplay Active</span>
      </div>
    </section>
  );
}