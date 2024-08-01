import { ShiftType } from "./control-board";
import { LineInterface } from "./line-type";

export interface ControlBoardPlanningInterface {
	id: string;
	shift: ShiftType;
	date: string;
	actualWorkingTimeAll: number;
	productLoadingPlanQty: number;
	productLoadingPlanBacklogQty: number;
	tackTime: number;
	totalProcessTime: number;
	actualWorkingTime: number;
	actualWorkingTimeOvertime: number;
	manPowerCount: number;
	manPowerAdditionalCount: number;
	manPowerAbleToSpare: number;
	inActive: boolean;
	createdBy: string;
	updatedBy: string;
	createdAt: string;
	updatedAt: string;
	LineId: string;
}

export interface ControlBoardPlanningDetailInterface {
	id: string;
	time: string;
	sequence: number;
	qty: number;
	remark: string;
	breakTime: string;
	inActive: boolean;
	createdBy: string;
	updatedBy: string;
	createdAt: string;
	updatedAt: string;
	ControlBoardPlanningId: string;
}

export interface ControlBoardPlanningWithLineInterface
	extends ControlBoardPlanningInterface {
	Line: Pick<LineInterface, "id" | "name">;
}

export type CreateControlBoardPlanningType = Pick<
	ControlBoardPlanningInterface,
	| "shift"
	| "date"
	| "LineId"
	| "actualWorkingTimeAll"
	| "productLoadingPlanQty"
	| "productLoadingPlanBacklogQty"
	| "tackTime"
	| "totalProcessTime"
	| "actualWorkingTime"
	| "actualWorkingTimeOvertime"
	| "manPowerCount"
	| "manPowerAdditionalCount"
	| "manPowerAbleToSpare"
>;

export type UpdateControlBoardPlanningType =
	Partial<ControlBoardPlanningInterface>;
export type CreateControlBoardPlanningDetailType = Pick<
	ControlBoardPlanningDetailInterface,
	"time" | "sequence" | "qty"
>;

export interface CreateControlBoardPlanningInterface {
	planning: CreateControlBoardPlanningType;
	planningDetails: CreateControlBoardPlanningDetailType[];
}

export type UpdateControlBoardPlanningDetailType =
	Partial<ControlBoardPlanningDetailInterface>;

export interface InitialPlanningInterface {
	lineId: string;
	date: string;
}
