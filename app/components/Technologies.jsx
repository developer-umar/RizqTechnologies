"use client";
import dynamic from 'next/dynamic';

// SSR: false is mandatory for Matter.js to work with Next.js/Vercel
const FallingIcons = dynamic(() => import('./Fall/FallingIcon'), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-zinc-900/20 animate-pulse" />
});

export default function TechSection() {
 const myIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
];
  return (
    <section className="bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-yellow-400/20 bg-yellow-400/5 text-yellow-400 text-[10px] tracking-[3px] uppercase shadow-[0_0_20px_rgba(250,204,21,0.1)]">
            Our Ecosystem
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            The <span className="text-yellow-400">Toolkit.</span>
          </h2>
        </div>

        {/* Height increased for 4x bigger icons */}
        <div className="h-[600px] w-full border border-white/5 rounded-[3rem] bg-gradient-to-b from-zinc-950 to-black relative shadow-3xl">
          <FallingIcons icons={myIcons} gravity={0.5} />
          
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 pointer-events-none rounded-[3rem] border border-white/10" />
        </div>
      </div>
    </section>
  );
}