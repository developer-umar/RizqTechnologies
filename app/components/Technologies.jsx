"use client";
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const FallingIcons = dynamic(() => import('./Fall/FallingIcon'), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-zinc-900/10 animate-pulse rounded-3xl" />
});

export default function TechSection() {
  const myIcons = [
    "https://skillicons.dev/icons?i=react",
    "https://skillicons.dev/icons?i=nextjs",
    "https://skillicons.dev/icons?i=mongodb",
    "https://skillicons.dev/icons?i=nodejs",
    "https://skillicons.dev/icons?i=tailwind",
    "https://skillicons.dev/icons?i=laravel",
    "https://skillicons.dev/icons?i=aws",
    "https://skillicons.dev/icons?i=docker",
    "https://skillicons.dev/icons?i=ts",
    "https://skillicons.dev/icons?i=figma",
    "https://skillicons.dev/icons?i=postman",
    "https://skillicons.dev/icons?i=git",
  ];

  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden border-t border-white/5">
      
      {/* CREATIVE BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Spotlight */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/[0.03] blur-[120px] rounded-full" />
        {/* Dark Mesh Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: PROFESSIONAL CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 text-yellow-400 text-[10px] tracking-[3px] uppercase">
               <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_8px_#facc15]" /> 
               Tech Infrastructure
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Engineered with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600">Next-Gen</span> <br />
              Systems.
            </h2>

            <div className="space-y-6 text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              <p>
                At Rizq Technologies, we prioritize a future-proof architecture. We leverage a high-performance stack to ensure every digital product is scalable, robust, and lightning-fast.
              </p>
              <p className="text-zinc-500 text-sm md:text-base italic">
                Our expertise spans across modern frameworks and cloud infrastructures, allowing us to build tailored solutions that meet the specific performance and security demands of your business.
              </p>
            </div>

            {/* Performance Stats */}
            <div className="flex gap-12 pt-8 border-t border-white/10">
                <div className="space-y-1">
                    <div className="text-white font-black text-3xl tracking-tighter">99.9%</div>
                    <div className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">Uptime Reliable</div>
                </div>
                <div className="space-y-1">
                    <div className="text-white font-black text-3xl tracking-tighter">Fast-Track</div>
                    <div className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">Delivery Cycle</div>
                </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: THE PHYSICS BOX */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[500px] md:h-[650px] w-full border border-white/10 rounded-[3rem] bg-zinc-950/20 relative shadow-2xl backdrop-blur-md group overflow-hidden"
          >
            {/* Box Inner Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#facc150a,transparent_70%)]" />
            
            <FallingIcons icons={myIcons} />
            
            {/* Interaction Tooltip */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl text-zinc-400 text-[9px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                Physics-Enabled Stack
            </div>

            {/* Corner Accent */}
            <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-zinc-800 group-hover:bg-yellow-500 transition-colors duration-500" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}