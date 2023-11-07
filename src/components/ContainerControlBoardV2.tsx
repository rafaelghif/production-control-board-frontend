import { useEffect, useState } from "react";

import {
	convertNumberToTimeHalfString,
	convertNumberToTimeString,
} from "../helpers/text-manipulation";
import { formatDateString } from "../libs/date-fns";
import { ControlBoardInterface } from "../types/control-board";
import { ControlBoardPlanningInterface } from "../types/control-board-planning-type";
import Card from "./Card";
import ContainerSettingDashboardLarge from "./ContainerSettingDashboardLarge";

interface ContainerControlBoardProps {
	title: string;
	data?: ControlBoardInterface[];
	shiftFilter: string;
	settings?: ControlBoardPlanningInterface;
}

const hours = [
	7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3,
	4, 5, 6,
];

const ContainerControlBoardV2: React.FC<ContainerControlBoardProps> = ({
	title,
	data,
	shiftFilter,
	settings,
}) => {
	const [currentDate, setCurrentDate] = useState<string>(
		formatDateString(new Date()),
	);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(
				hours.findIndex((hour) => hour === new Date().getHours()),
			);
			setCurrentDate(formatDateString(new Date()));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const planningTime = (planningTime: number): string => {
		if (shiftFilter === "Short") {
			return convertNumberToTimeHalfString(planningTime);
		}

		return `${convertNumberToTimeString(
			planningTime,
		)} - ${convertNumberToTimeString(planningTime + 1)}`;
	};

	return (
		<Card title={title}>
			<div className="flex flex-col gap-1">
				<div>
					<ContainerSettingDashboardLarge
						data={settings}
						shiftFilter={shiftFilter}
					/>
				</div>
				<div>
					<table className="w-full text-xl text-center text-gray-500 dark:text-gray-400">
						<thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-2">
									Time
								</th>
								<th scope="col" className="px-6 py-2">
									Planning
								</th>
								<th scope="col" className="px-6 py-2">
									Actual
								</th>
								<th scope="col" className="px-6 py-2">
									Difference
								</th>
								<th scope="col" className="px-6 py-2">
									Remark
								</th>
							</tr>
						</thead>
						<tbody
							className={
								shiftFilter === "Normal" ? "" : "text-4xl"
							}>
							{data?.map((res, index) => (
								<tr
									key={`tr-${index}`}
									className="border-b dark:border-gray-700">
									<th
										scope="row"
										className="px-6 py-[0.78rem] font-medium  whitespace-nowrap">
										{planningTime(res.planningTime)}
									</th>
									<td className="text-white">
										{res.planningQty} /{" "}
										{res.planningQtyCumulative}
									</td>
									<td className="text-white">
										{res.totalOrderComplete} /{" "}
										{res.totalOrderCompleteCumulative}
									</td>
									<td>
										{index > currentIndex &&
										currentDate === res.planningDate ? (
											<span>-</span>
										) : (
											<>
												<span
													className={
														res.totalOrderComplete -
															res.planningQty >
														0
															? "text-[#33ffff]"
															: res.totalOrderComplete -
																	res.planningQty <
															  0
															? "text-red-500"
															: "text-white"
													}>
													{res.totalOrderComplete -
														res.planningQty}
												</span>
												<span> / </span>
												<span
													className={
														res.differenceQty > 0
															? "text-[#33ffff]"
															: res.differenceQty <
															  0
															? "text-red-500"
															: "text-white"
													}>
													{res.differenceQty}
												</span>
											</>
										)}
									</td>
									<td className="text-[#ffff33] text-2xl">
										{res.remark}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Card>
	);
};

export default ContainerControlBoardV2;
