import { useQuery } from "react-query";

import { useToast } from "../../../hooks";
import { getControlBoardSettingByDepartment } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useQueryControlBoardSettingByDepartment = (
	departmentId: string,
) => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useQuery({
		queryKey: ["control-board-setting", { departmentId }],
		queryFn: () => getControlBoardSettingByDepartment(departmentId),
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
