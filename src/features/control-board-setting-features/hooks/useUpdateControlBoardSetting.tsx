import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks";
import { updateControlBoardSetting } from "../../../services";
import { useLoadingStore } from "../../../stores";
import { UpdateControlBoardSettingType } from "../../../types";

export const useUpdateControlBoardSetting = () => {
	const queryClient = useQueryClient();
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: UpdateControlBoardSettingType) =>
			updateControlBoardSetting(payload),
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
				queryKey: ["control-board-setting"],
			});
		},
		onSettled: () => {
			setLoading(false);
		},
	});
};
