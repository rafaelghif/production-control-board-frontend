import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LoadingState {
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
}

const useLoadingStore = create<LoadingState>()(
    persist((set) => ({
        isLoading: false,
        setLoading: (loading) => set({ isLoading: loading })
    }), { name: "Loading" })
);

export default useLoadingStore;