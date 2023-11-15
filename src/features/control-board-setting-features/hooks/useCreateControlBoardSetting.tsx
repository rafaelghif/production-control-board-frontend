import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks";
import { createControlBoardSetting } from "../../../services";
import { useLoadingStore } from "../../../stores";
import { CreateControlBoardSettingInterface } from "../../../types";

export const useCreateControlBoardSetting = () => {
	const queryClient = useQueryClient();
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: CreateControlBoardSettingInterface) =>
			createControlBoardSetting(payload),
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
