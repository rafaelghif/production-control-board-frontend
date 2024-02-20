import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getUsers } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useQueryUser = (search: string) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["users", { search: search }],
		queryFn: () => getUsers(search),
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
