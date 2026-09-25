import { create } from "zustand";
import { CircadianPhase, CartItem, Product } from "@/types";

interface CircadianState {
  phase: CircadianPhase;
  virtualTime: string;
  virtualHour: number;
  isAutoTime: boolean;
  setPhase: (phase: CircadianPhase) => void;
  setVirtualHour: (hour: number) => void;
  toggleAutoTime: () => void;
  
  // Cart Drawer State
  cart: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, quantity?: number, cadence?: '30-day' | '60-day' | 'one-time') => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updateCadence: (productId: string, cadence: '30-day' | '60-day' | 'one-time') => void;
  clearCart: () => void;

  // Quiz Modal State
  isQuizOpen: boolean;
  openQuiz: () => void;
  closeQuiz: () => void;
}

export const useCircadianStore = create<CircadianState>((set, get) => ({
  phase: "dawn",
  virtualTime: "08:30 AM",
  virtualHour: 8.5,
  isAutoTime: false,

  setPhase: (phase) => {
    let hour = 8.5;
    let time = "08:30 AM";
    if (phase === "zenith") {
      hour = 14.0;
      time = "02:00 PM";
    } else if (phase === "restore") {
      hour = 21.0;
      time = "09:00 PM";
    }

    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-phase", phase);
    }

    set({ phase, virtualHour: hour, virtualTime: time, isAutoTime: false });
  },

  setVirtualHour: (hour) => {
    const clamped = Math.max(6, Math.min(23, hour));
    const h = Math.floor(clamped);
    const m = Math.round((clamped - h) * 60);
    const period = h >= 12 ? "PM" : "AM";
    const displayH = h % 12 === 0 ? 12 : h % 12;
    const displayM = m < 10 ? `0${m}` : `${m}`;
    const timeString = `${displayH}:${displayM} ${period}`;

    let computedPhase: CircadianPhase = "dawn";
    if (clamped >= 11 && clamped < 17) {
      computedPhase = "zenith";
    } else if (clamped >= 17) {
      computedPhase = "restore";
    }

    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-phase", computedPhase);
    }

    set({ virtualHour: clamped, virtualTime: timeString, phase: computedPhase });
  },

  toggleAutoTime: () => {
    const isAuto = !get().isAutoTime;
    if (isAuto) {
      const now = new Date();
      const currentH = now.getHours() + now.getMinutes() / 60;
      get().setVirtualHour(currentH);
    }
    set({ isAutoTime: isAuto });
  },

  cart: [],
  isCartOpen: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),

  addToCart: (product, quantity = 1, cadence = "30-day") => {
    set((state) => {
      const existingIndex = state.cart.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...state.cart];
        updated[existingIndex].quantity += quantity;
        return { cart: updated, isCartOpen: true };
      }
      return { cart: [...state.cart, { product, quantity, cadence }], isCartOpen: true };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({ cart: state.cart.filter((item) => item.product.id !== productId) }));
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    }));
  },

  updateCadence: (productId, cadence) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId ? { ...item, cadence } : item
      ),
    }));
  },

  clearCart: () => set({ cart: [] }),

  isQuizOpen: false,
  openQuiz: () => set({ isQuizOpen: true }),
  closeQuiz: () => set({ isQuizOpen: false }),
}));
