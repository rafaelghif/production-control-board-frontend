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
import useLineStore from "../../../stores/useLineStore";
import { ControlBoardPlanningInterface } from "../../../types/control-board-planning-type";
import { useQueryControlBoardPlanning } from "../hooks/useQueryControlBoardPlanning";
import ModalUpdateControlBoardPlanning from "./ModalUpdateControlBoardPlanning";

const TableControlBoardPlanning = lazy(
	() => import("./TableControlBoardPlanning"),
);

const ContainerControlBoardPlanning: React.FC = () => {
	const { line } = useLineStore();

	const { data, isLoading, refetch } = useQueryControlBoardPlanning(line?.id);
	const [selectValue, setSelectValue] =
		useState<ControlBoardPlanningInterface>();
	const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

	const handleClickBtnEdit = (data: ControlBoardPlanningInterface) => {
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
						<Card title="Data Control Board Planning">
							{isLoading ? (
								<IonSpinner name="crescent" />
							) : (
								<Suspense
									fallback={<IonSpinner name="crescent" />}>
									<TableControlBoardPlanning
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
			<ModalUpdateControlBoardPlanning
				isOpen={isOpenModalUpdate}
				data={selectValue}
				onDidDismiss={() => setIsOpenModalUpdate(false)}
			/>
		</>
	);
};

export default ContainerControlBoardPlanning;
