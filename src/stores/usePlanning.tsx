import { create } from "zustand";
import { persist } from "zustand/middleware";

import { CreateControlBoardPlanningType, LineInterface } from "../types";

interface PlanningState {
	planning: CreateControlBoardPlanningType;
	setPlanning: (planning: CreateControlBoardPlanningType) => void;
	clearPlanning: () => void;
}

const initialValue: CreateControlBoardPlanningType = {
	shift: "Short",
	date: "",
	LineId: "",
	actualWorkingTime: 0,
	actualWorkingTimeAll: 0,
	actualWorkingTimeOvertime: 0,
	manPowerAbleToSpare: 0,
	manPowerAdditionalCount: 0,
	manPowerCount: 0,
	productLoadingPlanBacklogQty: 0,
	productLoadingPlanQty: 0,
	tackTime: 0,
	totalProcessTime: 0,
};

const usePlanning = create<PlanningState>()(
	persist(
		(set) => ({
			planning: initialValue,
			setPlanning: (planning) => set({ planning }),
			clearPlanning: () => set({ planning: initialValue }),
		}),
		{ name: "planning" },
	),
);

export default usePlanning;
