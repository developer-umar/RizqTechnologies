"use client";
import FallingIcons from "./FallingIcons";

export default function TechSection() {
  // Direct URLs to technology icons (optimized for Matter.js)
  const myIcons = [
    "https://skillicons.dev/icons?i=react",
    "https://skillicons.dev/icons?i=nextjs",
    "https://skillicons.dev/icons?i=mongodb",
    "https://skillicons.dev/icons?i=nodejs",
    "https://skillicons.dev/icons?i=tailwind",
    "https://skillicons.dev/icons?i=laravel",
    "https://skillicons.dev/icons?i=php",
    "https://skillicons.dev/icons?i=aws",
    "https://skillicons.dev/icons?i=docker",
    "https://skillicons.dev/icons?i=ts",
    "https://skillicons.dev/icons?i=postman",
    "https://skillicons.dev/icons?i=figma",
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-white tracking-tighter uppercase">
            Our <span className="text-yellow-400">Toolkit</span>
          </h2>
          <p className="text-zinc-500 mt-4">Shake them, drag them, or just watch them fall.</p>
        </div>

        {/* This container must have a defined height */}
        <div className="h-[500px] w-full border border-white/10 rounded-[2.5rem] bg-zinc-950/50 backdrop-blur-md overflow-hidden relative shadow-2xl">
          <FallingIcons icons={myIcons} />
        </div>
      </div>
    </section>
  );
}