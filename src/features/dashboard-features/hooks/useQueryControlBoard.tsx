import { useQuery } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { getControlBoard } from "../../../services/control-board";
import useLoadingStore from "../../../stores/useLoadingStore";

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
