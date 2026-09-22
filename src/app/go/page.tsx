"use client";

import { useEffect, useState } from "react";

export default function GoPage() {
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.replace("https://partners.superpower.com/derek-cole");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 text-center antialiased selection:bg-cyan-500 selection:text-slate-950">
      <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-16 -left-16 w-36 h-36 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Live Partner Status */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-[11px] font-semibold text-cyan-400 mb-5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          OFFICIAL VERIFIED PARTNER PORTAL
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
          Superpower Health Access
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mb-5">
          Pre-applied partner privilege for 2026 comprehensive diagnostics.
        </p>

        {/* Value & Trust Badges */}
        <div className="grid grid-cols-2 gap-2.5 mb-6 text-left">
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
              ✓
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">100+ Biomarkers</div>
              <div className="text-[10px] text-slate-400">Cardio, Hormones & Longevity</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
              $
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">HSA / FSA Eligible</div>
              <div className="text-[10px] text-slate-400">Zero Hidden Doctor Fees</div>
            </div>
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-full bg-slate-950 rounded-full h-1.5 mb-3 overflow-hidden border border-slate-800">
          <div
            className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-full transition-all duration-1000 ease-linear rounded-full"
            style={{ width: ${((3 - countdown) / 2) * 100}% }}
          />
        </div>

        <p className="text-[11px] text-slate-400 mb-5">
          Redirecting securely to Superpower in{" "}
          <span className="text-cyan-400 font-bold">{countdown}s</span>...
        </p>

        {/* Direct Button */}
        <a
          href="https://partners.superpower.com/derek-cole"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 text-slate-950 font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
        >
          Claim Access Now &rarr;
        </a>

        <div className="mt-5 pt-3 border-t border-slate-800/80 text-[10px] text-slate-500 flex items-center justify-center gap-2">
          <span>CLIA-Certified Labs (Labcorp/Quest)</span>
          <span>&bull;</span>
          <span>PureHealth Protocol</span>
        </div>
      </div>
    </div>
  );
}
