import { ControlBoardPlanningInterface } from "./control-board-planning-type";

export type ShiftType = "Normal" | "Short" | "Long";

export interface ControlBoardInterface {
	LineId: string;
	planningDate: string;
	planningTime: number;
	planningSequence: number;
	planningQty: number;
	planningQtyCumulative: string;
	totalOrderComplete: number;
	totalOrderCompleteCumulative: number;
	differenceQty: number;
	remark: string;
	breakTime: string;
}

export interface PtrPerLineInterface {
	LineId: string;
	model: string;
	createdDay: number;
	createdMonth: number;
	createdYear: number;
	total: number;
}

export interface ControlBoardWithLineInterface {
	lineName: string;
	plannings: ControlBoardInterface[];
	settings: ControlBoardPlanningInterface;
}

export interface ControlBoardWithLineShiftInterface {
	lineName: string;
	plannings: ControlBoardInterface[];
	settings: ControlBoardPlanningInterface;
	shift?: string;
}

export interface RemarkControlBoardPayloadInterface {
	LineId: string;
	date: string;
}
