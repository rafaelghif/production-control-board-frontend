import { AxiosError } from "axios";

import {
	ApiResponseErrorInterface,
	ApiResponseInterface,
	DashboardThreeInterface,
} from "../types";
import { axiosGet } from "./api-service";

const apiName = "/dashboard";

export const getDashboardAllLines = async (
	date: string,
): Promise<DashboardThreeInterface[]> => {
	try {
		const response: ApiResponseInterface<DashboardThreeInterface[]> =
			await axiosGet(`${apiName}/date/${date}`);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};
