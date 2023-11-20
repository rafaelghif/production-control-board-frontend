import {
	convertNumberToTimeHalfString,
	convertNumberToTimeString,
} from "../helpers";
import { ShiftType } from "../types";

export const getPlanningTime = (planningTime: number, shift: ShiftType): string => {
	if (shift === "Short") {
		return convertNumberToTimeHalfString(planningTime);
	}

	return `${convertNumberToTimeString(
		planningTime,
	)} - ${convertNumberToTimeString(planningTime + 1)}`;
};
