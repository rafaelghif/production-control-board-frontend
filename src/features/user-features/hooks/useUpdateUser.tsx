import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks";
import { updateUser } from "../../../services";
import { useLoadingStore } from "../../../stores";
import { UpdateUserType } from "../../../types";

export const useUpdateUser = () => {
	const queryClient = useQueryClient();
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: UpdateUserType) => updateUser(payload),
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
				queryKey: ["users"],
			});
		},
		onSettled: () => {
			setLoading(false);
		},
	});
};
