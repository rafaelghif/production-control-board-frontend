import { useQuery } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { getLineByDepartment } from "../../../services/line-service";
import useLoadingStore from "../../../stores/useLoadingStore";

export const useQueryLine = (departmentId: string) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["lines", { departmentId }],
		queryFn: () => getLineByDepartment(departmentId),
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
