import { IonInput, IonItem } from "@ionic/react";

import { useEffect, useState } from "react";

import { CreateControlBoardPlanningDetailType } from "../../../types";

interface FormControlBoardPlanningDetailProps {
	value: CreateControlBoardPlanningDetailType;
	onChange: (data: CreateControlBoardPlanningDetailType) => void;
}

const FormControlBoardPlanningDetail: React.FC<
	FormControlBoardPlanningDetailProps
> = ({ value, onChange }) => {
	const [controlBoardPlanning, setControlBoardPlanning] =
		useState<CreateControlBoardPlanningDetailType>({
			time: "07:00",
			qty: 0,
			sequence: 1,
		});

	const handleInput = (
		key: keyof CreateControlBoardPlanningDetailType,
		value: string | number,
	) => {
		setControlBoardPlanning((prevState) => ({
			...prevState,
			[key]: value,
		}));
		onChange({ ...controlBoardPlanning, [key]: value });
	};

	useEffect(() => {
		setControlBoardPlanning(value);
	}, [value]);

	return (
		<>
			<IonItem>
				<IonInput
					type="time"
					label="Time"
					labelPlacement="floating"
					value={controlBoardPlanning.time}
					onIonInput={(e) => handleInput("time", e.detail.value!)}
					disabled
				/>
			</IonItem>
			<IonItem>
				<IonInput
					type="number"
					value={controlBoardPlanning.qty}
					label="Qty"
					labelPlacement="floating"
					min={0}
					onIonInput={(e) => handleInput("qty", e.detail.value!)}
				/>
			</IonItem>
		</>
	);
};

export default FormControlBoardPlanningDetail;
