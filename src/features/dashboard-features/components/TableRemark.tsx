import { useMemo } from "react";
import { TableColumn } from "react-data-table-component";

import Table from "../../../components/Table";
import { plus1HourTime } from "../../../libs";
import { ControlBoardPlanningDetailInterface } from "../../../types";

interface TableRemarkProps {
	data?: ControlBoardPlanningDetailInterface[];
}

const TableRemark: React.FC<TableRemarkProps> = ({ data = [] }) => {
	const columns: TableColumn<ControlBoardPlanningDetailInterface>[] = useMemo(
		() => [
			{
				name: "Time",
				selector: (row) => `${row.time} - ${plus1HourTime(row.time)}`,
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

export default TableRemark;
