import { LineInterface } from "./line-type";

export interface ControlBoardPlanningInterface {
    id: string;
    date: string;
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
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    ControlBoardPlanningId: string;
}

export interface ControlBoardPlanningWithLineInterface extends ControlBoardPlanningInterface {
    Line: Pick<LineInterface, "id" | "name">;
}

export type CreateControlBoardPlanningType = Pick<ControlBoardPlanningInterface, "date" | "LineId">;
export type UpdateControlBoardPlanningType = Partial<ControlBoardPlanningInterface>;
export type CreateControlBoardPlanningDetailType = Pick<ControlBoardPlanningDetailInterface, "time" | "sequence" | "qty">;

export interface CreateControlBoardPlanningInterface {
    planning: CreateControlBoardPlanningType;
    planningDetails: CreateControlBoardPlanningDetailType[];
}

export type UpdateControlBoardPlanningDetailType = Partial<ControlBoardPlanningDetailInterface>;