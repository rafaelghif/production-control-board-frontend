import { useQuery } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { getControlBoardPlanningDetail } from "../../../services/control-board-planning";
import useLoadingStore from "../../../stores/useLoadingStore";

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
