import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks/useToast";
import socket from "../../../libs/socket.io";
import { updateControlBoardPlanningDetail } from "../../../services/control-board-planning";
import useLoadingStore from "../../../stores/useLoadingStore";
import { UpdateControlBoardPlanningDetailType } from "../../../types/control-board-planning-type";

export const useUpdateControlBoardPlanningDetail = () => {
	const queryClient = useQueryClient();
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: UpdateControlBoardPlanningDetailType) =>
			updateControlBoardPlanningDetail(payload),
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
				queryKey: ["control-board-planning-detail"],
			});
			socket.emit("input", "input");
		},
		onSettled: () => {
			setLoading(false);
		},
	});
};
