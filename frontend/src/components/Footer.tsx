"use client";

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200/80 py-12 relative z-30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left copyright */}
        <div className="text-slate-500 text-xs text-center md:text-left">
          <p>© {new Date().getFullYear()} Lokesh Goyal. All rights reserved.</p>
          <p className="mt-1 text-slate-450">Faridabad, Delhi NCR, India</p>
        </div>

        {/* Center branding */}


        {/* Right back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-200/50 border border-slate-200 hover:bg-slate-200/80 hover:border-blue-600/30 text-slate-600 hover:text-slate-900 transition-all text-xs font-semibold"
          aria-label="Scroll to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
