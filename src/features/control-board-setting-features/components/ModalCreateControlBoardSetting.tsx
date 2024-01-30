import {
	IonButton,
	IonCol,
	IonGrid,
	IonInput,
	IonItem,
	IonRow,
	IonSelect,
	IonSelectOption,
	IonSpinner,
} from "@ionic/react";

import { Suspense, lazy, useEffect, useState } from "react";

import Card from "../../../components/Card";
import Modal from "../../../components/Modal";
import {
	initialValueDetailLong,
	initialValueDetailShort,
} from "../../../datas";
import { plus1HourTime } from "../../../libs";
import { useDepartmentStore } from "../../../stores";
import {
	CreateControlBoardSettingDetailType,
	CreateControlBoardSettingType,
} from "../../../types";
import { useCreateControlBoardSetting } from "../hooks";
import FormControlBoardSettingDetail from "./FormControlBoardSettingDetail";

const SelectLineByDepartment = lazy(
	() => import("../../../components/SelectLineByDepartment"),
);

interface ModalCreateControlBoardSettingProps {
	isOpen: boolean;
	onDidDismiss: () => void;
}

const ModalCreateControlBoardSetting: React.FC<
	ModalCreateControlBoardSettingProps
> = ({ isOpen, onDidDismiss }) => {
	const { department } = useDepartmentStore();

	const [controlBoardSetting, setControlBoardSetting] =
		useState<CreateControlBoardSettingType>({
			shift: "Long",
			actualWorkingTimeAll: 0,
			productLoadingPlanQty: 0,
			productLoadingPlanBacklogQty: 0,
			tackTime: 0,
			totalProcessTime: 0,
			actualWorkingTime: 0,
			actualWorkingTimeOvertime: 0,
			manPowerCount: 0,
			manPowerAdditionalCount: 0,
			manPowerAbleToSpare: 0,
			LineId: "",
		});

	const [controlBoardSettingDetails, setControlBoardSettingDetails] =
		useState<CreateControlBoardSettingDetailType[]>(initialValueDetailLong);

	const { mutate } = useCreateControlBoardSetting();

	const handleInput = (
		key: keyof CreateControlBoardSettingType,
		value: number | string,
	) => {
		setControlBoardSetting((prevState) => ({ ...prevState, [key]: value }));
	};

	const handleChange = (
		data: CreateControlBoardSettingDetailType,
		dataIndex: number,
	) => {
		setControlBoardSettingDetails(
			controlBoardSettingDetails.map(
				(controlBoardSettingDetail, index) =>
					dataIndex !== index ? controlBoardSettingDetail : data,
			),
		);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		mutate({
			setting: controlBoardSetting,
			settingDetails: controlBoardSettingDetails,
		});
		onDidDismiss();
	};

	useEffect(() => {
		setControlBoardSettingDetails(
			controlBoardSetting.shift === "Long"
				? initialValueDetailLong
				: initialValueDetailShort,
		);
	}, [controlBoardSetting.shift]);
	return (
		<Modal
			title="Create Control Board Setting"
			isOpen={isOpen}
			onDidDismiss={onDidDismiss}>
			<form onSubmit={handleSubmit}>
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonItem>
								<IonSelect
									label="Shift"
									labelPlacement="stacked"
									value={controlBoardSetting.shift}
									onIonChange={(e) =>
										handleInput("shift", e.detail.value!)
									}>
									<IonSelectOption value="Long">
										Long
									</IonSelectOption>
									<IonSelectOption value="Short">
										Short
									</IonSelectOption>
								</IonSelect>
							</IonItem>
							<Suspense fallback={<IonSpinner name="crescent" />}>
								<SelectLineByDepartment
									value={controlBoardSetting.LineId}
									departmentId={department.id}
									onChange={(id) => handleInput("LineId", id)}
								/>
							</Suspense>
							<IonItem>
								<IonInput
									type="number"
									min={0}
									label="Actual Working Time All"
									labelPlacement="floating"
									value={
										controlBoardSetting.actualWorkingTimeAll
									}
									onIonInput={(e) =>
										handleInput(
											"actualWorkingTimeAll",
											e.detail.value!,
										)
									}
									required
								/>
							</IonItem>
							<IonItem>
								<IonInput
									type="number"
									min={0}
									label="Production Loading Plan Qty"
									labelPlacement="floating"
									value={
										controlBoardSetting.productLoadingPlanQty
									}
									onIonInput={(e) =>
										handleInput(
											"productLoadingPlanQty",
											e.detail.value!,
										)
									}
									required
								/>
							</IonItem>
							<IonItem>
								<IonInput
									type="number"
									min={0}
									label="Production Loading Backlog Qty"
									labelPlacement="floating"
									value={
										controlBoardSetting.productLoadingPlanBacklogQty
									}
									onIonInput={(e) =>
										handleInput(
											"productLoadingPlanBacklogQty",
											e.detail.value!,
										)
									}
									required
								/>
							</IonItem>
							<IonItem>
								<IonInput
									type="text"
									min={0}
									label="Tack Time"
									labelPlacement="floating"
									value={controlBoardSetting.tackTime}
									onIonInput={(e) =>
										handleInput("tackTime", e.detail.value!)
									}
									required
								/>
							</IonItem>
							<IonItem>
								<IonInput
									type="number"
									min={0}
									label="Total Process Time"
									labelPlacement="floating"
									value={controlBoardSetting.totalProcessTime}
									onIonInput={(e) =>
										handleInput(
											"totalProcessTime",
											e.detail.value!,
										)
									}
									required
								/>
							</IonItem>
							<IonItem>
								<IonInput
									type="number"
									min={0}
									label="Actual Working Time"
									labelPlacement="floating"
									value={
										controlBoardSetting.actualWorkingTime
									}
									onIonInput={(e) =>
										handleInput(
											"actualWorkingTime",
											e.detail.value!,
										)
									}
									required
								/>
							</IonItem>
							<IonItem>
								<IonInput
									type="number"
									min={0}
									label="Actual Working Time Overtime"
									labelPlacement="floating"
									value={
										controlBoardSetting.actualWorkingTimeOvertime
									}
									onIonInput={(e) =>
										handleInput(
											"actualWorkingTimeOvertime",
											e.detail.value!,
										)
									}
									required
								/>
							</IonItem>
							<IonItem>
								<IonInput
									type="number"
									min={0}
									label="Man Power Count"
									labelPlacement="floating"
									value={controlBoardSetting.manPowerCount}
									onIonInput={(e) =>
										handleInput(
											"manPowerCount",
											e.detail.value!,
										)
									}
									required
								/>
							</IonItem>
							<IonItem>
								<IonInput
									type="number"
									min={0}
									label="Man Power Additional Count"
									labelPlacement="floating"
									value={
										controlBoardSetting.manPowerAdditionalCount
									}
									onIonInput={(e) =>
										handleInput(
											"manPowerAdditionalCount",
											e.detail.value!,
										)
									}
									required
								/>
							</IonItem>
							<IonItem>
								<IonInput
									type="number"
									min={0}
									label="Man Power Able to Spare Count"
									labelPlacement="floating"
									value={
										controlBoardSetting.manPowerAbleToSpare
									}
									onIonInput={(e) =>
										handleInput(
											"manPowerAbleToSpare",
											e.detail.value!,
										)
									}
									required
								/>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol size="12">
							<IonGrid>
								<IonRow>
									{controlBoardSettingDetails.map(
										(controlBoardSettingDetail, index) => (
											<IonCol
												size="12"
												sizeMd="6"
												key={`Setting-detail-${index}`}>
												<Card
													title={`Time ${
														controlBoardSettingDetail.time
													} - ${plus1HourTime(
														controlBoardSettingDetail.time,
													)}`}
													headerColor="light">
													<FormControlBoardSettingDetail
														value={
															controlBoardSettingDetail
														}
														onChange={(data) =>
															handleChange(
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
							<IonButton type="submit" expand="block">
								Submit
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</form>
		</Modal>
	);
};

export default ModalCreateControlBoardSetting;
