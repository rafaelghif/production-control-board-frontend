import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks";
import { createControlBoardPlanning } from "../../../services";
import { useLoadingStore } from "../../../stores";
import { CreateControlBoardPlanningInterface } from "../../../types";

export const useCreateControlBoardPlanning = () => {
	const queryClient = useQueryClient();
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: CreateControlBoardPlanningInterface) =>
			createControlBoardPlanning(payload),
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
				queryKey: ["control-board-planning"],
			});
		},
		onSettled: () => {
			setLoading(false);
		},
	});
};
