"use client";

import { motion } from "framer-motion";

const metrics = [
  { id: 1, value: "5 Min", label: "Account Setup" },
  { id: 2, value: "Zero", label: "Hidden Fees" },
  { id: 3, value: "24/7", label: "Cloud Backup" },
  { id: 4, value: "Unlimited", label: "Customers" },
];

export function SocialProof() {
  return (
    <section className="border-y border-slate-200 bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8 sm:mb-10 px-2">
          Built for speed. No technical skills required.
        </p>
        
        {/* Responsive Grid: 2 columns on mobile, 4 columns on medium screens and up */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-1.5 p-3 rounded-2xl bg-slate-50/50 sm:bg-transparent border border-slate-100 sm:border-none"
            >
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-500">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}