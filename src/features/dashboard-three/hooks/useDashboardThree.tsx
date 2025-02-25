import { getDashboardAllLines } from "@/services/dashboard";
import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { useLoadingStore } from "../../../stores";

export const useDashboardThree = () => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	const query = (date: string) =>
		useQuery({
			queryKey: ["dashboard-three", { date }],
			queryFn: () => getDashboardAllLines(date),
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
	return { query };
};
