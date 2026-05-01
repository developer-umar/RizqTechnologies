'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const PROJECTS = [
  { title: "Leather Craft", cat: "ECOMMERCE", desc: "Premium heritage leather display system.", img: "/leather_craft_premium.png", tags: ["Next.js", "Tailwind"] },
  { title: "GLOW", cat: "BRANDING", desc: "Luxury skincare digital store experience.", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800", tags: ["Shopify", "Motion"] },
  { title: "RIZQ", cat: "FINTECH", desc: "3D brand identity for high-scale tech.", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800", tags: ["Three.js", "GSAP"] },
  { title: "AETHER", cat: "AI ENGINE", desc: "Neural data visualization with analytics.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800", tags: ["React", "D3.js"] },
  { title: "VOID", cat: "WEB3", desc: "Decentralized spatial OS platform.", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800", tags: ["WebGL", "Rust"] }
];

export default function PortfolioHero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <main ref={container} className="relative bg-[#020202]">
      {/* 1. CREATIVE BACKGROUND: Aura & Flare */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-yellow-600/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.02)_0%,transparent_70%)]" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* HEADER: Aligned tightly with the stack */}
        <div className="mb-20 text-center md:text-left">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <span className="h-[1px] w-12 bg-yellow-500" />
            <span className="text-yellow-500 font-mono text-[10px] tracking-[0.5em] uppercase">Showcase</span>
          </motion.div>
          <h2 className="text-6xl md:text-[8rem] font-black text-white leading-[0.85] tracking-tighter uppercase">
            SELECTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 italic">WORKS.</span>
          </h2>
        </div>

        {/* 2. MOBILE & DESKTOP STACKING LOGIC */}
        <div className="flex flex-col gap-0 relative">
          {PROJECTS.map((project, i) => {
            const targetScale = 1 - ( (PROJECTS.length - i) * 0.05);
            return (
              <ProjectCard 
                key={i} 
                i={i} 
                {...project} 
                progress={scrollYProgress} 
                range={[i * 0.25, 1]} 
                targetScale={targetScale}
              />
            )
          })}
        </div>
      </section>
    </main>
  );
}

const ProjectCard = ({ i, title, cat, desc, img, tags, progress, range, targetScale }) => {
  const container = useRef(null);
  // Sticky scroll effect for stacking
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 md:top-12">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="relative h-[550px] md:h-[650px] w-full max-w-[1000px] bg-zinc-900/80 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 overflow-hidden backdrop-blur-3xl shadow-2xl origin-top"
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* IMAGE SIDE */}
          <div className="relative w-full md:w-[60%] h-[40%] md:h-full overflow-hidden">
            <Image 
              src={img} 
              alt={title} 
              fill 
              className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 via-transparent to-transparent hidden md:block" />
          </div>

          {/* CONTENT SIDE */}
          <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-between bg-zinc-900/40 relative z-20">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-2 w-2 rounded-full bg-yellow-500 shadow-[0_0_10px_#facc15]" />
                <span className="text-yellow-500 font-mono text-[10px] tracking-widest uppercase">{cat}</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6 uppercase">{title}</h3>
              <p className="text-zinc-400 text-sm md:text-lg font-medium leading-relaxed">{desc}</p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="#contact" className="group/btn relative w-full flex items-center justify-center gap-3 py-5 bg-white text-black font-black rounded-2xl uppercase text-[11px] hover:bg-yellow-500 transition-colors">
                <ExternalIcon /> 
                <span>Explore Experience</span>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover/btn:ring-yellow-500/50 transition-all" />
              </Link>
            </div>
          </div>
        </div>

        {/* Glossy Overlay detail */}
        <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-[2.5rem] md:rounded-[4rem] z-30" />
      </motion.div>
    </div>
  );
}