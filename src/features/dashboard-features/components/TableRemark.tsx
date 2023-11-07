import { useMemo } from "react";
import { TableColumn } from "react-data-table-component";

import Table from "../../../components/Table";
import { plus1HourTime } from "../../../libs/date-fns";
import { ControlBoardPlanningDetailInterface } from "../../../types/control-board-planning-type";

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
