import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#f4f6f4] border-t border-black/[0.06] py-12 px-6 sm:px-12 lg:px-16 text-[#141b17]">
      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="space-y-2">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold text-[#1f3d2b] tracking-tight">
              3NERGY
            </span>
          </Link>
          <p className="text-xs text-[#5a6660] max-w-sm leading-relaxed">
            Clean daily supplements designed for your natural daily rhythm.
          </p>
        </div>

        {/* Page List & Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 text-xs">
          <nav className="flex items-center gap-6 font-medium text-[#141b17]">
            <Link href="/" className="hover:text-[#1f3d2b] transition-colors">
              Home
            </Link>
            <Link href="/shop" className="hover:text-[#1f3d2b] transition-colors">
              Shop
            </Link>
            <Link href="/science" className="hover:text-[#1f3d2b] transition-colors">
              Science
            </Link>
            <Link href="/science#faq" className="hover:text-[#1f3d2b] transition-colors">
              FAQ
            </Link>
          </nav>

          <p className="text-[11px] text-[#6c7a72]">
            © 2026 3NERGY Labs. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
