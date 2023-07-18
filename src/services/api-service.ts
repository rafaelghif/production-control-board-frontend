import { AxiosResponse } from "axios";
import axiosClient from "../libs/axios";
import { ApiResponseInterface } from "../types/api-response-type";

export const axiosGet = async<T>(url: string): Promise<ApiResponseInterface<T>> => {
    try {
        const response: AxiosResponse<ApiResponseInterface<T>> = await axiosClient.get(url);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export const axiosPost = async <T>(url: string, payload: any, multipart: boolean = false): Promise<ApiResponseInterface<T>> => {
    try {
        const postOptions = multipart ? { headers: { "Content-Type": "multipart/form-data" } } : {};
        const response: AxiosResponse<ApiResponseInterface<T>> = await axiosClient.post(url, payload, postOptions);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export const axiosPatch = async <T>(url: string, payload: any, multipart: boolean = false): Promise<ApiResponseInterface<T>> => {
    try {
        const patchOptions = multipart ? { headers: { "Content-Type": "multipart/form-data" } } : {};
        const response: AxiosResponse<ApiResponseInterface<T>> = await axiosClient.patch(url, payload, patchOptions);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}