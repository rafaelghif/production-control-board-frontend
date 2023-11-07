import { create } from "zustand";
import { persist } from "zustand/middleware";

import { UserInterface } from "../types/user-type";

type UserType = Pick<UserInterface, "id" | "badgeId" | "name" | "role">;

interface UserState {
	user: UserType;
	setUser: (user: UserType) => void;
	clearUser: () => void;
}

const initialValue: UserType = {
	id: "",
	badgeId: "",
	name: "",
	role: "Basic",
};

const useUserStore = create<UserState>()(
	persist(
		(set) => ({
			user: initialValue,
			setUser: (user) => set({ user }),
			clearUser: () => set({ user: initialValue }),
		}),
		{ name: "User" },
	),
);

export default useUserStore;
