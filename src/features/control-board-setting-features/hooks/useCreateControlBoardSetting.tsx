import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { CreateControlBoardSettingType } from "../../../types/control-board-setting-type";
import { createControlBoardSetting } from "../../../services/control-board-setting";

export const useCreateControlBoardSetting = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: CreateControlBoardSettingType) => createControlBoardSetting(payload),
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
                queryKey: ["control-board-setting"]
            });
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}