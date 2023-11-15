import { IonItem, IonSelect, IonSelectOption } from "@ionic/react";

import { useQueryActiveLine } from "../hooks";

interface SelectLineWithoutAllProps {
	value?: string;
	onChange: (id: string) => void;
	disabled?: boolean;
}

const SelectLineWithoutAll: React.FC<SelectLineWithoutAllProps> = ({
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
				{data?.map((line) => (
					<IonSelectOption key={`line-${line.id}`} value={line.id}>
						{line.name}
					</IonSelectOption>
				))}
			</IonSelect>
		</IonItem>
	);
};

export default SelectLineWithoutAll;
