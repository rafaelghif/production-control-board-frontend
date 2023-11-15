import {
	IonButton,
	IonInput,
	IonItem,
	IonSelect,
	IonSelectOption,
} from "@ionic/react";

import { useEffect, useState } from "react";

import Modal from "../../../components/Modal";
import {
	ControlBoardPlanningInterface,
	UpdateControlBoardPlanningType,
} from "../../../types";
import { useUpdateControlBoardPlanning } from "../hooks";

interface ModalUpdateControlBoardPlanningProps {
	isOpen: boolean;
	data?: ControlBoardPlanningInterface;
	onDidDismiss: () => void;
}

const ModalUpdateControlBoardPlanning: React.FC<
	ModalUpdateControlBoardPlanningProps
> = ({ isOpen, data, onDidDismiss }) => {
	const [formData, setFormData] = useState<UpdateControlBoardPlanningType>(
		{},
	);
	const { mutate } = useUpdateControlBoardPlanning();

	const handleInput = (
		key: keyof UpdateControlBoardPlanningType,
		value: string | number,
	) => {
		setFormData((prevState) => ({ ...prevState, [key]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		mutate(formData);
		onDidDismiss();
	};

	useEffect(() => {
		setFormData((prevState) => ({
			...prevState,
			id: data?.id,
			shift: data?.shift,
			date: data?.date,
			actualWorkingTimeAll: data?.actualWorkingTimeAll,
			productLoadingPlanQty: data?.productLoadingPlanQty,
			productLoadingPlanBacklogQty: data?.productLoadingPlanBacklogQty,
			tackTime: data?.tackTime,
			totalProcessTime: data?.totalProcessTime,
			actualWorkingTime: data?.actualWorkingTime,
			actualWorkingTimeOvertime: data?.actualWorkingTimeOvertime,
			manPowerCount: data?.manPowerCount,
			manPowerAdditionalCount: data?.manPowerAdditionalCount,
			manPowerAbleToSpare: data?.manPowerAbleToSpare,
			LineId: data?.LineId,
		}));
	}, [data]);

	return (
		<Modal
			title="Update Control Board Planning"
			isOpen={isOpen}
			onDidDismiss={onDidDismiss}>
			<form onSubmit={handleSubmit}>
				<IonItem>
					<IonInput
						type="text"
						label="Id"
						labelPlacement="floating"
						value={formData?.id}
						onIonInput={(e) => handleInput("id", e.detail.value!)}
						required
						disabled
					/>
				</IonItem>
				<IonItem>
					<IonSelect
						label="Shift"
						labelPlacement="stacked"
						value={data?.shift}
						onIonChange={(e) =>
							handleInput("shift", e.detail.value!)
						}>
						<IonSelectOption value="Long">Long</IonSelectOption>
						<IonSelectOption value="Short">Short</IonSelectOption>
					</IonSelect>
				</IonItem>
				<IonItem>
					<IonInput
						type="date"
						label="Date"
						labelPlacement="floating"
						value={formData?.date}
						onIonInput={(e) => handleInput("date", e.detail.value!)}
						required
					/>
				</IonItem>
				<IonItem>
					<IonInput
						type="number"
						min={0}
						label="Actual Working Time All"
						labelPlacement="floating"
						value={formData?.actualWorkingTimeAll}
						onIonInput={(e) =>
							handleInput("actualWorkingTimeAll", e.detail.value!)
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
						value={formData?.productLoadingPlanQty}
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
						value={formData?.productLoadingPlanBacklogQty}
						onIonInput={(e) =>
							handleInput(
								"productLoadingPlanBacklogQty",
								e.detail.value!,
							)
						}
					/>
				</IonItem>
				<IonItem>
					<IonInput
						type="text"
						min={0}
						label="Tack Time"
						labelPlacement="floating"
						value={formData?.tackTime}
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
						value={formData?.totalProcessTime}
						onIonInput={(e) =>
							handleInput("totalProcessTime", e.detail.value!)
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
						value={formData?.actualWorkingTime}
						onIonInput={(e) =>
							handleInput("actualWorkingTime", e.detail.value!)
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
						value={formData?.actualWorkingTimeOvertime}
						onIonInput={(e) =>
							handleInput(
								"actualWorkingTimeOvertime",
								e.detail.value!,
							)
						}
					/>
				</IonItem>
				<IonItem>
					<IonInput
						type="number"
						min={0}
						label="Man Power Count"
						labelPlacement="floating"
						value={formData?.manPowerCount}
						onIonInput={(e) =>
							handleInput("manPowerCount", e.detail.value!)
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
						value={formData?.manPowerAdditionalCount}
						onIonInput={(e) =>
							handleInput(
								"manPowerAdditionalCount",
								e.detail.value!,
							)
						}
					/>
				</IonItem>
				<IonItem>
					<IonInput
						type="number"
						min={0}
						label="Man Power Able to Spare Count"
						labelPlacement="floating"
						value={formData?.manPowerAbleToSpare}
						onIonInput={(e) =>
							handleInput("manPowerAbleToSpare", e.detail.value!)
						}
					/>
				</IonItem>
				<IonButton type="submit" expand="block">
					Submit
				</IonButton>
			</form>
		</Modal>
	);
};

export default ModalUpdateControlBoardPlanning;
