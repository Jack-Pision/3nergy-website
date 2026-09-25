"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#f4f6f4] border-t border-black/[0.06] pt-16 pb-12 px-6 sm:px-12 lg:px-16 mt-0 text-[#141b17]">
      <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto">
        
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 pb-12 border-b border-black/[0.08]">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-[#1f3d2b] tracking-tight">
                3NERGY
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#5a6660] max-w-sm leading-relaxed">
              Targeted 24-hour nutrition aligned with human circadian biology. Pure active compounds, certified third-party testing, zero synthetic fillers.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#1f3d2b] font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-[#1f3d2b]" />
              <span>Third-Party Tested • 100% Clean Label Certified</span>
            </div>
          </div>

          {/* Column 1: Daily Essentials */}
          <div>
            <h4 className="text-xs font-semibold text-[#141b17] mb-3">
              Daily Essentials
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5a6660]">
              <li>
                <Link href="/shop#daily-energy" className="hover:text-[#1f3d2b] transition-colors">
                  Daily Energy &amp; Focus ($30)
                </Link>
              </li>
              <li>
                <Link href="/shop#daily-recovery" className="hover:text-[#1f3d2b] transition-colors">
                  Daily Recovery &amp; Stamina ($30)
                </Link>
              </li>
              <li>
                <Link href="/shop#daily-rest" className="hover:text-[#1f3d2b] transition-colors">
                  Daily Rest &amp; Sleep ($30)
                </Link>
              </li>
              <li>
                <Link href="/shop#trio-bundle" className="hover:text-[#1f3d2b] font-bold text-[#1f3d2b] transition-colors flex items-center gap-1">
                  <span>The Complete Daily Trio ($75)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Science & Transparency */}
          <div>
            <h4 className="text-xs font-semibold text-[#141b17] mb-3">
              Transparency
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5a6660]">
              <li>
                <Link href="/science" className="hover:text-[#1f3d2b] transition-colors">
                  Our Science &amp; Sourcing
                </Link>
              </li>
              <li>
                <Link href="/science#clinical-trials" className="hover:text-[#1f3d2b] transition-colors">
                  Clinical Studies
                </Link>
              </li>
              <li>
                <Link href="/science#coa" className="hover:text-[#1f3d2b] transition-colors">
                  Lab Test Certificates (COA)
                </Link>
              </li>
              <li>
                <Link href="/science#advisory-board" className="hover:text-[#1f3d2b] transition-colors">
                  Formulation Board
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Routine & Support */}
          <div>
            <h4 className="text-xs font-semibold text-[#141b17] mb-3">
              Routine
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5a6660]">
              <li>
                <Link href="/#routine" className="hover:text-[#1f3d2b] transition-colors">
                  Your Routine Starts Here
                </Link>
              </li>
              <li>
                <Link href="/science#faq" className="hover:text-[#1f3d2b] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/science#shipping" className="hover:text-[#1f3d2b] transition-colors">
                  Shipping &amp; 30-Day Guarantee
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#1f3d2b] transition-colors">
                  Routine Quiz
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Concept Portfolio Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6c7a72]">
          <div className="flex items-center gap-1.5">
            <span>© 2026 3NERGY Inc. All rights reserved.</span>
          </div>

          <div className="text-[11px] text-center sm:text-right">
            Concept portfolio project crafted with modern, minimal 2026 UI/UX design.
          </div>
        </div>

      </div>
    </footer>
  );
}
