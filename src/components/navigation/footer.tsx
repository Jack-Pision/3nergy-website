import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#f4f6f4] border-t border-black/[0.06] pt-14 pb-12 px-6 sm:px-12 lg:px-16 text-[#141b17]">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Main Grid: Brand + 2 Non-Redundant Category Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 lg:gap-14 pb-10 border-b border-black/[0.08]">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-[#1f3d2b] tracking-tight">
                3NERGY
              </span>
            </Link>
            <p className="text-xs text-[#5a6660] max-w-sm leading-relaxed">
              Clean daily supplements designed for your natural daily rhythm. Pure active compounds, certified third-party testing, zero artificial fillers.
            </p>
            <p className="text-[11px] text-[#1f3d2b] font-medium pt-1">
              Third-party tested • 100% clean label
            </p>
          </div>

          {/* Column 1: Shop */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-[#141b17] uppercase tracking-wider mb-3">
              Shop
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5a6660]">
              <li>
                <Link href="/shop" className="hover:text-[#1f3d2b] transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop#daily-energy" className="hover:text-[#1f3d2b] transition-colors">
                  Daily Energy &amp; Focus
                </Link>
              </li>
              <li>
                <Link href="/shop#daily-recovery" className="hover:text-[#1f3d2b] transition-colors">
                  Daily Recovery &amp; Stamina
                </Link>
              </li>
              <li>
                <Link href="/shop#daily-rest" className="hover:text-[#1f3d2b] transition-colors">
                  Daily Rest &amp; Sleep
                </Link>
              </li>
              <li>
                <Link href="/shop#trio-bundle" className="hover:text-[#1f3d2b] font-medium text-[#1f3d2b] transition-colors">
                  The Daily Trio Bundle
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Science */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-[#141b17] uppercase tracking-wider mb-3">
              Science
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5a6660]">
              <li>
                <Link href="/science" className="hover:text-[#1f3d2b] transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/science#ingredients" className="hover:text-[#1f3d2b] transition-colors">
                  Ingredients
                </Link>
              </li>
              <li>
                <Link href="/science#sourcing" className="hover:text-[#1f3d2b] transition-colors">
                  Sourcing
                </Link>
              </li>
              <li>
                <Link href="/science#faq" className="hover:text-[#1f3d2b] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Clean copyright, zero redundant link repetitions */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6c7a72]">
          <p>© 2026 3NERGY Labs. All rights reserved.</p>
          <Link href="/" className="text-[11px] hover:text-[#141b17] transition-colors">
            Home
          </Link>
        </div>

      </div>
    </footer>
  );
}
