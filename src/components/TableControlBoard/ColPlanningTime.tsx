import { useEffect, useState } from "react";

import useDashboardStore from "../../stores/useDashboardStore";
import { getPlanningTime } from "../../utils/dashboard";

interface ColPlanningTimeInterface {
	currentHour: number;
	planningTime: number;
}

const ColPlanningTime: React.FC<ColPlanningTimeInterface> = ({
	currentHour,
	planningTime,
}) => {
	const [className, setClassName] = useState<string>(
		"px-2 py-[0.78rem] font-medium h-28 whitespace-nowrap",
	);
	const { shift } = useDashboardStore();

	useEffect(() => {
		const planningTimes = getPlanningTime(planningTime, shift)
			.split(" - ")
			.map((res) => res.replace(":", "."));
		const firstTime = parseFloat(planningTimes[0]);
		const secondTime = parseFloat(planningTimes[1]);

		if (currentHour > firstTime && currentHour < secondTime) {
			setClassName(
				"px-2 py-[0.78rem] text-white font-medium h-28 whitespace-nowrap",
			);
		} else if (firstTime > currentHour) {
			setClassName(
				"px-2 py-[0.78rem] text-[#383838] font-medium h-28 whitespace-nowrap",
			);
		} else {
			setClassName(
				"px-2 py-[0.78rem] font-medium h-28 whitespace-nowrap",
			);
		}
	}, [currentHour]);

	return (
		<td scope="row" className={className}>
			{getPlanningTime(planningTime, shift)}
		</td>
	);
};

export default ColPlanningTime;
