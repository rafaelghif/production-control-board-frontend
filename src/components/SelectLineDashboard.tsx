import { IonItem, IonSelect, IonSelectOption } from "@ionic/react";

import { useQueryActiveLine } from "../hooks";

interface SelectLineDashboardProps {
	value?: string;
	onChange: (id: string) => void;
	disabled?: boolean;
}

const SelectLineDashboard: React.FC<SelectLineDashboardProps> = ({
	value = "All",
	onChange,
	disabled = false,
}) => {
	const { data } = useQueryActiveLine();
	return (
		<IonItem>
			<IonSelect
				value={value}
				onIonChange={(e) => onChange(e.detail.value!)}
				disabled={disabled} className="select-line">
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

export default SelectLineDashboard;
