import type { Metadata } from "next";
import "./globals.css";
import { SignupProvider } from "@/components/providers/signup-modal-provider";

export const metadata: Metadata = {
  title: {
    default: "Droply Management Software",
    template: "%s | Droply"
  },
  description: "Automate your distribution business. Track returnable assets, manage digital khata, dispatch riders, and send automated WhatsApp receipts. Built for Water, LPG, and Dairy.",
  keywords: [
    "distribution software",
    "water delivery management",
    "LPG distribution system",
    "digital khata",
    "returnable asset tracking",
    "route optimization",
    "inventory management",
    "business automation Pakistan"
  ],
  authors: [{ name: "Droply" }],
  openGraph: {
    title: "Droply | The Operating System for Distribution",
    description: "Replace paper ledgers with automated asset tracking, live dispatch, and zero-cost WhatsApp receipts.",
    type: "website",
    locale: "en_PK",
    siteName: "Droply",
  },
  twitter: {
    card: "summary_large_image",
    title: "Droply | Distribution Management",
    description: "Automate your khata, track assets, and manage riders effortlessly.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <SignupProvider>
          {children}
        </SignupProvider>
      </body>
    </html>
  );
}