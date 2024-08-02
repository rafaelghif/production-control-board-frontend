import { format } from "date-fns";
import { useEffect, useState } from "react";

import useDashboardStore from "../../stores/useDashboardStore";
import { ControlBoardInterface } from "../../types";
import { getPlanningTime } from "../../utils/dashboard";
import ColActual from "./ColActual";
import ColDifference from "./ColDifference";
import ColPlanning from "./ColPlanning";
import ColPlanningTime from "./ColPlanningTime";

interface TableControlBoardBody {
	data?: ControlBoardInterface[];
}

const TableControlBoardBody: React.FC<TableControlBoardBody> = ({ data }) => {
	const [currentHour, setCurrentHour] = useState<number>(0);
	const [dataIndex, setDataIndex] = useState<number>(0);

	const { shift } = useDashboardStore();

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
		data?.map((res, index) => {
			const planningTimes = getPlanningTime(res.planningTime, shift)
				.split(" - ")
				.map((res) => res.replace(":", "."));

			const firstTime = parseFloat(planningTimes[0]);
			const secondTime = parseFloat(planningTimes[1]);

			if (currentHour >= firstTime && currentHour <= secondTime) {
				setDataIndex(index);
			}
		});
	}, [currentHour]);

	return (
		<tbody className={shift === "Normal" ? "" : "text-4xl"}>
			{data?.map((res, index) => (
				<tr
					key={`tr-${index}`}
					className={
						dataIndex === index
							? "border-b dark:border-gray-700 bg-sky-300"
							: "border-b dark:border-gray-700"
					}>
					<ColPlanningTime
						currentHour={currentHour}
						planningTime={res.planningTime}
						isHighlight={dataIndex === index}
					/>
					<ColPlanning
						currentHour={currentHour}
						planningTime={res.planningTime}
						planningQty={res.planningQty}
						planningQtyCumulative={res.planningQtyCumulative}
						isHighlight={dataIndex === index}
					/>
					<ColActual
						currentHour={currentHour}
						planningTime={res.planningTime}
						totalOrderComplete={res.totalOrderComplete}
						totalOrderCompleteCumulative={
							res.totalOrderCompleteCumulative
						}
						isHighlight={dataIndex === index}
					/>
					<ColDifference
						currentHour={currentHour}
						planningTime={res.planningTime}
						differenceQty={res.differenceQty}
						planningQty={res.planningQty}
						totalOrderComplete={res.totalOrderComplete}
						isHighlight={dataIndex === index}
					/>
					<td className="text-[#ffff33] text-2xl">{res.remark}</td>
					<td className="text-[#e4852d] text-2xl">
						{res.breakTime ? `${res.breakTime}min` : null}
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default TableControlBoardBody;
