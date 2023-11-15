import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getControlBoardShift } from "../../../services";
import { useLoadingStore } from "../../../stores";

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
