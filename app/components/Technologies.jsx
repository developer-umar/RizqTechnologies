"use client";
import FallingIcons from "./Fallingtext/FallingText";

const techIcons = [
  "https://skillicons.dev/icons?i=react",
  "https://skillicons.dev/icons?i=nextjs",
  "https://skillicons.dev/icons?i=mongodb",
  "https://skillicons.dev/icons?i=nodejs",
  "https://skillicons.dev/icons?i=tailwind",
  "https://skillicons.dev/icons?i=laravel",
  "https://skillicons.dev/icons?i=aws",
  "https://skillicons.dev/icons?i=docker",
  "https://skillicons.dev/icons?i=ts",
  "https://skillicons.dev/icons?i=php",
];

export default function TechSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
          Our <span className="text-yellow-400">Toolkit.</span>
        </h2>
      </div>

      <div className="h-[400px] w-full max-w-5xl mx-auto border border-white/5 bg-zinc-950/30 rounded-[2rem] overflow-hidden backdrop-blur-xl">
        <FallingIcons icons={techIcons} />
      </div>
    </section>
  );
}