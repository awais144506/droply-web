"use client";

import { motion } from "framer-motion";

const metrics = [
  { id: 1, value: "100+", label: "Distribution Hubs" },
  { id: 2, value: "500k+", label: "Bottles Tracked" },
  { id: 3, value: "Rs 50M+", label: "Khata Managed" },
  { id: 4, value: "Zero", label: "WhatsApp API Fees" },
];

export function SocialProof() {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Trusted by growing distribution businesses
        </p>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-2"
            >
              <span className="text-4xl font-extrabold text-slate-900">{metric.value}</span>
              <span className="text-sm font-medium text-slate-500">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}