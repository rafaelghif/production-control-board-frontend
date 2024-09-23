import { IonButton, IonText } from "@ionic/react";

import { useMemo } from "react";
import { TableColumn } from "react-data-table-component";
import { ExpandableRowsComponent } from "react-data-table-component/dist/src/DataTable/types";

import Table from "../../../components/Table";
import { formatDateTime } from "../../../libs";
import {
	ControlBoardSettingInterface,
	ControlBoardSettingWithLineInterface,
} from "../../../types";
import ContainerControlBoardSettingDetail from "./ContainerControlBoardSettingDetail";

interface TableControlBoardSettingProps {
	data?: ControlBoardSettingWithLineInterface[];
	handleClickBtnEdit: (data: ControlBoardSettingInterface) => void;
}

const TableControlBoardSetting: React.FC<TableControlBoardSettingProps> = ({
	data = [],
	handleClickBtnEdit,
}) => {
	const columns: TableColumn<ControlBoardSettingWithLineInterface>[] =
		useMemo(
			() => [
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
				{
					name: "Shift",
					selector: (row) => row.shift,
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
					name: "Actual Working Time All",
					selector: (row) => row.actualWorkingTimeAll,
					sortable: true,
					wrap: true,
				},
				{
					name: "Production Plan Qty",
					selector: (row) => row.productLoadingPlanQty,
					sortable: true,
					wrap: true,
				},
				{
					name: "Production Plan Backlog Qty",
					selector: (row) => row.productLoadingPlanBacklogQty || "-",
					sortable: true,
					wrap: true,
				},
				{
					name: "Tack Time",
					selector: (row) => row.tackTime,
					sortable: true,
					wrap: true,
				},
				{
					name: "Total Process Time",
					selector: (row) => row.totalProcessTime,
					sortable: true,
					wrap: true,
				},
				{
					name: "Actual Working Time",
					selector: (row) => row.actualWorkingTime,
					sortable: true,
					wrap: true,
				},
				{
					name: "Actual Working Time Overtime",
					selector: (row) => row.actualWorkingTimeOvertime || "-",
					sortable: true,
					wrap: true,
				},
				{
					name: "Man Power Count",
					selector: (row) => row.manPowerCount,
					sortable: true,
					wrap: true,
				},
				{
					name: "Man Power Additional Count",
					selector: (row) => row.manPowerAdditionalCount || "-",
					sortable: true,
					wrap: true,
				},
				{
					name: "Man Power Able to Spare Count",
					selector: (row) => row.manPowerAbleToSpare || "-",
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
			],
			[handleClickBtnEdit],
		);
	return (
		<Table
			columns={columns as ControlBoardSettingWithLineInterface[]}
			data={data}
			responsive
			pagination
			striped
			highlightOnHover
			expandableRows
			expandableRowsComponent={
				ContainerControlBoardSettingDetail as ExpandableRowsComponent<unknown>
			}
		/>
	);
};

export default TableControlBoardSetting;
