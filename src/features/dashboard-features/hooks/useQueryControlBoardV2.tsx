import { useQuery } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { getControlBoardShift } from "../../../services/control-board";
import useLoadingStore from "../../../stores/useLoadingStore";

export const useQueryControlBoardV2 = (
	line: string,
	date: string,
	shift: string,
) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["control-boards", { line, date, shift }],
		queryFn: () => getControlBoardShift(line, date, shift),
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
