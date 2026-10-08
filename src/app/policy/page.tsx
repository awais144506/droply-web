import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Droply",
  description: "Learn how Droply handles and protects your distribution and customer data.",
};

export default function PolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 text-slate-700">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-6">
        Privacy Policy
      </h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: October 2026</p>

      <div className="space-y-6 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            When you register for early access or create a workspace on Droply, we collect specific lead and business details you voluntarily provide, including your <strong>name, phone number, and city</strong>. We also collect core operational metadata (such as staff credentials and inventory logs) once your branch is active to power your distribution workflows.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Data</h2>
          <p>
            Your operational data—such as customer ledgers, asset tracking logs, and order settlements—is used exclusively to power your distribution management dashboard, generate automatic receipts, and reconcile rider accounts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Data Protection</h2>
          <p>
            We implement strict database isolation policies and secure cloud infrastructure protocols (via Prisma and managed cloud instances) to ensure unauthorized parties cannot access your operational ledgers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Questions & Support</h2>
          <p>
            If you have questions regarding data retention or wish to request account deletion, reach out to our team at <a href="mailto:contact@dedroply.com" className="text-sky-600 font-semibold underline">contact@dedroply.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}