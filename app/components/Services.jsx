"use client";

import React, { useRef } from "react";
import { Zap, BrainCircuit, Monitor, Smartphone, PenTool, Sparkles, Code2, ArrowUpRight, ShieldCheck, Rocket, Search, Cpu } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

/**
 * DATA SOURCES: 
 * Professional service offerings and brand advantages
 */
const SERVICES = [
  { num: "01", name: "Brand & UI Design", desc: "Bold identities & stunning interfaces that make your brand unforgettable.", features: ["Visual Strategy", "Logo Systems", "UX Research", "Design Systems"], img: "/services/insta.jfif", span: "md:col-span-4", icon: <Sparkles size={22} /> },
  { num: "02", name: "Web Development", desc: "High-performance websites built for speed, scale & conversions.", features: ["Next.js/React", "Custom API", "Performance SEO", "Cloud Scale"], img: "/services/web.avif", span: "md:col-span-8", icon: <Code2 size={22} /> },
  { num: "03", name: "AI Solutions", desc: "Integrating neural networks and predictive models into modern workflows.", features: ["LLM Integration", "Auto-Workflows", "Data Analysis", "Custom Bots"], img: "/services/AI.webp", span: "md:col-span-7", icon: <BrainCircuit size={22} /> },
  { num: "04", name: "Graphic Designing", desc: "High-end visual storytelling through digital art and typography.", features: ["3D Assets", "Print Media", "Motion Graphics", "Art Direction"], img: "/services/graphic.webp", span: "md:col-span-5", icon: <PenTool size={22} /> },
  { num: "05", name: "Digital Marketing", desc: "Performance-driven marketing that turns traffic into revenue.", features: ["Ad Management", "Growth Hacking", "Market Research", "Funnel Ops"], img: "/services/digital.webp", span: "md:col-span-6", icon: <Zap size={22} /> },
  { num: "06", name: "App Development", desc: "Seamless mobile apps designed for engagement & performance.", features: ["iOS/Android", "React Native", "Smooth UX", "Store Ready"], img: "/services/app.jpg", span: "md:col-span-6", icon: <Smartphone size={18} /> },
  { num: "07", name: "Custom Software", desc: "Tailored software built exactly for your business unique architectural problems.", features: ["ERP Systems", "Legacy Migrations", "Security Audits", "Database Design"], img: "/services/software.avif", span: "md:col-span-12", icon: <Monitor size={18} /> },
];

const WHY_US = [
  { title: "Performance First", desc: "Every project targets Lighthouse scores above 95. Fast websites rank higher and convert better.", icon: <Rocket size={24} /> },
  { title: "SEO Optimized", desc: "Technical SEO, structured data, and content strategy built into every page from day one.", icon: <Search size={24} /> },
  { title: "Enterprise Security", desc: "HTTPS, CSP headers, security audits, and data protection as standard — not optional.", icon: <ShieldCheck size={24} /> },
  { title: "Scalable Architecture", desc: "Built on Next.js and cloud infrastructure that grows with your business seamlessly.", icon: <Cpu size={24} /> },
];

