import { useMutation } from "react-query";

import { useToast } from "../../../hooks/useToast";
import socket from "../../../libs/socket.io";
import { createOrder } from "../../../services/order-service";
import useLoadingStore from "../../../stores/useLoadingStore";
import { CreateOrderType } from "../../../types/order-type";

export const useCreateOrder = () => {
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: CreateOrderType) => createOrder(payload),
		onMutate: () => {
			setLoading(true);
		},
		onError: (error) => {
			setLoading(false);
			errorToast(error);
		},
		onSuccess: (response) => {
			successToast(response.message);
			socket.emit("input", "input");
		},
		onSettled: () => {
			setLoading(false);
		},
	});
};
