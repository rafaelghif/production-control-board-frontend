import { useEffect, useState } from "react";

import useDashboardStore from "../../stores/useDashboardStore";
import { getPlanningTime } from "../../utils/dashboard";

interface ColActualProps {
	currentHour: number;
	planningTime: number;
	totalOrderComplete: number;
	totalOrderCompleteCumulative: number;
	isHighlight: boolean;
}

const ColActual: React.FC<ColActualProps> = ({
	currentHour,
	planningTime,
	totalOrderComplete,
	totalOrderCompleteCumulative,
	isHighlight,
}) => {
	const [className, setClassName] = useState("");
	const { shift } = useDashboardStore();
	useEffect(() => {
		const planningTimes = getPlanningTime(planningTime, shift)
			.split(" - ")
			.map((res) => res.replace(":", "."));

		const firstTime = parseFloat(planningTimes[0]);
		const secondTime = parseFloat(planningTimes[1]);

		if (isHighlight) {
			setClassName("text-black font-semibold");
		} else if (firstTime > currentHour) {
			setClassName("text-[#383838]");
		} else {
			setClassName("");
		}
	}, [currentHour, isHighlight]);
	return (
		<td className={className}>
			{totalOrderComplete} / {totalOrderCompleteCumulative}
		</td>
	);
};

export default ColActual;
