import { AxiosError } from "axios";

import {
	ApiResponseErrorInterface,
	ApiResponseInterface,
	CreateOrderType,
	OrderResponseCableType,
	OrderResponseInterface,
	OrderResponseType,
	OrderWithLineInterface,
} from "../types";
import { axiosGet, axiosPost } from "./api-service";

const apiName = "/order";

export const getOrders = async (
	line: string,
	date: string,
	search: string,
): Promise<OrderWithLineInterface[]> => {
	try {
		const response: ApiResponseInterface<OrderWithLineInterface[]> =
			await axiosGet(
				`${apiName}/orderDate/${date}/lineId/${line}?search=${search}`,
			);
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getOrderInput = async (
	serialNumber: string,
): Promise<OrderResponseType> => {
	try {
		const response: ApiResponseInterface<OrderResponseType> =
			await axiosPost(`${apiName}/input`, { serialNumber });
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const getOrderInputCable = async (
	indexNumber: string,
): Promise<OrderResponseCableType> => {
	try {
		const response: ApiResponseInterface<OrderResponseCableType> =
			await axiosPost(`${apiName}/input-cable`, { indexNumber });
		return response.data;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const createOrder = async (
	payload: CreateOrderType,
): Promise<OrderResponseInterface> => {
	try {
		const response: OrderResponseInterface = await axiosPost(
			`${apiName}/`,
			payload,
		);
		return response;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

export const createOrderCable = async (
	payload: CreateOrderType,
): Promise<OrderResponseInterface> => {
	try {
		const response: OrderResponseInterface = await axiosPost(
			`${apiName}/cable`,
			payload,
		);
		return response;
	} catch (error) {
		const err = error as AxiosError<ApiResponseErrorInterface>;
		throw err;
	}
};

