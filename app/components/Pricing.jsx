"use client";

import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    desc: "Perfect for small businesses & startups",
    features: ["5 Pages Website", "Fully Responsive Design", "Basic SEO Setup", "2 queries"],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹35,000",
    desc: "Best choice for growing businesses",
    features: ["Up to 12 Pages", "Advanced SEO Optimization", "Speed & Performance Boost", "6 queries "],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹75,000+",
    desc: "For ambitious brands & complex needs",
    features: ["Custom Web Application", "Full Branding & Design", "Unlimited Revisions", "Priority Support", "Ongoing Maintenance"],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="bg-black py-28 px-6" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
            Simple, Transparent <span className="text-yellow-400">Pricing</span>
          </h2>
          <p className="mt-5 text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business. No hidden fees. No surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`relative group bg-zinc-950 border rounded-3xl p-10 transition-all duration-300 flex flex-col h-full
                ${plan.popular 
                  ? "border-yellow-400 shadow-2xl shadow-yellow-400/20 scale-105" 
                  : "border-white/10 hover:border-white/30"
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-8 py-1.5 rounded-full tracking-wide">
                  MOST POPULAR
                </span>
              )}

              {/* Plan Name */}
              <h3 className="text-3xl font-semibold text-white">{plan.name}</h3>

              {/* Price */}
              <div className="mt-6 mb-2">
                <span className="text-6xl font-bold text-white tracking-tighter">{plan.price}</span>
                <span className="text-gray-400 text-lg ml-2">/one-time</span>
              </div>

              <p className="text-gray-400">{plan.desc}</p>

              {/* Features */}
              <ul className="mt-10 space-y-5 text-left flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300">
                    <span className="text-yellow-400 mt-1 text-xl">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`mt-12 w-full py-5 rounded-2xl font-semibold text-lg transition-all duration-300
                  ${plan.popular 
                    ? "bg-yellow-400 text-black hover:bg-yellow-300" 
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40"
                  }`}
              >
                {plan.popular ? "Get Started Now" : "Choose Plan"}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-12">
          All plans include free consultation • 100% satisfaction guarantee
        </p>
      </div>
    </section>
  );
};

export default Pricing;