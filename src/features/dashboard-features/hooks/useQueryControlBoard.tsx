import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getControlBoard } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useQueryControlBoard = (line: string, date: string) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["control-boards", { line, date }],
		queryFn: () => getControlBoard(line, date),
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
