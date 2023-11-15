import { IonButton, IonInput, IonItem } from "@ionic/react";

import { useEffect, useState } from "react";

import Modal from "../../../components/Modal";
import { CreateLineType } from "../../../types";
import { useCreateLine } from "../hooks";

interface ModalCreateLineProps {
	isOpen: boolean;
	departmentId: string;
	onDidDismiss: () => void;
}

const ModalCreateLine: React.FC<ModalCreateLineProps> = ({
	isOpen,
	departmentId,
	onDidDismiss,
}) => {
	const [formData, setFormData] = useState<CreateLineType>({
		name: "",
		DepartmentId: departmentId,
	});
	const { mutate } = useCreateLine();

	const handleInput = (key: keyof CreateLineType, value: string) => {
		setFormData((prevState) => ({ ...prevState, [key]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		mutate(formData);
		setFormData({ name: "", DepartmentId: departmentId });
		onDidDismiss();
	};

	useEffect(() => {
		setFormData((prevState) => ({
			...prevState,
			DepartmentId: departmentId,
		}));
	}, [departmentId]);

	return (
		<Modal title="Create Line" isOpen={isOpen} onDidDismiss={onDidDismiss}>
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
				<IonButton type="submit" expand="block">
					Submit
				</IonButton>
			</form>
		</Modal>
	);
};

export default ModalCreateLine;
