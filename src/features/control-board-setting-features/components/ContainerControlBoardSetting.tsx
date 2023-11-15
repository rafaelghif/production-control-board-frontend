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
import { useDepartmentStore } from "../../../stores";
import { useUserStore } from "../../../stores";
import { ControlBoardSettingInterface } from "../../../types";
import { useQueryControlBoard } from "../hooks";
import { useQueryControlBoardSettingByDepartment } from "../hooks";
import ModalUpdateControlBoardSetting from "./ModalUpdateControlBoardSetting";

const TableControlBoardSetting = lazy(
	() => import("./TableControlBoardSetting"),
);

const ContainerControlBoardSetting: React.FC = () => {
	const { department } = useDepartmentStore();
	const { user } = useUserStore();

	const { data, isLoading, refetch } =
		user.role !== "Basic"
			? useQueryControlBoard()
			: useQueryControlBoardSettingByDepartment(department.id);
	const [selectValue, setSelectValue] =
		useState<ControlBoardSettingInterface>();
	const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

	const handleClickBtnEdit = (data: ControlBoardSettingInterface) => {
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
						<Card title="Data Control Board Setting">
							{isLoading ? (
								<IonSpinner name="crescent" />
							) : (
								<Suspense
									fallback={<IonSpinner name="crescent" />}>
									<TableControlBoardSetting
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
			<ModalUpdateControlBoardSetting
				data={selectValue}
				isOpen={isOpenModalUpdate}
				onDidDismiss={() => setIsOpenModalUpdate(false)}
			/>
		</>
	);
};

export default ContainerControlBoardSetting;
