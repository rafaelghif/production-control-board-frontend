import { useMutation } from "react-query";
import { useHistory } from "react-router";

import { useToast } from "../../../hooks";
import { authentication } from "../../../services";
import { setToken } from "../../../services";
import { useAuthStore } from "../../../stores";
import { useDepartmentStore } from "../../../stores";
import { useLineStore } from "../../../stores";
import { useLoadingStore } from "../../../stores";
import { useUserStore } from "../../../stores";
import { AuthenticationInterface } from "../../../types";

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
		onError: async (error: unknown) => {
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
