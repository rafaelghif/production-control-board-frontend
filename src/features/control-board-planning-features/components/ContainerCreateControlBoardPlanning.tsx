import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";

import Card from "@/components/Card";
import { initialValueDetailLong, initialValueDetailShort } from "@/datas";
import {
	convertNumberToTimeHalfString,
	convertNumberToTimeString,
} from "@/helpers";
import {
	CreateControlBoardPlanningDetailType,
	CreateControlBoardPlanningType,
	InitialPlanningInterface,
	ShiftType,
} from "@/types";
import { useEffect, useState } from "react";

import {
	useCreateControlBoardPlanning,
	useQueryControlBoardSettingByLine,
} from "../hooks";
import FormControlBoardPlanningDetail from "./FormControlBoardPlanningDetail";
import FormCreateControlBoardPlanning from "./FormCreateControlBoardPlanning";

interface ContainerCreateControlBoardPlanningProps {
	issuePlanning?: InitialPlanningInterface;
	onDidDismiss: () => void;
}

const ContainerCreateControlBoardPlanning: React.FC<
	ContainerCreateControlBoardPlanningProps
> = ({ issuePlanning, onDidDismiss }) => {
	const { mutate } = useCreateControlBoardPlanning();

	const [settingShift, setSettingShift] = useState<ShiftType>();
	const initialPlanning: CreateControlBoardPlanningType = {
		shift: "Short",
		date: "",
		LineId: "",
		actualWorkingTime: 0,
		actualWorkingTimeAll: 0,
		actualWorkingTimeOvertime: 0,
		manPowerAbleToSpare: 0,
		manPowerAdditionalCount: 0,
		manPowerCount: 0,
		productLoadingPlanBacklogQty: 0,
		productLoadingPlanQty: 0,
		tackTime: 0,
		totalProcessTime: 0,
	};

	const [planning, setPlanning] =
		useState<CreateControlBoardPlanningType>(initialPlanning);

	const [planningDetailDefault, setPlanningDetailDefault] = useState<
		CreateControlBoardPlanningDetailType[]
	>([]);
	const [planningDetail, setPlanningDetail] = useState<
		CreateControlBoardPlanningDetailType[]
	>([]);

	const handleInputPlanning = (
		key: keyof CreateControlBoardPlanningType,
		value: string | number | ShiftType,
	) => {
		setPlanning((prevState) => ({ ...prevState, [key]: value }));
	};

	const { data } = useQueryControlBoardSettingByLine(
		issuePlanning?.lineId || "",
	);

	useEffect(() => {
		if (data) {
			setPlanning({
				shift: data.shift,
				date: issuePlanning?.date || "",
				LineId: issuePlanning?.lineId || "",
				actualWorkingTimeAll: data.actualWorkingTimeAll,
				productLoadingPlanQty: data.productLoadingPlanQty,
				tackTime: data.tackTime,
				totalProcessTime: data.totalProcessTime,
				actualWorkingTime: data.actualWorkingTime,
				actualWorkingTimeOvertime: data.actualWorkingTimeOvertime,
				manPowerCount: data.manPowerCount,
				manPowerAdditionalCount: data.manPowerAdditionalCount,
				manPowerAbleToSpare: data.manPowerAbleToSpare,
				productLoadingPlanBacklogQty: data.productLoadingPlanBacklogQty,
			});

			const controlBoardSettingDetails =
				data.ControlBoardSettingDetails.map(
					(ControlBoardSettingDetail) => ({
						sequence: ControlBoardSettingDetail.sequence,
						time: ControlBoardSettingDetail.time,
						qty: ControlBoardSettingDetail.qty,
					}),
				);

			setPlanningDetail(controlBoardSettingDetails);
			setPlanningDetailDefault(controlBoardSettingDetails);
			setSettingShift(data.shift);
		}
	}, [data]);

	const handlePlanningDetailChange = (
		data: CreateControlBoardPlanningDetailType,
		dataIndex: number,
	) => {
		setPlanningDetail(
			planningDetail.map((controlBoardPlanningDetail, index) =>
				dataIndex !== index ? controlBoardPlanningDetail : data,
			),
		);
	};

	const planningTime = (planningTime: string): string => {
		const planningTimeNumber = parseInt(planningTime.split(":")[0]);

		if (planning.shift === "Short") {
			return convertNumberToTimeHalfString(planningTimeNumber);
		}

		return `${convertNumberToTimeString(
			planningTimeNumber,
		)} - ${convertNumberToTimeString(planningTimeNumber + 1)}`;
	};

	useEffect(() => {
		if (settingShift !== planning.shift) {
			setPlanningDetail(
				planning.shift === "Long"
					? initialValueDetailLong
					: initialValueDetailShort,
			);
		} else {
			setPlanningDetail(planningDetailDefault);
		}
	}, [planning]);
	
	const onClickBtnSubmit = () => {
		mutate({
			planning: planning,
			planningDetails: planningDetail,
		});
		onDidDismiss();
	};

	return (
		<IonGrid>
			<IonRow>
				<IonCol size="12">
					<FormCreateControlBoardPlanning
						planning={planning}
						handleInputPlanning={handleInputPlanning}
					/>
				</IonCol>
				<IonCol size="12">
					<IonGrid>
						<IonRow>
							{planningDetail.map(
								(controlBoardPlanningDetail, index) => (
									<IonCol
										size="12"
										sizeMd="6"
										key={`planning-detail-${index}`}>
										<Card
											title={`Time ${planningTime(
												controlBoardPlanningDetail.time,
											)}`}
											headerColor="light">
											<FormControlBoardPlanningDetail
												value={
													controlBoardPlanningDetail
												}
												onChange={(data) =>
													handlePlanningDetailChange(
														data,
														index,
													)
												}
											/>
										</Card>
									</IonCol>
								),
							)}
						</IonRow>
					</IonGrid>
				</IonCol>
				<IonCol size="12">
					<IonCol size="12">
						<IonButton expand="block" onClick={onClickBtnSubmit}>
							Submit
						</IonButton>
					</IonCol>
				</IonCol>
			</IonRow>
		</IonGrid>
	);
};

export default ContainerCreateControlBoardPlanning;
