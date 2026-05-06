import { create } from "zustand";

type Store = {
    watchlist: string[];
    theme: "light" | "dark";

    addToWatchlist: (symbol: string) => void;
    removeFromWatchlist: (symbol: string) => void;
    toggleTheme: () => void;

};

export const useStore = create<Store>((set) => ({
    watchlist: [],
    theme: "light",

    addToWatchlist: (symbol) =>
        set((state) => ({
            watchlist: [...state.watchlist, symbol],
        })),

    removeFromWatchlist: (symbol) =>
        set((state) => ({
            watchlist: state.watchlist.filter((s) => s !== symbol),
        })),
        toggleTheme:() => {
            set((state) => ({
                theme:state.theme === 'light' ? "dark" : 'light'
            }))
        }
}));