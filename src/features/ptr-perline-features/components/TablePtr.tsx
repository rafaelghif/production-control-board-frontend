import { useDate } from "../../../stores";
import { PtrPerLineInterface } from "../../../types";

interface TablePtrProps {
	data?: PtrPerLineInterface[];
}

const TablePtr: React.FC<TablePtrProps> = ({ data }) => {
	const { days } = useDate();
	return (
		<table className="w-full border border-collapse cursor-default dark:text-white">
			<thead className="sticky top-0 text-center">
				<tr>
					<th className="border border-collapse">Model</th>
					{days.map((day, index) => (
						<th
							key={`day-header-${index}`}
							className="border border-collapse w-9">
							{day.day}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{Array.from(
					new Set(data?.map((ptrData) => ptrData.model).sort()),
				).map((model, index) => (
					<tr key={`data-body-${index}`}>
						<td className="pl-2 border border-collapse">{model}</td>
						{days.map((day, index) => (
							<td
								key={`day-body-day-${index}`}
								className="h-8 text-center border border-collapse hover:bg-slate-300 hover:text-black">
								{
									data?.find(
										(res) =>
											res.model === model &&
											res.createdDay
												.toString()
												.padStart(2, "0") === day.day,
									)?.total
								}
							</td>
						))}
					</tr>
				))}
				<tr>
					<td className="text-center border border-collapse">
						Total
					</td>
					{days.map((day, dayIndex) => (
						<td
							key={`day-total-${dayIndex}`}
							className="text-center border border-collapse">
							{data?.reduce(
								(acc, curVal) =>
									acc +
									(curVal.createdDay
										.toString()
										.padStart(2, "0") === day.day
										? curVal.total
										: 0),
								0,
							)}
						</td>
					))}
				</tr>
			</tbody>
		</table>
	);
};

export default TablePtr;
