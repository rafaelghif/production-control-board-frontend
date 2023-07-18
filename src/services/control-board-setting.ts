import { AxiosError } from "axios";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { ControlBoardSettingInterface, ControlBoardSettingWithLineInterface, CreateControlBoardSettingType, UpdateControlBoardSettingType } from "../types/control-board-setting-type";

const apiName = "/control-board-setting";

export const getControlBoardSetting = async (): Promise<ControlBoardSettingWithLineInterface[]> => {
    try {
        const response: ApiResponseInterface<ControlBoardSettingWithLineInterface[]> = await axiosGet(`${apiName}/`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const getControlBoardSettingByDepartment = async (departmentId: string): Promise<ControlBoardSettingWithLineInterface[]> => {
    try {
        const response: ApiResponseInterface<ControlBoardSettingWithLineInterface[]> = await axiosGet(`${apiName}/departmentId/${departmentId}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const createControlBoardSetting = async (payload: CreateControlBoardSettingType): Promise<string> => {
    try {
        const response: ApiResponseInterface<ControlBoardSettingInterface> = await axiosPost(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const updateControlBoardSetting = async (payload: UpdateControlBoardSettingType): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPatch(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}