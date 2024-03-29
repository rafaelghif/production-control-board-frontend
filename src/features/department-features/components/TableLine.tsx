import { IonButton, IonText } from "@ionic/react";

import { useMemo } from "react";
import { TableColumn } from "react-data-table-component";

import Table from "../../../components/Table";
import { formatDateTime } from "../../../libs";
import { LineInterface } from "../../../types";

interface TableLineProps {
	data?: LineInterface[];
	handleClickBtnEdit: (data: LineInterface) => void;
}

const TableLine: React.FC<TableLineProps> = ({
	data = [],
	handleClickBtnEdit,
}) => {
	const columns: TableColumn<LineInterface>[] = useMemo(
		() => [
			{
				name: "Name",
				selector: (row) => row.name,
				sortable: true,
				wrap: true,
			},
			{
				name: "Status",
				cell: (row) => (
					<IonText color={row.inActive ? "danger" : "success"}>
						{row.inActive ? "InActive" : "Active"}
					</IonText>
				),
				sortable: true,
			},
			{
				name: "Update By",
				selector: (row) => row.updatedBy,
				sortable: true,
			},
			{
				name: "Update At",
				selector: (row) => formatDateTime(row.updatedAt),
				sortable: true,
				wrap: true,
			},
			{
				name: "Edit",
				cell: (row) => (
					<IonButton
						fill="clear"
						color="warning"
						onClick={() => {
							handleClickBtnEdit(row);
						}}>
						Edit
					</IonButton>
				),
				center: true,
			},
		],
		[handleClickBtnEdit],
	);
	return (
		<Table
			columns={columns as LineInterface[]}
			data={data}
			responsive
			pagination
			dense
			striped
			highlightOnHover
		/>
	);
};

export default TableLine;
