import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { createDepartment } from "../../../services/department-service";
import useLoadingStore from "../../../stores/useLoadingStore";
import { CreateDepartmentType } from "../../../types/department-type";

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
