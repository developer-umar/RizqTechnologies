'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, BrainCircuit, Monitor, Smartphone, PenTool, Sparkles, Code2, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { num: "01", name: "Brand & UI Design", desc: "Bold identities & stunning interfaces that make your brand unforgettable.", features: ["Visual Strategy", "Logo Systems", "UX Research", "Design Systems"], img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800", span: "md:col-span-4", icon: <Sparkles size={22} /> },
  { num: "02", name: "Web Development", desc: "High-performance websites built for speed, scale & conversions.", features: ["Next.js/React", "Custom API", "Performance SEO", "Cloud Scale"], img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800", span: "md:col-span-8", icon: <Code2 size={22} /> },
  { num: "03", name: "AI Solutions", desc: "Integrating neural networks and predictive models into modern workflows.", features: ["LLM Integration", "Auto-Workflows", "Data Analysis", "Custom Bots"], img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800", span: "md:col-span-7", icon: <BrainCircuit size={22} /> },
  { num: "04", name: "Graphic Designing", desc: "High-end visual storytelling through digital art and typography.", features: ["3D Assets", "Print Media", "Motion Graphics", "Art Direction"], img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800", span: "md:col-span-5", icon: <PenTool size={22} /> },
  { num: "05", name: "Digital Marketing", desc: "Performance-driven marketing that turns traffic into revenue.", features: ["Ad Management", "Growth Hacking", "Market Research", "Funnel Ops"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", span: "md:col-span-6", icon: <Zap size={22} /> },
  { num: "06", name: "App Development", desc: "Seamless mobile apps designed for engagement & performance.", features: ["iOS/Android", "React Native", "Smooth UX", "Store Ready"], img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800", span: "md:col-span-6", icon: <Smartphone size={22} /> },
  { num: "07", name: "Custom Software", desc: "Tailored software built exactly for your business unique architectural problems.", features: ["ERP Systems", "Legacy Migrations", "Security Audits", "Database Design"], img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800", span: "md:col-span-12", icon: <Monitor size={22} /> },
];

export default function ServicesBentoMagic() {
  return (
    <section className="relative min-h-screen bg-[#030303] py-20 px-4 md:px-10 overflow-hidden" id="services">
      
      {/* CREATIVE BACKGROUND - Animated Mesh Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[0%] w-[600px] h-[600px] bg-yellow-600/5 blur-[150px] rounded-full" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1.5 w-10 bg-yellow-500 rounded-full" />
            <span className="text-yellow-500 font-mono text-[10px] font-bold tracking-[0.5em] uppercase">Expertise</span>
          </div>
          
          <h2 className="text-6xl md:text-[8rem] font-black text-white leading-[0.85] tracking-tighter uppercase">
            SOLVING <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-100">COMPLEXITY.</span>
          </h2>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
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
    <div
      className={`${service.span} group relative rounded-[32px] overflow-hidden border border-white/5 bg-[#0a0a0a] min-h-[420px] flex flex-col z-10 transition-all duration-500 hover:border-yellow-500/30 will-change-transform`}
    >
      {/* Background Image - Optimized */}
      <div className="absolute inset-0 z-0">
        <img
          src={service.img}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />
      </div>

      <div className="relative z-20 p-8 flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500 shadow-xl">
              {service.icon}
            </div>
            <span className="text-zinc-700 font-black text-3xl tracking-tighter group-hover:text-yellow-500/20 transition-colors">
              {service.num}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-white mt-10 mb-4 tracking-tighter group-hover:text-yellow-400 transition-colors">
            {service.name}
          </h3>
          <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-[280px]">
            {service.desc}
          </p>
        </div>

        {/* Features - Grid Optimized */}
        <div className="mt-8">
           <div className="flex flex-wrap gap-2 mb-8">
              {service.features.map((feat, idx) => (
                <span 
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-300 text-[9px] font-bold uppercase tracking-wider backdrop-blur-md"
                >
                  <div className="w-1 h-1 bg-yellow-500 rounded-full" />
                  {feat}
                </span>
              ))}
           </div>
           
           <div className="flex items-center justify-between pt-5 border-t border-white/5">
              <Link href="#contact" className="group/link flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">
                 Let's Talk
                 <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
              <div className="text-[10px] font-mono text-zinc-800 uppercase group-hover:text-yellow-500/40 transition-colors">
                Available
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}