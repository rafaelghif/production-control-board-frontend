import { LineInterface } from "./line-type";

export interface ControlBoardSettingInterface {
    id: string;
    actualWorkingTime: number;
    planQty: number;
    manPowerRegular: number;
    shiftTotal: number;
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

export type CreateControlBoardSettingType = Pick<ControlBoardSettingInterface, "actualWorkingTime" | "planQty" | "manPowerRegular" | "shiftTotal" | "LineId">;
export type UpdateControlBoardSettingType = Partial<ControlBoardSettingInterface>;