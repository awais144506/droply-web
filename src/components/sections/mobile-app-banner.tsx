/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { X, Play } from "lucide-react";

export function MobileAppBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const apkUrl = process.env.NEXT_PUBLIC_MOBILE_APK_URL || "#";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-3 shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.1)] sm:hidden pb-safe">
      
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="p-1 text-slate-400 hover:text-slate-600 focus:outline-none"
        aria-label="Close app banner"
      >
        <X className="h-5 w-5" />
      </button>

      {/* App Info */}
      <div className="flex flex-1 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
          <Play className="h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-900 leading-tight">Droply</span>
          <span className="text-xs text-slate-500 font-medium">Rider Mobile App</span>
        </div>
      </div>

      {/* Download Action - Forces direct file download */}
      <a
        href={apkUrl}
        download="Droply Rider.apk"
        className="shrink-0 rounded-full bg-slate-900 px-5 py-2 text-xs font-bold text-white transition-transform active:scale-95"
      >
        Install
      </a>
    </div>
  );
}