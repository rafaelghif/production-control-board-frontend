import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { CreateLineType } from "../../../types/line-type";
import { createLine } from "../../../services/line-service";

export const useCreateLine = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: CreateLineType) => createLine(payload),
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
                queryKey: ["lines"]
            });
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}