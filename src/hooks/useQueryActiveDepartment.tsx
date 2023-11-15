import { useQuery } from "react-query";

import { getActiveDepartments } from "../services";
import { useLoadingStore } from "../stores";
import useToast from "./useToast";

const useQueryActiveDepartment = () => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["active-departments"],
		queryFn: () => getActiveDepartments(),
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

export default useQueryActiveDepartment;
