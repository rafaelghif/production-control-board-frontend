import { useQuery } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { getControlBoardSettingByLine } from "../../../services/control-board-setting";
import useLoadingStore from "../../../stores/useLoadingStore";

export const useQueryControlBoardSettingByLine = (lineId: string) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["control-board-setting-line", { lineId: lineId || "none" }],
		queryFn: () => getControlBoardSettingByLine(lineId),
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
