"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight, Sparkles, Calculator, ShoppingBag } from "lucide-react";
import { useCircadianStore } from "@/store/circadian-store";

export function Footer() {
  const { openQuiz, openCalculator, openCart } = useCircadianStore();

  return (
    <footer className="w-full bg-[#f4f6f4] border-t border-black/[0.06] pt-14 pb-10 px-6 sm:px-12 lg:px-16 mt-0 text-[#141b17]">
      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto">
        
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-black/[0.08]">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-3.5">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-[#1f3d2b] tracking-tight">
                3NERGY
              </span>
            </Link>
            <p className="text-xs text-[#5a6660] max-w-xs leading-relaxed">
              Targeted 24-hour nutrition aligned with human circadian biology. Pure active compounds, certified third-party testing, zero synthetic fillers.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#1f3d2b] font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-[#1f3d2b] shrink-0" />
              <span>Third-Party Tested • 100% Clean Label</span>
            </div>
          </div>

          {/* Column 1: Daily Essentials */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-[#141b17] mb-3">
              Daily Essentials
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5a6660]">
              <li>
                <Link href="/shop#daily-energy" className="hover:text-[#1f3d2b] transition-colors">
                  01 · Daily Energy &amp; Focus ($30)
                </Link>
              </li>
              <li>
                <Link href="/shop#daily-recovery" className="hover:text-[#1f3d2b] transition-colors">
                  02 · Daily Recovery &amp; Stamina ($30)
                </Link>
              </li>
              <li>
                <Link href="/shop#daily-rest" className="hover:text-[#1f3d2b] transition-colors">
                  03 · Daily Rest &amp; Sleep ($30)
                </Link>
              </li>
              <li>
                <Link href="/shop#trio-bundle" className="hover:text-[#1f3d2b] font-bold text-[#1f3d2b] transition-colors inline-flex items-center gap-1">
                  <span>The Complete Daily Trio ($75)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Science & Transparency */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-[#141b17] mb-3">
              Science &amp; Origins
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5a6660]">
              <li>
                <Link href="/science#ingredients" className="hover:text-[#1f3d2b] transition-colors">
                  Clinical Dosages &amp; Dosing
                </Link>
              </li>
              <li>
                <Link href="/science#sourcing" className="hover:text-[#1f3d2b] transition-colors">
                  Radical Sourcing Traceability
                </Link>
              </li>
              <li>
                <Link href="/science#faq" className="hover:text-[#1f3d2b] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Interactive Tools */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-[#141b17] mb-3">
              Tools
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5a6660]">
              <li>
                <button
                  type="button"
                  onClick={openQuiz}
                  className="hover:text-[#1f3d2b] transition-colors flex items-center gap-1.5 text-left"
                >
                  <Sparkles className="w-3 h-3 text-[#1f3d2b]" />
                  <span>Routine Quiz</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openCalculator}
                  className="hover:text-[#1f3d2b] transition-colors flex items-center gap-1.5 text-left"
                >
                  <Calculator className="w-3 h-3 text-[#1f3d2b]" />
                  <span>Fitness Calculator</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openCart}
                  className="hover:text-[#1f3d2b] transition-colors flex items-center gap-1.5 text-left"
                >
                  <ShoppingBag className="w-3 h-3 text-[#1f3d2b]" />
                  <span>View Bag</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal: Clean, real copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6c7a72]">
          <p>© 2026 3NERGY Labs. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/shop" className="hover:text-[#141b17] transition-colors">
              All Products
            </Link>
            <Link href="/science" className="hover:text-[#141b17] transition-colors">
              Science
            </Link>
            <Link href="/science#faq" className="hover:text-[#141b17] transition-colors">
              FAQ
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
