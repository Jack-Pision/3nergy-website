import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navigation/navbar";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { Footer } from "@/components/navigation/footer";
import { QuizModal } from "@/components/quiz/quiz-modal";
import { WellnessCalculatorModal } from "@/components/calculator/wellness-calculator-modal";

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
      className={`${syne.variable} ${jakarta.variable} ${geistMono.variable}`}
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
