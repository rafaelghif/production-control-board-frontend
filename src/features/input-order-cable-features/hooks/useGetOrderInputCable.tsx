import { useMutation } from "react-query";

import { useToast } from "../../../hooks";
import { getOrderInputCable } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useGetOrderInputCable = () => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: string) => getOrderInputCable(payload),
		onMutate: () => {
			setLoading(true);
		},
		onError: async (error) => {
			setLoading(false);
			errorToast(error);
		},
		onSettled: () => {
			setLoading(false);
		},
	});
};
