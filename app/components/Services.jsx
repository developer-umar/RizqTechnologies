"use client";

import React from "react";
import { Zap, BrainCircuit, Monitor, Smartphone, PenTool, Sparkles, Code2, ArrowUpRight, ShieldCheck, Rocket, Search, Cpu, CheckCircle2 } from "lucide-react";
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

const WHY_RIZQ = [
  { title: "Rapid Delivery", desc: "Agile workflows to ship software faster without bugs.", icon: <Zap size={22} /> },
  { title: "Growth Focused", desc: "We don't just write code; we build business tools.", icon: <Rocket size={22} /> },
  { title: "Clean Codebase", desc: "Scalable, secure, and maintainable architecture.", icon: <Code2 size={22} /> },
  { title: "Modern Stack", desc: "Using the latest 2026 tech trends for long-term edge.", icon: <Cpu size={22} /> },
];

export default function ServicesBentoMagic() {
  return (
    <section className="relative min-h-screen bg-[#020202] py-20 px-4 md:px-10 overflow-hidden" id="services">
      
      {/* CREATIVE YELLOW ACCENTS (Balanced Background) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -right-[5%] w-[30%] h-[30%] bg-yellow-600/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_#facc15]" />
            <span className="text-yellow-500 font-mono text-[10px] font-bold tracking-[0.4em] uppercase">Industry-Grade Development</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 italic">SERVICES.</span>
          </h2>
        </header>

        {/* ==================== 2. SERVICES BENTO GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-32">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* ==================== 3. WHY RIZQ: CREATIVE UPGRADE ==================== */}
        <div className="pt-20 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
            <div className="max-w-xl">
              <span className="text-yellow-500 font-mono text-[10px] font-bold tracking-[0.5em] uppercase">The Rizq Standard</span>
              <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none mt-2">
                WHY <span className="text-zinc-800">RIZQ?</span>
              </h3>
            </div>
            <div className="flex gap-4">
               <Link href="#contact" className="px-8 py-3 bg-yellow-500 text-black font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_10px_30px_-10px_rgba(250,204,21,0.4)]">
                 Connect Now
               </Link>
            </div>
          </div>

          {/* CREATIVE LIGHTWEIGHT WHY US TILES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_RIZQ.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative p-10 rounded-[3rem] bg-gradient-to-br from-zinc-900/50 to-black border border-white/5 group hover:border-yellow-500/20 transition-all overflow-hidden"
              >
                {/* Floating Background Icon */}
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity scale-[3]">
                   {item.icon}
                </div>
                
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-8">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-3 italic">{item.title}</h4>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {item.desc}
                </p>
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`${service.span} group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-950 min-h-[400px] flex flex-col z-10 transition-all duration-700 hover:border-yellow-500/30`}
    >
      {/* BRIGHTER IMAGES & SCAN ANIMATION */}
      <div className="absolute inset-0 z-0">
        <img 
          src={service.img} 
          alt={service.name} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-[1.5s] group-hover:scale-110 saturate-[0.8] group-hover:saturate-100" 
        />
        {/* Lighter Gradient Overlay for balance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/30 to-transparent z-10" />
        
        {/* SCANNER LINE ANIMATION */}
        <motion.div 
          animate={{ y: ["0%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-100%] left-0 w-full h-[50%] bg-gradient-to-b from-transparent via-yellow-500/10 to-transparent z-20 pointer-events-none"
        />
      </div>

      <div className="relative z-30 p-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 rounded-2xl bg-black/60 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
              {service.icon}
            </div>
            <span className="text-white/10 font-black text-6xl tracking-tighter italic leading-none">0{index + 1}</span>
          </div>
          <h3 className="text-4xl font-black text-white mb-3 tracking-tighter uppercase leading-tight group-hover:text-yellow-400 transition-colors duration-300 shadow-black drop-shadow-md">
            {service.name}
          </h3>
          <p className="text-zinc-200 text-sm font-semibold leading-relaxed max-w-[280px] drop-shadow-md">
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
            <Link href="/services" className="flex items-center gap-2 group/link">
              <span className="text-[10px] font-bold text-white/40 uppercase group-hover/link:text-yellow-500 transition-colors">Explore</span>
              <ArrowUpRight size={20} className="text-yellow-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
        </div>
      </div>
    </motion.div>
  );
}