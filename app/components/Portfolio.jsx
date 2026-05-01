'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M4 14.71L15 3l-2 9h7L9 21l2-9H4z" /></svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const projects = [
  { id: "01", title: "Leather Craft", cat: "Core System", img: "/leather_craft_premium.png" },
  { id: "02", title: "GLOW Luxury", cat: "Branding", img: "https://images.unsplash.com/photo-1631730486784-029750059e0a?q=80&w=800" },
  { id: "03", title: "RIZQ Fintech", cat: "Digital Identity", img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800" },
  { id: "04", title: "AETHER AI", cat: "Visualization", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800" },
];

export default function CinematicPortfolio() {
  return (
    <section className="relative bg-[#050505] min-h-screen py-24 overflow-hidden">
      
      {/* ==================== YELLOW CREATIVITY (BACKGROUND) ==================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Yellow Glows */}
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] bg-yellow-600/5 blur-[100px] rounded-full" />
        {/* Grainy Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ==================== HEADER ==================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 font-mono text-[10px] tracking-widest uppercase mb-6"
            >
              <ZapIcon /> Portfolio '26
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase">
              The <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600">Showcase.</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-[280px] text-sm leading-relaxed border-l border-yellow-500/30 pl-6 mb-2">
            Experimental engineering meets cinematic design. Every pixel is optimized for performance.
          </p>
        </div>

        {/* ==================== PROJECT LIST (HORIZONTAL FEEL) ==================== */}
        <div className="flex flex-col gap-1">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-b border-white/5 py-10 md:py-16 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-8 md:gap-16 relative z-20">
                <span className="font-mono text-yellow-500/40 text-sm md:text-base">{project.id}</span>
                <h3 className="text-4xl md:text-7xl font-bold text-zinc-400 group-hover:text-white group-hover:translate-x-4 transition-all duration-500 uppercase tracking-tighter">
                  {project.title}
                </h3>
              </div>

              <div className="hidden md:block relative z-20 text-right">
                <span className="text-xs font-mono text-zinc-600 group-hover:text-yellow-500 transition-colors uppercase tracking-widest block mb-1">
                  {project.cat}
                </span>
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                   <ExternalIcon />
                </div>
              </div>

              {/* ==================== HOVER IMAGE PREVIEW (FLOATING) ==================== */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 group-hover:w-[300px] h-[200px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none overflow-hidden rounded-2xl z-10 rotate-[-5deg] group-hover:rotate-0">
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  className="object-cover saturate-0 group-hover:saturate-100 transition-all duration-700 scale-125 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay" />
              </div>

              {/* Background Highlight on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/[0.02] to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Label (Vertical) */}
      <div className="absolute right-10 top-1/2 -rotate-90 origin-right hidden lg:block">
        <span className="text-[10px] font-mono text-zinc-800 tracking-[15px] uppercase">
          Mr. Kushwaha Selection
        </span>
      </div>
    </section>
  );
}