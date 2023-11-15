import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks";
import { createDepartment } from "../../../services";
import { useLoadingStore } from "../../../stores";
import { CreateDepartmentType } from "../../../types";

export const useCreateDepartment = () => {
	const queryClient = useQueryClient();
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: CreateDepartmentType) =>
			createDepartment(payload),
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
				queryKey: ["departments"],
			});
		},
		onSettled: () => {
			setLoading(false);
		},
	});
};
