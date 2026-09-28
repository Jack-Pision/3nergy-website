import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="footer" className="w-full bg-[#f4f6f4] border-t border-black/[0.06] text-[#141b17]">
      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto py-12 px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
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

      {/* Jack Pision Watermark Sub-Bar */}
      <div className="w-full bg-[#0a0a0c] py-6 px-4 border-t border-black/20 flex flex-col items-center justify-center gap-2.5">
        <p className="text-xs text-[#a1a1a1] flex items-center justify-center gap-1.5 tracking-normal">
          <span>Designed &amp; built by</span>
          <span className="font-semibold text-white">Jack Pision</span>
        </p>
        <div className="flex items-center justify-center gap-3.5 text-[#a1a1a1]">
          <a
            href="https://github.com/Jack-Pision"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jack Pision on GitHub"
            className="hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
          <a
            href="https://x.com/Jack_pision"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jack Pision on X"
            className="hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
