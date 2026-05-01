'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const PROJECTS = [
  { title: "Leather Craft", cat: "ECOMMERCE", desc: "Premium heritage leather display system engineered for luxury brands.", img: "/leather_craft_premium.png", tags: ["Next.js", "Tailwind"] },
  { title: "GLOW", cat: "BRANDING", desc: "Luxury skincare digital store experience with seamless motion transitions.", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800", tags: ["Shopify", "Motion"] },
  { title: "RIZQ", cat: "FINTECH", desc: "High-end 3D brand identity and dashboard for RIZQ Technologies.", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800", tags: ["Three.js", "GSAP"] },
  { title: "AETHER", cat: "AI ENGINE", desc: "Neural data visualization platform with real-time predictive analytics.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800", tags: ["React", "D3.js"] },
  { title: "VOID", cat: "WEB3", desc: "Decentralized spatial OS platform designed for the future of the web.", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800", tags: ["WebGL", "Rust"] }
];

export default function PortfolioHero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <main ref={container} className="relative bg-[#020202]">
      {/* PERFORMANCE FIX: Simple static glow instead of heavy moving radial */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="sticky top-0 h-screen w-full bg-[radial-gradient(circle_at_50%_20%,#facc150a,transparent_70%)]" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <header className="mb-24 text-center md:text-left">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 shadow-[0_0_10px_#facc15]" />
            <span className="text-yellow-500 font-mono text-[9px] tracking-[0.5em] uppercase font-black">Curated Works</span>
          </motion.div>
          
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-[8.5rem] font-black text-white leading-[0.85] tracking-tighter uppercase">
            OUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-700 italic">PORTFOLIO.</span>
          </motion.h2>
        </header>

        <div className="flex flex-col gap-0 relative">
          {PROJECTS.map((project, i) => {
            const targetScale = 1 - ((PROJECTS.length - i) * 0.04);
            return (
              <ProjectCard key={i} i={i} {...project} progress={scrollYProgress} range={[i * 0.2, 1]} targetScale={targetScale} />
            )
          })}
        </div>
      </section>
    </main>
  );
}

const ProjectCard = ({ i, title, cat, desc, img, tags, progress, range, targetScale }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 md:top-6">
      <motion.div 
        style={{ 
          scale, 
          // MOBILE STACKING FIX: Smaller top offset for tighter stack
          top: `calc(-2vh + ${i * 12}px)`,
          willChange: "transform" // PERFORMANCE FIX: Hardware Acceleration
        }} 
        className="relative h-[520px] md:h-[580px] w-full max-w-[1000px] bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,1)] origin-top group"
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* IMAGE SIDE */}
          <div className="relative w-full md:w-[50%] h-[40%] md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
            <Image 
              src={img} 
              alt={title} 
              fill 
              priority={i < 2} // PERFORMANCE FIX: Load first 2 images instantly
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r" />
          </div>

          {/* CONTENT SIDE */}
          <div className="w-full md:w-[50%] p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-yellow-500 font-mono text-[9px] tracking-[0.3em] font-black uppercase">{cat}</span>
                <div className="h-[1px] flex-grow bg-white/5" />
              </div>

              <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
                {title}
              </h3>

              <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-[300px]">
                {desc}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-zinc-900 border border-white/5 text-zinc-400 text-[8px] font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>

              <Link href="#contact" className="relative w-full flex items-center justify-center gap-3 py-4 bg-white text-black font-black rounded-xl uppercase text-[10px] tracking-widest hover:bg-yellow-500 transition-colors">
                <ExternalIcon /> 
                <span>Explore Work</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}