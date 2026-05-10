"use client";

import React from "react";
import { Zap, BrainCircuit, Monitor, Smartphone, PenTool, Sparkles, Code2, ArrowUpRight, ShieldCheck, Rocket, Search, Cpu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
  { num: "01", name: "Brand & UI Design", desc: "Bold identities & stunning interfaces that make your brand unforgettable.", features: ["Visual Strategy", "Logo Systems", "UX Research", "Design Systems"], img: "/services/insta.jfif", span: "md:col-span-4", icon: <Sparkles size={22} /> },
  { num: "02", name: "Web Development", desc: "High-performance websites built for speed, scale & conversions.", features: ["Next.js/React", "Custom API", "Performance SEO", "Cloud Scale"], img: "/services/web.avif", span: "md:col-span-8", icon: <Code2 size={22} /> },
  { num: "03", name: "AI Solutions", desc: "Integrating neural networks and predictive models into modern workflows.", features: ["LLM Integration", "Auto-Workflows", "Data Analysis", "Custom Bots"], img: "/services/AI.webp", span: "md:col-span-7", icon: <BrainCircuit size={22} /> },
  { num: "04", name: "Graphic Designing", desc: "High-end visual storytelling through digital art and typography.", features: ["3D Assets", "Print Media", "Motion Graphics", "Art Direction"], img: "/services/graphic.webp", span: "md:col-span-5", icon: <PenTool size={22} /> },
  { num: "05", name: "Digital Marketing", desc: "Performance-driven marketing that turns traffic into revenue.", features: ["Ad Management", "Growth Hacking", "Market Research", "Funnel Ops"], img: "/services/digital.avif", span: "md:col-span-6", icon: <Zap size={22} /> },
  { num: "06", name: "App Development", desc: "Seamless mobile apps designed for engagement & performance.", features: ["iOS/Android", "React Native", "Smooth UX", "Store Ready"], img: "/services/app.jpg", span: "md:col-span-6", icon: <Smartphone size={18} /> },
  { num: "07", name: "Custom Software", desc: "Tailored software built exactly for your business unique architectural problems.", features: ["ERP Systems", "Legacy Migrations", "Security Audits", "Database Design"], img: "/services/software.avif", span: "md:col-span-12", icon: <Monitor size={18} /> },
];

const WHY_US = [
  { title: "Performance First", desc: "Every project targets Lighthouse scores above 95. Fast websites rank higher and convert better.", icon: <Rocket className="text-yellow-500" size={24} /> },
  { title: "SEO Optimized", desc: "Technical SEO, structured data, and content strategy built into every page from day one.", icon: <Search className="text-yellow-500" size={24} /> },
  { title: "Enterprise Security", desc: "HTTPS, CSP headers, security audits, and data protection as standard — not optional.", icon: <ShieldCheck className="text-yellow-500" size={24} /> },
  { title: "Scalable Architecture", desc: "Built on Next.js and cloud infrastructure that grows with your business seamlessly.", icon: <Cpu className="text-yellow-500" size={24} /> },
];

export default function ServicesBentoMagic() {
  return (
    <section className="relative min-h-screen bg-[#020202] py-24 px-4 md:px-10 overflow-hidden" id="services">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#facc1510_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_#facc15]" />
            <span className="text-yellow-500 font-mono text-[11px] font-bold tracking-[0.6em] uppercase">Core Expertise</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-[8rem] lg:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase"
          >
            ELEVATING <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-100 italic">BRANDS.</span>
          </motion.h1>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* ==================== WHY RIZQ: THE CREATIVE UPGRADE ==================== */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 lg:mt-48 relative"
        >
          <div className="text-left mb-16 max-w-2xl">
            <span className="text-yellow-500 font-mono text-[11px] font-bold tracking-[0.6em] uppercase">Why Choose Us</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mt-4 leading-none">
              Engineered for <br/> <span className="text-zinc-600">Peak Performance.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-yellow-500/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-500">
                  <div className="group-hover:text-black transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-black text-white tracking-tight mb-3 uppercase italic">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Subtle accent for the section */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-500/5 blur-[100px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`${service.span} group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-950 min-h-[420px] flex flex-col z-10 
      transition-all duration-500 hover:border-yellow-500/40 hover:shadow-[0_40px_80px_-15px_rgba(250,204,21,0.2)]`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={service.img}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000"
        />
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
               <span 
                 key={idx}
                 className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/70 text-[9px] font-bold uppercase tracking-widest backdrop-blur-md group-hover:border-yellow-500/20 transition-all"
               >
                 {feat}
               </span>
             ))}
           </div>
           
           <div className="flex items-center justify-between pt-5 border-t border-white/10">
              <Link href="#contact" className="group/link flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500">
                 Request Quote
                 <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
           </div>
        </div>
      </div>
    </motion.div>
  );
}