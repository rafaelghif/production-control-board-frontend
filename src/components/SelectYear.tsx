import { IonItem, IonSelect, IonSelectOption } from "@ionic/react";

const yearString = [
	"2023",
	"2024",
	"2025",
	"2026",
	"2027",
	"2028",
	"2029",
	"2030",
];

interface SelectYearProps {
	value: number;
	onChange: (val: number) => void;
}

const SelectYear: React.FC<SelectYearProps> = ({ value, onChange }) => {
	return (
		<IonItem>
			<IonSelect
				label="Year"
				value={value}
				onIonChange={(e) => onChange(e.detail.value!)}
				labelPlacement="stacked">
				{yearString.map((year, index) => (
					<IonSelectOption
						key={`year-options-${index}`}
						value={parseInt(year)}>
						{year}
					</IonSelectOption>
				))}
			</IonSelect>
		</IonItem>
	);
};

export default SelectYear;
