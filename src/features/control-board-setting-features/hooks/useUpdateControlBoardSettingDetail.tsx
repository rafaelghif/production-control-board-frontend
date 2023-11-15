import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks";
import { updateControlBoardSettingDetail } from "../../../services";
import { useLoadingStore } from "../../../stores";
import { UpdateControlBoardSettingDetailType } from "../../../types";

export const useUpdateControlBoardSettingDetail = () => {
	const queryClient = useQueryClient();
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: UpdateControlBoardSettingDetailType) =>
			updateControlBoardSettingDetail(payload),
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
				queryKey: ["control-board-setting-detail"],
			});
		},
		onSettled: () => {
			setLoading(false);
		},
	});
};
