import { IonButton, IonInput, IonItem, IonSpinner } from "@ionic/react";

import { InitialPlanningInterface } from "@/types";
import { Suspense, lazy } from "react";

import { useDepartmentStore } from "../../../stores";

const SelectLineByDepartment = lazy(
	() => import("../../../components/SelectLineByDepartment"),
);

interface FormInitialControlBoardPlanningProps {
	initialPlanning: InitialPlanningInterface;
	onInput: (key: keyof InitialPlanningInterface, value: string) => void;
	handleSubmit: (e: React.FormEvent) => void;
}

const FormInitialControlBoardPlanning: React.FC<
	FormInitialControlBoardPlanningProps
> = ({ initialPlanning, onInput, handleSubmit }) => {
	const { department } = useDepartmentStore();
	return (
		<form onSubmit={handleSubmit}>
			<Suspense fallback={<IonSpinner name="crescent" />}>
				<SelectLineByDepartment
					value={initialPlanning.lineId}
					departmentId={department.id}
					onChange={(id) => onInput("lineId", id)}
					disabled={initialPlanning.lineId ? true : false}
				/>
			</Suspense>
			<IonItem>
				<IonInput
					type="date"
					label="Planning Date"
					labelPlacement="floating"
					value={initialPlanning.date}
					onIonInput={(e) => onInput("date", e.detail.value!)}
					required
				/>
			</IonItem>
			<IonButton type="submit" expand="block">
				Submit
			</IonButton>
		</form>
	);
};

export default FormInitialControlBoardPlanning;
