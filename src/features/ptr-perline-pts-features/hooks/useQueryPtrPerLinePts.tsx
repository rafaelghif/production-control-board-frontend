import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getPtrPerLinePts } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useQueryPtrPerLinePts = (
	line: string,
	month: number,
	year: number,
) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["ptr-perline-pts", { line, month, year }],
		queryFn: () => getPtrPerLinePts(line, month, year),
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
