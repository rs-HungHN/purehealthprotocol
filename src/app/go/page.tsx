"use client";

import { useEffect, useState } from "react";

export default function GoPage() {
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    // Đếm ngược 2 giây rồi tự động chuyển hướng sạch
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
          <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>

        <span className="text-[11px] uppercase font-bold tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/50">
          Verified Clinical Protocol
        </span>

        <h1 className="text-xl font-bold text-white mt-3 mb-2">
          Connecting to Superpower Health
        </h1>

        <p className="text-slate-400 text-xs mb-6 leading-relaxed">
          Redirecting to official 100+ biomarker assessment portal in {countdown}s...
        </p>

        <a
          href="https://partners.superpower.com/derek-cole"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-400/20"
        >
          Click Here to Continue Now →
        </a>

        <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500">
          PureHealth Protocol &bull; Independent Clinical Index
        </div>
      </div>
    </div>
  );
}
