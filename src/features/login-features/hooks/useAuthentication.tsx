import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { authentication } from "../../../services/authentication-service";
import { setToken } from "../../../services/local-storage-service";
import { AuthenticationInterface } from "../../../types/authentication-type";
import useLoadingStore from "../../../stores/useLoadingStore";
import useUserStore from "../../../stores/useUserStore";
import useAuthStore from "../../../stores/useAuthStore";
import { useToast } from "../../../hooks/useToast";
import useDepartmentStore from "../../../stores/useDepartmentStore";
import useLineStore from "../../../stores/useLineStore";

export const useAuthentication = () => {
    const history = useHistory();

    const { setLoading } = useLoadingStore();
    const { errorToast, successToast } = useToast();
    const { setUser } = useUserStore();
    const { setDepartment } = useDepartmentStore();
    const { setLine } = useLineStore();
    const { loginUser } = useAuthStore();

    return useMutation({
        mutationFn: (formData: AuthenticationInterface) => authentication(formData),
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
}