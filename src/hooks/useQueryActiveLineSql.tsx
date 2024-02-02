import { useQuery } from "react-query";

import { getActiveLinesSql } from "../services";
import { useLoadingStore } from "../stores";
import useToast from "./useToast";

const useQueryActiveLineSql = () => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["active-lines-sql"],
		queryFn: () => getActiveLinesSql(),
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

export default useQueryActiveLineSql;
