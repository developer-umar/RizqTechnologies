"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Zap, BrainCircuit, Monitor, Smartphone, PenTool, Sparkles, Code2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  { num: "01", name: "Brand & UI Design", desc: "Bold identities & stunning interfaces that make your brand unforgettable.", features: ["Visual Strategy", "Logo Systems", "UX Research", "Design Systems"], img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200", span: "md:col-span-4", icon: <Sparkles size={24} /> },
  { num: "02", name: "Web Development", desc: "High-performance websites built for speed, scale & conversions.", features: ["Next.js/React", "Custom API", "Performance SEO", "Cloud Scale"], img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200", span: "md:col-span-8", icon: <Code2 size={24} /> },
  { num: "03", name: "AI Solutions", desc: "Integrating neural networks and predictive models into modern workflows.", features: ["LLM Integration", "Auto-Workflows", "Data Analysis", "Custom Bots"], img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200", span: "md:col-span-7", icon: <BrainCircuit size={24} /> },
  { num: "04", name: "Graphic Designing", desc: "High-end visual storytelling through digital art and typography.", features: ["3D Assets", "Print Media", "Motion Graphics", "Art Direction"], img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200", span: "md:col-span-5", icon: <PenTool size={24} /> },
  { num: "05", name: "Digital Marketing", desc: "Performance-driven marketing that turns traffic into revenue.", features: ["Ad Management", "Growth Hacking", "Market Research", "Funnel Ops"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200", span: "md:col-span-6", icon: <Zap size={24} /> },
  { num: "06", name: "App Development", desc: "Seamless mobile apps designed for engagement & performance.", features: ["iOS/Android", "React Native", "Smooth UX", "Store Ready"], img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200", span: "md:col-span-6", icon: <Smartphone size={24} /> },
  { num: "07", name: "Custom Software", desc: "Tailored software built exactly for your business unique architectural problems.", features: ["ERP Systems", "Legacy Migrations", "Security Audits", "Database Design"], img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200", span: "md:col-span-12", icon: <Monitor size={24} /> },
];

export default function ServicesBentoMagic() {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-reveal", 
        { y: 60, opacity: 0, rotateX: 20 },
        {
          y: 0, opacity: 1, rotateX: 0,
          duration: 1.2, stagger: 0.2, ease: "expo.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          }
        }
      );
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen bg-[#050505] py-24 px-4 md:px-10 overflow-hidden" id="services">
      
      {/* 1. BACKGROUND GRID - Positioned below everything */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #facc15 1px, transparent 1px), linear-gradient(to bottom, #facc15 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_95%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header ref={headerRef} className="mb-24 perspective-[1000px]">
          <motion.div className="flex items-center gap-3 mb-6 service-reveal">
            <div className="h-2 w-2 bg-yellow-500 rounded-full animate-ping" />
            <span className="text-yellow-500 font-mono text-xs font-black tracking-[0.4em] uppercase">Capabilities</span>
          </motion.div>
          
          <h2 className="service-reveal text-6xl md:text-[9rem] font-black text-white leading-[0.85] tracking-tighter uppercase">
            OUR <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 italic">
              SERVICES.
            </span>
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
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${service.span} group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a0a] min-h-[460px] flex flex-col z-20 transition-all duration-500 hover:border-yellow-500/40`}
    >
      {/* 2. IMAGE VISIBILITY - Balanced for Dark Theme */}
      <div className="absolute inset-0 z-0">
        <img
          src={service.img}
          alt={service.name}
          className="w-full h-full object-cover opacity-[0.4] grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000"
        />
        {/* Softening Gradient - Prevent Grid bleeding and make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
      </div>

      {/* 3. SCANNING LINE EFFECT */}
      {isHovered && (
        <motion.div 
          initial={{ top: "0%", opacity: 0 }}
          animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent z-30 pointer-events-none"
        />
      )}

      <div className="relative z-20 p-8 md:p-10 h-full flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-start">
            <div className="p-4 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 text-yellow-500 shadow-2xl group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
              {service.icon}
            </div>
            
            {/* Blinking Dot Logic */}
            <div className="flex items-center gap-2">
               <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_8px_#facc15]" />
               <span className="text-zinc-800 font-mono text-4xl font-black select-none tracking-tighter group-hover:text-zinc-600 transition-colors uppercase">
                 {service.num}
               </span>
            </div>
          </div>

          <h3 className="text-3xl md:text-5xl font-black text-white mt-12 mb-5 group-hover:text-yellow-500 transition-colors duration-500 leading-tight tracking-tighter">
            {service.name}
          </h3>
          <p className="text-zinc-300 text-sm md:text-lg font-bold leading-relaxed max-w-[320px] drop-shadow-sm">
            {service.desc}
          </p>
        </div>

        {/* Feature Tags & Bottom Section */}
        <div className="mt-10">
           <div className="flex flex-wrap gap-2 mb-10">
              {service.features.map((feat, idx) => (
                <motion.span 
                  key={idx}
                  initial={{ opacity: 0.6, y: 10 }}
                  animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 10 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-zinc-100 text-[10px] md:text-[11px] font-black uppercase tracking-widest backdrop-blur-md transition-all"
                >
                  <CheckCircle2 size={12} className="text-yellow-500" />
                  {feat}
                </motion.span>
              ))}
           </div>
           
           <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <Link href="#contact" className="relative group/btn">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500 group-hover:text-white transition-colors duration-300">
                  Inquire Project
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-500" />
              </Link>
              
              <div className="flex gap-1.5">
                 <div className="h-1 w-4 bg-yellow-500 rounded-full" />
                 <div className="h-1 w-1 bg-zinc-800 rounded-full" />
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}