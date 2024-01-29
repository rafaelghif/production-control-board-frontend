import { IonButton, IonText } from "@ionic/react";

import { useMemo } from "react";
import { TableColumn } from "react-data-table-component";
import { ExpandableRowsComponent } from "react-data-table-component/dist/src/DataTable/types";

import Table from "../../../components/Table";
import { formatDateTime } from "../../../libs";
import { DepartmentInterface } from "../../../types";
import ContainerLine from "./ContainerLine";

interface TableDepartmentProps {
	data?: DepartmentInterface[];
	handleClickBtnEdit: (data: DepartmentInterface) => void;
}

const TableDepartment: React.FC<TableDepartmentProps> = ({
	data = [],
	handleClickBtnEdit,
}) => {
	const columns: TableColumn<DepartmentInterface>[] = useMemo(
		() => [
			{
				name: "Name",
				selector: (row) => row.name,
				sortable: true,
				wrap: true,
			},
			{
				name: "Abbreviation",
				selector: (row) => row.abbreviation,
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
			columns={columns as DepartmentInterface[]}
			data={data}
			responsive
			pagination
			striped
			highlightOnHover
			expandableRows
			expandableRowsComponent={
				ContainerLine as ExpandableRowsComponent<unknown>
			}
		/>
	);
};

export default TableDepartment;
