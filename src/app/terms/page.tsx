import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Droply",
  description: "Read the terms and conditions for using Droply's distribution management platform.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 text-slate-700">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-6">
        Terms of Service
      </h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: October 2026</p>

      <div className="space-y-6 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Droply software, web portal, or rider mobile application, you agree to be bound by these Terms of Service. If you are using Droply on behalf of a business entity, you represent that you have the authority to bind that entity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Free Trial & Subscriptions</h2>
          <p>
            Droply offers a 7-day risk-free trial period. No hidden fees or automatic credit card charges are enforced during or after the trial unless explicitly agreed upon under a contracted billing tier. Subscription pricing remains transparent according to your selected plan (Silver, Gold, or Platinum).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Data Security & Privacy</h2>
          <p>
            We respect your business data privacy. All ledgers, customer records, and inventory data processed through Droply are encrypted, securely stored, and never shared with third-party advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Contact Information</h2>
          <p>
            For any queries regarding these terms, please contact us directly at <a href="mailto:contact@dedroply.com" className="text-sky-600 font-semibold underline">contact@dedroply.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}