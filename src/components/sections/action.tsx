"use client";

import { ArrowRight } from "lucide-react";
import { useSignup } from "@/components/providers/signup-modal-provider";

export function ActionSection() {
    const { openSignup } = useSignup();

    return (
        <div> 
            <section className="bg-sky-600 py-20">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Ready to completely automate your branch?
                    </h2>
                    <p className="mt-4 text-lg text-sky-100">
                        Join the modern era of distribution. Set up your branch in under 5 minutes and explore all features risk-free for 7 days.
                    </p>
                    <div className="mt-8">
                        <button
                            type="button"
                            onClick={openSignup}
                            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-sky-600 shadow-lg hover:bg-slate-50 transition-all active:scale-95 cursor-pointer"
                        >
                            Launch Your Workspace
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ActionSection;