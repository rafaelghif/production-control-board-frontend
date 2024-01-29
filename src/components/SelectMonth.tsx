import { IonItem, IonSelect, IonSelectOption } from "@ionic/react";

const monthName = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

interface SelectMonthProps {
	value: number;
	onChange: (val: number) => void;
}

const SelectMonth: React.FC<SelectMonthProps> = ({ value, onChange }) => {
	return (
		<IonItem>
			<IonSelect
				label="Month"
				value={value}
				onIonChange={(e) => onChange(e.detail.value!)}
				labelPlacement="stacked">
				{monthName.map((month, index) => (
					<IonSelectOption
						key={`month-options-${index}`}
						value={index + 1}>
						{month}
					</IonSelectOption>
				))}
			</IonSelect>
		</IonItem>
	);
};

export default SelectMonth;
