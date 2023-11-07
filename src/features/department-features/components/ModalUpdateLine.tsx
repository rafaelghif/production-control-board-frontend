import { IonButton, IonCheckbox, IonInput, IonItem } from "@ionic/react";

import { useEffect, useState } from "react";

import Modal from "../../../components/Modal";
import { LineInterface, UpdateLineType } from "../../../types/line-type";
import { useUpdateLine } from "../hooks/useUpdateLine";

interface ModalUpdateLineProps {
	isOpen: boolean;
	data?: LineInterface;
	onDidDismiss: () => void;
}

const ModalUpdateLine: React.FC<ModalUpdateLineProps> = ({
	isOpen,
	data,
	onDidDismiss,
}) => {
	const [formData, setFormData] = useState<UpdateLineType>({});
	const { mutate } = useUpdateLine();

	const handleInput = (
		key: keyof UpdateLineType,
		value: string | boolean,
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
			name: data?.name,
			inActive: data?.inActive,
			DepartmentId: data?.DepartmentId,
		}));
	}, [data]);

	return (
		<Modal title="Update Line" isOpen={isOpen} onDidDismiss={onDidDismiss}>
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
						type="text"
						label="Name"
						labelPlacement="floating"
						value={formData?.name}
						onIonInput={(e) => handleInput("name", e.detail.value!)}
						required
					/>
				</IonItem>
				<IonItem>
					<IonCheckbox
						checked={formData?.inActive}
						onIonChange={(e) =>
							handleInput("inActive", e.detail.checked!)
						}>
						InActive
					</IonCheckbox>
				</IonItem>
				<IonButton type="submit" expand="block">
					Submit
				</IonButton>
			</form>
		</Modal>
	);
};

export default ModalUpdateLine;
