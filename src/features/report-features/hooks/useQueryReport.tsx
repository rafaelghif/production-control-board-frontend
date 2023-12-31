import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getOrders } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useQueryReport = (line: string, date: string, search: string) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["reports", { line, date, search }],
		queryFn: () => getOrders(line, date, search),
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
