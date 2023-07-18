import { useQuery } from "react-query";
import useLoadingStore from "../stores/useLoadingStore";
import { useToast } from "./useToast";
import { getActiveDepartments } from "../services/department-service";

export const useQueryActiveDepartment = () => {
    const { setLoading } = useLoadingStore();
    const { errorToast } = useToast();
    return useQuery({
        queryKey: ["active-departments"],
        queryFn: () => getActiveDepartments(),
        onError: async (error) => {
            errorToast(error);
            setLoading(false);
        },
        onSettled: async () => {
            setLoading(false);
        },
        refetchOnWindowFocus: false,
        retry: false
    });
}