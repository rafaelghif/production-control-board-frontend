import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks";
import { socket } from "../../../libs";
import { updateControlBoardPlanningDetail } from "../../../services";
import { useLoadingStore } from "../../../stores/";
import { UpdateControlBoardPlanningDetailType } from "../../../types";

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
