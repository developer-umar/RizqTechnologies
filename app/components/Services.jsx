"use client";

import React from "react";
import { Zap, BrainCircuit, Monitor, Smartphone, PenTool, Sparkles, Code2, ArrowUpRight, ShieldCheck, Rocket, Search, Cpu } from "lucide-react";
import Link from "next/link";
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

const WHY_US_CARDS = [
  { title: "High Speed", desc: "Websites that load in under 2 seconds.", icon: <Rocket size={22} /> },
  { title: "SEO Ready", desc: "Built to rank on Google from day one.", icon: <Search size={22} /> },
  { title: "Top Security", desc: "Enterprise-grade protection for your data.", icon: <ShieldCheck size={22} /> },
  { title: "Easy Growth", desc: "Scalable tech that grows with your team.", icon: <Cpu size={22} /> },
];

export default function ServicesBentoMagic() {
  return (
    <section className="relative min-h-screen bg-[#020202] py-20 px-4 md:px-10 overflow-hidden" id="services">
      
      {/* MESH BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#facc1505_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ==================== 1. SERVICES HEADER ==================== */}
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_#facc15]" />
            <span className="text-yellow-500 font-mono text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-500">Professional Solutions</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 italic font-light">SERVICES.</span>
          </h2>
        </header>

        {/* ==================== 2. SERVICES BENTO GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-32">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* ==================== 3. WHY RIZQ: COMPACT HORIZONTAL ==================== */}
        <div className="border-t border-white/5 pt-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl text-left">
              <span className="text-yellow-500 font-mono text-[10px] font-bold tracking-[0.5em] uppercase">The Advantage</span>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mt-2">
                WHY CHOOSE <span className="text-zinc-800">RIZQ?</span>
              </h3>
            </div>
            <p className="text-zinc-500 text-sm md:text-base max-w-sm font-medium leading-relaxed">
              We deliver elite performance and growth-focused technology for modern Indian brands.
            </p>
          </div>

          {/* COMPACT ADVANTAGE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_US_CARDS.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 rounded-[2.5rem] bg-zinc-950/50 border border-white/5 hover:border-yellow-500/20 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/5 flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2 italic leading-none">{item.title}</h4>
                  <p className="text-zinc-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                </div>
                {/* Subtle bottom glow */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`${service.span} group relative rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950 min-h-[380px] flex flex-col z-10 transition-all duration-500 hover:border-yellow-500/30`}
    >
      {/* Optimized Image Loading */}
      <div className="absolute inset-0 z-0">
        <img src={service.img} alt={service.name} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-110 saturate-0 group-hover:saturate-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent z-10" />
      </div>

      <div className="relative z-20 p-8 flex flex-col h-full justify-between">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
              {service.icon}
            </div>
            <span className="text-white/5 font-black text-5xl tracking-tighter italic">0{index + 1}</span>
          </div>

          <div>
            <h3 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase leading-none group-hover:text-yellow-400 transition-colors">
              {service.name}
            </h3>
            <p className="text-zinc-500 text-xs font-semibold leading-relaxed max-w-[240px]">
              {service.desc}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <div className="flex flex-wrap gap-3">
                {service.features.slice(0, 2).map((feat, idx) => (
                    <span key={idx} className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-600 group-hover:text-yellow-500/50 transition-colors">
                      {feat}
                    </span>
                ))}
            </div>
            <ArrowUpRight size={18} className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.div>
  );
}