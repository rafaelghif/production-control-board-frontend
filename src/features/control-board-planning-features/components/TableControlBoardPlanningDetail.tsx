import { TableColumn } from "react-data-table-component";
import Table from "../../../components/Table";
import { useMemo } from "react";
import { IonButton, IonText } from "@ionic/react";
import { formatDateTime } from "../../../libs/date-fns";
import { ControlBoardPlanningDetailInterface, } from "../../../types/control-board-planning-type";

interface TableControlBoardPlanningDetailProps {
    data?: ControlBoardPlanningDetailInterface[];
    handleClickBtnEdit: (data: ControlBoardPlanningDetailInterface) => void;
}

const TableControlBoardPlanningDetail: React.FC<TableControlBoardPlanningDetailProps> = ({ data = [], handleClickBtnEdit }) => {
    const columns: TableColumn<ControlBoardPlanningDetailInterface>[] = useMemo(() => [{
        name: "Time",
        selector: (row) => row.time,
        sortable: true,
        wrap: true
    }, {
        name: "Qty",
        selector: (row) => row.qty,
        sortable: true,
        wrap: true
    }, {
        name: "Remark",
        selector: (row) => row.remark,
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
        <Table columns={columns} data={data} responsive pagination dense striped highlightOnHover />
    );
}

export default TableControlBoardPlanningDetail;