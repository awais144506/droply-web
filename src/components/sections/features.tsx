"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, RefreshCw, Map, MessageSquare } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    },
};

const features = [
    {
        icon: <BookOpen className="h-6 w-6 text-sky-600" />,
        title: "Digital Khata & Credit",
        description: "Throw away the paper ledgers. Instantly track customer balances, security deposits, and advance payments with automated math.",
        className: "md:col-span-2 bg-gradient-to-br from-sky-50 to-white",
    },
    {
        icon: <RefreshCw className="h-6 w-6 text-indigo-600" />,
        title: "Returnable Asset Tracking",
        description: "Never lose a 19L bottle or cylinder again. Track exact inventory in the plant, on the truck, and at the customer's location.",
        className: "md:col-span-1 bg-white",
    },
    {
        icon: <Map className="h-6 w-6 text-emerald-600" />,
        title: "Live Dispatch & Routing",
        description: "Assign specific delivery zones to your riders. Track daily field progress and reconcile cash collected versus app data instantly.",
        className: "md:col-span-1 bg-white",
    },
    {
        icon: <MessageSquare className="h-6 w-6 text-amber-600" />,
        title: "Zero-Cost WhatsApp Receipts",
        description: "Sync your plant's phone number via QR code. Deliveries instantly trigger automated digital receipts directly to customers—with $0 Meta API fees.",
        className: "md:col-span-2 bg-gradient-to-br from-amber-50 to-white",
    },
];

export function Features() {
    return (
        <section id="features" className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Everything you need to scale your routes.
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Droply automates the heavy lifting of distribution logistics so you can focus on expanding your territory.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-3"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow ${feature.className}`}
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-100">
                                {feature.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-slate-900">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}