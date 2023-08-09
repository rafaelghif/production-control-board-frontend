import { convertNumberToTimeString } from "../helpers/text-manipulation";
import { ControlBoardInterface } from "../types/control-board";

interface ColumnControlBoardProps {
    data: ControlBoardInterface;
}

const ColumnControlBoard: React.FC<ColumnControlBoardProps> = ({ data }) => {
    return (
        <div className="text-xl flex flex-col snap-center scroll-ml-32 items-center justify-center gap-2 p-3 hover:bg-slate-50 dark:hover:bg-[#272727] cursor-pointer">
            <span className="w-32 font-semibold tracking-wider text-center">{convertNumberToTimeString(data.planningTime)} - {convertNumberToTimeString(data.planningTime + 1)}</span>
            <span>{data.planningQty}</span>
            <span>{data.totalOrderComplete}</span>
            <span className={data.totalOrderComplete - data.planningQty < 0 ? `text-red-500` : ``}>{data.totalOrderComplete - data.planningQty}</span>
            <span>{data.planningQtyCumulative}</span>
            <span>{data.totalOrderCompleteCumulative}</span>
            <span className={data.differenceQty < 0 ? `text-red-500` : ``}>{data.differenceQty}</span>
        </div>
    );
}
export default ColumnControlBoard