import { IonButton, IonInput, IonItem, IonSpinner } from "@ionic/react";

import { Suspense, lazy, useEffect, useState } from "react";

import Modal from "../../../components/Modal";
import { CreatePartOrderInterface } from "../../../types";
import { useCreatePartOrder } from "../hooks/useCreatePartOrder";

const SelectLineSql = lazy(() => import("@/components/SelectLineSql"));

interface ModalCreatePartNotRegisterProps {
	isOpen: boolean;
	onDidDismiss: () => void;
	partOrder: string;
}

const ModalCreatePartNotRegister: React.FC<ModalCreatePartNotRegisterProps> = ({
	isOpen,
	onDidDismiss,
	partOrder,
}) => {
	const [formData, setFormData] = useState<CreatePartOrderInterface>({
		PartOrder: "",
		line: "",
	});
	const { mutate } = useCreatePartOrder();

	const handleInput = (
		key: keyof CreatePartOrderInterface,
		value: string,
	) => {
		setFormData((prevState) => ({ ...prevState, [key]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		mutate(formData);

		setFormData((prevData) => ({ ...prevData, line: "" }));
		onDidDismiss();
	};

	useEffect(() => {
		setFormData((prevState) => ({ ...prevState, PartOrder: partOrder }));
	}, [partOrder]);
	return (
		<Modal
			title="Create Part Order"
			isOpen={isOpen}
			onDidDismiss={onDidDismiss}>
			<form onSubmit={handleSubmit}>
				<IonItem>
					<IonInput
						type="text"
						label="Part Order"
						labelPlacement="floating"
						value={formData.PartOrder}
						onIonInput={(e) =>
							handleInput("PartOrder", e.detail.value!)
						}
						required
						readonly
					/>
				</IonItem>
				<Suspense fallback={<IonSpinner name="crescent" />}>
					<SelectLineSql
						value={formData.line}
						onChange={(val) => handleInput("line", val)}
					/>
				</Suspense>
				<IonButton type="submit" expand="block">
					Submit
				</IonButton>
			</form>
		</Modal>
	);
};

export default ModalCreatePartNotRegister;
