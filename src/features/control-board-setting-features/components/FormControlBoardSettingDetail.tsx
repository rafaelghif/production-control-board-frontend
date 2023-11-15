import { IonInput, IonItem } from "@ionic/react";

import { useEffect, useState } from "react";

import { CreateControlBoardSettingDetailType } from "../../../types";

interface FormControlBoardSettingDetailProps {
	value: CreateControlBoardSettingDetailType;
	onChange: (data: CreateControlBoardSettingDetailType) => void;
}

const FormControlBoardSettingDetail: React.FC<
	FormControlBoardSettingDetailProps
> = ({ value, onChange }) => {
	const [controlBoardSetting, setControlBoardSetting] =
		useState<CreateControlBoardSettingDetailType>({
			time: "07:00",
			qty: 0,
			sequence: 1,
		});

	const handleInput = (
		key: keyof CreateControlBoardSettingDetailType,
		value: string | number,
	) => {
		setControlBoardSetting((prevState) => ({ ...prevState, [key]: value }));
		onChange({ ...controlBoardSetting, [key]: value });
	};

	useEffect(() => {
		setControlBoardSetting(value);
	}, [value]);

	return (
		<>
			<IonItem>
				<IonInput
					type="time"
					label="Time"
					labelPlacement="floating"
					value={controlBoardSetting.time}
					onIonInput={(e) => handleInput("time", e.detail.value!)}
					disabled
				/>
			</IonItem>
			<IonItem>
				<IonInput
					type="number"
					value={controlBoardSetting.qty}
					label="Qty"
					labelPlacement="floating"
					min={0}
					onIonInput={(e) => handleInput("qty", e.detail.value!)}
				/>
			</IonItem>
		</>
	);
};

export default FormControlBoardSettingDetail;
