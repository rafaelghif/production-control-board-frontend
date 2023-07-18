import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { UpdateControlBoardPlanningType } from "../../../types/control-board-planning-type";
import { updateControlBoardPlanning } from "../../../services/control-board-planning";

export const useUpdateControlBoardPlanning = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: UpdateControlBoardPlanningType) => updateControlBoardPlanning(payload),
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
                queryKey: ["control-board-planning"]
            });
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}