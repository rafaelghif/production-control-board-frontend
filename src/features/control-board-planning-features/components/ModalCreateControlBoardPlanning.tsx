import { IonButton, IonCol, IonGrid, IonRow, IonSpinner } from "@ionic/react";

import { Suspense, lazy, useEffect, useState } from "react";

import Card from "../../../components/Card";
import Modal from "../../../components/Modal";
import {
	initialValueDetailLong,
	initialValueDetailShort,
} from "../../../datas";
import {
	convertNumberToTimeHalfString,
	convertNumberToTimeString,
} from "../../../helpers";
import { useToast } from "../../../hooks";
import { formatDateString } from "../../../libs";
import { useLineStore } from "../../../stores";
import {
	CreateControlBoardPlanningDetailType,
	CreateControlBoardPlanningType,
} from "../../../types";
import { useCreateControlBoardPlanning } from "../hooks";
import FormControlBoardPlanningDetail from "./FormControlBoardPlanningDetail";

const FormControlBoardPlanning = lazy(
	() => import("./FormControlBoardPlanning"),
);
const FormControlBoardSetting = lazy(() => import("./FormControlBoardSetting"));

interface ModalCreateControlBoardPlanningProps {
	isOpen: boolean;
	onDidDismiss: () => void;
}

const initialValue: CreateControlBoardPlanningType = {
	shift: "Long",
	date: formatDateString(new Date()),
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
};

const ModalCreateControlBoardPlanning: React.FC<
	ModalCreateControlBoardPlanningProps
> = ({ isOpen, onDidDismiss }) => {
	const { line } = useLineStore();
	const { warningToast } = useToast();

	const [isSubmitPlanning, setIsSubmitPlanning] = useState<boolean>(false);
	const [controlBoardPlanning, setControlBoardPlanning] =
		useState<CreateControlBoardPlanningType>({
			...initialValue,
			LineId: line.id,
		});
	const [controlBoardPlanningDetails, setControlBoardPlanningDetails] =
		useState<CreateControlBoardPlanningDetailType[]>(
			controlBoardPlanning.shift === "Long"
				? initialValueDetailLong
				: initialValueDetailShort,
		);
	const { mutate } = useCreateControlBoardPlanning();

	const handleInputControlBoardPlanning = (
		key: keyof CreateControlBoardPlanningType,
		value: string | number,
	) => {
		setControlBoardPlanning((prevState) => ({
			...prevState,
			[key]: value,
		}));
	};

	const handleInputControlBoardDetail = (
		data: CreateControlBoardPlanningDetailType[],
	) => {
		setControlBoardPlanningDetails(data);
	};

	const handleSubmitControlBoardPlanning = (e: React.FormEvent) => {
		e.preventDefault();
		controlBoardPlanning.LineId
			? setIsSubmitPlanning(true)
			: warningToast("Please fill Line");
	};

	const handleDismissModal = () => {
		onDidDismiss();
		setIsSubmitPlanning(false);
		setControlBoardPlanning({ ...initialValue, LineId: line.id });
		setControlBoardPlanningDetails(initialValueDetailLong);
	};

	const handleChange = (
		data: CreateControlBoardPlanningDetailType,
		dataIndex: number,
	) => {
		setControlBoardPlanningDetails(
			controlBoardPlanningDetails.map(
				(controlBoardPlanningDetail, index) =>
					dataIndex !== index ? controlBoardPlanningDetail : data,
			),
		);
	};

	const planningTime = (planningTime: string): string => {
		const planningTimeNumber = parseInt(planningTime.split(":")[0]);

		if (controlBoardPlanning.shift === "Short") {
			return convertNumberToTimeHalfString(planningTimeNumber);
		}

		return `${convertNumberToTimeString(
			planningTimeNumber,
		)} - ${convertNumberToTimeString(planningTimeNumber + 1)}`;
	};

	const onClickBtnSubmit = () => {
		mutate({
			planning: controlBoardPlanning,
			planningDetails: controlBoardPlanningDetails,
		});
		handleDismissModal();
	};

	useEffect(() => {
		setControlBoardPlanningDetails(controlBoardPlanningDetails);
	}, [controlBoardPlanning]);

	return (
		<Modal
			title="Create Control Board Planning"
			isOpen={isOpen}
			onDidDismiss={handleDismissModal}>
			<IonGrid>
				<IonRow>
					<IonCol size="12">
						<Suspense fallback={<IonSpinner name="crescent" />}>
							{isSubmitPlanning ? (
								<IonGrid>
									<IonRow>
										<IonCol size="12">
											<FormControlBoardSetting
												value={controlBoardPlanning}
												lineId={
													controlBoardPlanning.LineId
												}
												handleInputControlBoardPlanning={
													handleInputControlBoardPlanning
												}
												handleInputControlBoardDetail={(
													data,
												) =>
													handleInputControlBoardDetail(
														data,
													)
												}
											/>
										</IonCol>
										<IonCol size="12">
											<IonGrid>
												<IonRow>
													{controlBoardPlanningDetails.map(
														(
															controlBoardPlanningDetail,
															index,
														) => (
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
																		onChange={(
																			data,
																		) =>
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
											<IonButton
												expand="block"
												onClick={onClickBtnSubmit}>
												Submit
											</IonButton>
										</IonCol>
									</IonRow>
								</IonGrid>
							) : (
								<FormControlBoardPlanning
									controlBoardPlanning={controlBoardPlanning}
									handleInputControlBoardPlanning={
										handleInputControlBoardPlanning
									}
									handleSubmit={
										handleSubmitControlBoardPlanning
									}
									line={line.id}
								/>
							)}
						</Suspense>
					</IonCol>
				</IonRow>
			</IonGrid>
		</Modal>
	);
};

export default ModalCreateControlBoardPlanning;
