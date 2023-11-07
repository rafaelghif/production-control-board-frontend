import { useQuery } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { getControlBoardSetting } from "../../../services/control-board-setting";
import useLoadingStore from "../../../stores/useLoadingStore";

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
