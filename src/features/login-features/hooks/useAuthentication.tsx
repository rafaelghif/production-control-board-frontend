import { useMutation } from "react-query";
import { useHistory } from "react-router";

import { useToast } from "../../../hooks/useToast";
import { authentication } from "../../../services/authentication-service";
import { setToken } from "../../../services/local-storage-service";
import useAuthStore from "../../../stores/useAuthStore";
import useDepartmentStore from "../../../stores/useDepartmentStore";
import useLineStore from "../../../stores/useLineStore";
import useLoadingStore from "../../../stores/useLoadingStore";
import useUserStore from "../../../stores/useUserStore";
import { AuthenticationInterface } from "../../../types/authentication-type";

export const useAuthentication = () => {
	const history = useHistory();

	const { setLoading } = useLoadingStore();
	const { errorToast, successToast } = useToast();
	const { setUser } = useUserStore();
	const { setDepartment } = useDepartmentStore();
	const { setLine } = useLineStore();
	const { loginUser } = useAuthStore();

	return useMutation({
		mutationFn: (formData: AuthenticationInterface) =>
			authentication(formData),
		onMutate: () => {
			setLoading(true);
		},
		onError: async (error: any) => {
			errorToast(error);
		},
		onSuccess: async (response) => {
			const { data, message } = response;
			const { user, department, line, token } = data;

			setToken(token);
			setUser(user);
			setDepartment(department);
			setLine(line);

			successToast(message);
			loginUser();
		},
		onSettled: (_, err) => {
			setLoading(false);
			if (err === null) {
				history.replace("/home");
			}
		},
	});
};
