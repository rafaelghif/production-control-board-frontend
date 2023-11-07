import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { createUser } from "../../../services/user-service";
import useLoadingStore from "../../../stores/useLoadingStore";
import { CreateUserType } from "../../../types/user-type";

export const useCreateUser = () => {
	const queryClient = useQueryClient();
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: CreateUserType) => createUser(payload),
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
