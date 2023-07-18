import { useMutation } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { createOrder } from "../../../services/order-service";
import { CreateOrderType } from "../../../types/order-type";

export const useCreateOrder = () => {
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: CreateOrderType) => createOrder(payload),
        onMutate: () => {
            setLoading(true);
        },
        onError: async (error) => {
            setLoading(false);
            errorToast(error);
        },
        onSuccess: (response) => {
            successToast(response.message);
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}