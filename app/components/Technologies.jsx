"use client";
import FallingText from "./Fallingtext/FallingText";

export default function TechSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Our Tech <span className="text-yellow-400">Stack.</span>
          </h2>
          <p className="text-zinc-500 mt-4 text-lg">
            Drag the blocks. Shake the stack. We build with the best.
          </p>
        </div>

        {/* The Physics Box */}
        <div className="h-[500px] w-full border border-white/10 rounded-3xl bg-zinc-950/50 relative">
          <FallingText
            text="React Next.js Node.js MongoDB TailwindCSS TypeScript Laravel AWS Docker GraphQL Web3 GSAP PHP Framer-Motion"
            highlightWords={["Next.js", "React", "Web3", "Laravel", "Node.js"]}
            trigger="scroll"
            gravity={0.8}
            fontSize="2.5rem"
            mouseConstraintStiffness={0.3}
          />
        </div>
      </div>
    </section>
  );
}