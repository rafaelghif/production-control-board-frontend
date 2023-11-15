import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks";
import { updateLine } from "../../../services/";
import { useLoadingStore } from "../../../stores";
import { UpdateLineType } from "../../../types";

export const useUpdateLine = () => {
	const queryClient = useQueryClient();
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: UpdateLineType) => updateLine(payload),
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
