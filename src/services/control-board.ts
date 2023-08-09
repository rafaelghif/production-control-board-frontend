import { AxiosError } from "axios";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { axiosGet } from "./api-service";
import { ControlBoardWithLineInterface } from "../types/control-board";
import { ControlBoardPlanningDetailInterface } from "../types/control-board-planning-type";

const apiName = "/control-board";

export const getControlBoard = async (line: string, date: string): Promise<ControlBoardWithLineInterface[]> => {
    try {
        const response: ApiResponseInterface<ControlBoardWithLineInterface[]> = await axiosGet(`${apiName}/line/${line}/date/${date}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const getRemarkControlBoard = async (line: string, date: string): Promise<ControlBoardPlanningDetailInterface[]> => {
    try {
        const response: ApiResponseInterface<ControlBoardPlanningDetailInterface[]> = await axiosGet(`${apiName}/remark/line/${line}/date/${date}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}