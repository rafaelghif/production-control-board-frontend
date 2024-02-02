import { IonItem, IonSelect, IonSelectOption } from "@ionic/react";

import { useQueryActiveLineSql } from "../hooks";

interface SelectLineProps {
	value?: string;
	onChange: (id: string) => void;
	disabled?: boolean;
}

const SelectLineSql: React.FC<SelectLineProps> = ({
	value = "All",
	onChange,
	disabled = false,
}) => {
	const { data } = useQueryActiveLineSql();
	return (
		<IonItem>
			<IonSelect
				label="Line"
				labelPlacement="floating"
				value={value}
				onIonChange={(e) => onChange(e.detail.value!)}
				disabled={disabled}>
				<IonSelectOption value="none">Select Line</IonSelectOption>
				<IonSelectOption value="All">All</IonSelectOption>
				{data?.map((line, index) => (
					<IonSelectOption key={`line-${index}`} value={line.name}>
						{line.name}
					</IonSelectOption>
				))}
			</IonSelect>
		</IonItem>
	);
};

export default SelectLineSql;
