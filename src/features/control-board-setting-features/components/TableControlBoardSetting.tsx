import { TableColumn } from "react-data-table-component";
import Table from "../../../components/Table";
import { useMemo } from "react";
import { IonButton, IonText } from "@ionic/react";
import { formatDateTime } from "../../../libs/date-fns";
import { ControlBoardSettingInterface, ControlBoardSettingWithLineInterface } from "../../../types/control-board-setting-type";

interface TableControlBoardSettingProps {
    data?: ControlBoardSettingWithLineInterface[];
    handleClickBtnEdit: (data: ControlBoardSettingInterface) => void;
}

const TableControlBoardSetting: React.FC<TableControlBoardSettingProps> = ({ data = [], handleClickBtnEdit }) => {
    const columns: TableColumn<ControlBoardSettingWithLineInterface>[] = useMemo(() => [{
        name: "Line",
        selector: (row) => row.Line.name,
        sortable: true,
        wrap: true
    }, {
        name: "Actual Working Time",
        selector: (row) => row.actualWorkingTime,
        sortable: true,
        wrap: true
    }, {
        name: "Man Power Regular",
        selector: (row) => row.manPowerRegular,
        sortable: true,
        wrap: true
    }, {
        name: "Total Shift",
        selector: (row) => row.shiftTotal,
        sortable: true,
        wrap: true
    }, {
        name: "Plan Qty",
        selector: (row) => row.planQty,
        sortable: true,
        wrap: true
    }, {
        name: "Status",
        cell: (row) => <IonText color={row.inActive ? "danger" : "success"}>{row.inActive ? "InActive" : "Active"}</IonText>,
        sortable: true,
    }, {
        name: "Update By",
        selector: (row) => row.updatedBy,
        sortable: true,
    }, {
        name: "Update At",
        selector: (row) => formatDateTime(row.updatedAt),
        sortable: true,
        wrap: true
    }, {
        name: "Edit",
        cell: (row) => <IonButton fill="clear" color="warning" onClick={() => { handleClickBtnEdit(row) }}>Edit</IonButton>,
        center: true
    }], [handleClickBtnEdit]);
    return (
        <Table columns={columns} data={data} responsive pagination striped highlightOnHover />
    );
}

export default TableControlBoardSetting;