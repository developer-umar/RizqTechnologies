'use client';

import React from "react";
import { Zap, BrainCircuit, Monitor, Smartphone, PenTool, Sparkles, Code2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { num: "01", name: "Brand & UI Design", desc: "Bold identities & stunning interfaces that make your brand unforgettable.", features: ["Visual Strategy", "Logo Systems", "UX Research", "Design Systems"], img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800", span: "md:col-span-4", icon: <Sparkles size={20} /> },
  { num: "02", name: "Web Development", desc: "High-performance websites built for speed, scale & conversions.", features: ["Next.js/React", "Custom API", "Performance SEO", "Cloud Scale"], img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800", span: "md:col-span-8", icon: <Code2 size={20} /> },
  { num: "03", name: "AI Solutions", desc: "Integrating neural networks and predictive models into modern workflows.", features: ["LLM Integration", "Auto-Workflows", "Data Analysis", "Custom Bots"], img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800", span: "md:col-span-7", icon: <BrainCircuit size={20} /> },
  { num: "04", name: "Graphic Designing", desc: "High-end visual storytelling through digital art and typography.", features: ["3D Assets", "Print Media", "Motion Graphics", "Art Direction"], img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800", span: "md:col-span-5", icon: <PenTool size={20} /> },
  { num: "05", name: "Digital Marketing", desc: "Performance-driven marketing that turns traffic into revenue.", features: ["Ad Management", "Growth Hacking", "Market Research", "Funnel Ops"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", span: "md:col-span-6", icon: <Zap size={20} /> },
  { num: "06", name: "App Development", desc: "Seamless mobile apps designed for engagement & performance.", features: ["iOS/Android", "React Native", "Smooth UX", "Store Ready"], img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800", span: "md:col-span-6", icon: <Smartphone size={20} /> },
  { num: "07", name: "Custom Software", desc: "Tailored software built exactly for your business unique architectural problems.", features: ["ERP Systems", "Legacy Migrations", "Security Audits", "Database Design"], img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800", span: "md:col-span-12", icon: <Monitor size={20} /> },
];

export default function ServicesBentoMagic() {
  return (
    <section className="relative min-h-screen bg-[#020202] py-24 px-4 md:px-10 overflow-hidden" id="services">
      
      {/* PERFORMANCE-FIRST BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-yellow-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[50vw] h-[50vw] bg-yellow-600/5 blur-[150px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        {/* Grainy texture for premium feel */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-yellow-500" />
            <span className="text-yellow-500 font-mono text-[10px] font-bold tracking-[0.6em] uppercase italic">Our Capabilities</span>
          </div>
          
          <h2 className="text-5xl md:text-[8.5rem] font-black text-white leading-[0.8] tracking-tighter uppercase">
            MASTERING <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-800">CRAFT.</span>
          </h2>
        </header>

        {/* Bento Grid with Optimized CSS Rendering */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 [content-visibility:auto]">
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
      className={`${service.span} group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#080808] min-h-[440px] flex flex-col z-10 
      transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
      hover:border-yellow-500/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
      will-change-transform`}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={service.img}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover opacity-20 grayscale scale-110 group-hover:scale-100 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/90 to-transparent z-10" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 p-8 md:p-10 flex flex-col h-full justify-between flex-grow">
        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black group-hover:rotate-[360deg] transition-all duration-700 shadow-2xl">
              {service.icon}
            </div>
            <span className="text-zinc-800 font-black text-4xl tracking-tighter group-hover:text-yellow-500 transition-colors duration-500 opacity-50 group-hover:opacity-100">
              {service.num}
            </span>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter group-hover:text-yellow-400 transition-colors duration-300">
              {service.name}
            </h3>
            <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-[280px]">
              {service.desc}
            </p>
          </div>
        </div>

        {/* Features & Bottom Action */}
        <div className="mt-12">
           <div className="flex flex-wrap gap-2 mb-10">
              {service.features.map((feat, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-300 text-[9px] font-bold uppercase tracking-widest backdrop-blur-md group-hover:border-yellow-500/20 group-hover:text-yellow-200 transition-all"
                >
                  {feat}
                </span>
              ))}
           </div>
           
           <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <Link href="#contact" className="group/link flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500">
                 Start Project
                 <div className="overflow-hidden w-4 h-4">
                    <ArrowUpRight size={16} className="group-hover/link:translate-x-4 group-hover/link:-translate-y-4 transition-transform duration-500" />
                    <ArrowUpRight size={16} className="relative -top-4 -left-4 group-hover/link:translate-x-4 group-hover/link:-translate-y-4 transition-transform duration-500" />
                 </div>
              </Link>
              <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-zinc-800 rounded-full group-hover:bg-yellow-500/40 transition-colors" />)}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}