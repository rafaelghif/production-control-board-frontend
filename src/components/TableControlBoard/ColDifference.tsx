import { useEffect, useState } from "react";

import useDashboardStore from "../../stores/useDashboardStore";
import { getPlanningTime } from "../../utils/dashboard";

interface ColDifferenceProps {
	currentHour: number;
	planningTime: number;
	totalOrderComplete: number;
	planningQty: number;
	differenceQty: number;
}

const ColDifference: React.FC<ColDifferenceProps> = ({
	currentHour,
	planningQty,
	planningTime,
	totalOrderComplete,
	differenceQty,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [orderComplete, setOrderComplete] = useState<number>(0);
	const [colorActual, setColorActual] = useState<string>("");
	const [colorCumulative, setColorCumulative] = useState<string>("");
	const [className, setClassName] = useState("");
	const { shift } = useDashboardStore();

	useEffect(() => {
		const planningTimes = getPlanningTime(planningTime, shift)
			.split(" - ")
			.map((res) => res.replace(":", "."));
		const firstTime = parseFloat(planningTimes[0]);
		const secondTime = parseFloat(planningTimes[1]);
		if (currentHour >= firstTime && currentHour <= secondTime) {
			setClassName("text-black font-semibold");
			setIsOpen(true);
		} else if (firstTime > currentHour) {
			setClassName("text-[#383838] font-semibold");
			setIsOpen(false);
		} else {
			setClassName("");
			setIsOpen(true);
		}
	}, [currentHour]);

	useEffect(() => {
		setOrderComplete(totalOrderComplete - planningQty);
	}, [totalOrderComplete, planningQty]);

	useEffect(() => {
		if (orderComplete > 0) {
			setColorActual("text-[#035BC8]");
		} else if (orderComplete < 0) {
			setColorActual("text-red-500 font-semibold");
		} else {
			setColorActual("text-white font-semibold");
		}

		if (differenceQty > 0) {
			setColorCumulative("text-[#33ffff]");
		} else if (differenceQty < 0) {
			setColorCumulative("text-red-500");
		} else {
			setColorCumulative("text-white font-semibold");
		}
	}, [orderComplete, differenceQty]);

	return (
		<td className={className}>
			{isOpen ? (
				<>
					<span className={colorActual}>{orderComplete}</span>
					<span> / </span>
					<span className={colorCumulative}>{differenceQty}</span>
				</>
			) : (
				<>-</>
			)}
		</td>
	);
};

export default ColDifference;
