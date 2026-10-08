"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Managing heavy workshop parts, aluminum structures, and components for our solar projects used to be a logistical nightmare with manual logs. Droply's asset and inventory structure gave us complete visibility from warehouse to installation site.",
    author: "Qamar Rasheed",
    role: "CEO",
    company: "Power Bridge Solar Company",
    rating: 5,
  },
  {
    quote: "As a growing water plant, tracking 19L bottle deposits and daily customer credit was always messy. Since adopting Droply, our daily reconciliation takes minutes instead of hours, and our customers appreciate the absolute accuracy of their digital ledgers.",
    author: "Ch Muhammad Rasheed Anjum",
    role: "Owner",
    company: "Blue Mist Water Plant",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by industry leaders.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            See how distribution and heavy asset businesses scale their operations with Droply.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-sky-200/60" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed text-sm italic">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div className="mt-8 border-t border-slate-200/60 pt-4">
                <p className="font-bold text-slate-900 text-sm">{t.author}</p>
                <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                <p className="text-xs font-semibold text-sky-600 mt-0.5">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}