export default function ServicesBentoMagic() {
  const containerRef = useRef(null);

  return (
    <section className="relative min-h-screen bg-[#020202] py-24 px-4 md:px-10 overflow-hidden" id="services">
      
      {/* GLOBAL BACKGROUND: Moving mesh and grain for agency feel */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#facc1510_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ==================== 1. SERVICES HEADER ==================== */}
        <header className="mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_#facc15]" />
            <span className="text-yellow-500 font-mono text-[11px] font-bold tracking-[0.6em] uppercase">Core Expertise</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-5xl md:text-[8rem] lg:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase">
            ELEVATING <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-100 italic font-light">BRANDS.</span>
          </motion.h1>
        </header>

        {/* ==================== 2. SERVICES BENTO GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-40 lg:mb-60">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* ==================== 3. WHY RIZQ: INTERACTIVE TIMELINE ==================== */}
        <div className="relative pt-20" ref={containerRef}>
          <div className="sticky top-24 mb-20 lg:mb-32 z-20">
            <span className="text-yellow-500 font-mono text-[11px] font-bold tracking-[0.6em] uppercase">The Advantage</span>
            <h2 className="text-5xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none mt-4">
              WHY <span className="text-zinc-900 group-hover:text-zinc-800 transition-colors">RIZQ?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Scroll-triggered Items */}
            <div className="space-y-40 py-20">
              {WHY_US.map((item, i) => (
                <WhyUsItem key={i} item={item} index={i} />
              ))}
            </div>

            {/* Sticky Visual Core Element */}
            <div className="hidden lg:block sticky top-1/3 h-[400px]">
              <div className="relative w-full h-full flex items-center justify-center">
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute w-80 h-80 border border-yellow-500/20 rounded-[4rem] blur-sm" />
                 <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-64 h-64 border border-amber-400/10 rounded-full" />
                 <div className="relative z-10 w-48 h-48 bg-yellow-500/10 backdrop-blur-3xl border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(250,204,21,0.1)]">
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }}>
                      <Zap size={60} className="text-yellow-500 fill-yellow-500/20" />
                    </motion.div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * SUB-COMPONENT: ServiceCard
 * Renders the Bento-style interactive service cards
 */
function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`${service.span} group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-950 min-h-[420px] flex flex-col z-10 transition-all duration-500 hover:border-yellow-500/40 hover:shadow-[0_40px_80px_-15px_rgba(250,204,21,0.2)]`}
    >
      <div className="absolute inset-0 z-0">
        <img src={service.img} alt={service.name} loading="lazy" className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      </div>

      <div className="relative z-20 p-8 md:p-10 flex flex-col h-full justify-between flex-grow">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
              {service.icon}
            </div>
            <span className="text-white/10 font-black text-6xl tracking-tighter group-hover:text-yellow-500/20 transition-all">
              {service.num}
            </span>
          </div>

          <div>
            <h3 className="text-4xl font-black text-white mb-3 tracking-tighter group-hover:text-yellow-400 transition-colors uppercase italic leading-none">
              {service.name}
            </h3>
            <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-[280px]">
              {service.desc}
            </p>
          </div>
        </div>

        <div className="mt-8">
           <div className="flex flex-wrap gap-2 mb-8">
             {service.features.map((feat, idx) => (
               <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/70 text-[9px] font-bold uppercase tracking-widest backdrop-blur-md group-hover:border-yellow-500/20 transition-all">
                 {feat}
               </span>
             ))}
           </div>
           <div className="flex items-center justify-between pt-5 border-t border-white/10">
              <Link href="#contact" className="group/link flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500">
                 Request Quote <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * SUB-COMPONENT: WhyUsItem
 * Renders the high-interaction scroll-triggered advantage points
 */
function WhyUsItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.05, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.05, x: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative pl-12 border-l border-zinc-900"
    >
      {/* Visual Progress Marker */}
      <motion.div 
        animate={isInView ? { scale: 1.8, backgroundColor: "#eab308", boxShadow: "0 0 15px #facc15" } : { scale: 1, backgroundColor: "#18181b", boxShadow: "none" }}
        className="absolute left-[-5px] top-2 w-2 h-2 rounded-full transition-all duration-500"
      />
      
      <div className="mb-6 flex items-center gap-5">
        <div className={`p-4 rounded-2xl bg-zinc-900/80 border border-white/5 ${isInView ? 'text-yellow-500 shadow-[0_0_30px_rgba(250,204,21,0.1)]' : 'text-zinc-700'} transition-all duration-500`}>
           {item.icon}
        </div>
        <span className="text-zinc-800 font-mono text-xl font-bold italic tracking-tighter">/0{index + 1}</span>
      </div>

      <h3 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 transition-colors duration-500 ${isInView ? 'text-white' : 'text-zinc-900'}`}>
        {item.title}
      </h3>
      <p className={`text-lg md:text-xl max-w-md transition-colors duration-500 leading-relaxed font-medium ${isInView ? 'text-zinc-400' : 'text-zinc-900'}`}>
        {item.desc}
      </p>
    </motion.div>
  );
}