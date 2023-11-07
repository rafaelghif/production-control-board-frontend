import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { updateLine } from "../../../services/line-service";
import useLoadingStore from "../../../stores/useLoadingStore";
import { UpdateLineType } from "../../../types/line-type";

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
