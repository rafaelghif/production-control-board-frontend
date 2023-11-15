import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks";
import { socket } from "../../../libs";
import { updateControlBoardPlanning } from "../../../services";
import { useLoadingStore } from "../../../stores";
import { UpdateControlBoardPlanningType } from "../../../types";

export const useUpdateControlBoardPlanning = () => {
	const queryClient = useQueryClient();
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: UpdateControlBoardPlanningType) =>
			updateControlBoardPlanning(payload),
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
			socket.emit("input", "input");
		},
		onSettled: () => {
			setLoading(false);
		},
	});
};
