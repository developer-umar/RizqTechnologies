'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M4 14.71L15 3l-2 9h7L9 21l2-9H4z" /></svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const projects = [
  { id: "01", title: "Leather Craft", cat: "Core System", img: "/leather_craft_premium.png", link: "#" },
  { id: "02", title: "GLOW Luxury", cat: "Branding", img: "https://images.unsplash.com/photo-1631730486784-029750059e0a?q=80&w=800", link: "#" },
  { id: "03", title: "RIZQ Fintech", cat: "Digital Identity", img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800", link: "#" },
  { id: "04", title: "AETHER AI", cat: "Visualization", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800", link: "#" },
];

export default function AgencyPortfolio() {
  return (
    <section className="relative bg-[#080808] min-h-screen py-20 overflow-hidden">
      
      {/* ==================== PREMIUM LIGHTING ==================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Yellow Top Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[500px] bg-yellow-500/[0.03] blur-[120px] rounded-full" />
        {/* Animated Background blobs for "Creativity" */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-64 h-64 bg-yellow-500/[0.02] blur-[80px] rounded-full" 
        />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ==================== HEADER ==================== */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-yellow-500 font-mono text-[10px] tracking-[4px] uppercase mb-6"
          >
            <ZapIcon /> Engineering Excellence
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tight leading-[0.95] uppercase">
            SHIPPED <br />
            <span className="text-zinc-800 outline-text">PROJECTS.</span>
          </h2>
        </div>

        {/* ==================== PROJECT FEED ==================== */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <motion.a 
              href={project.link}
              target="_blank"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative border-t border-white/5 py-8 md:py-16 flex flex-col md:flex-row md:items-center justify-between transition-all"
            >
              <div className="flex items-center gap-6 md:gap-12 relative z-20">
                <span className="hidden md:block font-mono text-zinc-700 text-sm group-hover:text-yellow-500 transition-colors">
                  {project.id}
                </span>
                
                <div className="flex flex-col">
                  <h3 className="text-3xl md:text-7xl font-bold text-zinc-500 group-hover:text-white transition-all duration-500 uppercase tracking-tighter">
                    {project.title}
                  </h3>
                  <span className="md:hidden text-[10px] font-mono text-yellow-500/60 uppercase tracking-widest mt-2">
                    {project.cat}
                  </span>
                </div>
              </div>

              {/* ==================== MOBILE IMAGE REVEAL ==================== */}
              <div className="mt-6 md:hidden relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-yellow-400 p-2 rounded-full">
                  <ExternalIcon />
                </div>
              </div>

              {/* ==================== DESKTOP PREVIEW & ICON ==================== */}
              <div className="hidden md:flex items-center gap-10 relative z-20">
                <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                  {project.cat}
                </span>
                <div className="text-zinc-800 group-hover:text-yellow-400 group-hover:rotate-45 transition-all duration-500">
                  <ExternalIcon />
                </div>
              </div>

              {/* ==================== DESKTOP FLOATING IMAGE ==================== */}
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 group-hover:w-[320px] aspect-[16/10] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none overflow-hidden rounded-2xl z-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Row Glow Effect */}
              <div className="absolute inset-0 bg-yellow-400/[0.01] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.a>
          ))}
          <div className="border-t border-white/5 w-full" />
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
        }
        .group:hover .outline-text {
          -webkit-text-stroke: 1px rgba(250, 204, 21, 0.3);
          color: transparent;
        }
      `}</style>
    </section>
  );
}