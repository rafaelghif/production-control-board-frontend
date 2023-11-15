import {
	IonButton,
	IonCol,
	IonGrid,
	IonRefresher,
	IonRefresherContent,
	IonRow,
	IonSpinner,
	RefresherEventDetail,
} from "@ionic/react";

import { Suspense, lazy, useState } from "react";
import { ExpanderComponentProps } from "react-data-table-component";

import Card from "../../../components/Card";
import { DepartmentInterface } from "../../../types";
import { LineInterface } from "../../../types";
import { useQueryLine } from "../hooks";
import ModalCreateLine from "./ModalCreateLine";
import ModalUpdateLine from "./ModalUpdateLine";

const TableLine = lazy(() => import("./TableLine"));

const ContainerLine: React.FC<ExpanderComponentProps<DepartmentInterface>> = ({
	data: departmentData,
}) => {
	const { data, isLoading, refetch } = useQueryLine(departmentData.id);
	const [selectValue, setSelectValue] = useState<LineInterface>();
	const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
	const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

	const handleClickBtnEdit = (data: LineInterface) => {
		setSelectValue(data);
		setIsOpenModalUpdate(true);
	};

	const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
		refetch();
		event.detail.complete();
	};
	return (
		<>
			<IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
				<IonRefresherContent />
			</IonRefresher>
			<IonGrid>
				<IonRow>
					<IonCol size="12">
						<IonButton
							onClick={() => setIsOpenModalCreate(true)}
							fill="clear"
							className="float-right">
							Create Line
						</IonButton>
					</IonCol>
					<IonCol size="12">
						<Card title={`Data Line ${departmentData.name}`}>
							{isLoading ? (
								<IonSpinner name="crescent" />
							) : (
								<Suspense
									fallback={<IonSpinner name="crescent" />}>
									<TableLine
										data={data}
										handleClickBtnEdit={(data) =>
											handleClickBtnEdit(data)
										}
									/>
								</Suspense>
							)}
						</Card>
					</IonCol>
				</IonRow>
			</IonGrid>
			<ModalCreateLine
				departmentId={departmentData.id}
				isOpen={isOpenModalCreate}
				onDidDismiss={() => setIsOpenModalCreate(false)}
			/>
			<ModalUpdateLine
				data={selectValue}
				isOpen={isOpenModalUpdate}
				onDidDismiss={() => setIsOpenModalUpdate(false)}
			/>
		</>
	);
};

export default ContainerLine;
