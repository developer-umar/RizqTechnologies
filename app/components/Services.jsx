"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, BrainCircuit, Monitor, Smartphone, PenTool, Sparkles, Code2 } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { num: "01", tag: "Creative", name: "Brand & UI Design", desc: "Bold identities & stunning interfaces that make your brand unforgettable.", img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200", span: "md:col-span-4", icon: <Sparkles size={24} /> },
  { num: "02", tag: "Tech", name: "Web Development", desc: "High-performance websites built for speed, scale & conversions.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200", span: "md:col-span-8", icon: <Code2 size={24} /> },
  { num: "03", tag: "AI/ML", name: "AI Solutions", desc: "Integrating neural networks and predictive models into modern workflows.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200", span: "md:col-span-7", icon: <BrainCircuit size={24} /> },
  { num: "04", tag: "Art", name: "Graphic Designing", desc: "High-end visual storytelling through digital art and typography.", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200", span: "md:col-span-5", icon: <PenTool size={24} /> },
  { num: "05", tag: "Growth", name: "Digital Marketing", desc: "Performance-driven marketing that turns traffic into revenue.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200", span: "md:col-span-6", icon: <Zap size={24} /> },
  { num: "06", tag: "Mobile", name: "App Development", desc: "Seamless mobile apps designed for engagement & performance.", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200", span: "md:col-span-6", icon: <Smartphone size={24} /> },
  { num: "07", tag: "Systems", name: "Custom Software", desc: "Tailored software built exactly for your business unique architectural problems.", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200", span: "md:col-span-12", icon: <Monitor size={24} /> },
];

export default function ServicesBentoMagic() {
  return (
    <section className="relative min-h-screen bg-[#050505] py-24 px-4 md:px-10 overflow-hidden" id="services">
      
      {/* 1. VISIBLE YELLOW GRID - Fixed "Too Dark" feel */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #facc15 1px, transparent 1px), linear-gradient(to bottom, #facc15 1px, transparent 1px)`,
            backgroundSize: '70px 70px',
          }} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_85%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-3 w-3 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_15px_#facc15]" />
            <span className="text-yellow-500 font-mono text-xs font-black tracking-[0.5em] uppercase">Agency Capabilities</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter"
          >
            OUR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-600 italic">SERVICES.</span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`${service.span} group relative rounded-[3rem] p-[2px] overflow-hidden bg-zinc-900/50`}
    >
      {/* 2. THE INFITE LASER BORDER EFFECT - Built with pure Tailwind to avoid build errors */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
        <div className="absolute inset-[-200%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,#facc15_360deg)]" />
      </div>

      <div className="relative z-10 h-full w-full rounded-[2.95rem] bg-[#0a0a0a] flex flex-col overflow-hidden">
        
        {/* 3. BALANCED IMAGE OVERLAY - Vivid and Colorful */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.img}
            alt={service.name}
            className="w-full h-full object-cover opacity-[0.35] md:opacity-[0.15] grayscale-0 md:grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-50 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
        </div>

        <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between h-full min-h-[420px]">
          <div>
            <div className="flex justify-between items-center mb-12">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500 shadow-[0_0_20px_rgba(250,204,21,0.3)] flex items-center justify-center text-black">
                {service.icon}
              </div>
              <span className="text-zinc-800 font-mono text-xl font-bold tracking-tighter">{service.num}</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-6 group-hover:text-yellow-400 transition-colors duration-300">
              {service.name}
            </h3>

            <p className="text-zinc-500 text-sm md:text-lg font-bold leading-relaxed max-w-[340px] group-hover:text-zinc-200 transition-colors">
              {service.desc}
            </p>
          </div>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5">
            <Link
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-yellow-500 hover:text-black transition-all duration-500"
            >
              Start Project
            </Link>
            
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:border-yellow-500 group-hover:text-yellow-500 group-hover:rotate-45 transition-all duration-500 shadow-inner">
              <ArrowUpRight size={32} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}