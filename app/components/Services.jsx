"use client"
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    desc: "Modern, fast and responsive websites for your business.",
  },
  {
    title: "SEO Optimization",
    desc: "Rank higher on Google and get more traffic.",
  },
  {
    title: "Web Applications",
    desc: "Custom dashboards and scalable web apps.",
  },
  {
    title: "Digital Marketing",
    desc: "Grow your brand with smart marketing strategies.",
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-20 px-6" id="services">

      <div className="max-w-6xl mx-auto text-center">

        {/* 🔥 Heading */}
        <h2 className="text-4xl font-bold">
          Our <span className="text-yellow-400">Services</span>
        </h2>

        <p className="text-gray-400 mt-4">
          We provide everything you need to grow your business online.
        </p>

        {/* 🧩 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                {service.title}
              </h3>
              <p className="text-gray-400 mt-3">{service.desc}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;

