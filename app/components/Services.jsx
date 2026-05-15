"use client";

import React from "react";
import { Sparkles, Code2, BrainCircuit, PenTool, Zap, Smartphone, Monitor, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const SERVICES = [
  { num: "01", name: "Brand & UI Design", desc: "Bold identities & stunning interfaces that make your brand unforgettable.", features: ["Visual Strategy", "UX Research", "Design Systems"], img: "/services/insta.jfif", span: "md:col-span-4", icon: <Sparkles size={20} /> },
  { num: "02", name: "Web Development", desc: "High-performance websites built for speed, scale & conversions.", features: ["Next.js/React", "Custom API", "Performance SEO"], img: "/services/web.avif", span: "md:col-span-8", icon: <Code2 size={20} /> },
  { num: "03", name: "AI Solutions", desc: "Integrating neural networks and predictive models into modern workflows.", features: ["LLM Integration", "Auto-Workflows", "Custom Bots"], img: "/services/AI.webp", span: "md:col-span-7", icon: <BrainCircuit size={20} /> },
  { num: "04", name: "Graphic Designing", desc: "High-end visual storytelling through digital art and typography.", features: ["3D Assets", "Print Media", "Motion Graphics"], img: "/services/graphic.webp", span: "md:col-span-5", icon: <PenTool size={20} /> },
  { num: "05", name: "Digital Marketing", desc: "Performance-driven marketing that turns traffic into revenue.", features: ["Ad Management", "Growth Hacking", "Market Research"], img: "/services/digital.webp", span: "md:col-span-6", icon: <Zap size={20} /> },
  { num: "06", name: "App Development", desc: "Seamless mobile apps designed for engagement & performance.", features: ["iOS/Android", "React Native", "Smooth UX"], img: "/services/app.jpg", span: "md:col-span-6", icon: <Smartphone size={18} /> },
  { num: "07", name: "Custom Software", desc: "Tailored software built exactly for your business unique architectural problems.", features: ["ERP Systems", "Legacy Migrations", "Security Audits"], img: "/services/software.avif", span: "md:col-span-12", icon: <Monitor size={18} /> },
];

export default function OurServices() {
  return (
    <section className="relative bg-[#020202] py-20 md:py-28 px-4 sm:px-6 md:px-10 overflow-hidden" id="services">
      
      {/* HIGH-PERFORMANCE CREATIVE BACKGROUND MATRIX */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        
        {/* Structural Dot Matrix System */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Dynamic Static Geometric Node Triggers (Replaces Heavy Blur Objects) */}
        <div className="absolute top-[15%] left-[10%] w-[35vw] h-[35vw] bg-yellow-500/[0.03] rounded-full blur-[100px] transform-gpu" />
        <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] bg-gradient-to-tr from-amber-500/[0.02] to-yellow-600/[0.01] rounded-full blur-[120px] transform-gpu" />

        {/* Structural Industry Grid Alignment Overlay */}
        <div className="absolute inset-y-0 left-1/12 w-px bg-white/[0.01]" />
        <div className="absolute inset-y-0 right-1/12 w-px bg-yellow-500/[0.02]" />
        <div className="absolute h-px top-1/4 left-0 w-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
        <div className="absolute h-px bottom-1/4 left-0 w-full bg-gradient-to-r from-transparent via-yellow-500/[0.02] to-transparent" />

        {/* Creative Core Corner Accents (Billion-Dollar Aesthetic Tokens) */}
        <div className="absolute top-12 left-12 w-2 h-2 border-t border-l border-yellow-500/20" />
        <div className="absolute top-12 right-12 w-2 h-2 border-t border-r border-yellow-500/20" />
        <div className="absolute bottom-12 left-12 w-2 h-2 border-b border-l border-yellow-500/20" />
        <div className="absolute bottom-12 right-12 w-2 h-2 border-b border-r border-yellow-500/20" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <header className="mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-yellow-500 font-mono text-[10px] font-bold tracking-[0.4em] uppercase">What We Build</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-yellow-200 to-yellow-500 italic">SERVICES.</span>
          </h2>
        </header>

        {/* RESPONSIVE GRID BOX ARTIFACT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full">
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
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.03, duration: 0.4, ease: "easeOut" }}
      className={`${service.span} group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-950 min-h-[460px] sm:min-h-[440px] md:min-h-[450px] flex flex-col z-10 transition-all duration-500 hover:border-yellow-500/40 transform-gpu`}
    >
      {/* NEXT.JS NATIVE HIGH-PERFORMANCE GRAPHICS ENGINE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu">
        <Image 
          src={service.img} 
          alt={service.name} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-100 scale-100 group-hover:scale-105 group-hover:saturate-110 transition-all duration-[1s] ease-out will-change-transform" 
          priority={index < 2}
        />
        {/* Anti-Lag Balanced Flat Mask Shadow Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent pointer-events-none" />
        
        {/* Optimization Light Wave Effect */}
        <motion.div 
          animate={{ y: ["0%", "280%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-100%] left-0 w-full h-[25%] bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent z-10 pointer-events-none transform-gpu"
        />
      </div>

      {/* CORE CONTENT OVERLAY CONTAINER */}
      <div className="relative z-20 p-6 sm:p-8 md:p-10 flex flex-col h-full justify-between flex-1 pointer-events-none">
        
        {/* CARD TOP MAIN DETAILS */}
        <div className="w-full">
          <div className="flex justify-between items-start mb-8 md:mb-12">
            {/* Replaced Heavy Backdrop-Blur with Solid Deep Base for Framerate Locks */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#0a0a0a]/95 border border-white/10 flex items-center justify-center text-yellow-500 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl">
              {service.icon}
            </div>
            <span className="text-white/10 font-mono text-3xl md:text-5xl font-black tracking-tighter">
              0{index + 1}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 tracking-tighter uppercase group-hover:text-yellow-400 transition-colors duration-300">
            {service.name}
          </h3>
          <p className="text-zinc-200 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
            {service.desc}
          </p>
        </div>

        {/* CARD BOTTOM INTERACTIVE INTERFACE */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full pointer-events-auto">
          
          {/* TOKENS GENERATION BLUEPRINT */}
          <div className="flex flex-wrap items-center gap-1.5 opacity-90 max-w-xs sm:max-w-none">
            {service.features.map((feat, idx) => (
              <span 
                key={idx} 
                className="bg-[#0a0a0a]/90 border border-white/5 text-zinc-300 font-mono text-[8px] md:text-[9px] px-2.5 py-1 rounded uppercase tracking-wider group-hover:border-yellow-500/20 group-hover:text-white transition-colors"
              >
                {feat}
              </span>
            ))}
          </div>
          
          {/* SECURE BUTTON ENGINE */}
          <Link 
            href="#contact" 
            className="group/link flex items-center justify-center sm:justify-start gap-2 bg-white/5 sm:bg-transparent border border-white/10 sm:border-none rounded-xl py-2 px-4 sm:p-0 transition-colors duration-300 hover:bg-yellow-500/10 sm:hover:bg-transparent"
          >
            <span className="text-[10px] font-mono font-bold text-zinc-300 tracking-wider uppercase group-hover/link:text-yellow-400 transition-colors">
              Talk with us
            </span>
            <div className="w-6 h-6 rounded-full bg-yellow-500 text-black flex items-center justify-center transform group-hover/link:rotate-45 transition-transform duration-300 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <ArrowUpRight size={12} strokeWidth={3} />
            </div>
          </Link>

        </div>
      </div>
    </motion.div>
  );
}