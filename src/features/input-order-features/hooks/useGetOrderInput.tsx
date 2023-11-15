import { useMutation } from "react-query";

import { useToast } from "../../../hooks";
import { getOrderInput } from "../../../services";
import { useLoadingStore } from "../../../stores";

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
			setLoading(false);
		},
	});
};
