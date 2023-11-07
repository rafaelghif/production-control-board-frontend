import {
	IonButton,
	IonInput,
	IonItem,
	IonSelect,
	IonSelectOption,
	IonSpinner,
} from "@ionic/react";

import { Suspense, lazy, useState } from "react";

import Modal from "../../../components/Modal";
import { CreateUserType } from "../../../types/user-type";
import { useCreateUser } from "../hooks/useCreateUser";

const SelectDepartment = lazy(
	() => import("../../../components/SelectDepartment"),
);
const SelectLineByDepartment = lazy(
	() => import("../../../components/SelectLineByDepartment"),
);

interface ModalCreateUserProps {
	isOpen: boolean;
	onDidDismiss: () => void;
}

const ModalCreateUser: React.FC<ModalCreateUserProps> = ({
	isOpen,
	onDidDismiss,
}) => {
	const [formData, setFormData] = useState<CreateUserType>({
		badgeId: "",
		password: "",
		name: "",
		role: "Basic",
		DepartmentId: "",
		LineId: "",
	});
	const { mutate } = useCreateUser();

	const handleInput = (key: keyof CreateUserType, value: string) => {
		setFormData((prevState) => ({ ...prevState, [key]: value }));
	};

	const handleChangeDepartment = (id: string) => {
		setFormData((prevState) => ({ ...prevState, DepartmentId: id }));
		setFormData((prevState) => ({ ...prevState, LineId: "" }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		mutate(formData);
		setFormData({
			badgeId: "",
			password: "",
			name: "",
			role: "Basic",
			DepartmentId: "",
			LineId: "",
		});
		onDidDismiss();
	};
	return (
		<Modal title="Create User" isOpen={isOpen} onDidDismiss={onDidDismiss}>
			<form onSubmit={handleSubmit}>
				<IonItem>
					<IonInput
						type="text"
						label="Badge Id"
						labelPlacement="floating"
						value={formData.badgeId}
						onIonInput={(e) =>
							handleInput("badgeId", e.detail.value!)
						}
						required
					/>
				</IonItem>
				<IonItem>
					<IonInput
						type="password"
						label="Password"
						labelPlacement="floating"
						value={formData.password}
						onIonInput={(e) =>
							handleInput("password", e.detail.value!)
						}
						required
					/>
				</IonItem>
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
					<IonSelect
						value={formData.role}
						onIonChange={(e) =>
							handleInput("role", e.detail.value!)
						}>
						<IonSelectOption value="Basic">Basic</IonSelectOption>
						<IonSelectOption value="Admin">Admin</IonSelectOption>
						<IonSelectOption value="Super User">
							Super User
						</IonSelectOption>
					</IonSelect>
				</IonItem>
				<Suspense fallback={<IonSpinner name="crescent" />}>
					<SelectDepartment
						value={formData.DepartmentId}
						onChange={(id) => handleChangeDepartment(id)}
					/>
					{formData.DepartmentId && (
						<SelectLineByDepartment
							value={formData.LineId}
							departmentId={formData.DepartmentId}
							onChange={(id) => handleInput("LineId", id)}
						/>
					)}
				</Suspense>
				<IonButton type="submit" expand="block">
					Submit
				</IonButton>
			</form>
		</Modal>
	);
};

export default ModalCreateUser;
