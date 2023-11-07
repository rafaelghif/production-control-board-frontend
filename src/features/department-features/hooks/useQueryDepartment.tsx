import { useQuery } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { getDepartments } from "../../../services/department-service";
import useLoadingStore from "../../../stores/useLoadingStore";

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
