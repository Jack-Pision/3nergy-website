"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { useCircadianStore } from "@/store/circadian-store";
import { QuizModal } from "@/components/quiz/quiz-modal";

export function Providers({ children }: { children: React.ReactNode }) {
  const { phase } = useCircadianStore();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-phase", phase);
    }
  }, [phase]);

  return (
    <>
      {children}
      <QuizModal />
    </>
  );
}
