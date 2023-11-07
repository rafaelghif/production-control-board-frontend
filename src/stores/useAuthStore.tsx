import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
	isAuth: boolean;
	loginUser: () => void;
	logoutUser: () => void;
}

const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			isAuth: false,
			loginUser: () => set({ isAuth: true }),
			logoutUser: () => set({ isAuth: false }),
		}),
		{ name: "Auth" },
	),
);

export default useAuthStore;
