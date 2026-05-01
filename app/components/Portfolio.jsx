'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const PROJECTS = [
  { title: "Leather Craft", cat: "ECOMMERCE", desc: "Premium heritage leather display system engineered for luxury brands.", img: "/leather_craft_premium.png", tags: ["Next.js", "Tailwind", "Framer"] },
  { title: "GLOW", cat: "BRANDING", desc: "Luxury skincare digital store experience with seamless motion transitions.", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800", tags: ["Shopify", "Motion", "Liquid"] },
  { title: "RIZQ", cat: "FINTECH", desc: "High-end 3D brand identity and dashboard for RIZQ Technologies.", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800", tags: ["Three.js", "GSAP", "React"] },
  { title: "AETHER", cat: "AI ENGINE", desc: "Neural data visualization platform with real-time predictive analytics.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800", tags: ["React", "D3.js", "Python"] },
  { title: "VOID", cat: "WEB3", desc: "Decentralized spatial OS platform designed for the future of the web.", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800", tags: ["WebGL", "Rust", "Solidity"] }
];

export default function PortfolioHero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <main ref={container} className="relative bg-[#020202]">
      {/* CREATIVE DYNAMIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.15, 0.05]) }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,#facc15,transparent_50%)]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* REFINED HEADER */}
        <header className="mb-32 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-3 mb-8 justify-center md:justify-start"
          >
            <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_15px_#facc15]" />
            <span className="text-yellow-500 font-mono text-[10px] tracking-[0.6em] uppercase font-black">Archive 2026</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase"
          >
            OUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-800">PORTFOLIO.</span>
          </motion.h2>
        </header>

        {/* STACKING CARDS */}
        <div className="flex flex-col gap-0 relative">
          {PROJECTS.map((project, i) => {
            const targetScale = 1 - ((PROJECTS.length - i) * 0.04);
            return (
              <ProjectCard 
                key={i} 
                i={i} 
                {...project} 
                progress={scrollYProgress} 
                range={[i * 0.2, 1]} 
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
  const scale = useTransform(progress, range, [1, targetScale]);

  // Content Animation Variants
  const contentVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 md:top-10 px-2 md:px-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 28}px)` }} 
        className="relative h-[600px] md:h-[680px] w-full max-w-[1100px] bg-zinc-950/90 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 overflow-hidden backdrop-blur-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] origin-top group"
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* IMAGE SIDE: Balanced for visual pop */}
          <div className="relative w-full md:w-[55%] h-[35%] md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
            <Image 
              src={img} 
              alt={title} 
              fill 
              className="object-cover transition-all duration-[1.5s] group-hover:scale-110 group-hover:rotate-1 opacity-60 group-hover:opacity-100 saturate-[0.8] group-hover:saturate-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent md:bg-gradient-to-r" />
          </div>

          {/* CONTENT SIDE: High-End Animated Layout */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            className="w-full md:w-[45%] p-8 md:p-14 flex flex-col justify-between bg-zinc-950/50"
          >
            <div className="space-y-8">
              <motion.div variants={contentVariants} className="flex items-center gap-3">
                <span className="text-yellow-500 font-mono text-[10px] tracking-[0.4em] font-black uppercase">{cat}</span>
                <div className="h-[1px] flex-grow bg-white/10" />
              </motion.div>

              <motion.h3 variants={contentVariants} className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
                {title}
              </motion.h3>

              <motion.p variants={contentVariants} className="text-zinc-400 text-sm md:text-lg font-medium leading-relaxed max-w-[340px]">
                {desc}
              </motion.p>
            </div>

            <div className="space-y-8">
              <motion.div variants={contentVariants} className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 text-[9px] font-black uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={contentVariants}>
                <Link href="#contact" className="group/btn relative w-full flex items-center justify-center gap-4 py-5 bg-white text-black font-black rounded-2xl uppercase text-[11px] tracking-widest hover:bg-yellow-500 transition-all duration-500 active:scale-95 shadow-xl shadow-black/50">
                  <ExternalIcon /> 
                  <span>View Case Study</span>
                  <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover/btn:scale-105 transition-transform duration-500" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Global Polish Overlay */}
        <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-[2.5rem] md:rounded-[3.5rem] z-30" />
      </motion.div>
    </div>
  );
}