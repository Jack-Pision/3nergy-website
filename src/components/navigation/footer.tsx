import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#f4f6f4] border-t border-black/[0.06] pt-14 pb-10 px-6 sm:px-12 lg:px-16 mt-0 text-[#141b17]">
      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto">
        
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-black/[0.08]">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-3">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-[#1f3d2b] tracking-tight">
                3NERGY
              </span>
            </Link>
            <p className="text-xs text-[#5a6660] max-w-xs leading-relaxed">
              Clean daily supplements designed for your natural daily rhythm. Transparent ingredients, clinical doses, zero artificial fillers.
            </p>
            <p className="text-[11px] text-[#1f3d2b] font-medium pt-1">
              Third-party tested • 100% clean label
            </p>
          </div>

          {/* Column 1: Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-[#141b17] uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5a6660]">
              <li>
                <Link href="/" className="hover:text-[#1f3d2b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#1f3d2b] transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/science" className="hover:text-[#1f3d2b] transition-colors">
                  Our Science
                </Link>
              </li>
              <li>
                <Link href="/science#faq" className="hover:text-[#1f3d2b] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-[#141b17] uppercase tracking-wider mb-3">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5a6660]">
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
                <Link href="/shop#trio-bundle" className="hover:text-[#1f3d2b] font-semibold text-[#1f3d2b] transition-colors">
                  The Complete Daily Trio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Science & Quality */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-[#141b17] uppercase tracking-wider mb-3">
              Science &amp; Quality
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5a6660]">
              <li>
                <Link href="/science#ingredients" className="hover:text-[#1f3d2b] transition-colors">
                  Active Ingredients &amp; Dosing
                </Link>
              </li>
              <li>
                <Link href="/science#sourcing" className="hover:text-[#1f3d2b] transition-colors">
                  Sourcing &amp; Traceability
                </Link>
              </li>
              <li>
                <Link href="/science#faq" className="hover:text-[#1f3d2b] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6c7a72]">
          <p>© 2026 3NERGY. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/shop" className="hover:text-[#141b17] transition-colors">
              Shop
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
