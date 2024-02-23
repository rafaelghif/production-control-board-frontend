import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getPartNotRegister } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useQueryPartNotRegister = () => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["part-not-register"],
		queryFn: () => getPartNotRegister(),
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
