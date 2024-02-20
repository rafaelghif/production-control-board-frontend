import { useMutation } from "react-query";

import { useToast } from "../../../hooks";
import { socket } from "../../../libs";
import { createOrderNode } from "../../../services";
import { useLoadingStore } from "../../../stores";
import { CreateOrderType } from "../../../types";

export const useCreateOrderNode = () => {
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: CreateOrderType) => createOrderNode(payload),
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
