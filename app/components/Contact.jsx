"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("idle");
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("idle");
    }
  };

  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-32" id="contact">
      
      {/* ==================== GLOBAL BACKGROUND & IMAGE INTEGRATION ==================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle grid base */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[length:50px_50px]" />
        
        {/* The user's image, massively integrated into the right side of the entire section */}
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full opacity-50">
          <Image 
            src="/contact.jpg" 
            alt="The Rizq Studio Contact"
            fill
            className="w-full h-full object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          {/* Heavy gradients to melt the image into the black background seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/80 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>
        
        {/* Ambient glow to tie the yellow theme together */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 blur-[150px] rounded-full" />
      </div>

      {/* ==================== CONTENT CONTAINER ==================== */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Added gap-24 for deep separation between left form and right typography */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
          
          {/* ==================== LEFT SIDE: COLOSSAL TYPOGRAPHY & FORM ==================== */}
          <div className="w-full lg:w-1/2 max-w-2xl relative">
            
            {/* Header Area */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-10 lg:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 lg:mb-8 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-yellow-400 font-mono text-[10px] md:text-xs tracking-[3px] uppercase shadow-[0_0_15px_rgba(250,204,21,0.05)]">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" /> Project Inquiry
              </div>
              
              {/* Colossal Header without any container */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] text-white uppercase drop-shadow-2xl">
                Let's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600">
                  Build.
                </span>
              </h1>
              
              <p className="mt-6 lg:mt-8 text-base md:text-lg lg:text-xl text-zinc-400 font-medium leading-relaxed max-w-md">
                We partner with ambitious brands. Tell us about your vision, and we will engineer it into reality.
              </p>
            </motion.div>

            {/* Form Area - Directly integrated, no card borders */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8 lg:space-y-12">
                
                {/* Immersive Input Groups */}
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-white/10 pb-3 lg:pb-4 text-xl sm:text-2xl md:text-3xl font-light text-white placeholder-transparent focus:outline-none focus:border-yellow-400 transition-all duration-500 rounded-none"
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-0 -top-5 lg:-top-6 text-yellow-400 text-xs lg:text-sm uppercase tracking-[2px] font-bold peer-placeholder-shown:top-0 peer-placeholder-shown:text-xl peer-placeholder-shown:sm:text-2xl peer-placeholder-shown:md:text-3xl peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:normal-case peer-placeholder-shown:font-light peer-focus:-top-5 lg:peer-focus:-top-6 peer-focus:text-xs lg:peer-focus:text-sm peer-focus:text-yellow-400 peer-focus:uppercase peer-focus:tracking-[2px] peer-focus:font-bold transition-all duration-300 pointer-events-none"
                  >
                    What is your name?
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-white/10 pb-3 lg:pb-4 text-xl sm:text-2xl md:text-3xl font-light text-white placeholder-transparent focus:outline-none focus:border-yellow-400 transition-all duration-500 rounded-none"
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-0 -top-5 lg:-top-6 text-yellow-400 text-xs lg:text-sm uppercase tracking-[2px] font-bold peer-placeholder-shown:top-0 peer-placeholder-shown:text-xl peer-placeholder-shown:sm:text-2xl peer-placeholder-shown:md:text-3xl peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:normal-case peer-placeholder-shown:font-light peer-focus:-top-5 lg:peer-focus:-top-6 peer-focus:text-xs lg:peer-focus:text-sm peer-focus:text-yellow-400 peer-focus:uppercase peer-focus:tracking-[2px] peer-focus:font-bold transition-all duration-300 pointer-events-none"
                  >
                    Your business email
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    id="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-white/10 pb-3 lg:pb-4 text-xl sm:text-2xl md:text-3xl font-light text-white placeholder-transparent focus:outline-none focus:border-yellow-400 resize-none transition-all duration-500 rounded-none"
                  />
                  <label 
                    htmlFor="message"
                    className="absolute left-0 -top-5 lg:-top-6 text-yellow-400 text-xs lg:text-sm uppercase tracking-[2px] font-bold peer-placeholder-shown:top-0 peer-placeholder-shown:text-xl peer-placeholder-shown:sm:text-2xl peer-placeholder-shown:md:text-3xl peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:normal-case peer-placeholder-shown:font-light peer-focus:-top-5 lg:peer-focus:-top-6 peer-focus:text-xs lg:peer-focus:text-sm peer-focus:text-yellow-400 peer-focus:uppercase peer-focus:tracking-[2px] peer-focus:font-bold transition-all duration-300 pointer-events-none"
                  >
                    Tell us about the project
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={status !== "idle"}
                  className={`group relative inline-flex items-center gap-4 lg:gap-6 mt-4 lg:mt-8 py-3 lg:py-5 px-6 lg:px-10 bg-transparent border border-yellow-400 text-yellow-400 font-black text-base md:text-xl lg:text-2xl rounded-full overflow-hidden transition-all duration-500 uppercase tracking-widest ${
                    status === "success" ? "border-green-500 text-green-500" : ""
                  } ${status !== "idle" ? "cursor-default" : "hover:text-black"}`}
                >
                  {/* Fill effect background */}
                  <div className={`absolute inset-0 bg-yellow-400 translate-y-[100%] ${status === "idle" ? "group-hover:translate-y-0" : ""} transition-transform duration-500 ease-in-out z-0`} />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    {status === "idle" && "Send Request"}
                    {status === "loading" && "Sending..."}
                    {status === "success" && "Success!"}
                    
                    {status === "idle" && (
                      <motion.span
                        className="text-2xl lg:text-3xl"
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    )}
                    {status === "success" && <span className="text-xl lg:text-2xl">✓</span>}
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* ==================== RIGHT SIDE: TYPOGRAPHY-FIRST CONTACT INFO ==================== */}
          {/* No boxes, no backgrounds. Just pure, clean text floating over the integrated image. */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center mt-8 lg:mt-0 pt-8 lg:pt-0 border-t lg:border-none border-white/10 lg:min-h-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-12 lg:space-y-20"
            >
              
              {/* Massive Direct Contact Link */}
              <div>
                <h4 className="text-zinc-500 font-mono text-[10px] lg:text-xs tracking-[4px] uppercase mb-4 lg:mb-6">Direct Inquiries</h4>
                <a href="mailto:contact.rizqtech@gmail.com" className="group relative inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white hover:text-yellow-400 transition-colors duration-500 break-all">
                  contact.rizqtech@gmail.com
                  {/* Animated underline */}
                  <div className="absolute -bottom-2 left-0 w-0 h-px bg-yellow-400 transition-all duration-500 ease-out group-hover:w-full" />
                </a>
              </div>

              {/* Agency Process - Typography based, no cards */}
              <div>
                <h4 className="text-zinc-500 font-mono text-[10px] lg:text-xs tracking-[4px] uppercase mb-6 lg:mb-10">How We Work</h4>
                
                <div className="space-y-6 lg:space-y-10">
                  <div className="flex gap-4 lg:gap-6 items-start group">
                    <span className="text-yellow-400/50 font-mono text-base lg:text-xl group-hover:text-yellow-400 transition-colors duration-300">01</span>
                    <div>
                      <h5 className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-2 lg:mb-3 tracking-wide group-hover:text-yellow-400 transition-colors duration-300">Discovery</h5>
                      <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">We map out your vision, target audience, and engineering constraints.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 lg:gap-6 items-start group">
                    <span className="text-yellow-400/50 font-mono text-base lg:text-xl group-hover:text-yellow-400 transition-colors duration-300">02</span>
                    <div>
                      <h5 className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-2 lg:mb-3 tracking-wide group-hover:text-yellow-400 transition-colors duration-300">Architecture</h5>
                      <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">Designing the scalable tech foundation and premium visual language.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 lg:gap-6 items-start group">
                    <span className="text-yellow-400/50 font-mono text-base lg:text-xl group-hover:text-yellow-400 transition-colors duration-300">03</span>
                    <div>
                      <h5 className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-2 lg:mb-3 tracking-wide group-hover:text-yellow-400 transition-colors duration-300">Execution</h5>
                      <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">Pixel-perfect frontend development and high-performance deployment.</p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

     
    </section>
  );
};

export default Contact;