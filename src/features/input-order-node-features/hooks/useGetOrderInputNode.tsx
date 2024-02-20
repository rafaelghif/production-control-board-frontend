import { useMutation } from "react-query";

import { useToast } from "../../../hooks";
import { getOrderInputNode } from "../../../services";
import { useLoadingStore } from "../../../stores";

export const useGetOrderInputNode = () => {
	const { setLoading } = useLoadingStore();
	const { errorToast } = useToast();
	return useMutation({
		mutationFn: (payload: string) => getOrderInputNode(payload),
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
