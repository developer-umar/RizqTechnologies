"use client";

import React from "react";
import { motion } from "framer-motion";

const phoneNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918576057583";

const message = encodeURIComponent(
  "Hello! I want to know more about Rizq Technologies."
);

const plans = [
  {
    name: "Starter",
    price: "₹12,000",
    description:
      "Perfect for startups, local businesses & personal brands looking for a professional online presence.",
    features: [
      "Up to 5 Custom Designed Pages",
      "1 Year Complimentary Domain",
      "1 Year Complimentary Hosting",
      "Mobile Responsive Design",
      "WhatsApp Integration",
      "Social Media Integration",
      "Basic SEO Optimization",
      "Fast Loading Performance",
      "15 Days Free Support",
    ],
    popular: false,
  },

  {
    name: "Business",
    price: "₹25,000",
    description:
      "Designed for growing businesses that need a premium and conversion-focused digital experience.",
    features: [
      "10–12 Premium Custom Pages",
      "Modern Premium UI/UX",
      "Advanced SEO Optimization",
      "Business Email Setup",
      "Lead Generation System",
      "Google Business Integration",
      "Speed Optimization",
      "Custom Logo Design",
      "30 Days Priority Support",
    ],
    popular: true,
  },

  {
    name: "Premium",
    price: "₹50,000+",
    description:
      "Built for premium brands & enterprises requiring advanced digital experiences.",
    features: [
      "15–20 Fully Custom Pages",
      "Advanced Animations",
      "3D Integrations",
      "AI Chatbot Integration",
      "CMS Integration",
      "Advanced Functionalities",
      "API Integrations",
      "Enterprise-Level SEO",
      "3 Months Dedicated Support",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative bg-black py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-yellow-400 uppercase tracking-[5px] font-semibold mb-5">
            Pricing Plans
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Premium Digital <br />
            Solutions.
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Modern websites crafted for businesses that want to scale,
            dominate & grow online.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-[32px] border p-8 flex flex-col backdrop-blur-xl transition-all duration-500 hover:-translate-y-2
              
              ${
                plan.popular
                  ? "border-yellow-400 bg-zinc-900 shadow-[0_0_60px_rgba(250,204,21,0.15)] scale-[1.03]"
                  : "border-white/10 bg-zinc-950 hover:border-yellow-400/40"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-6 -translate-y-1/2">
                  <div className="bg-yellow-400 text-black px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-3xl font-bold text-white">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-6 flex items-end gap-2">
                <span className="text-6xl font-black text-white tracking-tight">
                  {plan.price}
                </span>

                {plan.name !== "Premium" && (
                  <span className="text-zinc-500 mb-2">
                    /project
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-zinc-400 mt-5 leading-relaxed">
                {plan.description}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 my-8" />

              {/* Features */}
              <ul className="space-y-5 flex-1">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-zinc-300"
                  >
                    <span className="text-yellow-400 mt-1 text-lg">
                      ✔
                    </span>

                    <span className="leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 w-full py-4 rounded-2xl text-center font-bold uppercase tracking-wide transition-all duration-300
                  
                  ${
                    plan.popular
                      ? "bg-yellow-400 text-black hover:bg-yellow-300 shadow-[0_0_30px_rgba(250,204,21,0.25)]"
                      : "bg-white/5 text-white border border-white/10 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                  }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-zinc-500 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            Every project is uniquely crafted according to your business goals,
            required features & overall project complexity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;