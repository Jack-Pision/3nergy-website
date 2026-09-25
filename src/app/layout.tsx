import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navigation/navbar";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { Footer } from "@/components/navigation/footer";
import { QuizModal } from "@/components/quiz/quiz-modal";
import { WellnessCalculatorModal } from "@/components/calculator/wellness-calculator-modal";

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "3NERGY™ | Clean Daily Wellness & Energy Supplements",
  description:
    "Clean, science-backed supplements designed to support your energy, recovery, focus, and everyday wellness — without the unnecessary extras.",
  keywords: [
    "clean supplements",
    "daily wellness",
    "morning energy",
    "recovery supplements",
    "rest and sleep",
    "3nergy",
    "matcha",
    "tart cherry",
    "magnesium glycinate",
  ],
  authors: [{ name: "3NERGY Labs" }],
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
      className={`${satoshi.variable} ${satoshi.className}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#fcfcfb] text-[#141b17] font-sans antialiased selection:bg-[#1f3d2b]/15 selection:text-[#1f3d2b] overflow-x-hidden relative flex flex-col">
        <Providers>
          {/* Minimalist Floating Navigation */}
          <Navbar />

          {/* Main content view */}
          <main className="flex-1 relative z-10">{children}</main>

          {/* Slide-over interactive shopping cart drawer */}
          <CartDrawer />

          {/* Routine Quiz Modal */}
          <QuizModal />

          {/* Interactive Fitness & Wellness Calculator Modal */}
          <WellnessCalculatorModal />

          {/* Clean system footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
