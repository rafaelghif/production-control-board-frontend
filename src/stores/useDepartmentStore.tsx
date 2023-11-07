import { create } from "zustand";
import { persist } from "zustand/middleware";

import { DepartmentInterface } from "../types/department-type";

type DepartmentType = Pick<DepartmentInterface, "id" | "name" | "abbreviation">;

interface DepartmentState {
	department: DepartmentType;
	setDepartment: (department: DepartmentType) => void;
	clearDepartment: () => void;
}

const initialValue: DepartmentType = {
	id: "",
	name: "",
	abbreviation: "",
};

const useDepartmentStore = create<DepartmentState>()(
	persist(
		(set) => ({
			department: initialValue,
			setDepartment: (department) => set({ department }),
			clearDepartment: () => set({ department: initialValue }),
		}),
		{ name: "Department" },
	),
);

export default useDepartmentStore;
