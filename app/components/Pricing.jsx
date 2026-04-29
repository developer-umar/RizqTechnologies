"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquareCode } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    tag: "Branding",
    name: "Brand & UI Design",
    desc: "Bold identities & stunning interfaces that make your brand unforgettable.",
    img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200",
    span: "md:col-span-4",
  },
  {
    num: "02",
    tag: "Engineering",
    name: "Web Development",
    desc: "High-performance websites built for speed, scale & conversions.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    span: "md:col-span-8",
  },
  {
    num: "03",
    tag: "Growth",
    name: "Digital Marketing",
    desc: "Performance-driven marketing that turns traffic into revenue.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    span: "md:col-span-6",
  },
  {
    num: "04",
    tag: "Mobile",
    name: "App Development",
    desc: "Seamless mobile apps designed for engagement & performance.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    span: "md:col-span-6",
  },

  // ⭐ NEW SERVICE (IMPORTANT)
  {
    num: "05",
    tag: "Custom",
    name: "Custom Software",
    desc: "Tailored software solutions built exactly for your business workflows & problems.",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200",
    span: "md:col-span-12",
  },
];

export default function ServicesBentoMagic() {
  return (
    <section className="relative min-h-screen bg-black py-24 px-4 md:px-10 overflow-hidden">

      {/* 🔥 STRONG YELLOW GRID */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 
        bg-[linear-gradient(to_right,#facc15_1px,transparent_1px),
        linear-gradient(to_bottom,#facc15_1px,transparent_1px)]
        bg-[size:50px_50px]" />
      </div>

      {/* 🔥 AMBIENT GLOW (LIKE PRICING) */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-yellow-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Services</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            We craft high-performance digital solutions tailored to your business needs.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`${service.span} relative group rounded-3xl overflow-hidden border border-white/10`}
            >

              {/* IMAGE */}
              <img
                src={service.img}
                alt={service.name}
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/80" />

              {/* CONTENT */}
              <div className="relative z-10 p-8 flex flex-col justify-between h-full">

                <div>
                  <span className="text-yellow-400 text-xs uppercase font-bold">
                    {service.tag}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-3">
                    {service.name}
                  </h3>

                  <p className="text-zinc-400 mt-3 text-sm">
                    {service.desc}
                  </p>
                </div>

                {/* BUTTON */}
                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full 
                  bg-yellow-400 text-black font-bold text-xs uppercase 
                  hover:bg-yellow-300 transition shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                >
                  Get Started
                  <MessageSquareCode className="w-4 h-4" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}