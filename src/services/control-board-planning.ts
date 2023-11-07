import { AxiosError } from "axios";

import {
	ApiResponseErrorInterface,
	ApiResponseInterface,
} from "../types/api-response-type";
import {
	ControlBoardPlanningDetailInterface,
	ControlBoardPlanningWithLineInterface,
	CreateControlBoardPlanningInterface,
	UpdateControlBoardPlanningDetailType,
	UpdateControlBoardPlanningType,
} from "../types/control-board-planning-type";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";

const apiName = "/control-board-planning";

export const getControlBoardPlanning = async (
	lineId?: string,
): Promise<ControlBoardPlanningWithLineInterface[]> => {
	try {
		const lineIdParam = lineId ? lineId : "All";
		const response: ApiResponseInterface<
			ControlBoardPlanningWithLineInterface[]
		> = await axiosGet(`${apiName}/lineId/${lineIdParam}`);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getControlBoardPlanningDetail = async (
	controlBoardPlanningId: string,
): Promise<ControlBoardPlanningDetailInterface[]> => {
	try {
		const response: ApiResponseInterface<
			ControlBoardPlanningDetailInterface[]
		> = await axiosGet(
			`${apiName}/detail/controlBoardPlanningId/${controlBoardPlanningId}`,
		);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const createControlBoardPlanning = async (
	payload: CreateControlBoardPlanningInterface,
): Promise<string> => {
	try {
		const response: ApiResponseInterface<null> = await axiosPost(
			`${apiName}/`,
			payload,
		);
		return response.message;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const updateControlBoardPlanning = async (
	payload: UpdateControlBoardPlanningType,
): Promise<string> => {
	try {
		const response: ApiResponseInterface<null> = await axiosPatch(
			`${apiName}/`,
			payload,
		);
		return response.message;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const updateControlBoardPlanningDetail = async (
	payload: UpdateControlBoardPlanningDetailType,
): Promise<string> => {
	try {
		const response: ApiResponseInterface<null> = await axiosPatch(
			`${apiName}/detail`,
			payload,
		);
		return response.message;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};
