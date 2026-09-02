"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We were losing track of at least 40 to 50 expensive 19L bottles every single week with paper registers. Droply's returnable asset tracking completely plugged that leak in our first month.",
    author: "Malik Usman",
    role: "Owner",
    company: "Al-Madina Pure Drinking Water, Sahiwal",
    rating: 5,
  },
  {
    quote: "Assigning delivery zones to my riders and matching physical cash collection against app data at night used to take hours. Now it takes 5 minutes.",
    author: "Chaudhry Bilal",
    role: "Operations Manager",
    company: "Chenab LPG & Cylinder Services",
    rating: 5,
  },
  {
    quote: "The zero-cost WhatsApp receipt sync is an absolute game-changer. Our customers love getting instant delivery notes directly from our plant's official number.",
    author: "Sheikh Tariq",
    role: "Managing Director",
    company: "FreshLife Dairy Distribution",
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
            Trusted by modern plant owners.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            See how distribution businesses across the region are scaling operations with Droply.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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