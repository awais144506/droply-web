"use client";

import { motion } from "framer-motion";
import { BookOpen, RefreshCw, Map, Truck } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: <BookOpen className="h-6 w-6 text-sky-600" />,
        title: "Digital Khata & Credit",
        description: "Throw away the paper ledgers. Instantly track customer balances, security deposits, and advance payments with automated math. Give your customers full transparency.",
        imageSrc: "/placeholder-khata.png", // <-- Replace with your AI image path
        imageAlt: "Digital Khata Interface",
    },
    {
        icon: <RefreshCw className="h-6 w-6 text-indigo-600" />,
        title: "Returnable Asset Tracking",
        description: "Never lose a 19L bottle or cylinder again. Track exact inventory in the plant, on the truck, and at the customer's location. Stop bleeding money on lost assets.",
        imageSrc: "/placeholder-assets.png", // <-- Replace with your AI image path
        imageAlt: "Asset Tracking Dashboard",
    },
    {

        icon: <Map className="h-6 w-6 text-emerald-600" />,

        title: "Live Dispatch & Routing",
        description: "Assign specific delivery zones to your riders. Track daily field progress, view real-time maps, and reconcile cash collected versus app data instantly.",
        imageSrc: "/placeholder-dispatch.png", // <-- Replace with your AI image path
        imageAlt: "Live Dispatch Map",
    },
    {
        icon: <Truck className="h-6 w-6 text-amber-600" />,
        title: "Production & Vehicle Management",
        description: "Monitor your daily production batches and manage your delivery fleet. Keep tabs on vehicle maintenance, fuel costs, and daily dispatch readiness all in one unified place.",
        imageSrc: "/placeholder-vehicles.png", // <-- Replace with your AI image path
        imageAlt: "Vehicle and Production Management",
    },
];

export function Features() {
    return (
        <section id="features" className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center mb-24"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Everything you need to scale your routes.
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Droply automates the heavy lifting of distribution logistics so you can focus on expanding your territory.
                    </p>
                </motion.div>

                {/* Alternating Feature Rows */}
                <div className="space-y-24 md:space-y-32">
                    {features.map((feature, index) => {
                        // Determine if image should be on the left (odd indexes)
                        const isImageLeft = index % 2 !== 0;

                        return (
                            <div key={index} className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-24">

                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: isImageLeft ? 30 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                                    className={`flex flex-col ${isImageLeft ? "md:order-2" : "md:order-1"}`}
                                >
                                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 shadow-sm border border-slate-100">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>

                                {/* Image Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: isImageLeft ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                                    className={`relative ${isImageLeft ? "md:order-1" : "md:order-2"}`}
                                >
                                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl flex items-center justify-center">
                                        {/* 
                                          The Next.js Image component. 
                                          Update the src paths in the features array above once your AI images are ready! 
                                        */}
                                        <Image
                                            src={feature.imageSrc}
                                            alt={feature.imageAlt}
                                            fill
                                            sizes="(max-width: 1200px) 100vw, 70vw"
                                            loading="eager"
                                        />

                                        {/* Fallback text just in case the image hasn't been placed yet */}
                                        <div className="absolute inset-0 flex items-center justify-center -z-10 text-slate-400 font-medium">
                                            [ Placeholder: {feature.imageAlt} ]
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}