"use client";

import Link from "next/link";
import Image from "next/image";
import { useSignup } from "@/components/providers/signup-modal-provider";

export function Navbar() {
  const { openSignup } = useSignup();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Droply Logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-slate-900">Droply</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#features" className="hover:text-sky-600 transition-colors">Features</Link>
          <Link href="#industries" className="hover:text-sky-600 transition-colors">Industries</Link>
          <Link href="#pricing" className="hover:text-sky-600 transition-colors">Pricing</Link>
        </nav>

        {/* Auth & CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://app.dedroply.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
          >
            Log in
          </a>
          <button
            onClick={openSignup}
            className="rounded-full bg-sky-600 px-4 sm:px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-sky-700 transition-all active:scale-95 cursor-pointer"
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
}