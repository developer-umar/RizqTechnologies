'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10M7 7h10v10"/></svg>
);

const projects = [
  { id: "01", title: "E-commerce", client: "Leather Hub.", year: "2026", cat: "Leather Goods", tags: ["Next.js", "GSAP"], img: "/portfolio/Leather_hub.png", link: "https://leather-hub.netlify.app/" },
  { id: "02", title: "WEB ", client: "Saba export", year: "2025", cat: "Branding", tags: ["HTML", "CSS"], img: "/portfolio/saba_exports.png", link: "https://www.groupsaba.com/index.html" },
  { id: "03", title: "Web ", client: "Ace Exports", year: "2026", cat: "Digital Identity", tags: ["Three.js", "Node"], img: "/portfolio/ace_exports.png", link: "https://www.ace-shoes.com/#" },
  { id: "04", title: "UI UX ", client: "Habib Fashion", year: "2024", cat: "Visualization", tags: ["React", "Python"], img: "/portfolio/Habib_Fashion.png", link: "https://habibgroup.co.in/" },
  { id: "05", title: "Branding ", client: "Zain International", year: "2024", cat: "Product display", tags: ["Next.js", "node.js"], img: "/portfolio/Zain_international.png", link: "https://zainintl.com/" },
  { id: "06", title: "WEB ", client: "9K Nanotech", year: "2024", cat: "Brand", tags: ["React", "nodejs"], img: "/portfolio/9k.png", link: "https://9knanotech.com/" },
  { id: "07", title: "WEB ", client: "Calico Industries", year: "2023", cat: "Brand", tags: ["React", "nodejs"], img: "/portfolio/calico_industries.png", link: "https://calicoindia.com/" },
];

export default function EliteSliderPortfolio() {
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section id="portfolio" className="relative bg-[#050505] py-20 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="px-6 md:px-20 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <span className="text-yellow-500 font-mono text-xs tracking-[0.3em] uppercase">Selected Portfolio</span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              DIGITAL <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">PRODUCTION.</span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg max-w-xl mt-4 leading-relaxed">
              Real projects for real businesses. Each case study demonstrates our commitment to performance, premium design, and measurable results that drive growth.
            </p>
          </motion.div>
        </div>

        {/* INFINITE SLIDER */}
        <div className="flex overflow-hidden py-10">
          <motion.div 
            className="flex gap-6 md:gap-10 px-5 will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30, // Optimized speed for readability
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 80 } }} 
          >
            {duplicatedProjects.map((project, index) => (
              <Link 
                key={index} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="group relative shrink-0 w-[85vw] md:w-[42vw] aspect-[16/11] rounded-[24px] md:rounded-[40px] overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl transition-all duration-500 hover:border-yellow-500/30"
              >
                {/* PROJECT IMAGE - High contrast & Pop */}
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 scale-105 group-hover:scale-100 group-hover:opacity-100 group-hover:saturate-125 transition-all duration-1000 ease-out"
                />

                {/* DYNAMIC SHINE OVERLAY */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr from-white via-transparent to-transparent transition-opacity duration-700" />
                
                {/* BOTTOM GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* CONTENT */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-20">
                  <div className="flex justify-between items-start">
                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-500">
                      <p className="text-yellow-400 font-bold text-[10px] md:text-xs tracking-widest uppercase">
                         {project.client}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      <ExternalIcon />
                    </div>
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3">
                       <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">{project.cat}</span>
                       <div className="h-px w-8 bg-yellow-500/50" />
                       <span className="text-[10px] font-mono text-zinc-500 uppercase">{project.year}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-12 px-6 md:px-20 flex justify-between items-center">
        <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-zinc-500 tracking-[0.5em] uppercase">Rizq Technologies</span>
            <div className="h-px w-20 bg-gradient-to-r from-yellow-500/50 to-transparent" />
        </div>
        <div className="hidden md:flex gap-4">
           {['Ultra-Low Weight', 'SEO Optimized', '60FPS Motion'].map(tag => (
             <span key={tag} className="text-[9px] border border-white/5 px-3 py-1 rounded-full text-zinc-500 uppercase font-mono tracking-tighter">{tag}</span>
           ))}
        </div>
      </div>

      {/* ==================== PORTFOLIO STATS ==================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 mt-32 lg:mt-48">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { metric: "95+", label: "Lighthouse Score", desc: "Average performance across all projects" },
            { metric: "7+", label: "Live Projects", desc: "Delivered for clients across industries" },
            { metric: "40%", label: "Avg. Conversion Lift", desc: "After redesign and optimization" },
            { metric: "<2s", label: "Load Time", desc: "Average page load across portfolio" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <p className="text-4xl md:text-5xl font-black text-yellow-400 tracking-tighter mb-1">{item.metric}</p>
              <p className="text-white font-bold text-xs uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* TECH STACK */}
        <div className="py-12 px-8 rounded-2xl bg-white/[0.01] border border-white/5">
          <div className="text-center mb-8">
            <span className="text-yellow-500 font-mono text-[10px] tracking-[4px] uppercase">Technology Stack</span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase mt-3">
              Tools We <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">Use</span>
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "GSAP", "Figma", "Three.js", "PostgreSQL", "MongoDB", "Vercel", "AWS"].map((tech, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-zinc-300 text-xs font-medium hover:border-yellow-500/30 hover:text-yellow-400 transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}