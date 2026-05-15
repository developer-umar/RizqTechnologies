'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17l10-10M7 7h10v10"/>
  </svg>
);

const projects = [
  { id: "01", title: "E-commerce", client: "Leather Hub.", year: "2026", cat: "Leather Goods", tags: ["Next.js", "GSAP"], img: "/portfolio/Leather_hub.png", link: "https://leather-hub.netlify.app/" },
  { id: "02", title: "WEB ", client: "Saba export", year: "2026", cat: "Branding", tags: ["HTML", "CSS"], img: "/portfolio/saba_exports.png", link: "https://www.groupsaba.com/index.html" },
  { id: "03", title: "Web ", client: "Ace Exports", year: "2026", cat: "Digital Identity", tags: ["Three.js", "Node"], img: "/portfolio/ace_exports.png", link: "https://www.ace-shoes.com/#" },
  { id: "04", title: "UI UX ", client: "Habib Fashion", year: "2026", cat: "Visualization", tags: ["React", "Python"], img: "/portfolio/Habib_Fashion.png", link: "https://habibgroup.co.in/" },
  { id: "05", title: "Branding ", client: "Zain International", year: "2026", cat: "Product display", tags: ["Next.js", "node.js"], img: "/portfolio/Zain_international.png", link: "https://zainintl.com/" },
  { id: "06", title: "WEB ", client: "9K Nanotech", year: "2026", cat: "Brand", tags: ["React", "nodejs"], img: "/portfolio/9k.png", link: "https://9knanotech.com/" },
  { id: "07", title: "WEB ", client: "Calico Industries", year: "2026", cat: "Brand", tags: ["React", "nodejs"], img: "/portfolio/calico_industries.png", link: "https://calicoindia.com/" },
];

export default function EliteSliderPortfolio() {
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section id="portfolio" className="relative bg-[#050505] py-16 md:py-24 overflow-hidden min-h-screen flex flex-col justify-center select-none">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full">
        
        {/* PREMIUM UPGRADED HEADER */}
        <div className="px-6 md:px-20 mb-16 md:mb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/5 pb-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-yellow-500 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">Selected Portfolio</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
                DIGITAL <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-yellow-200 to-yellow-600">PRODUCTION.</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 lg:pl-6 flex flex-col justify-end gap-6"
            >
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed border-l-2 border-yellow-500/30 pl-4">
                Real projects for real businesses. Each case study demonstrates our commitment to performance, premium design, and measurable results that drive growth.
              </p>
              
              {/* REALTIME SYSTEM STATS METRIC */}
              <div className="flex items-center gap-6 pt-2 font-mono text-[11px] text-zinc-500">
                <div>
                  <span className="text-zinc-300 font-bold block text-sm">07+</span>
                  ENGINEERED
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div>
                  <span className="text-zinc-300 font-bold block text-sm">60FPS</span>
                  ANIMATION
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div>
                  <span className="text-yellow-500 font-bold block text-sm">100%</span>
                  RESPONSIVE
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* INFINITE SLIDER CONTAINER */}
        <div className="flex overflow-hidden py-4 md:py-10 w-full unique-slider-boundary">
          <motion.div 
            className="flex gap-4 md:gap-8 px-4 will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 38, 
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 100 } }} 
          >
            {duplicatedProjects.map((project, index) => (
              <Link 
                key={index} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="group relative shrink-0 w-[82vw] sm:w-[62vw] md:w-[40vw] aspect-[16/11] rounded-[24px] md:rounded-[36px] overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl transition-all duration-500 hover:border-yellow-500/40"
              >
                {/* PROJECT IMAGE - Pure Colorful Presentation */}
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 82vw, 40vw"
                  className="object-cover opacity-100 scale-100 group-hover:scale-105 group-hover:saturate-110 transition-all duration-1000 ease-out pointer-events-none"
                  priority={index < 4}
                />

                {/* LIGHT DYNAMIC GLINT SHINE */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-white/10 via-transparent to-transparent transition-opacity duration-700 pointer-events-none" />
                
                {/* LINEAR GRADIENT BACKGROUND MATRIX FOR GRAPHICS RECOGNITION */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* INTERACTIVE TEXT AND CONTROLS GRAPHICS OVERLAY */}
                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-between z-20 pointer-events-none">
                  
                  {/* CARD HEADER ROW */}
                  <div className="flex justify-between items-center w-full">
                    <div className="bg-black/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full transform transition-transform duration-500 group-hover:translate-x-1">
                      <p className="text-yellow-400 font-bold text-[9px] md:text-xs tracking-widest uppercase">
                         {project.client}
                      </p>
                    </div>
                    
                    {/* ACCELERATED SAFELY STRUCTURED RADIAL ICON */}
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white text-black flex items-center justify-center transition-all duration-500 shadow-[0_0_25px_rgba(255,255,255,0.4)] transform opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      <ExternalIcon />
                    </div>
                  </div>

                  {/* CARD FOOTER ROW */}
                  <div className="transform transition-transform duration-500 w-full">
                    
                    {/* TECHNOLOGY TOKENS INTEGRATION */}
                    <div className="flex items-center gap-1.5 mb-2 md:mb-3 overflow-hidden opacity-90">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-white/10 backdrop-blur-md border border-white/5 text-white font-mono text-[8px] md:text-[9px] px-2 py-0.5 rounded uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CORE PRODUCT HEADING TITLE */}
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-1.5 group-hover:text-yellow-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* METADATA BOUNDS BLOCK */}
                    <div className="flex items-center gap-2 md:gap-3">
                       <span className="text-[9px] md:text-[10px] font-mono text-zinc-300 uppercase tracking-widest">{project.cat}</span>
                       <div className="h-px w-5 md:w-8 bg-yellow-500/40" />
                       <span className="text-[9px] md:text-[10px] font-mono text-zinc-400 uppercase">{project.year}</span>
                    </div>

                  </div>

                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* SYSTEM FOOTER GRID BLOCK */}
      <div className="mt-8 md:mt-16 px-6 md:px-20 flex justify-between items-center w-full border-t border-white/5 pt-8">
        <div className="flex items-center gap-4">
            <span className="text-[9px] md:text-[10px] font-mono text-zinc-500 tracking-[0.5em] uppercase">Rizq Technologies</span>
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-yellow-500/50 to-transparent" />
        </div>
        <div className="hidden sm:flex gap-3">
           {['Ultra-Low Weight', 'SEO Optimized', '60FPS Motion'].map(tag => (
             <span key={tag} className="text-[9px] border border-white/5 px-3 py-1 rounded-full text-zinc-500 uppercase font-mono tracking-tighter">{tag}</span>
           ))}
        </div>
      </div>
    </section>
  );
}