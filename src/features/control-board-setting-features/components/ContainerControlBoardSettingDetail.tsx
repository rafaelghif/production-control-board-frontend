import { IonCol, IonGrid, IonRow, IonSpinner } from "@ionic/react";

import { Suspense, lazy, useState } from "react";
import { ExpanderComponentProps } from "react-data-table-component";

import Card from "../../../components/Card";
import {
	ControlBoardSettingDetailInterface,
	ControlBoardSettingWithLineInterface,
} from "../../../types";
import { useQueryControlBoardSettingDetail } from "../hooks";
import ModalUpdateControlBoardSettingDetail from "./ModalUpdateControlBoardSettingDetail";

const TableControlBoardSettingDetail = lazy(
	() => import("./TableControlBoardSettingDetail"),
);

const ContainerControlBoardSettingDetail: React.FC<
	ExpanderComponentProps<ControlBoardSettingWithLineInterface>
> = ({ data: controlBoardSetting }) => {
	const { data, isLoading } = useQueryControlBoardSettingDetail(
		controlBoardSetting.id,
	);

	const [selectValue, setSelectValue] =
		useState<ControlBoardSettingDetailInterface>();
	const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

	const handleClickBtnEdit = (data: ControlBoardSettingDetailInterface) => {
		setSelectValue(data);
		setIsOpenModalUpdate(true);
	};
	return (
		<>
			<IonGrid>
				<IonRow>
					<IonCol size="12">
						<Card
							title={`Detail ${controlBoardSetting.Line.name}`}
							headerColor="light" className="w-[40%]">
							{isLoading ? (
								<IonSpinner name="crescent" />
							) : (
								<Suspense
									fallback={<IonSpinner name="crescent" />}>
									<TableControlBoardSettingDetail
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
			<ModalUpdateControlBoardSettingDetail
				isOpen={isOpenModalUpdate}
				data={selectValue}
				onDidDismiss={() => setIsOpenModalUpdate(false)}
			/>
		</>
	);
};

export default ContainerControlBoardSettingDetail;
