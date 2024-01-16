// add items
// remove items
// clear cart

import { Product } from "@/payload-types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartItems = {
    product: Product
};

type CartState = {
    items: CartItems[],
    addItem: (product: Product) => void,
    removeItem: (productID: string) => void,
    clearCart: () => void,
};

export const useCart = create<CartState>()(
    persist((set) => ({
        items: [],
        addItem: (product) => set((state) => {
            if (state.items.filter((item) => item.product.id === product.id).length > 0) return { items: [...state.items] }
            return { items: [...state.items, { product }] }
        }),
        removeItem: (id) => set((state) => ({
            items: state.items.filter((item) => item.product.id !== id)
        })),
        clearCart: () => set({ items: [] })
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
    })
);