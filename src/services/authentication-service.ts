import { AxiosError } from "axios";

import {
	ApiResponseErrorInterface,
	AuthenticationInterface,
	AuthenticationResponseInterface,
} from "../types";
import { axiosPost } from "./api-service";

const apiName = "/authentication";

export const authentication = async (
	payload: AuthenticationInterface,
): Promise<AuthenticationResponseInterface> => {
	try {
		const response: AuthenticationResponseInterface = await axiosPost(
			`${apiName}/`,
			payload,
		);
		return response;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};
