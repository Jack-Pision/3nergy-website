import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navigation/navbar";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { Footer } from "@/components/navigation/footer";
import { CircadianAura } from "@/components/visuals/circadian-aura";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "3NERGY™ | Circadian Chrono-Nutrition & Cellular Energy",
  description:
    "Next-generation tripartite biological energy system. 01 Dawn Rise, 02 Zenith Flow, 03 Restore Prime. Formulated for sustained cellular ATP, nootropics, and deep sleep architecture.",
  keywords: [
    "circadian supplements",
    "cellular energy",
    "mitochondrial ATP",
    "3nergy",
    "chrono-nutrition",
    "nootropics",
    "magnesium threonate",
  ],
  authors: [{ name: "3NERGY Bio-Labs" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#080a09] text-[#f3f4f6] font-sans antialiased selection:bg-[#f59e0b]/20 selection:text-[#fef3c7] overflow-x-hidden relative flex flex-col">
        <Providers>
          {/* Dynamic real-time WebGL/Canvas Circadian ambient aura */}
          <CircadianAura />
          
          {/* Persistent high-craft circadian navigation header */}
          <Navbar />

          {/* Main content view */}
          <main className="flex-1 relative z-10">{children}</main>

          {/* Slide-over interactive apothecary cart drawer */}
          <CartDrawer />

          {/* System footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
