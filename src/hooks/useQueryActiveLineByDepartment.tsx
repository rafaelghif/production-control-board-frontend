import { useQuery } from "react-query";

import { getActiveLineByDepartment } from "../services";
import { useLoadingStore } from "../stores";
import useToast from "./useToast";

const useQueryActiveLineByDepartment = (departmentId: string) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["active-lines-by-department", { departmentId }],
		queryFn: () => getActiveLineByDepartment(departmentId),
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

export default useQueryActiveLineByDepartment;
