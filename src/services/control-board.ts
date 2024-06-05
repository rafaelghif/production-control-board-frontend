import { AxiosError } from "axios";

import {
	ApiResponseErrorInterface,
	ApiResponseInterface,
	ControlBoardPlanningDetailInterface,
	ControlBoardWithLineInterface,
	ControlBoardWithLineShiftInterface,
	CreatePartOrderInterface,
	PartOrderInterface,
	PtrPerLineInterface,
} from "../types";
import { axiosGet, axiosPost } from "./api-service";

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

export const getPtrPerLine = async (
	line: string,
	month: number,
	year: number,
) => {
	try {
		const response: ApiResponseInterface<PtrPerLineInterface[]> =
			await axiosGet(
				`${apiName}/ptr/line/${line}/month/${month}/year/${year}`,
			);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getPtrMonthly = async (month: number, year: number) => {
	try {
		const response: ApiResponseInterface<PtrPerLineInterface[]> =
			await axiosGet(`${apiName}/ptr/month/${month}/year/${year}`);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getPtrPerLinePts = async (
	line: string,
	month: number,
	year: number,
) => {
	try {
		const response: ApiResponseInterface<PtrPerLineInterface[]> =
			await axiosGet(
				`${apiName}/ptr-pts/line/${line.replace(
					"/",
					"-",
				)}/month/${month}/year/${year}`,
			);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getPartNotRegister = async () => {
	try {
		const response: ApiResponseInterface<PartOrderInterface[]> =
			await axiosGet(`${apiName}/part-not-registered`);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const createPartOrder = async (
	payload: CreatePartOrderInterface,
): Promise<string> => {
	try {
		const response: ApiResponseInterface<CreatePartOrderInterface> =
			await axiosPost(`${apiName}/part-not-registered`, payload);
		return response.message;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};
