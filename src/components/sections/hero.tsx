import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-800">
            <span className="flex h-2 w-2 rounded-full bg-sky-600 mr-2 animate-pulse"></span>
            Now open for early access in Pakistan
          </div>
          
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl leading-[1.1]">
            The Operating System for <span className="text-sky-600 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Distribution</span>
          </h1>
          
          <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
            Replace paper ledgers with automated digital khata, track every returnable asset, and dispatch riders instantly. Built specifically for Water, LPG, and Dairy businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="#pricing" 
              className="flex w-full sm:w-auto items-center justify-center rounded-full bg-sky-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-all active:scale-95"
            >
              Start 7-Day Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="#contact" 
              className="flex w-full sm:w-auto items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-3.5 text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all"
            >
              <PlayCircle className="mr-2 h-5 w-5 text-slate-400" />
              Book a Demo
            </Link>
          </div>
          <p className="text-sm text-slate-500 font-medium">No credit card required. Setup in 5 minutes.</p>
        </div>

        {/* Dashboard Mockup Placeholder */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative rounded-2xl border border-slate-200 bg-white/50 p-2 shadow-2xl backdrop-blur-sm sm:p-4">
            <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-100 aspect-[16/9] flex items-center justify-center">
               {/* Replace this div with your actual dashboard screenshot (next/image) later */}
               <span className="text-slate-400 font-medium">App Dashboard Screenshot Preview</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}