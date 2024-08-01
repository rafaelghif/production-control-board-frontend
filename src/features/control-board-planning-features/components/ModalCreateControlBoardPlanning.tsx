import { IonCol, IonGrid, IonRow, IonSpinner } from "@ionic/react";

import { InitialPlanningInterface } from "@/types";
import { Suspense, lazy, useEffect, useState } from "react";

import Modal from "../../../components/Modal";
import { useLineStore } from "../../../stores";

const ContainerCreateControlBoardPlanning = lazy(
	() => import("./ContainerCreateControlBoardPlanning"),
);

const FormInitialControlBoardPlanning = lazy(
	() => import("./FormInitialControlBoardPlanning"),
);

interface ModalCreateControlBoardPlanningProps {
	isOpen: boolean;
	onDidDismiss: () => void;
}

const ModalCreateControlBoardPlanning: React.FC<
	ModalCreateControlBoardPlanningProps
> = ({ isOpen, onDidDismiss }) => {
	const { line } = useLineStore();

	const [isSubmitPlanning, setIsSubmitPlanning] = useState<boolean>(false);

	const [initialPlanning, setInitialPlanning] =
		useState<InitialPlanningInterface>({ lineId: line.id, date: "" });

	const handleSubmitInitialPlanning = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitPlanning(true);
	};

	const handleInputInitialPlanning = (
		key: keyof InitialPlanningInterface,
		value: string,
	) => {
		setInitialPlanning((prevState) => ({ ...prevState, [key]: value }));
	};

	useEffect(() => {
		if (line?.id) {
			setInitialPlanning((prevState) => ({
				...prevState,
				lineId: line.id,
			}));
		}
	}, [line]);

	return (
		<Modal
			title="Create Control Board Planning"
			isOpen={isOpen}
			onDidDismiss={onDidDismiss}>
			<IonGrid>
				<IonRow>
					<IonCol size="12">
						<Suspense fallback={<IonSpinner name="crescent" />}>
							{isSubmitPlanning ? (
								<ContainerCreateControlBoardPlanning
									issuePlanning={initialPlanning}
									onDidDismiss={onDidDismiss}
								/>
							) : (
								<FormInitialControlBoardPlanning
									initialPlanning={initialPlanning}
									onInput={handleInputInitialPlanning}
									handleSubmit={handleSubmitInitialPlanning}
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
