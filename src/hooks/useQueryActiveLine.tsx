import { useQuery } from "react-query";

import { getActiveLines } from "../services";
import { useLoadingStore } from "../stores";
import useToast from "./useToast";

const useQueryActiveLine = () => {
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

export default useQueryActiveLine;
