import { useMutation, useQueryClient } from "react-query";

import { useToast } from "../../../hooks";
import { updateDepartment } from "../../../services";
import { useLoadingStore } from "../../../stores";
import { UpdateDepartmentType } from "../../../types";

export const useUpdateDepartment = () => {
	const queryClient = useQueryClient();
	const { setLoading } = useLoadingStore();
	const { successToast, errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: UpdateDepartmentType) =>
			updateDepartment(payload),
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
