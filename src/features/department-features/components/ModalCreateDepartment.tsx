import { IonButton, IonInput, IonItem } from "@ionic/react";

import { useState } from "react";

import Modal from "../../../components/Modal";
import { CreateDepartmentType } from "../../../types";
import { useCreateDepartment } from "../hooks";

interface ModalCreateDepartmentProps {
	isOpen: boolean;
	onDidDismiss: () => void;
}

const ModalCreateDepartment: React.FC<ModalCreateDepartmentProps> = ({
	isOpen,
	onDidDismiss,
}) => {
	const [formData, setFormData] = useState<CreateDepartmentType>({
		name: "",
		abbreviation: "",
	});
	const { mutate } = useCreateDepartment();

	const handleInput = (key: keyof CreateDepartmentType, value: string) => {
		setFormData((prevState) => ({ ...prevState, [key]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		mutate(formData);
		setFormData({ name: "", abbreviation: "" });
		onDidDismiss();
	};
	return (
		<Modal
			title="Create Department"
			isOpen={isOpen}
			onDidDismiss={onDidDismiss}>
			<form onSubmit={handleSubmit}>
				<IonItem>
					<IonInput
						type="text"
						label="Name"
						labelPlacement="floating"
						value={formData.name}
						onIonInput={(e) => handleInput("name", e.detail.value!)}
						required
					/>
				</IonItem>
				<IonItem>
					<IonInput
						type="text"
						label="Abbreviation"
						labelPlacement="floating"
						value={formData.abbreviation}
						onIonInput={(e) =>
							handleInput("abbreviation", e.detail.value!)
						}
						required
					/>
				</IonItem>
				<IonButton type="submit" expand="block">
					Submit
				</IonButton>
			</form>
		</Modal>
	);
};

export default ModalCreateDepartment;
