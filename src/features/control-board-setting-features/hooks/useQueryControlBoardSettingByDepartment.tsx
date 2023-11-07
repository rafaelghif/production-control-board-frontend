import { useQuery } from "react-query";

import { useToast } from "../../../hooks/useToast";
import { getControlBoardSettingByDepartment } from "../../../services/control-board-setting";
import useLoadingStore from "../../../stores/useLoadingStore";

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
