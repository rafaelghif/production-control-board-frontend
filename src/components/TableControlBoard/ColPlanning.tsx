import { useEffect, useState } from "react";

import useDashboardStore from "../../stores/useDashboardStore";
import { getPlanningTime } from "../../utils/dashboard";

interface ColPlanningProps {
	currentHour: number;
	planningTime: number;
	planningQty: number;
	planningQtyCumulative: string;
}

const ColPlanning: React.FC<ColPlanningProps> = ({
	planningQty,
	planningQtyCumulative,
	planningTime,
	currentHour,
}) => {
	const [className, setClassName] = useState("");
	const { shift } = useDashboardStore();
	useEffect(() => {
		const planningTimes = getPlanningTime(planningTime, shift)
			.split(" - ")
			.map((res) => res.replace(":", "."));
		const firstTime = parseFloat(planningTimes[0]);
		const secondTime = parseFloat(planningTimes[1]);
		if (currentHour > firstTime && currentHour < secondTime) {
			setClassName("text-white");
		} else if (firstTime > currentHour) {
			setClassName("text-[#383838]");
		} else {
			setClassName("");
		}
	}, [currentHour]);
	return (
		<td className={className}>
			{planningQty} / {planningQtyCumulative}
		</td>
	);
};

export default ColPlanning;
