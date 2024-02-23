import { IonButton } from "@ionic/react";

import Table from "@/components/Table";
import { PartOrderInterface } from "@/types";
import { useMemo } from "react";
import { TableColumn } from "react-data-table-component";

interface TablePtrProps {
	data?: { PartOrder: string }[];
	handleClickDefineLine: (partOrder: string) => void;
}

const TablePartNotRegister: React.FC<TablePtrProps> = ({
	data,
	handleClickDefineLine,
}) => {
	const columns: TableColumn<PartOrderInterface>[] = useMemo(
		() => [
			{
				name: "Part Order",
				selector: (row) => row.PartOrder,
				sortable: true,
				wrap: true,
			},
			{
				name: "Line",
				cell: () => "Unknown",
				sortable: true,
				wrap: true,
			},
			{
				name: "Action",
				cell: (row) => (
					<IonButton
						fill="clear"
						onClick={() => handleClickDefineLine(row.PartOrder)}>
						Define Line
					</IonButton>
				),
				center: true,
			},
		],
		[handleClickDefineLine],
	);
	return (
		<Table
			columns={columns as TableColumn<unknown>[]}
			data={data}
			responsive
			pagination
			striped
			highlightOnHover
		/>
	);
};

export default TablePartNotRegister;
