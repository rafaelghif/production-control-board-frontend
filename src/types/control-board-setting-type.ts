import { LineInterface } from "./line-type";

export interface ControlBoardSettingInterface {
    id: string;
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

export interface ControlBoardSettingWithLineInterface extends ControlBoardSettingInterface {
    Line: Pick<LineInterface, "id" | "name">;
}

export type CreateControlBoardSettingType = Pick<
    ControlBoardSettingInterface,
    "actualWorkingTimeAll" |
    "productLoadingPlanQty" |
    "productLoadingPlanBacklogQty" |
    "tackTime" |
    "totalProcessTime" |
    "actualWorkingTime" |
    "actualWorkingTimeOvertime" |
    "manPowerCount" |
    "manPowerAdditionalCount" |
    "manPowerAbleToSpare" |
    "LineId"
>;
export type UpdateControlBoardSettingType = Partial<ControlBoardSettingInterface>;