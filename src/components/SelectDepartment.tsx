import { IonItem, IonSelect, IonSelectOption } from "@ionic/react";

import { useQueryActiveDepartment } from "../hooks/useQueryActiveDepartment";

interface SelectDepartmentProps {
	value?: string;
	onChange: (id: string) => void;
}

const SelectDepartment: React.FC<SelectDepartmentProps> = ({
	value = "",
	onChange,
}) => {
	const { data } = useQueryActiveDepartment();
	return (
		<IonItem>
			<IonSelect
				label="Department"
				labelPlacement="floating"
				value={value}
				onIonChange={(e) => onChange(e.detail.value!)}>
				<IonSelectOption value="">Select Department</IonSelectOption>
				{data?.map((department) => (
					<IonSelectOption
						key={`department-${department.id}`}
						value={department.id}>
						{department.name}
					</IonSelectOption>
				))}
			</IonSelect>
		</IonItem>
	);
};

export default SelectDepartment;
