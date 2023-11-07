import { IonItem, IonSelect, IonSelectOption } from "@ionic/react";

import { useQueryActiveLine } from "../hooks/useQueryActiveLine";

interface SelectLineProps {
	value?: string;
	onChange: (id: string) => void;
	disabled?: boolean;
}

const SelectLine: React.FC<SelectLineProps> = ({
	value = "All",
	onChange,
	disabled = false,
}) => {
	const { data } = useQueryActiveLine();
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
				{data?.map((line) => (
					<IonSelectOption key={`line-${line.id}`} value={line.id}>
						{line.name}
					</IonSelectOption>
				))}
			</IonSelect>
		</IonItem>
	);
};

export default SelectLine;
