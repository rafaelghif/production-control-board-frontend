import { format } from "date-fns";
import { useEffect, useState } from "react";

import useDashboardStore from "../../stores/useDashboardStore";
import {
	ControlBoardInterface,
	ControlBoardPlanningInterface,
} from "../../types";
import { getPlanningTime } from "../../utils/dashboard";

interface ContainerDashboardHighlightProps {
	data?: ControlBoardInterface[];
	setting?: ControlBoardPlanningInterface;
}

const ContainerDashboardHighlight: React.FC<
	ContainerDashboardHighlightProps
> = ({ data, setting }) => {
	const [currentHour, setCurrentHour] = useState<number>(0);
	const { shift } = useDashboardStore();

	const [controlBoard, setControlBoard] = useState<ControlBoardInterface>();

	useEffect(() => {
		const interval = setInterval(() => {
			const currentHours = format(new Date(), "H");
			const currentMinutes = format(new Date(), "mm");
			const hours: number =
				shift === "Short"
					? parseFloat(`${currentHours}.${currentMinutes}`)
					: parseFloat(currentHours);
			setCurrentHour(hours);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		data?.map((res) => {
			const planningTimes = getPlanningTime(res.planningTime, shift)
				.split(" - ")
				.map((res) => res.replace(":", "."));

			const firstTime = parseFloat(planningTimes[0]);
			const secondTime = parseFloat(planningTimes[1]);
			if (currentHour >= firstTime && currentHour <= secondTime) {
				setControlBoard(res);
			}
		});
	}, [currentHour]);
	return (
		<div className="bg-[#1e1e1e] w-[999px] mt-8 p-5 ml-3 flex flex-row items-center gap-3 rounded">
			<div className="flex flex-col items-center justify-center w-2/12 h-56 p-5 text-center text-black rounded bg-sky-300">
				<span className="w-full text-xl font-semibold border-b border-black -mt-[0.3rem]">
					Time
				</span>
				<span className="text-[1.9rem] mt-5">
					{getPlanningTime(controlBoard?.planningTime || 0, shift)}
				</span>
			</div>
			<div className="flex flex-col items-center justify-center w-4/12 h-56 p-5 text-center text-black rounded bg-sky-300">
				<span className="w-full text-xl font-semibold border-b border-black -mt-[1.5rem]">
					Current Target
				</span>
				<span className="text-[2.85rem] mt-6 font-extrabold">
					{controlBoard?.totalOrderComplete} /{" "}
					{controlBoard?.planningQty}
				</span>
			</div>
			<div className="h-56 bg-[#181818] flex items-center justify-center p-5 text-center flex-col w-4/12 rounded">
				<span className="w-full -mt-[1.5rem] text-xl font-semibold border-b">
					Total Till Now
				</span>
				<span className="text-[2.85rem] mt-6 font-extrabold">
					{controlBoard?.totalOrderCompleteCumulative} /{" "}
					{controlBoard?.planningQtyCumulative}
				</span>
			</div>
			<div className="h-56 bg-[#181818] flex items-center justify-center p-5 text-center  flex-col w-2/12 rounded">
				<span className="w-full -mt-5 text-xl font-semibold border-b">
					Daily Target
				</span>
				<span className="text-[2.85rem] mt-6 font-extrabold">
					{setting?.productLoadingPlanQty}
				</span>
			</div>
		</div>
	);
};

export default ContainerDashboardHighlight;
