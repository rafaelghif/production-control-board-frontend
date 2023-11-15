import { useMemo } from "react";
import { TableColumn } from "react-data-table-component";

import Table from "../../../components/Table";
import { formatDateTime } from "../../../libs";
import { OrderWithLineInterface } from "../../../types";

interface TableReportProps {
	data?: OrderWithLineInterface[];
}

const TableReport: React.FC<TableReportProps> = ({ data = [] }) => {
	const columns: TableColumn<OrderWithLineInterface>[] = useMemo(
		() => [
			{
				name: "Serial Number",
				selector: (row) => row.serialNumber,
				sortable: true,
				wrap: true,
			},
			{
				name: "Model",
				selector: (row) => row.model,
				sortable: true,
				wrap: true,
			},
			{
				name: "Serial Number Type",
				selector: (row) => row.serialNumberType,
				sortable: true,
				wrap: true,
			},
			{
				name: "Line",
				selector: (row) => row.Line.name,
				sortable: true,
				wrap: true,
			},
			{
				name: "Created By",
				selector: (row) => row.createdBy,
				sortable: true,
			},
			{
				name: "Created At",
				selector: (row) => formatDateTime(row.createdAt),
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

export default TableReport;
