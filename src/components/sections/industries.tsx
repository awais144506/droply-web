"use client";

import { motion } from "framer-motion";
import { Droplets, Flame, Milk, ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Water Purification & Refill",
    description: "Manage 19L bottle lifecycles, track recipe BoMs for caps and seals, and maintain accurate customer security deposits.",
    icon: <Droplets className="h-8 w-8 text-sky-600" />,
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    title: "LPG Gas Distribution",
    description: "Track commercial vs. domestic cylinder pricing, monitor exact cylinder weights, and dispatch your fleet with live GPS.",
    icon: <Flame className="h-8 w-8 text-rose-600" />,
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    title: "Dairy & Fresh Milk",
    description: "Automate daily subscription routing, track fresh inventory shelf-life, and send automated Khata reminders to households.",
    icon: <Milk className="h-8 w-8 text-emerald-600" />,
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

export function Industries() {
  return (
    <section id="industries" className="border-y border-slate-200 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for the realities of local distribution.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Generic CRM software doesn&apos;t understand returnable assets or daily route tracking. Droply is engineered specifically for your business model.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative overflow-hidden rounded-3xl border ${industry.border} ${industry.bg} p-8 transition-all hover:shadow-lg`}
            >
              <div className="mb-6 inline-block rounded-2xl bg-white p-4 shadow-sm">
                {industry.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{industry.title}</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                {industry.description}
              </p>
              <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                Explore Use Case <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}