import { useMemo } from "react";
import { TableColumn } from "react-data-table-component";

import Table from "../../../components/Table";
import { convertNumberToTimeString } from "../../../helpers/text-manipulation";
import { ControlBoardInterface } from "../../../types/control-board";

interface TableReportOutputProps {
	data?: ControlBoardInterface[];
}

const TableReportOutput: React.FC<TableReportOutputProps> = ({ data = [] }) => {
	const columns: TableColumn<ControlBoardInterface>[] = useMemo(
		() => [
			{
				name: "Planning Date",
				selector: (row) => row.planningDate,
				sortable: true,
				wrap: true,
			},
			{
				name: "Planning Time",
				selector: (row) =>
					`${convertNumberToTimeString(
						row.planningTime,
					)} - ${convertNumberToTimeString(row.planningTime + 1)}`,
				sortable: true,
				wrap: true,
			},
			{
				name: "Planning Qty",
				selector: (row) => row.planningQty,
				sortable: true,
				wrap: true,
			},
			{
				name: "Planning Qty Cumulative",
				selector: (row) => row.planningQtyCumulative,
				sortable: true,
				wrap: true,
			},
			{
				name: "Actual Qty",
				selector: (row) => row.totalOrderComplete,
				sortable: true,
				wrap: true,
			},
			{
				name: "Actual Qty Cumulative",
				selector: (row) => row.totalOrderCompleteCumulative,
				sortable: true,
				wrap: true,
			},
			{
				name: "Remark",
				selector: (row) => row.remark,
				sortable: true,
				wrap: true,
			},
		],
		[],
	);
	return (
		<Table
			columns={columns}
			data={data}
			responsive
			pagination
			striped
			highlightOnHover
		/>
	);
};

export default TableReportOutput;
