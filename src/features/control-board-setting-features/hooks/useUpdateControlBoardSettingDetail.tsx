import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { updateControlBoardSettingDetail } from "../../../services/control-board-setting";
import useLoadingStore from "../../../stores/useLoadingStore";
import { UpdateControlBoardSettingDetailType } from "../../../types/control-board-setting-type";

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
