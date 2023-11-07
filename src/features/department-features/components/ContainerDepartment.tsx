import {
	IonCol,
	IonGrid,
	IonRefresher,
	IonRefresherContent,
	IonRow,
	IonSpinner,
	RefresherEventDetail,
} from "@ionic/react";

import { Suspense, lazy, useState } from "react";

import Card from "../../../components/Card";
import { DepartmentInterface } from "../../../types/department-type";
import { useQueryDepartment } from "../hooks/useQueryDepartment";
import ModalUpdateDepartment from "./ModalUpdateDepartment";

const TableDepartment = lazy(() => import("./TableDepartment"));

const ContainerDepartment: React.FC = () => {
	const { data, isLoading, refetch } = useQueryDepartment();
	const [selectValue, setSelectValue] = useState<DepartmentInterface>();
	const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

	const handleClickBtnEdit = (data: DepartmentInterface) => {
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
					<IonCol>
						<Card title="Data Department">
							{isLoading ? (
								<IonSpinner name="crescent" />
							) : (
								<Suspense
									fallback={<IonSpinner name="crescent" />}>
									<TableDepartment
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
			<ModalUpdateDepartment
				data={selectValue}
				isOpen={isOpenModalUpdate}
				onDidDismiss={() => setIsOpenModalUpdate(false)}
			/>
		</>
	);
};

export default ContainerDepartment;
