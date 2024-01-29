import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getPtrPerLine } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useQueryPtrPerLine = (
	line: string,
	month: number,
	year: number,
) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["ptr-perline", { line, month, year }],
		queryFn: () => getPtrPerLine(line, month, year),
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
