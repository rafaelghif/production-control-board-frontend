import { IonButton, IonText } from "@ionic/react";

import { useMemo } from "react";
import { TableColumn } from "react-data-table-component";

import Table from "../../../components/Table";
import { formatDateTime } from "../../../libs";
import {
	UserInterface,
	UserWithDepartmentAndLineInterface,
} from "../../../types";

interface TableUserProps {
	data?: UserWithDepartmentAndLineInterface[];
	handleClickBtnEdit: (data: UserInterface) => void;
}

const TableUser: React.FC<TableUserProps> = ({
	data = [],
	handleClickBtnEdit,
}) => {
	const columns: TableColumn<UserWithDepartmentAndLineInterface>[] = useMemo(
		() => [
			{
				name: "Badge Id",
				selector: (row) => row.badgeId,
				sortable: true,
				wrap: true,
			},
			{
				name: "Name",
				selector: (row) => row.name,
				sortable: true,
				wrap: true,
			},
			{
				name: "Role",
				selector: (row) => row.role,
				sortable: true,
				wrap: true,
			},
			{
				name: "Department",
				selector: (row) => row.Department?.name,
				sortable: true,
				wrap: true,
			},
			{
				name: "Line",
				selector: (row) => row.Line?.name,
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
			columns={columns as UserWithDepartmentAndLineInterface[]}
			data={data}
			responsive
			pagination
			striped
			highlightOnHover
		/>
	);
};

export default TableUser;
