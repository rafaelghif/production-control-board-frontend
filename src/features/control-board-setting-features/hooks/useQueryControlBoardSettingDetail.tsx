import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { getControlBoardSettingDetail } from "../../../services/control-board-setting";

export const useQueryControlBoardSettingDetail = (controlBoardSettingId: string) => {
    const { setLoading } = useLoadingStore();
    const { errorToast } = useToast();
    return useQuery({
        queryKey: ["control-board-setting-detail", { controlBoardSettingId }],
        queryFn: () => getControlBoardSettingDetail(controlBoardSettingId),
        onError: async (error) => {
            errorToast(error);
            setLoading(false);
        },
        onSettled: async () => {
            setLoading(false);
        },
        refetchOnWindowFocus: false,
        retry: false
    });
}