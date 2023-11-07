import { useQuery } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { getUsers } from "../../../services/user-service";
import useLoadingStore from "../../../stores/useLoadingStore";

export const useQueryUser = () => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["users"],
		queryFn: () => getUsers(),
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
