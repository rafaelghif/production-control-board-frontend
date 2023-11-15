import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getControlBoardSettingByLine } from "../../../services";
import { useLoadingStore } from "../../../stores";

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
