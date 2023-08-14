import { ControlBoardInterface } from "../types/control-board";
import { ControlBoardPlanningInterface } from "../types/control-board-planning-type";
import Card from "./Card";
import ContainerSettingDashboardLarge from "./ContainerSettingDashboardLarge";
import { convertNumberToTimeString } from "../helpers/text-manipulation";

interface ContainerControlBoardProps {
	title: string
	data?: ControlBoardInterface[];
	settings?: ControlBoardPlanningInterface;
}


const ContainerControlBoardV2: React.FC<ContainerControlBoardProps> = ({ title, data, settings }) => {
	return (
		<Card title={title}>
			<div className="flex flex-col gap-1">
				<div>
					<ContainerSettingDashboardLarge data={settings} />
				</div>
				<div>
					<table className="w-full text-xl text-center text-gray-500 dark:text-gray-400">
						<thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-2">Time</th>
								<th scope="col" className="px-6 py-2">Planning</th>
								<th scope="col" className="px-6 py-2">Actual</th>
								<th scope="col" className="px-6 py-2">Difference</th>
								<th scope="col" className="px-6 py-2">Remark</th>
							</tr>
						</thead>
						<tbody>
							{data?.map((res, index) => (
								<tr key={`tr-${index}`} className="border-b dark:border-gray-700">
									<th scope="row" className="px-6 py-[0.78rem] font-medium text-gray-900 whitespace-nowrap dark:text-white">{convertNumberToTimeString(res.planningTime)} - {convertNumberToTimeString(res.planningTime + 1)}</th>
									<td>{res.planningQty} / {res.planningQtyCumulative}</td>
									<td>{res.totalOrderComplete} / {res.totalOrderCompleteCumulative}</td>
									<td>
										<span className={
											(res.totalOrderComplete - res.planningQty) > 0
												? "text-[#3880ff]"
												: (res.totalOrderComplete - res.planningQty) < 0 ? "text-red-500" : ""
										}>{res.totalOrderComplete - res.planningQty}</span>
										<span> / </span>
										<span className={
											res.differenceQty > 0 ? "text-[#3880ff]"
												: res.differenceQty < 0 ? "text-red-500" : ""
										}>{res.differenceQty}</span>
									</td>
									<td className="text-red-500">{res.remark}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Card >
	);
};

export default ContainerControlBoardV2;