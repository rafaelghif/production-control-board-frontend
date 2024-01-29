import { IonButton, IonText } from "@ionic/react";

import { useMemo } from "react";
import { TableColumn } from "react-data-table-component";

import Table from "../../../components/Table";
import { formatDateTime } from "../../../libs";
import {
	ControlBoardPlanningInterface,
	ControlBoardPlanningWithLineInterface,
} from "../../../types";
import ContainerControlBoardPlanningDetail from "./ContainerControlBoardPlanningDetail";
import { ExpandableRowsComponent } from "react-data-table-component/dist/src/DataTable/types";

interface TableControlBoardPlanningProps {
	data?: ControlBoardPlanningWithLineInterface[];
	handleClickBtnEdit: (data: ControlBoardPlanningInterface) => void;
}

const TableControlBoardPlanning: React.FC<TableControlBoardPlanningProps> = ({
	data = [],
	handleClickBtnEdit,
}) => {
	const columns: TableColumn<ControlBoardPlanningWithLineInterface>[] =
		useMemo(
			() => [
				{
					name: "Shift",
					selector: (row) => row.shift,
					sortable: true,
					wrap: true,
				},
				{
					name: "Date",
					selector: (row) => row.date,
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
			columns={columns as ControlBoardPlanningWithLineInterface[]}
			data={data}
			responsive
			pagination
			striped
			highlightOnHover
			expandableRows
			expandableRowsComponent={
				ContainerControlBoardPlanningDetail as ExpandableRowsComponent<unknown>
			}
		/>
	);
};

export default TableControlBoardPlanning;
