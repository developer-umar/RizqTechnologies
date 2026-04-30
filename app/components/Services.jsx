"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, BrainCircuit, Monitor, Smartphone, PenTool, Sparkles, Code2, CheckCircle2 } from "lucide-react";

const SERVICES = [
  { 
    num: "01", 
    name: "Brand & UI Design", 
    desc: "Bold identities & stunning interfaces that make your brand unforgettable.", 
    features: ["Visual Strategy", "Logo Systems", "UX Research", "Design Systems"],
    img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200", 
    span: "md:col-span-4", 
    icon: <Sparkles size={24} /> 
  },
  { 
    num: "02", 
    name: "Web Development", 
    desc: "High-performance websites built for speed, scale & conversions.", 
    features: ["Next.js/React", "Custom API", "Performance SEO", "Cloud Scale"],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200", 
    span: "md:col-span-8", 
    icon: <Code2 size={24} /> 
  },
  { 
    num: "03", 
    name: "AI Solutions", 
    desc: "Integrating neural networks and predictive models into modern workflows.", 
    features: ["LLM Integration", "Auto-Workflows", "Data Analysis", "Custom Bots"],
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200", 
    span: "md:col-span-7", 
    icon: <BrainCircuit size={24} /> 
  },
  { 
    num: "04", 
    name: "Graphic Designing", 
    desc: "High-end visual storytelling through digital art and typography.", 
    features: ["3D Assets", "Print Media", "Motion Graphics", "Art Direction"],
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200", 
    span: "md:col-span-5", 
    icon: <PenTool size={24} /> 
  },
  { 
    num: "05", 
    name: "Digital Marketing", 
    desc: "Performance-driven marketing that turns traffic into revenue.", 
    features: ["Ad Management", "Growth Hacking", "Market Research", "Funnel Ops"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200", 
    span: "md:col-span-6", 
    icon: <Zap size={24} /> 
  },
  { 
    num: "06", 
    name: "App Development", 
    desc: "Seamless mobile apps designed for engagement & performance.", 
    features: ["iOS/Android", "React Native", "Smooth UX", "Store Ready"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200", 
    span: "md:col-span-6", 
    icon: <Smartphone size={24} /> 
  },
  { 
    num: "07", 
    name: "Custom Software", 
    desc: "Tailored software built exactly for your business unique architectural problems.", 
    features: ["ERP Systems", "Legacy Migrations", "Security Audits", "Database Design"],
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200", 
    span: "md:col-span-12", 
    icon: <Monitor size={24} /> 
  },
];

export default function ServicesBentoMagic() {
  return (
    <section className="relative min-h-screen bg-[#020202] py-24 px-4 md:px-10 overflow-hidden" id="services">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #facc15 1px, transparent 1px), linear-gradient(to bottom, #facc15 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_95%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 flex flex-col items-center text-center md:items-start md:text-left">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
            <div className="h-1.5 w-8 bg-yellow-500 rounded-full" />
            <span className="text-yellow-500 font-mono text-xs font-bold tracking-[0.3em] uppercase">What we do</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[9rem] font-black text-white leading-tight md:leading-[0.85] tracking-tighter"
          >
            OUR <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">SERVICES.</span>
          </motion.h2>
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
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${service.span} group relative rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950 min-h-[450px] flex flex-col`}
    >
      {/* Dynamic Image Background - Adjusted for better color visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={service.img}
          alt={service.name}
          className="w-full h-full object-cover opacity-[0.35] md:opacity-[0.2] grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-out"
        />
        {/* Softened Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/30 to-transparent" />
      </div>

      {/* Scanning Line - Framer Motion */}
      {isHovered && (
        <motion.div 
          initial={{ top: "0%", opacity: 0 }}
          animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent z-20 pointer-events-none"
        />
      )}

      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between flex-grow">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="p-3.5 rounded-2xl bg-yellow-500 text-black shadow-[0_0_25px_rgba(250,204,21,0.2)]">
              {React.cloneElement(service.icon, { size: 28 })}
            </div>
            <span className="text-white/10 font-black text-6xl tracking-tighter select-none leading-none">
              {service.num}
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
              {service.name}
            </h3>
            <p className="text-zinc-300 text-sm md:text-base font-medium leading-relaxed max-w-[280px]">
              {service.desc}
            </p>
          </div>
        </div>

        {/* Feature Tags - Improved responsiveness */}
        <div className="mt-8">
           <div className="flex flex-wrap gap-2 mb-8">
              {service.features.map((feat, idx) => (
                <motion.span 
                  key={idx}
                  // Mobile pe hamesha dikhega, Desktop pe hover par aayega
                  initial={{ opacity: 0.6, y: 0 }}
                  animate={isHovered ? { opacity: 1, y: 0, scale: 1.05 } : { opacity: 0.6, y: 0 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/50 border border-white/5 text-zinc-100 text-[10px] md:text-[11px] font-bold uppercase tracking-wider backdrop-blur-md transition-all"
                >
                  <CheckCircle2 size={12} className="text-yellow-500" />
                  {feat}
                </motion.span>
              ))}
           </div>
           
           <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500/80 group-hover:text-yellow-500 transition-colors cursor-pointer">
                Inquire Project
              </span>
              <div className="flex gap-1.5">
                <div className="h-1 w-1 rounded-full bg-yellow-500 animate-pulse" />
                <div className="h-1 w-1 rounded-full bg-zinc-700" />
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}