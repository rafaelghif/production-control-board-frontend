import { IonButton, IonText } from "@ionic/react";

import { useMemo } from "react";
import { TableColumn } from "react-data-table-component";

import Table from "../../../components/Table";
import { formatDateTime } from "../../../libs";
import { ControlBoardSettingDetailInterface } from "../../../types";

interface TableControlBoardSettingDetailProps {
	data?: ControlBoardSettingDetailInterface[];
	handleClickBtnEdit: (data: ControlBoardSettingDetailInterface) => void;
}

const TableControlBoardSettingDetail: React.FC<
	TableControlBoardSettingDetailProps
> = ({ data = [], handleClickBtnEdit }) => {
	const columns: TableColumn<ControlBoardSettingDetailInterface>[] = useMemo(
		() => [
			{
				name: "Time",
				selector: (row) => row.time,
				sortable: true,
				wrap: true,
			},
			{
				name: "Qty",
				selector: (row) => row.qty,
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
			columns={columns as ControlBoardSettingDetailInterface[]}
			data={data}
			responsive
			pagination
			dense
			striped
			highlightOnHover
		/>
	);
};

export default TableControlBoardSettingDetail;
