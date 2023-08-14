import { AxiosError } from "axios";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { axiosGet, axiosPost } from "./api-service";
import { CreateOrderType, OrderResponseInterface, OrderResponseType, OrderWithLineInterface } from "../types/order-type";

const apiName = "/order";

export const getOrders = async (line: string, date: string, search: string): Promise<OrderWithLineInterface[]> => {
    try {
        const response: ApiResponseInterface<OrderWithLineInterface[]> = await axiosGet(`${apiName}/orderDate/${date}/lineId/${line}?search=${search}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const getOrderInput = async (serialNumber: string): Promise<OrderResponseType> => {
    try {
        const response: ApiResponseInterface<OrderResponseType> = await axiosPost(`${apiName}/input`, { serialNumber });
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const createOrder = async (payload: CreateOrderType): Promise<OrderResponseInterface> => {
    try {
        const response: OrderResponseInterface = await axiosPost(`${apiName}/`, payload);
        return response;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}