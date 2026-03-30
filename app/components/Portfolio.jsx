"use client"
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Business Website",
    desc: "Modern responsive website for a local business.",
  },
  {
    title: "E-commerce Store",
    desc: "High-converting online store with payment integration.",
  },
  {
    title: "Dashboard App",
    desc: "Admin panel for managing business data.",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-black text-white py-20 px-6" id="portfolio">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Our <span className="text-yellow-400">Work</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-3">{project.desc}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Portfolio;