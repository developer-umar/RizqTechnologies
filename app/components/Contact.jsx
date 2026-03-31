"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="relative bg-black pt-28 pb-48 px-6 overflow-hidden"
      id="contact"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[length:50px_50px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none">
            Let’s Create{" "}
            <span className="text-yellow-400">
              Something Legendary
            </span>
          </h2>
          <p className="mt-6 text-2xl text-gray-400 max-w-2xl mx-auto">
            Tell us about your vision. We’ll turn it into reality.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-zinc-950/70 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl"
        >
          <form className="space-y-10">
            {/* Name */}
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/30 pb-4 text-2xl text-white placeholder-transparent focus:outline-none focus:border-yellow-400 transition-all duration-300"
              />
              <label className="absolute left-0 -top-1 text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-focus:-top-1 peer-focus:text-sm peer-focus:text-yellow-400 transition-all duration-300 pointer-events-none">
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/30 pb-4 text-2xl text-white placeholder-transparent focus:outline-none focus:border-yellow-400 transition-all duration-300"
              />
              <label className="absolute left-0 -top-1 text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-focus:-top-1 peer-focus:text-sm peer-focus:text-yellow-400 transition-all duration-300 pointer-events-none">
                Business Email
              </label>
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/30 pb-4 text-2xl text-white placeholder-transparent focus:outline-none focus:border-yellow-400 resize-none transition-all duration-300"
              />
              <label className="absolute left-0 -top-1 text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-focus:-top-1 peer-focus:text-sm peer-focus:text-yellow-400 transition-all duration-300 pointer-events-none">
                Tell us about your project...
              </label>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="group relative w-full mt-8 py-7 bg-gradient-to-r from-yellow-400 to-amber-300 text-black font-semibold text-2xl rounded-2xl overflow-hidden shadow-xl shadow-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-400/60 transition-all"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                Send Your Vision
                <motion.span
                  className="text-4xl group-hover:translate-x-2 transition-transform"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 -translate-x-full group-hover:-translate-x-[30%] transition-transform duration-700" />
            </motion.button>
          </form>
        </motion.div>

        {/* Trust */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mt-12 text-sm text-gray-500">
          <div>✓ Response within 4 hours</div>
          <div>✓ 100% Confidential</div>
          <div>✓ No spam, ever</div>
        </div>
      </div>

      {/* 🔥 GRADIENT BLEND (IMPORTANT) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#050505] z-10" />
    </section>
  );
};

export default Contact;