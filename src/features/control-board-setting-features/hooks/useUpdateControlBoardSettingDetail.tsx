import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { UpdateControlBoardSettingDetailType } from "../../../types/control-board-setting-type";
import { updateControlBoardSettingDetail } from "../../../services/control-board-setting";

export const useUpdateControlBoardSettingDetail = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: UpdateControlBoardSettingDetailType) => updateControlBoardSettingDetail(payload),
        onMutate: () => {
            setLoading(true);
        },
        onError: async (error) => {
            setLoading(false);
            errorToast(error);
        },
        onSuccess: async (response) => {
            successToast(response);
            queryClient.invalidateQueries({
                queryKey: ["control-board-setting-detail"]
            });
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}