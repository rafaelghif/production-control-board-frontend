import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getDepartments } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useQueryDepartment = () => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["departments"],
		queryFn: () => getDepartments(),
		onError: async (error) => {
			errorToast(error);
			setLoading(false);
		},
		onSettled: async () => {
			setLoading(false);
		},
		refetchOnWindowFocus: false,
		retry: false,
	});
};
