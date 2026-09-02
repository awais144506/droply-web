import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Features } from "@/components/sections/features";
import { Industries } from "@/components/sections/industries";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Footer } from "@/components/sections/cta-footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Features />
        <Industries />
        <Pricing />
        <Testimonials />

        {/* High-Energy Call to Action Section */}
        <section className="bg-sky-600 py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to completely automate your plant?
            </h2>
            <p className="mt-4 text-lg text-sky-100">
              Join the modern era of distribution. Set up your branch in under 5 minutes and explore all Gold features risk-free for 7 days.
            </p>
            <div className="mt-8">
              <Link 
                href="https://app.dedroply.com" 
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-sky-600 shadow-lg hover:bg-slate-50 transition-all active:scale-95"
              >
                Launch Your Workspace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}