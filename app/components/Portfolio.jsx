'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
);

const projects = [
  { id: "01", title: "Leather Craft", cat: "E-Commerce Platform", img: "/leather_craft_premium.png", color: "#FACC15" },
  { id: "02", title: "GLOW Luxury", cat: "Brand Identity", img: "https://images.unsplash.com/photo-1631730486784-029750059e0a?q=80&w=800", color: "#FDE047" },
  { id: "03", title: "RIZQ Fintech", cat: "Financial System", img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800", color: "#EAB308" },
  { id: "04", title: "AETHER AI", cat: "Data Engine", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800", color: "#CA8A04" },
];

export default function KineticPortfolio() {
  return (
    <section className="relative bg-[#050505] py-20 px-4 md:px-10 overflow-hidden">
      
      {/* ==================== CREATIVE YELLOW MESH (PERFORMANCE OPTIMIZED) ==================== */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#facc1510_0%,transparent_50%)]" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ==================== MINIMAL HEADER ==================== */}
        <div className="mb-20 md:mb-32">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-yellow-400 font-mono text-[10px] tracking-[6px] uppercase mb-4"
          >
            Work Archive — 2026
          </motion.p>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-10">
            Digital <br /> <span className="text-zinc-800">Curation.</span>
          </h2>
        </div>

        {/* ==================== KINETIC GRID (MOBILE STACK) ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href="#"
              target="_blank"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative block"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[4/5] md:aspect-[16/11] overflow-hidden rounded-[32px] bg-zinc-900 border border-white/5 transition-transform duration-700 group-hover:scale-[0.98]">
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Yellow Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* PROJECT INFO */}
              <div className="mt-6 flex justify-between items-start px-2">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-mono text-zinc-500 group-hover:text-yellow-400 transition-colors">
                      {project.id}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-xs md:text-sm font-medium">
                    {project.cat}
                  </p>
                </div>
                
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:text-black transition-all duration-500 group-hover:rotate-45">
                  <ExternalIcon />
                </div>
              </div>

              {/* Kinetic Decoration */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* ==================== FOOTER CREATIVITY ==================== */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-zinc-700 font-mono text-[9px] uppercase tracking-[4px]">
                Built for High Performance
            </p>
            <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                <span className="text-zinc-400 text-[10px] font-mono uppercase">System Active</span>
            </div>
        </div>
      </div>
    </section>
  );
}