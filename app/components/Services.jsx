"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, BrainCircuit, Monitor, Smartphone, PenTool, Sparkles, Code2, CheckCircle2 } from "lucide-react";

const SERVICES = [
  { 
    num: "01", 
    tag: "Creative", 
    name: "Brand & UI Design", 
    desc: "Bold identities & stunning interfaces that make your brand unforgettable.", 
    features: ["Visual Strategy", "Logo Systems", "UX Research", "Design Systems"],
    img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200", 
    span: "md:col-span-4", 
    icon: <Sparkles size={24} /> 
  },
  { 
    num: "02", 
    tag: "Tech", 
    name: "Web Development", 
    desc: "High-performance websites built for speed, scale & conversions.", 
    features: ["Next.js/React", "Custom API", "Performance SEO", "Cloud Scale"],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200", 
    span: "md:col-span-8", 
    icon: <Code2 size={24} /> 
  },
  { 
    num: "03", 
    tag: "AI/ML", 
    name: "AI Solutions", 
    desc: "Integrating neural networks and predictive models into modern workflows.", 
    features: ["LLM Integration", "Auto-Workflows", "Data Analysis", "Custom Bots"],
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200", 
    span: "md:col-span-7", 
    icon: <BrainCircuit size={24} /> 
  },
  { 
    num: "04", 
    tag: "Art", 
    name: "Graphic Designing", 
    desc: "High-end visual storytelling through digital art and typography.", 
    features: ["3D Assets", "Print Media", "Motion Graphics", "Art Direction"],
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200", 
    span: "md:col-span-5", 
    icon: <PenTool size={24} /> 
  },
  { 
    num: "05", 
    tag: "Growth", 
    name: "Digital Marketing", 
    desc: "Performance-driven marketing that turns traffic into revenue.", 
    features: ["Ad Management", "Growth Hacking", "Market Research", "Funnel Ops"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200", 
    span: "md:col-span-6", 
    icon: <Zap size={24} /> 
  },
  { 
    num: "06", 
    tag: "Mobile", 
    name: "App Development", 
    desc: "Seamless mobile apps designed for engagement & performance.", 
    features: ["iOS/Android", "React Native", "Smooth UX", "Store Ready"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200", 
    span: "md:col-span-6", 
    icon: <Smartphone size={24} /> 
  },
  { 
    num: "07", 
    tag: "Systems", 
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
    <section className="relative min-h-screen bg-[#050505] py-24 px-4 md:px-10 overflow-hidden" id="services">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #facc15 1px, transparent 1px), linear-gradient(to bottom, #facc15 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
            <div className="h-2 w-12 bg-yellow-500" />
            <span className="text-yellow-500 font-mono text-xs font-black tracking-widest uppercase">Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[8rem] font-black text-white leading-none tracking-tighter"
          >
            CORE <span className="text-zinc-800 uppercase italic">Units.</span>
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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${service.span} group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-900/10 min-h-[480px] flex flex-col`}
    >
      {/* Dynamic Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={service.img}
          alt={service.name}
          className="w-full h-full object-cover opacity-[0.15] grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
      </div>

      {/* REPLACEMENT FOR GLOBAL CSS SCAN: Framer Motion Scanning Line */}
      {isHovered && (
        <motion.div 
          initial={{ top: "0%", opacity: 0 }}
          animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent z-20 pointer-events-none"
        />
      )}

      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-start">
            <div className="p-4 rounded-2xl bg-zinc-900/90 backdrop-blur-2xl border border-white/10 text-yellow-500 shadow-2xl">
              {service.icon}
            </div>
            <span className="text-zinc-800 font-mono text-5xl font-black select-none">{service.num}</span>
          </div>

          <h3 className="text-3xl md:text-5xl font-black text-white mt-12 mb-5 group-hover:text-yellow-500 transition-colors duration-500 leading-tight">
            {service.name}
          </h3>
          <p className="text-zinc-400 text-sm md:text-lg font-medium leading-relaxed max-w-[320px]">
            {service.desc}
          </p>
        </div>

        {/* Feature Tags & Bottom Section */}
        <div className="mt-10">
           {/* Animated Features Grid */}
           <div className="flex flex-wrap gap-2 mb-10 overflow-hidden">
              {service.features.map((feat, idx) => (
                <motion.span 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_#facc15]" />
                  {feat}
                </motion.span>
              ))}
           </div>
           
           <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <button className="relative group/btn overflow-hidden">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 group-hover:text-yellow-500 transition-colors">
                  Get Started
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-yellow-500 group-hover/btn:w-full transition-all duration-500" />
              </button>
              
              <div className="flex gap-1">
                 {[1, 2, 3].map((dot) => (
                   <div key={dot} className={`h-1 w-1 rounded-full bg-zinc-800 group-hover:bg-yellow-500/50 transition-colors delay-${dot * 100}`} />
                 ))}
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}