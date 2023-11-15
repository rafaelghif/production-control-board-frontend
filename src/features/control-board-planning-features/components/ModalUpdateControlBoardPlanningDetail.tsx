import { IonButton, IonInput, IonItem } from "@ionic/react";

import { useEffect, useState } from "react";

import Modal from "../../../components/Modal";
import {
	ControlBoardPlanningDetailInterface,
	UpdateControlBoardPlanningDetailType,
} from "../../../types";
import { useUpdateControlBoardPlanningDetail } from "../hooks";

interface ModalUpdateControlBoardPlanningDetailProps {
	isOpen: boolean;
	data?: ControlBoardPlanningDetailInterface;
	onDidDismiss: () => void;
}

const ModalUpdateControlBoardPlanningDetail: React.FC<
	ModalUpdateControlBoardPlanningDetailProps
> = ({ isOpen, data, onDidDismiss }) => {
	const [formData, setFormData] =
		useState<UpdateControlBoardPlanningDetailType>({});
	const { mutate } = useUpdateControlBoardPlanningDetail();

	const handleInput = (
		key: keyof UpdateControlBoardPlanningDetailType,
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
			qty: data?.qty,
			remark: data?.remark,
		}));
	}, [data]);

	return (
		<Modal
			title="Update Control Board Planning Detail"
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
					<IonInput
						type="number"
						label="Qty"
						labelPlacement="floating"
						value={formData?.qty}
						onIonInput={(e) => handleInput("qty", e.detail.value!)}
						required
					/>
				</IonItem>
				<IonItem>
					<IonInput
						type="text"
						label="Remark"
						labelPlacement="floating"
						value={formData?.remark}
						onIonInput={(e) =>
							handleInput("remark", e.detail.value!)
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

export default ModalUpdateControlBoardPlanningDetail;
