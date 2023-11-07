import { AxiosError } from "axios";

import {
	ApiResponseErrorInterface,
	ApiResponseInterface,
} from "../types/api-response-type";
import {
	CreateLineType,
	LineInterface,
	UpdateLineType,
} from "../types/line-type";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";

const apiName = "/line";

export const getLines = async (): Promise<LineInterface[]> => {
	try {
		const response: ApiResponseInterface<LineInterface[]> = await axiosGet(
			`${apiName}/`,
		);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getActiveLines = async (): Promise<LineInterface[]> => {
	try {
		const response: ApiResponseInterface<LineInterface[]> = await axiosGet(
			`${apiName}/active`,
		);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getLineByDepartment = async (
	departmentId: string,
): Promise<LineInterface[]> => {
	try {
		const response: ApiResponseInterface<LineInterface[]> = await axiosGet(
			`${apiName}/departmentId/${departmentId}`,
		);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getActiveLineByDepartment = async (
	departmentId: string,
): Promise<LineInterface[]> => {
	try {
		const response: ApiResponseInterface<LineInterface[]> = await axiosGet(
			`${apiName}/active/departmentId/${departmentId}`,
		);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const createLine = async (payload: CreateLineType): Promise<string> => {
	try {
		const response: ApiResponseInterface<LineInterface> = await axiosPost(
			`${apiName}/`,
			payload,
		);
		return response.message;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const updateLine = async (payload: UpdateLineType): Promise<string> => {
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
