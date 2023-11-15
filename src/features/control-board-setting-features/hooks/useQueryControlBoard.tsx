import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getControlBoardSetting } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useQueryControlBoard = () => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["control-board-setting"],
		queryFn: () => getControlBoardSetting(),
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
