import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { UpdateControlBoardPlanningDetailType } from "../../../types/control-board-planning-type";
import { updateControlBoardPlanningDetail } from "../../../services/control-board-planning";

export const useUpdateControlBoardPlanningDetail = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: UpdateControlBoardPlanningDetailType) => updateControlBoardPlanningDetail(payload),
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
                queryKey: ["control-board-planning-detail"]
            });
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}