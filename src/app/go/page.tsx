"use client";

import { useEffect } from "react";

export default function GoPage() {
  useEffect(() => {
    // Chuyển hướng ngay tức khắc khi component mount, không truyền gclid hay google referrer
    window.location.replace("https://partners.superpower.com/derek-cole");
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center p-4">
      <div className="w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin mb-4" />
      <h2 className="text-slate-200 font-semibold text-base mb-1">
        Connecting to Superpower Health...
      </h2>
      <p className="text-slate-500 text-xs">
        Securing official protocol access via PureHealth Protocol
      </p>
    </div>
  );
}
