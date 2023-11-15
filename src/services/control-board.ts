import { AxiosError } from "axios";

import {
	ApiResponseErrorInterface,
	ApiResponseInterface,
	ControlBoardPlanningDetailInterface,
	ControlBoardWithLineInterface,
	ControlBoardWithLineShiftInterface,
} from "../types";
import { axiosGet } from "./api-service";

const apiName = "/control-board";

export const getControlBoard = async (
	line: string,
	date: string,
): Promise<ControlBoardWithLineInterface[]> => {
	try {
		const response: ApiResponseInterface<ControlBoardWithLineInterface[]> =
			await axiosGet(`${apiName}/line/${line}/date/${date}`);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getControlBoardShift = async (
	line: string,
	date: string,
	shift: string,
): Promise<ControlBoardWithLineShiftInterface[]> => {
	try {
		const response: ApiResponseInterface<
			ControlBoardWithLineShiftInterface[]
		> = await axiosGet(
			`${apiName}/line/${line}/date/${date}/shift/${shift}`,
		);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getRemarkControlBoard = async (
	line: string,
	date: string,
): Promise<ControlBoardPlanningDetailInterface[]> => {
	try {
		const response: ApiResponseInterface<
			ControlBoardPlanningDetailInterface[]
		> = await axiosGet(`${apiName}/remark/line/${line}/date/${date}`);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};
