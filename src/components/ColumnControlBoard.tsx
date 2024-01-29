import { convertNumberToTimeString } from "../helpers";
import { ControlBoardInterface } from "../types";

interface ColumnControlBoardProps {
	data: ControlBoardInterface;
}

const ColumnControlBoard: React.FC<ColumnControlBoardProps> = ({ data }) => {
	const isBackLog = data.totalOrderComplete - data.planningQty < 0;
	const getPlanningTime = (planningTime: number) => {
		return `${convertNumberToTimeString(
			planningTime,
		)} - ${convertNumberToTimeString(planningTime + 1)}`;
	};
	return (
		<div className="text-2xl flex flex-col snap-center scroll-ml-32 items-center gap-2 p-3 hover:bg-slate-50 dark:hover:bg-[#272727] cursor-pointer">
			<span className="font-semibold tracking-wider text-center w-44">
				{getPlanningTime(data.planningTime)}
			</span>
			<span>
				{data.planningQty} / {data.planningQtyCumulative}
			</span>
			<span>
				{data.totalOrderComplete} / {data.totalOrderCompleteCumulative}
			</span>
			<span className={isBackLog ? "text-red-500" : ""}>
				{data.totalOrderComplete - data.planningQty} /{" "}
				{data.differenceQty}
			</span>
			<span className="text-base text-red-500">{data.remark}</span>
		</div>
	);
};
export default ColumnControlBoard;
