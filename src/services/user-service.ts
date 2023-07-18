import { AxiosError } from "axios";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { CreateUserType, UpdateUserType, UserInterface, UserWithDepartmentAndLineInterface } from "../types/user-type";

const apiName = "/user";

export const getUsers = async (): Promise<UserWithDepartmentAndLineInterface[]> => {
    try {
        const response: ApiResponseInterface<UserWithDepartmentAndLineInterface[]> = await axiosGet(`${apiName}/`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const createUser = async (payload: CreateUserType): Promise<string> => {
    try {
        const response: ApiResponseInterface<UserInterface> = await axiosPost(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const updateUser = async (payload: UpdateUserType): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPatch(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}