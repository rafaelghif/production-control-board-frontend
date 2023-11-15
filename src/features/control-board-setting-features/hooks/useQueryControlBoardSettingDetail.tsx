import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getControlBoardSettingDetail } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useQueryControlBoardSettingDetail = (
	controlBoardSettingId: string,
) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["control-board-setting-detail", { controlBoardSettingId }],
		queryFn: () => getControlBoardSettingDetail(controlBoardSettingId),
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
