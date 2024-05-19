import create from "zustand";

interface GumState {
  gums: number;
  produce: (amount: number) => void;
  stock: number;
  distribute: (amount: number) => void;
}

interface GumsState {
  gums: { [gumId: number]: number };
  produce: (gumId: number, amount: number) => void;
  stock: { [gumId: number]: number };
  distribute: (gumId: number, amount: number) => void;
}

export const useGumStore = create<GumState>((set) => ({
  gums: 0,
  produce: (amount) =>
    set((state) => ({
      gums: state.gums + amount,
      stock: state.stock + amount,
    })),
  stock: 0,
  distribute: (amount) =>
    set((state) => {
      const newStock = state.stock - amount;
      const actualAmount = Math.max(newStock, 0);
      return {
        gums: state.gums - amount + actualAmount,
        stock: actualAmount,
      };
    }),
}));

export const useGums = create<GumsState>((set) => ({
  gums: {},
  stock: {},
  produce: (gumId, amount) =>
    set((state) => ({
      gums: {
        ...state.gums,
        [gumId]: (state.gums[gumId] || 0) + amount,
      },
      stock: {
        ...state.stock,
        [gumId]: (state.stock[gumId] || 0) + amount,
      },
    })),
  distribute: (gumId, amount) =>
    set((state) => {
      const newStock = Math.max((state.gums[gumId] || 0) - amount, 0);
      return {
        gums: {
          ...state.gums,
          [gumId]: newStock,
        },
        stock: {
          ...state.stock,
          [gumId]: newStock,
        },
      };
    }),
}));
