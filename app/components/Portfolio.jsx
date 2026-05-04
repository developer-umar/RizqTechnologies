'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10M7 7h10v10"/></svg>
);

const projects = [
  { id: "01", title: "E-commerce", client: "Leather Hub.", year: "2026", cat: "Leather Goods", tags: ["Next.js", "GSAP"], img: "/portfolio/Leather_hub.png" },
  { id: "02", title: "WEB ", client: "Saba export", year: "2025", cat: "Branding", tags: ["HTML", "CSS"], img: "/portfolio/saba_exports.png" },
  { id: "03", title: "Web ", client: "Ace Exports", year: "2026", cat: "Digital Identity", tags: ["Three.js", "Node"], img: "/portfolio/ace_exports.png" },
  { id: "04", title: "UI UX ", client: "Habib Fashion", year: "2024", cat: "Visualization", tags: ["React", "Python"], img: "/portfolio/Habib_Fashion.png" },
  { id: "05", title: "Branding ", client: "Zain International", year: "2024", cat: "Product display", tags: ["Next.js", "node.js"], img: "/portfolio/Zain_international.png" },
  { id: "06", title: "WEB ", client: "9K Nanotech", year: "2024", cat: "Brand", tags: ["React", "nodejs"], img: "/portfolio/9k.png" },
  { id: "07", title: "WEB ", client: "Calico Industries", year: "2023", cat: "Brand", tags: ["React", "nodejs"], img: "/portfolio/calico_industries.png" },
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
            <span className="text-yellow-500 font-mono text-xs tracking-[0.3em] uppercase">Featured Work</span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              CRAFTING <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">BRANDS.</span>
            </h2>
          </motion.div>
        </div>

        {/* INFINITE SLIDER */}
        <div className="flex overflow-hidden py-10">
          <motion.div 
            className="flex gap-6 md:gap-10 px-5 will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 60 } }} 
          >
            {duplicatedProjects.map((project, index) => (
              <div 
                key={index}
                className="group relative shrink-0 w-[85vw] md:w-[40vw] aspect-[16/11] rounded-[24px] md:rounded-[40px] overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl cursor-pointer"
              >
                {/* PROJECT IMAGE - High contrast & Pop */}
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-70 scale-105 group-hover:scale-100 group-hover:opacity-100 group-hover:saturate-125 transition-all duration-700 ease-out"
                />

                {/* DYNAMIC SHINE OVERLAY */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-white via-transparent to-transparent transition-opacity duration-500" />
                
                {/* BOTTOM GRADIENT - Lighter than before */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* CONTENT */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-20">
                  <div className="flex justify-between items-start">
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                      <p className="text-yellow-400 font-bold text-xs tracking-wider uppercase">
                         {project.client}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                      <ExternalIcon />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3">
                       <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">{project.cat}</span>
                       <div className="h-px w-8 bg-yellow-500/50" />
                       <span className="text-[10px] font-mono text-zinc-500 uppercase">{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-12 px-6 md:px-20 flex justify-between items-center">
        <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-zinc-500 tracking-[0.5em] uppercase">Elite Dev Archive</span>
            <div className="h-px w-20 bg-gradient-to-r from-yellow-500/50 to-transparent" />
        </div>
        <div className="hidden md:flex gap-4">
           {['Optimized', 'Responsive', 'High-Perf'].map(tag => (
             <span key={tag} className="text-[9px] border border-white/10 px-3 py-1 rounded-full text-zinc-400 uppercase font-mono">{tag}</span>
           ))}
        </div>
      </div>
    </section>
  );
}