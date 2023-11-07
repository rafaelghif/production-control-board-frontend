import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks/useToast";
import socket from "../../../libs/socket.io";
import { updateControlBoardPlanning } from "../../../services/control-board-planning";
import useLoadingStore from "../../../stores/useLoadingStore";
import { UpdateControlBoardPlanningType } from "../../../types/control-board-planning-type";

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
