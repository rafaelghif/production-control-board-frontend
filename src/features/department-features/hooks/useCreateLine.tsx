import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks";
import { createLine } from "../../../services";
import { useLoadingStore } from "../../../stores";
import { CreateLineType } from "../../../types";

export const useCreateLine = () => {
	const queryClient = useQueryClient();
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: CreateLineType) => createLine(payload),
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
				queryKey: ["lines"],
			});
		},
		onSettled: () => {
			setLoading(false);
		},
	});
};
