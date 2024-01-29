import { create } from "zustand";
import { persist } from "zustand/middleware";

import { FormattedDay } from "../utils/date";

interface DateState {
	days: FormattedDay[];
	month: number;
	monthName: string;
	year: number;
	setMonth: (month: { month: number; monthName: string }) => void;
	setDays: (days: FormattedDay[]) => void;
	setYear: (year: number) => void;
}

const useDate = create<DateState>()(
	persist(
		(set) => ({
			days: [],
			month: 1,
			monthName: "",
			year: 2023,
			setDays: (days) => set({ days }),
			setMonth: (monthData) => set({ ...monthData }),
			setYear: (year) => set({ year: year }),
		}),
		{ name: "date" },
	),
);

export default useDate;
