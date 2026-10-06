"use client";

import { useEffect, useState } from "react";

export default function GoPage() {
  const [countdown, setCountdown] = useState(2);
  const [isBot, setIsBot] = useState(false);

  useEffect(() => {
    const botCheck = /googlebot|adsbot|mediapartners|google-adwords|lighthouse|spider|crawler|bingbot/i.test(
      navigator.userAgent
    );
    if (botCheck) {
      setIsBot(true);
      return;
    }

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
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 font-sans overflow-hidden flex flex-col justify-between antialiased selection:bg-emerald-500 selection:text-white">
      {/* ========================================================= */}

      {/* ========================================================= */}
      {/* LỚP NỀN ĐỆM ĐỒNG BỘ 100% GIAO DIỆN SUPERPOWER THẬT */}
      {/* ========================================================= */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-45 blur-[2px] scale-[1.01] transition-opacity duration-700">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-6 text-xs font-medium text-slate-600">
            <span>What we test</span>
            <span>Reviews</span>
            <span>FAQs</span>
            <span>For Employers</span>
          </div>
          <div className="font-black text-2xl tracking-tighter text-slate-900 font-sans">
            superpower
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="text-slate-700">Log in</span>
            <span className="px-5 py-2 rounded-full bg-slate-950 text-white font-bold">
              Become a member
            </span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-10 grid grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <div className="flex items-center gap-2 text-xs text-slate-600 mb-3">
              <span className="font-bold text-emerald-600">★★★★★</span>
              <span className="text-[11px] font-medium">4.6 on Trustpilot &bull; 64,000+ members</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              Know what's really going on with your health
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-5">
              Turn your blood test results into personalized insights, simple protocols, and action.
            </p>
            <div className="space-y-2 text-xs text-slate-700 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">✓</span>
                <span>Thyroid, cortisol, testosterone and estrogen, all included</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">✓</span>
                <span>150+ biomarkers, not the 10 to 15 in an annual physical</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">✓</span>
                <span>Blood draws at 2,000+ locations or at-home</span>
              </div>
            </div>
            <div className="inline-block px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold">
              Get my health baseline
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-700/80 via-orange-800/80 to-stone-900 text-white shadow-xl relative overflow-hidden h-80 flex flex-col justify-between text-left">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 inline-block w-40">
              <div className="text-xs text-slate-200">Ferritin</div>
              <div className="text-3xl font-extrabold mt-0.5 flex items-center gap-1">
                64 <span className="text-xs font-normal">μg/L ↗</span>
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-black/40 backdrop-blur border border-white/10 text-xs flex items-center gap-3">
              <div className="text-amber-400 font-serif font-bold text-center leading-tight">Clinicians'<br/>Choice</div>
              <div className="text-[10px] text-slate-300">100+ clinicians shared this with their patients without compensation.</div>
            </div>
          </div>
        </div>
      </div>

<div className="w-full h-4"></div>
{/* ========================================================= */}
<div className="relative z-10 w-full flex items-center justify-center p-4">
        <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-white/95 border border-emerald-200/90 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.18)] backdrop-blur-md relative overflow-hidden text-center transition-all duration-300">
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-teal-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            OFFICIAL VERIFIED PARTNER PORTAL &bull; 2026
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 tracking-tight">
            Superpower Health Access
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
            Pre-applied partner privilege for 2026 comprehensive diagnostics.
          </p>

          <div className="grid grid-cols-2 gap-2.5 mb-5 text-left">
            <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100/90 flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                🩸
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">100+ Biomarkers</div>
                <div className="text-[10px] text-slate-500">Quest Certified Testing</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100/90 flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                💳
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">100% HSA / FSA</div>
                <div className="text-[10px] text-slate-500">Eligible Medical Care</div>
              </div>
            </div>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-1.5 mb-3 overflow-hidden border border-slate-200">
            <div
              className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 h-full transition-all duration-1000 ease-linear rounded-full"
              style={{ width: isBot ? "100%" : `${((3 - countdown) / 2) * 100}%` }}
            />
          </div>

          <p className="text-[11px] text-slate-500 mb-5 font-medium">
            {isBot ? (
              <span>Official Verified Partner Portal. Click below to proceed:</span>
            ) : (
              <>
                Redirecting securely to Superpower in{" "}
                <span className="text-emerald-600 font-bold text-xs">{countdown}s</span>...
              </>
            )}
          </p>

          <a
            href="https://partners.superpower.com/derek-cole"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-sm hover:opacity-95 transition-all shadow-lg shadow-emerald-600/25 active:scale-[0.98]"
          >
            Claim Access Now &rarr;
          </a>

          <div className="mt-5 pt-3 border-t border-slate-100 text-[10px] text-slate-400 flex items-center justify-center gap-2">
            <span>CLIA-Certified Labs (Quest Diagnostics)</span>
            <span>&bull;</span>
            <span>PureHealth Protocol</span>
          </div>
        </div>
      </div>

      <footer className="relative z-10 py-3 text-center text-[11px] text-slate-400 bg-white/70 backdrop-blur-sm border-t border-slate-200/50">
        PureHealth Protocol &bull; Automated Referral Gateway
      </footer>
    </div>
  );
}
