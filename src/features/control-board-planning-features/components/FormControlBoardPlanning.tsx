import { IonButton, IonInput, IonItem, IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

import useDepartmentStore from "../../../stores/useDepartmentStore";
import { CreateControlBoardPlanningType } from "../../../types/control-board-planning-type";

const SelectLineByDepartment = lazy(
	() => import("../../../components/SelectLineByDepartment"),
);

interface FormControlBoardPlanningProps {
	controlBoardPlanning: CreateControlBoardPlanningType;
	handleInputControlBoardPlanning: (
		key: keyof CreateControlBoardPlanningType,
		value: string,
	) => void;
	line: string;
	handleSubmit: (e: React.FormEvent) => void;
}

const FormControlBoardPlanning: React.FC<FormControlBoardPlanningProps> = ({
	controlBoardPlanning,
	handleInputControlBoardPlanning,
	line,
	handleSubmit,
}) => {
	const { department } = useDepartmentStore();
	return (
		<form onSubmit={handleSubmit}>
			<Suspense fallback={<IonSpinner name="crescent" />}>
				<SelectLineByDepartment
					value={controlBoardPlanning.LineId}
					departmentId={department.id}
					onChange={(id) =>
						handleInputControlBoardPlanning("LineId", id)
					}
					disabled={line ? true : false}
				/>
			</Suspense>
			<IonItem>
				<IonInput
					type="date"
					label="Planning Date"
					labelPlacement="floating"
					value={controlBoardPlanning.date}
					onIonInput={(e) =>
						handleInputControlBoardPlanning("date", e.detail.value!)
					}
				/>
			</IonItem>
			<IonButton type="submit" expand="block">
				Submit
			</IonButton>
		</form>
	);
};

export default FormControlBoardPlanning;
