import { format } from "date-fns";

import {
	convertNumberToTimeHalfString,
	convertNumberToTimeString,
} from "../helpers/text-manipulation";
import { ControlBoardInterface, ShiftType } from "../types/control-board";

interface TableControlBoardProps {
	data?: ControlBoardInterface[];
	shiftFilter: ShiftType;
}

const TableControlBoard: React.FC<TableControlBoardProps> = ({
	data,
	shiftFilter,
}) => {
	const planningTime = (planningTime: number): string => {
		if (shiftFilter === "Short") {
			return convertNumberToTimeHalfString(planningTime);
		}

		return `${convertNumberToTimeString(
			planningTime,
		)} - ${convertNumberToTimeString(planningTime + 1)}`;
	};
	return (
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
			<tbody className={shiftFilter === "Normal" ? "" : "text-4xl"}>
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
							{res.planningQty} / {res.planningQtyCumulative}
						</td>
						<td className="text-white">
							{res.totalOrderComplete} /{" "}
							{res.totalOrderCompleteCumulative}
						</td>
						<td>
							{shiftFilter !== "Short" ? (
								+format(new Date(), "H") >= res.planningTime ? (
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
													: res.differenceQty < 0
													? "text-red-500"
													: "text-white"
											}>
											{res.differenceQty}
										</span>
									</>
								) : (
									<span>-</span>
								)
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
												: res.differenceQty < 0
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
	);
};

export default TableControlBoard;