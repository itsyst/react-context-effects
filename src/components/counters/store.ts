import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools'

interface CounterStore {
    counter: number;
    name?: string;
    increment: () => void;
    reset: () => void;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const userCounterStore = create<CounterStore>((set) => ({
    counter: 0,
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    reset: () => set(() => ({ counter: 0, name: '' })),
}));
export const userCounterStoreF = create<CounterStore>((set) => ({
    counter: 0,
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    reset: () => set(() => ({ counter: 0, name: '' })),
}));
export const userCounterStoreH = create<CounterStore>((set) => ({
    counter: 0,
    name: '',
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    reset: () => set(() => ({ counter: 0, name: '' })),
    handleChange: (e) => set({ name: e.target.value }),
}));

// Attach devtools in development mode.
if (process.env.NODE_ENV === 'development'){
    mountStoreDevtool('Counter Store', userCounterStore);
    mountStoreDevtool('Counter StoreF', userCounterStoreF);
    mountStoreDevtool('Counter StoreH', userCounterStoreH);
}

