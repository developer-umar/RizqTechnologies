"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Website Development",
    desc: "Blazing-fast, conversion-focused websites that look premium and perform even better.",
    img: "https://picsum.photos/id/1015/800/600",
  },
  {
    title: "Web Applications",
    desc: "Custom dashboards, SaaS platforms & scalable internal tools.",
    img: "https://picsum.photos/id/201/800/600",
  },
  {
    title: "SEO & Growth",
    desc: "Rank higher, drive organic traffic & turn visitors into paying customers.",
    img: "https://picsum.photos/id/237/800/600",
  },
  {
    title: "Branding & UI/UX",
    desc: "Modern design systems and delightful user experiences.",
    img: "https://picsum.photos/id/1005/800/600",
  },
];

const Services = () => {
  return (
    <section className="bg-black py-24 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tighter text-white">
            Services that <span className="text-yellow-400">Drive Results</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            From pixel-perfect websites to powerful web apps — we build everything your business needs to grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md"
            >
              {/* Glare Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <Image
                src={service.img}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover"
              />
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-yellow-400">{service.title}</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;