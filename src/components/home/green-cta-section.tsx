"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useCircadianStore } from "@/store/circadian-store";

export function GreenCtaSection() {
  const { openQuiz } = useCircadianStore();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3500);
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#183523] via-[#142d1e] to-[#0f2216] py-24 sm:py-32 px-6 sm:px-12 lg:px-16 text-white relative overflow-hidden">
      
      {/* Subtle Organic Background Glow & Capsule Decorations */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

      {/* Main Wide Content */}
      <div className="w-full max-w-[1500px] 2xl:max-w-[1680px] mx-auto relative z-10 text-center space-y-8">
        
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Ready to Feel Your <br />
          Best Every Day?
        </h2>

        <p className="text-xs sm:text-sm text-white/85 max-w-xl mx-auto leading-relaxed">
          Experience the Daily Trio risk-free for 30 days. If your energy, focus, and sleep quality don’t noticeably improve, enjoy an immediate full refund.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/shop"
            className="px-8 py-3 rounded-full bg-white hover:bg-white/90 text-[#141b17] text-xs font-bold tracking-wide transition-colors duration-200 shadow-md active:bg-white/80 flex items-center gap-2"
          >
            <span>Shop All Products</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={openQuiz}
            className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/35 text-xs font-semibold tracking-wide transition-colors duration-200 active:bg-white/20 shadow-md"
          >
            Take the Quiz
          </button>
        </div>

        {/* Divider */}
        <div className="pt-12 sm:pt-16 pb-2 border-t border-white/15 max-w-2xl mx-auto">
          <h3 className="text-base sm:text-lg font-bold text-white mb-3">
            Subscribe to Our Newsletter
          </h3>

          {isSubscribed ? (
            <div className="flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Thank you for subscribing! Your 15% welcome code is on its way.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 px-5 py-2.5 rounded-full bg-black/25 border border-white/20 text-white placeholder:text-white/50 text-xs focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white hover:bg-gray-100 active:bg-gray-200 text-[#141b17] text-xs font-bold transition-colors duration-200 shadow-sm shrink-0"
              >
                Subscribe Now
              </button>
            </form>
          )}

          <p className="text-[10px] text-white/50 pt-3">
            We respect your privacy. Unsubscribe at any time with one click.
          </p>
        </div>

      </div>
    </section>
  );
}
