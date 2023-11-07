import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { createLine } from "../../../services/line-service";
import useLoadingStore from "../../../stores/useLoadingStore";
import { CreateLineType } from "../../../types/line-type";

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
