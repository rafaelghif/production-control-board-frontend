import { AxiosError } from "axios";

import {
	ApiResponseErrorInterface,
	ApiResponseInterface,
	CreateDepartmentType,
	DepartmentInterface,
	UpdateDepartmentType,
} from "../types";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";

const apiName = "/department";

export const getDepartments = async (): Promise<DepartmentInterface[]> => {
	try {
		const response: ApiResponseInterface<DepartmentInterface[]> =
			await axiosGet(`${apiName}/`);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getActiveDepartments = async (): Promise<
	DepartmentInterface[]
> => {
	try {
		const response: ApiResponseInterface<DepartmentInterface[]> =
			await axiosGet(`${apiName}/active`);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const createDepartment = async (
	payload: CreateDepartmentType,
): Promise<string> => {
	try {
		const response: ApiResponseInterface<DepartmentInterface> =
			await axiosPost(`${apiName}/`, payload);
		return response.message;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const updateDepartment = async (
	payload: UpdateDepartmentType,
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
