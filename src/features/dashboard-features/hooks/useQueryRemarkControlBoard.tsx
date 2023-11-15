import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getRemarkControlBoard } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useQueryRemarkControlBoard = (line: string, date: string) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["remark-control-boards", { line, date }],
		queryFn: () => getRemarkControlBoard(line, date),
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
