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
    <section className="w-full px-4 sm:px-8 py-8 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-to-b from-[#1c3827] via-[#173021] to-[#12261a] p-8 sm:p-16 lg:p-20 text-white relative overflow-hidden shadow-xl">
        
        {/* Subtle Organic Background Glow & Capsule Decorations */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

        {/* Decorative Floating Capsules (Clean anti-slop CSS vector) */}
        <div className="absolute top-12 left-10 hidden sm:flex items-center gap-2 opacity-80 pointer-events-none">
          <div className="w-9 h-4 rounded-full bg-gradient-to-r from-[#2f5e3f] to-[#183a24] border border-white/20 -rotate-45 shadow-lg" />
          <div className="w-9 h-4 rounded-full bg-gradient-to-r from-[#b37446] to-[#783e18] border border-white/20 rotate-12 shadow-lg" />
        </div>

        <div className="absolute bottom-16 right-10 hidden sm:flex items-center gap-2 opacity-80 pointer-events-none">
          <div className="w-9 h-4 rounded-full bg-gradient-to-r from-[#b37446] to-[#783e18] border border-white/20 -rotate-12 shadow-lg" />
          <div className="w-9 h-4 rounded-full bg-gradient-to-r from-[#2f5e3f] to-[#183a24] border border-white/20 45 shadow-lg" />
        </div>

        {/* Main CTA Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Ready to Feel Your <br />
            Best Every Day?
          </h2>

          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed font-sans">
            Join thousands who trust 3NERGY for clean, science-backed daily nutrition — without the unnecessary extras.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/shop"
              className="px-8 py-3 rounded-full bg-white hover:bg-gray-100 text-[#141b17] text-xs font-bold tracking-wide transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <span>Shop All Products</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={openQuiz}
              className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95"
            >
              Take the Quiz
            </button>
          </div>

          {/* Divider */}
          <div className="pt-12 sm:pt-16 pb-2 border-t border-white/15 max-w-2xl mx-auto">
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wider text-white mb-4">
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
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white hover:bg-gray-100 text-[#141b17] text-xs font-bold transition-all shadow-sm shrink-0"
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

      </div>
    </section>
  );
}
