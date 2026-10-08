"use client";

import { motion } from "framer-motion";
import { Droplets, Flame, Milk, Warehouse, Cake, UtensilsCrossed } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    title: "Water Purification & Refill Plants",
    description: "Manage 19L bottle lifecycles, track recipe BoMs for filtration caps and seals, and maintain accurate customer security deposit ledgers.",
    icon: <Droplets className="h-6 w-6 text-sky-600" />,
    imageSrc: "/placeholder-water.png", // <-- Replace with your real photo
    imageAlt: "Water Plant Bottling & Distribution",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-100",
  },
  {
    title: "Warehouse & Inventory Hubs",
    description: "Maintain multi-location stock clarity, control bulk material handling, and stop inventory leakages with automated digital logs.",
    icon: <Warehouse className="h-6 w-6 text-indigo-600" />,
    imageSrc: "/placeholder-warehouse.png", // <-- Replace with your real photo
    imageAlt: "Warehouse Management",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
  },
  {
    title: "LPG Gas Cylinder Distribution",
    description: "Track commercial vs. domestic cylinder pricing, monitor cylinder serial numbers and rotation, and dispatch delivery trucks seamlessly.",
    icon: <Flame className="h-6 w-6 text-rose-600" />,
    imageSrc: "/placeholder-lpg.png", // <-- Replace with your real photo
    imageAlt: "LPG Gas Distribution",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-100",
  },
  {
    title: "Dairy & Fresh Milk Delivery",
    description: "Automate daily subscription routing, track fresh milk inventory quantities, and send automated Khata bill reminders to households.",
    icon: <Milk className="h-6 w-6 text-emerald-600" />,
    imageSrc: "/placeholder-dairy.png", // <-- Replace with your real photo
    imageAlt: "Dairy & Milk Distribution",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    title: "Commercial Bakeries",
    description: "Handle daily wholesale dispatches to local shops, manage raw material recipes, and track returnable bread/pastry crates effortlessly.",
    icon: <Cake className="h-6 w-6 text-amber-600" />,
    imageSrc: "/placeholder-bakery.png", // <-- Replace with your real photo
    imageAlt: "Bakery Wholesale Supply",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    title: "Local Restaurants & Supply Chains",
    description: "Streamline daily food ingredient supply orders, coordinate multi-stop kitchen dispatches, and manage vendor payment khata in one place.",
    icon: <UtensilsCrossed className="h-6 w-6 text-purple-600" />,
    imageSrc: "/placeholder-restaurant.png", // <-- Replace with your real photo
    imageAlt: "Local Restaurant Logistics",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-100",
  },
];

export function Industries() {
  return (
    <section id="industries" className="border-y border-slate-200 bg-slate-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for the realities of local distribution.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Generic software doesn&apos;t understand returnable crates, cylinders, or route-based daily Khata. Droply is engineered specifically for these exact workflows.
          </p>
        </motion.div>

        {/* Industry Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Fallback visual indicator if image file is missing */}
                <div className="absolute inset-0 flex items-center justify-center -z-10 text-slate-400 text-xs font-medium">
                  [ Photo: {item.title} ]
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-100 px-3 py-1.5 shadow-sm">
                    {item.icon}
                    <span className="text-xs font-bold text-slate-800">{item.title.split(" ")[0]} Hub</span>
                  </div>
                  
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Industries;