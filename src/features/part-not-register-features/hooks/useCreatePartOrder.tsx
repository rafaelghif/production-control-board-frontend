import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks";
import { createPartOrder } from "../../../services";
import { useLoadingStore } from "../../../stores";
import { CreatePartOrderInterface } from "../../../types";

export const useCreatePartOrder = () => {
	const queryClient = useQueryClient();
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: CreatePartOrderInterface) =>
			createPartOrder(payload),
		onMutate: () => {
			setLoading(true);
		},
		onError: async (error) => {
			setLoading(false);
			errorToast(error);
		},
		onSuccess: async (response) => {
			successToast(response);
			queryClient.invalidateQueries({
				queryKey: ["part-not-register"],
			});
		},
		onSettled: () => {
			setLoading(false);
		},
	});
};
