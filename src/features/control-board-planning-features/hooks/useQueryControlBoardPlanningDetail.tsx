import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getControlBoardPlanningDetail } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useQueryControlBoardPlanningDetail = (
	controlBoardPlanningId: string,
) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["control-board-planning-detail", { controlBoardPlanningId }],
		queryFn: () => getControlBoardPlanningDetail(controlBoardPlanningId),
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
