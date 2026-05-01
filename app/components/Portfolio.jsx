'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const projects = [
  { id: "01", title: "Leather Craft", client: "Luxury Est.", year: "2026", cat: "Core System", tags: ["Next.js", "GSAP"], img: "/leather_craft_premium.png" },
  { id: "02", title: "GLOW Luxury", client: "SkinCare Co", year: "2025", cat: "Branding", tags: ["Shopify", "Tailwind"], img: "https://images.unsplash.com/photo-1631730486784-029750059e0a?q=80&w=800" },
  { id: "03", title: "RIZQ Fintech", client: "Rizq Tech", year: "2026", cat: "Digital Identity", tags: ["Three.js", "Node"], img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800" },
  { id: "04", title: "AETHER AI", client: "Neural Labs", year: "2026", cat: "Visualization", tags: ["React", "Python"], img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800" },
];

export default function EliteSliderPortfolio() {
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="relative bg-[#030303] py-24 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* ==================== CREATIVE BACKGROUND (YELLOW NEON) ==================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Yellow Orbs */}
        <div className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-yellow-500/[0.05] blur-[160px] rounded-full" />
        <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-yellow-600/[0.04] blur-[120px] rounded-full" 
        />
        
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="relative z-10">
        {/* ==================== HEADER ==================== */}
        <div className="px-6 md:px-20 mb-20">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-yellow-500 font-mono text-[10px] tracking-[5px] uppercase mb-4"
          >
            Curated Case Studies
          </motion.p>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            DIGITAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600">EXPERIENCES.</span>
          </h2>
        </div>

        {/* ==================== SEAMLESS SLIDER ==================== */}
        <div className="flex overflow-hidden group">
          <motion.div 
            className="flex gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30, // Much slower for professionalism
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 80 } }} 
          >
            {duplicatedProjects.map((project, index) => (
              <div 
                key={index}
                className="relative shrink-0 w-[88vw] md:w-[45vw] aspect-[16/10] rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-3xl group/card cursor-pointer"
              >
                {/* Background Image */}
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-30 group-hover/card:opacity-60 group-hover/card:scale-105 transition-all duration-1000 saturate-[0.2] group-hover/card:saturate-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-20">
                  
                  {/* Top: Metadata */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <p className="text-yellow-400 font-mono text-[9px] tracking-widest uppercase opacity-80">{project.client}</p>
                        <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest">EST. {project.year}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center opacity-0 group-hover/card:opacity-100 group-hover/card:rotate-45 transition-all duration-500">
                      <ExternalIcon />
                    </div>
                  </div>

                  {/* Bottom: Info */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="max-w-xs">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[3px] mb-3 block">
                        {project.cat}
                        </span>
                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                        {project.title}
                        </h3>
                    </div>
                    
                    {/* Tags (Desktop only reveal) */}
                    <div className="flex gap-2 flex-wrap md:opacity-0 group-hover/card:opacity-100 transition-opacity">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full border border-white/20 bg-black/40 text-[9px] text-white font-mono uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Border creativity */}
                <div className="absolute inset-0 border border-yellow-400/0 group-hover/card:border-yellow-500/30 rounded-[32px] md:rounded-[48px] transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-20 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-yellow-500/50" />
            <span className="text-[10px] font-mono text-zinc-600 tracking-[8px] uppercase">Kushwaha Edition</span>
        </div>
        <div className="flex gap-8">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Ready to Ship</span>
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-ping" />
        </div>
      </div>
    </section>
  );
}