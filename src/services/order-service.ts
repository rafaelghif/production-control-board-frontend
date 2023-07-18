import { AxiosError } from "axios";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { axiosPost } from "./api-service";
import { CreateOrderType, OrderInterface, OrderResponseInterface, OrderResponseType } from "../types/order-type";

const apiName = "/order";

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