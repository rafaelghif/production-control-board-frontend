import { LineInterface } from "./line-type";

export interface ControlBoardSettingInterface {
	id: string;
	shift: "Long" | "Short";
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

export interface ControlBoardSettingInterfaceWithDetail
	extends ControlBoardSettingInterface {
	ControlBoardSettingDetails: ControlBoardSettingDetailInterface[];
}

export interface ControlBoardSettingDetailInterface {
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
	ControlBoardSettingId: string;
}

export interface ControlBoardSettingWithLineInterface
	extends ControlBoardSettingInterface {
	Line: Pick<LineInterface, "id" | "name">;
}

export type CreateControlBoardSettingType = Pick<
	ControlBoardSettingInterface,
	| "shift"
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
	| "LineId"
>;

export type UpdateControlBoardSettingType =
	Partial<ControlBoardSettingInterface>;

export type CreateControlBoardSettingDetailType = Pick<
	ControlBoardSettingDetailInterface,
	"time" | "sequence" | "qty"
>;
export type UpdateControlBoardSettingDetailType =
	Partial<ControlBoardSettingDetailInterface>;

export interface CreateControlBoardSettingInterface {
	setting: CreateControlBoardSettingType;
	settingDetails: CreateControlBoardSettingDetailType[];
}
