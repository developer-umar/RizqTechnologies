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
    <section className="bg-black py-32 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 text-yellow-400 text-[10px] tracking-[3px] uppercase shadow-[0_0_15px_rgba(250,204,21,0.05)]">
               <span className="w-1 h-1 rounded-full bg-yellow-400 animate-pulse" /> Our Stack
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Built with <br />
              <span className="text-yellow-400">Cutting Edge</span> <br />
              Tech.
            </h2>

            <div className="space-y-6 text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              <p>
                Rizq Technologies is highly dynamic. Hum leading cutting-edge technologies par kaam karte hain to ensure your project is built with the future in mind.
              </p>
              <p className="text-zinc-500 text-sm md:text-base">
                Jis bhi technology me aap bologe, usme aapka project build hoga. Performance, scalability, and security humari priority hai.
              </p>
            </div>

            {/* Simple stats or trust marks */}
            <div className="flex gap-8 pt-4 border-t border-white/10">
                <div>
                    <div className="text-white font-bold text-2xl">100%</div>
                    <div className="text-zinc-600 text-xs uppercase tracking-widest">Optimized</div>
                </div>
                <div>
                    <div className="text-white font-bold text-2xl">Tailored</div>
                    <div className="text-zinc-600 text-xs uppercase tracking-widest">Solutions</div>
                </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: THE PHYSICS BOX (50% Container) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[500px] md:h-[600px] w-full border border-white/10 rounded-[2.5rem] bg-zinc-950/40 relative shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-sm group"
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-yellow-400/[0.02] to-transparent pointer-events-none" />
            
            <FallingIcons icons={myIcons} />
            
            {/* Subtle floating label */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl text-zinc-500 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               Interactive Toolkit
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}