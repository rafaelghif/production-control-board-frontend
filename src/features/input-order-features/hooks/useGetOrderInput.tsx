import { useMutation, } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { getOrderInput } from "../../../services/order-service";

export const useGetOrderInput = () => {
    const { setLoading } = useLoadingStore();
    const { errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: string) => getOrderInput(payload),
        onMutate: () => {
            setLoading(true);
        },
        onError: async (error) => {
            setLoading(false);
            errorToast(error);
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}