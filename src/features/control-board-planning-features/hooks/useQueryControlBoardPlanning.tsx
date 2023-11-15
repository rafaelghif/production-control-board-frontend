import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getControlBoardPlanning } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useQueryControlBoardPlanning = (lineId?: string) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["control-board-planning", { lineId: lineId || "All" }],
		queryFn: () => getControlBoardPlanning(lineId),
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
