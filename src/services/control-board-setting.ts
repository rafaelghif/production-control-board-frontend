import { AxiosError } from "axios";

import {
	ApiResponseErrorInterface,
	ApiResponseInterface,
	ControlBoardSettingDetailInterface,
	ControlBoardSettingInterface,
	ControlBoardSettingInterfaceWithDetail,
	ControlBoardSettingWithLineInterface,
	CreateControlBoardSettingInterface,
	UpdateControlBoardPlanningDetailType,
	UpdateControlBoardSettingType,
} from "../types";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";

const apiName = "/control-board-setting";

export const getControlBoardSetting = async (): Promise<
	ControlBoardSettingWithLineInterface[]
> => {
	try {
		const response: ApiResponseInterface<
			ControlBoardSettingWithLineInterface[]
		> = await axiosGet(`${apiName}/`);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getControlBoardSettingDetail = async (
	controlBoardSettingId: string,
): Promise<ControlBoardSettingDetailInterface[]> => {
	try {
		const response: ApiResponseInterface<
			ControlBoardSettingDetailInterface[]
		> = await axiosGet(
			`${apiName}/detail/controlBoardSettingId/${controlBoardSettingId}`,
		);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getControlBoardSettingByDepartment = async (
	departmentId: string,
): Promise<ControlBoardSettingWithLineInterface[]> => {
	try {
		const response: ApiResponseInterface<
			ControlBoardSettingWithLineInterface[]
		> = await axiosGet(`${apiName}/departmentId/${departmentId}`);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getControlBoardSettingByLine = async (
	lineId: string,
): Promise<ControlBoardSettingInterfaceWithDetail> => {
	try {
		const response: ApiResponseInterface<ControlBoardSettingInterfaceWithDetail> =
			await axiosGet(`${apiName}/lineId/${lineId || "none"}`);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const createControlBoardSetting = async (
	payload: CreateControlBoardSettingInterface,
): Promise<string> => {
	try {
		const response: ApiResponseInterface<ControlBoardSettingInterface> =
			await axiosPost(`${apiName}/`, payload);
		return response.message;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const updateControlBoardSetting = async (
	payload: UpdateControlBoardSettingType,
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

export const updateControlBoardSettingDetail = async (
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
