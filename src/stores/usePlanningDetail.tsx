import { create } from "zustand";
import { persist } from "zustand/middleware";

import { CreateControlBoardPlanningDetailType } from "../types";

interface PlanningState {
	planningDetail: CreateControlBoardPlanningDetailType[];
	setPlanningDetail: (
		planningDetail: CreateControlBoardPlanningDetailType[],
	) => void;
	clearPlanningDetail: () => void;
}

const initialValue: CreateControlBoardPlanningDetailType[] = [];

const usePlanningDetail = create<PlanningState>()(
	persist(
		(set) => ({
			planningDetail: initialValue,
			setPlanningDetail: (planningDetail) => set({ planningDetail }),
			clearPlanningDetail: () => set({ planningDetail: initialValue }),
		}),
		{ name: "planning-detail" },
	),
);

export default usePlanningDetail;
