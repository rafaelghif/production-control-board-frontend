import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getLineByDepartment } from "../../../services";
import { useLoadingStore } from "../../../stores";

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
