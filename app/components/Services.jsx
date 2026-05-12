

"use client";

import React from "react";
import { Sparkles, Code2, BrainCircuit, PenTool, Zap, Smartphone, Monitor, ArrowUpRight } from "lucide-react";
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
];;

export default function OurServices() {
  return (
    <section className="relative bg-[#020202] py-24 px-4 md:px-10 overflow-hidden" id="services">
      {/* Subtle Yellow Ambient Light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span className="text-yellow-500 font-mono text-[10px] font-bold tracking-[0.4em] uppercase">What We Build</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 italic">SERVICES.</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`${service.span} group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-950 min-h-[420px] flex flex-col z-10 transition-all duration-700 hover:border-yellow-500/30`}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={service.img} 
          alt={service.name} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-[1.5s] group-hover:scale-105 saturate-[0.8] group-hover:saturate-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/20 to-transparent z-10" />
        
        {/* Professional Scan Effect */}
        <motion.div 
          animate={{ y: ["0%", "250%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-100%] left-0 w-full h-[40%] bg-gradient-to-b from-transparent via-yellow-500/10 to-transparent z-20 pointer-events-none"
        />
      </div>

      <div className="relative z-30 p-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-start mb-10">
            <div className="w-14 h-14 rounded-2xl bg-black/60 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
              {service.icon}
            </div>
            <span className="text-white/5 font-black text-6xl tracking-tighter italic leading-none group-hover:text-yellow-500/10 transition-colors">0{index + 1}</span>
          </div>
          <h3 className="text-4xl font-black text-white mb-3 tracking-tighter uppercase group-hover:text-yellow-400 transition-colors">
            {service.name}
          </h3>
          <p className="text-zinc-200 text-sm font-semibold leading-relaxed max-w-[280px]">
            {service.desc}
          </p>
        </div>

        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-4">
                {service.features.map((feat, idx) => (
                    <span key={idx} className="text-[9px] font-black uppercase tracking-[0.25em] text-zinc-500 group-hover:text-yellow-500 transition-colors">
                      {feat}
                    </span>
                ))}
            </div>
            <Link href="#contact" className="flex items-center gap-2 group/link">
              <span className="text-[10px] font-bold text-white/40 uppercase group-hover/link:text-yellow-500 transition-colors">Talk with us</span>
              <ArrowUpRight size={20} className="text-yellow-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
        </div>
      </div>
    </motion.div>
  );
}