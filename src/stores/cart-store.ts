import { productProps } from "@/utils/data/products";
import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as cartInMemory from "./helpers/cart-in-memory";

export type productCartProps = productProps & {
  quantity: number;
};

type stateProps = {
  products: productCartProps[];
  add: (product: productProps) => void;
  remove: (productId: string) => void;
  clear: () => void;
};

export const useCartStore = create(
  persist<stateProps>(
    (set) => ({
      products: [],
      add: (product: productProps) =>
        set((state) => ({
          products: cartInMemory.Add(state.products, product),
        })),

      remove: (productId: string) =>
        set((state) => ({
          products: cartInMemory.remove(state.products, productId),
        })),

      clear: () => set(() => ({ products: [] })),
    }),
    {
      name: "projeto-nlw",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
