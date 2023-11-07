import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { createControlBoardPlanning } from "../../../services/control-board-planning";
import useLoadingStore from "../../../stores/useLoadingStore";
import { CreateControlBoardPlanningInterface } from "../../../types/control-board-planning-type";

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
