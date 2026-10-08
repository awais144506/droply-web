"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { useSignup } from "@/components/providers/signup-modal-provider";

export function Hero() {
  const { openSignup } = useSignup();

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-sky-50/60 via-white to-white pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Subtle Background Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div 
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-sky-400 to-indigo-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75" 
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Copy */}
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/80 px-3.5 py-1 text-xs sm:text-sm font-semibold text-sky-800 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-sky-600 animate-pulse" />
            <span>Built for Water, LPG & Beverage Distribution</span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.12]">
            The Operating System for{" "}
            <span className="bg-linear-to-r from-sky-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Direct Distribution
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            Eliminate lost items deposits, reconcile customer advances instantly, and monitor rider routes in real time. Everything you need to scale daily route deliveries without paper ledgers.
          </p>
          
          {/* Single Focused CTA */}
          <div className="flex flex-col items-center justify-center pt-2">
            <button
              type="button"
              onClick={openSignup}
              className="group inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-xl shadow-slate-900/10 hover:bg-sky-600 hover:shadow-sky-600/25 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Book a Free Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-3 text-xs sm:text-sm text-slate-400 font-medium">
              Free 15-minute onboarding • No setup fee • No credit card required
            </p>
          </div>
        </div>

        {/* Dashboard Mockup Display */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/70 p-2 sm:p-3 shadow-2xl shadow-sky-950/10 backdrop-blur-md">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-900 aspect-16/10 sm:aspect-video shadow-inner">
              <Image
                src="/preview.jpg"
                alt="Droply Distribution Command Center Dashboard"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}