import { create } from "zustand";
import { ProductPhase, CartItem, Product } from "@/types";

interface CircadianState {
  phase: ProductPhase;
  virtualTime: string;
  setPhase: (phase: ProductPhase) => void;
  
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

  // Fitness / Wellness Calculator Modal State
  isCalculatorOpen: boolean;
  openCalculator: () => void;
  closeCalculator: () => void;
}

export const useCircadianStore = create<CircadianState>((set, get) => ({
  phase: "energy",
  virtualTime: "08:30 AM",

  setPhase: (phase) => {
    let time = "08:30 AM";
    if (phase === "recovery") {
      time = "02:00 PM";
    } else if (phase === "rest") {
      time = "09:00 PM";
    }
    set({ phase, virtualTime: time });
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

  isCalculatorOpen: false,
  openCalculator: () => set({ isCalculatorOpen: true }),
  closeCalculator: () => set({ isCalculatorOpen: false }),
}));
