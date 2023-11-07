import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { updateControlBoardSetting } from "../../../services/control-board-setting";
import useLoadingStore from "../../../stores/useLoadingStore";
import { UpdateControlBoardSettingType } from "../../../types/control-board-setting-type";

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
