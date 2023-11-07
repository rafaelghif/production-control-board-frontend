import { useQuery } from "react-query";

import { getActiveLines } from "../services/line-service";
import useLoadingStore from "../stores/useLoadingStore";
import { useToast } from "./useToast";

export const useQueryActiveLine = () => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["active-lines"],
		queryFn: () => getActiveLines(),
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
