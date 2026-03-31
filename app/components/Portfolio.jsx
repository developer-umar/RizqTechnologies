"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Nova Finance",
    category: "Fintech Dashboard",
    img: "https://picsum.photos/id/1016/800/600",
  },
  {
    title: "Lumina Store",
    category: "E-commerce Platform",
    img: "https://picsum.photos/id/133/800/600",
  },
  {
    title: "Pulse Clinic",
    category: "Healthcare Website",
    img: "https://picsum.photos/id/201/800/600",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-black py-24 px-6" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tighter text-white">
            Work that <span className="text-yellow-400">Speaks for Itself</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={700}
                height={500}
                className="w-full aspect-video object-cover transition-all duration-500 group-hover:scale-110"
              />
              {/* Glare Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="p-8">
                <p className="text-yellow-400 text-sm tracking-widest">{project.category}</p>
                <h3 className="text-3xl font-semibold mt-2">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#contact" className="inline-block text-yellow-400 hover:text-white transition-colors text-lg font-medium">
            See all projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;