import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Features } from "@/components/sections/features";
import { Industries } from "@/components/sections/industries";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import ActionSection from "@/components/sections/action";

export default function LandingPage() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Features />
        <Industries />
        <Pricing />
        <Testimonials />
        <ActionSection />
      </main>
      <FloatingWhatsApp />
    </>
  );
}