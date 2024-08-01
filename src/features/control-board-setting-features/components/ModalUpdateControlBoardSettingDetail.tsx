import { IonButton, IonInput, IonItem } from "@ionic/react";

import { useEffect, useState } from "react";

import Modal from "../../../components/Modal";
import {
	ControlBoardSettingDetailInterface,
	UpdateControlBoardSettingDetailType,
} from "../../../types";
import { useUpdateControlBoardSettingDetail } from "../hooks";

interface ModalUpdateControlBoardSettingDetailProps {
	isOpen: boolean;
	data?: ControlBoardSettingDetailInterface;
	onDidDismiss: () => void;
}

const ModalUpdateControlBoardSettingDetail: React.FC<
	ModalUpdateControlBoardSettingDetailProps
> = ({ isOpen, data, onDidDismiss }) => {
	const [formData, setFormData] =
		useState<UpdateControlBoardSettingDetailType>({});
	const { mutate } = useUpdateControlBoardSettingDetail();

	const handleInput = (
		key: keyof UpdateControlBoardSettingDetailType,
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
		}));
	}, [data]);

	return (
		<Modal
			title="Update Control Board Setting Detail"
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
				<IonItem>
					<IonInput
						type="number"
						label="Break"
						labelPlacement="floating"
						value={formData?.breakTime}
						onIonInput={(e) =>
							handleInput("breakTime", e.detail.value!)
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

export default ModalUpdateControlBoardSettingDetail;
