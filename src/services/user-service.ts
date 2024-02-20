import { AxiosError } from "axios";

import {
	ApiResponseErrorInterface,
	ApiResponseInterface,
	CreateUserType,
	UpdateUserType,
	UserInterface,
	UserWithDepartmentAndLineInterface,
} from "../types";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";

const apiName = "/user";

export const getUsers = async (
	search: string,
): Promise<UserWithDepartmentAndLineInterface[]> => {
	try {
		const response: ApiResponseInterface<
			UserWithDepartmentAndLineInterface[]
		> = await axiosGet(`${apiName}/?search=${search}`);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const createUser = async (payload: CreateUserType): Promise<string> => {
	try {
		const response: ApiResponseInterface<UserInterface> = await axiosPost(
			`${apiName}/`,
			payload,
		);
		return response.message;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const updateUser = async (payload: UpdateUserType): Promise<string> => {
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
