'use client';

import React from "react";
import { Zap, BrainCircuit, Monitor, Smartphone, PenTool, Sparkles, Code2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { num: "01", name: "Brand & UI Design", desc: "Bold identities & stunning interfaces that make your brand unforgettable.", features: ["Visual Strategy", "Logo Systems", "UX Research", "Design Systems"], img: "/services/insta.jfif", span: "md:col-span-4", icon: <Sparkles size={22} /> },
  { num: "02", name: "Web Development", desc: "High-performance websites built for speed, scale & conversions.", features: ["Next.js/React", "Custom API", "Performance SEO", "Cloud Scale"], img: "/services/web.avif", span: "md:col-span-8", icon: <Code2 size={22} /> },
  { num: "03", name: "AI Solutions", desc: "Integrating neural networks and predictive models into modern workflows.", features: ["LLM Integration", "Auto-Workflows", "Data Analysis", "Custom Bots"], img: "/services/AI.webp", span: "md:col-span-7", icon: <BrainCircuit size={22} /> },
  { num: "04", name: "Graphic Designing", desc: "High-end visual storytelling through digital art and typography.", features: ["3D Assets", "Print Media", "Motion Graphics", "Art Direction"], img: "/services/graphic.webp", span: "md:col-span-5", icon: <PenTool size={22} /> },
  { num: "05", name: "Digital Marketing", desc: "Performance-driven marketing that turns traffic into revenue.", features: ["Ad Management", "Growth Hacking", "Market Research", "Funnel Ops"], img: "/services/digital.png", span: "md:col-span-6", icon: <Zap size={22} /> },
  { num: "06", name: "App Development", desc: "Seamless mobile apps designed for engagement & performance.", features: ["iOS/Android", "React Native", "Smooth UX", "Store Ready"], img: "/services/mobile.png", span: "md:col-span-6", icon: <Smartphone size={22} /> },
  { num: "07", name: "Custom Software", desc: "Tailored software built exactly for your business unique architectural problems.", features: ["ERP Systems", "Legacy Migrations", "Security Audits", "Database Design"], img: "/services/software.png", span: "md:col-span-12", icon: <Monitor size={22} /> },
];

export default function ServicesBentoMagic() {
  return (
    <section className="relative min-h-screen bg-[#020202] py-24 px-4 md:px-10 overflow-hidden" id="services">
      
      {/* CREATIVE BACKGROUND - Moving Mesh & Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#facc1510_0%,transparent_50%)]" />
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-yellow-500/[0.03] blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-yellow-600/[0.02] blur-[160px] rounded-full animate-pulse" />
        
        {/* Modern Dot Mesh */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_#facc15]" />
            <span className="text-yellow-500 font-mono text-[11px] font-bold tracking-[0.6em] uppercase">Core Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-[9rem] font-black text-white leading-[0.8] tracking-tighter uppercase">
            ELEVATING <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-100">BRANDS.</span>
          </h2>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <div
      className={`${service.span} group relative rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-950 min-h-[460px] flex flex-col z-10 
      transition-all duration-500 hover:border-yellow-500/50 hover:shadow-[0_30px_60px_-15px_rgba(250,204,21,0.15)]
      will-change-transform`}
    >
      {/* Background Image - Colorful & Sharp */}
      <div className="absolute inset-0 z-0">
        <img
          src={service.img}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-1000 ease-in-out"
        />
        {/* Stronger bottom fade for text readability without darkening the whole image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 p-8 md:p-12 flex flex-col h-full justify-between flex-grow">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="w-14 h-14 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
              {service.icon}
            </div>
            <span className="text-white/20 font-black text-5xl tracking-tighter group-hover:text-yellow-500 transition-colors duration-500">
              {service.num}
            </span>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter group-hover:text-yellow-400 transition-colors drop-shadow-lg">
              {service.name}
            </h3>
            <p className="text-zinc-200 text-sm md:text-lg font-bold leading-relaxed max-w-[300px] drop-shadow-md">
              {service.desc}
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-8">
           <div className="flex flex-wrap gap-2 mb-10">
              {service.features.map((feat, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-1.5 rounded-2xl bg-black/60 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest backdrop-blur-xl group-hover:border-yellow-500/30 transition-all shadow-lg"
                >
                  {feat}
                </span>
              ))}
           </div>
           
           <div className="flex items-center justify-between pt-6 border-t border-white/20">
              <Link href="#contact" className="group/link flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-yellow-500 hover:text-white transition-all">
                 Inquire Now
                 <ArrowUpRight size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
              <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_8px_#facc15]" />
           </div>
        </div>
      </div>
    </div>
  );
}