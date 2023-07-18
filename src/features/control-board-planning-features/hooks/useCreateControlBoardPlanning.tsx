import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { CreateControlBoardPlanningInterface } from "../../../types/control-board-planning-type";
import { createControlBoardPlanning } from "../../../services/control-board-planning";

export const useCreateControlBoardPlanning = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: CreateControlBoardPlanningInterface) => createControlBoardPlanning(payload),
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