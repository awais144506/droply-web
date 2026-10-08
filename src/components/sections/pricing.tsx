"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { useSignup } from "@/components/providers/signup-modal-provider";

interface PricingTier {
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyMonthlyPrice: number;
  popular?: boolean;
  dark?: boolean;
  features: { text: string; included: boolean; highlight?: boolean }[];
  buttonText: string;
  buttonClass: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Silver",
    tagline: "Perfect for smaller, single-vehicle operations.",
    monthlyPrice: 5000,
    yearlyMonthlyPrice: 4000,
    features: [
      { text: "Up to 4 Staff Users", included: true, highlight: true },
      { text: "Zones, Customers & Products", included: true },
      { text: "Deliveries & Invoices", included: true },
      { text: "Wastage & Asset Tracking", included: true },
      { text: "Suppliers & Expenses Khata", included: true },
      { text: "Vehicle Fleet & Payroll", included: true },
      { text: "Live GPS Tracking", included: false },
      { text: "Production Module", included: false },
    ],
    buttonText: "Start Free Trial",
    buttonClass: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  },
  {
    name: "Gold",
    tagline: "The standard for growing multi-route plants.",
    monthlyPrice: 10000,
    yearlyMonthlyPrice: 8000,
    popular: true,
    features: [
      { text: "Up to 7 Staff Users", included: true, highlight: true },
      { text: "Everything in Silver", included: true },
      { text: "Sale Returns & Recovery", included: true, highlight: true },
      { text: "Purchase Orders & Payments", included: true, highlight: true },
      { text: "Purchase Returns", included: true },
      { text: "Live GPS Tracking", included: false },
      { text: "Production Module", included: false },
    ],
    buttonText: "Start Free Trial",
    buttonClass: "bg-amber-600 text-white hover:bg-amber-700 shadow-lg shadow-amber-600/20",
  },
  {
    name: "Platinum",
    tagline: "Enterprise control with full operations suite.",
    monthlyPrice: 15000,
    yearlyMonthlyPrice: 12000,
    dark: true,
    features: [
      { text: "Up to 10 Staff Users", included: true, highlight: true },
      { text: "Everything in Gold", included: true },
      { text: "Production Module (BoM)", included: true, highlight: true },
      { text: "Live GPS Tracking (GPS)", included: true, highlight: true },
      { text: "Assigned Field Tasks", included: true },
      { text: "Priority Support & Setup", included: true },
    ],
    buttonText: "Start Free Trial",
    buttonClass: "bg-white text-slate-900 hover:bg-slate-100",
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const { openSignup } = useSignup();

  const formatCurrency = (val: number) => `Rs ${val.toLocaleString("en-PK")}`;

  return (
    <section id="pricing" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header & Toggle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl uppercase">
            Simple & transparent
          </h2>
          <h2 className="text-xl font-bold tracking-tight text-slate-600">
            No hidden fees for additional features.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start with a 7-day free platinum trial. What you see is what you pay.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isYearly ? "text-slate-900" : "text-slate-500"}`}>Pay Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-amber-600 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle billing frequency"
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isYearly ? "translate-x-8" : "translate-x-1"}`} />
            </button>
            <span className={`flex items-center text-sm font-bold ${isYearly ? "text-slate-900" : "text-slate-500"}`}>
              Pay Yearly
              <span className="ml-2 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] text-emerald-700 uppercase tracking-wider font-extrabold">20% Off</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const currentPrice = isYearly ? tier.yearlyMonthlyPrice : tier.monthlyPrice;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col rounded-3xl p-8 relative transition-all ${tier.dark
                    ? "bg-slate-900 text-white border border-slate-800 shadow-xl"
                    : tier.popular
                      ? "bg-linear-to-b from-amber-50/50 via-white to-white border-2 border-amber-400 shadow-xl ring-4 ring-amber-400/10"
                      : "bg-white border border-slate-200 shadow-sm"
                  }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-36 rounded-full bg-amber-500 px-3 py-1 text-center text-xs font-bold text-white uppercase tracking-wider shadow-md flex items-center justify-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </div>
                )}

                <h3 className={`text-xl font-bold ${tier.dark ? "text-white" : "text-slate-900"}`}>{tier.name}</h3>
                <p className={`mt-2 text-sm ${tier.dark ? "text-slate-400" : "text-slate-500"}`}>{tier.tagline}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${tier.dark ? "text-white" : "text-slate-900"}`}>
                    {formatCurrency(currentPrice)}
                  </span>
                  <span className={`text-sm font-semibold ${tier.dark ? "text-slate-400" : "text-slate-500"}`}>/mo</span>
                </div>

                <button
                  type="button"
                  onClick={openSignup}
                  className={`mt-8 block w-full rounded-xl px-4 py-3 text-center text-sm font-bold transition-all active:scale-[0.98] cursor-pointer ${tier.buttonClass}`}
                >
                  {tier.buttonText}
                </button>

                <ul className="mt-8 space-y-4 flex-1">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm">
                      {feature.included ? (
                        <Check className={`mr-3 h-5 w-5 shrink-0 ${tier.popular ? "text-amber-600" : tier.dark ? "text-sky-400" : "text-sky-500"}`} />
                      ) : (
                        <X className="mr-3 h-5 w-5 shrink-0 text-slate-300" />
                      )}
                      <span className={
                        !feature.included
                          ? "text-slate-400 line-through decoration-slate-300"
                          : feature.highlight
                            ? `font-bold ${tier.dark ? "text-white" : "text-slate-900"}`
                            : tier.dark ? "text-slate-300" : "text-slate-700"
                      }>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}