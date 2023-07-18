import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { getControlBoardPlanning } from "../../../services/control-board-planning";

export const useQueryControlBoardPlanning = (lineId?: string) => {
    const { setLoading } = useLoadingStore();
    const { errorToast } = useToast();
    return useQuery({
        queryKey: ["control-board-planning", { lineId: lineId || "All" }],
        queryFn: () => getControlBoardPlanning(lineId),
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