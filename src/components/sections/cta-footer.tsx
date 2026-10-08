import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6"; // Or use react-icons/fa
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800">

          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">Droply</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The complete operating system for distribution businesses. Automate khata, track returnable containers, and dispatch field routes effortlessly.
            </p>

            {/* Social & Contact Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61595031518493"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-sky-600 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/company/dedroply"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-sky-600 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/dedroply/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-pink-600 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@dedroply.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-sky-500 hover:text-white transition-all"
                aria-label="Email Support"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Product</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link href="#features" className="hover:text-white transition-colors">Digital Khata</Link></li>
              <li><Link href="#features" className="hover:text-white transition-colors">Asset Tracking</Link></li>
              <li><Link href="#features" className="hover:text-white transition-colors">Live Routing</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing & Tiers</Link></li>
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link href="#industries" className="hover:text-white transition-colors">Water Plants</Link></li>
              <li><Link href="#industries" className="hover:text-white transition-colors">LPG Distributors</Link></li>
              <li><Link href="#industries" className="hover:text-white transition-colors">Dairy & Milk</Link></li>
              <li><Link href="#industries" className="hover:text-white transition-colors">Bulk Logistics</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Support & Legal</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=help@dedroply.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Help Center</a></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Droply (PVT) Ltd. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;