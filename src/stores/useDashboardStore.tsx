import { create } from "zustand";
import { persist } from "zustand/middleware";

import { formatDateString } from "../libs";
import { ShiftType } from "../types";

interface DashboardInterface {
	line: string;
	date: string;
	shift: ShiftType;
}

interface DashboardState {
	line: string;
	date: string;
	shift: ShiftType;
	setLine: (line: string) => void;
	setDate: (date: string) => void;
	setShift: (shift: ShiftType) => void;
}

const initialValue: DashboardInterface = {
	line: "1",
	date: formatDateString(new Date()),
	shift: "Short",
};

const useDashboardStore = create<DashboardState>()(
	persist(
		(set) => ({
			line: initialValue.line,
			date: initialValue.date,
			shift: initialValue.shift,
			setLine: (line) => set({ line }),
			setDate: (date) => set({ date }),
			setShift: (shift) => set({ shift }),
		}),
		{ name: "Dashboard" },
	),
);

export default useDashboardStore;
