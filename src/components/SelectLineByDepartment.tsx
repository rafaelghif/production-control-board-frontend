import { IonItem, IonSelect, IonSelectOption } from "@ionic/react";
import { useQueryActiveLineByDepartment } from "../hooks/useQueryActiveLineByDepartment";

interface SelectLineByDepartmentProps {
    value?: string;
    departmentId?: string;
    onChange: (id: string) => void;
    disabled?: boolean;
}

const SelectLineByDepartment: React.FC<SelectLineByDepartmentProps> = ({ value = "", departmentId = "", onChange, disabled = false }) => {
    const { data } = useQueryActiveLineByDepartment(departmentId);
    return (
        <IonItem>
            <IonSelect label="Line" labelPlacement="floating" value={value} onIonChange={(e) => onChange(e.detail.value!)} disabled={disabled}>
                <IonSelectOption value="">Select Line</IonSelectOption>
                {data?.map((line) => (
                    <IonSelectOption key={`line-${line.id}`} value={line.id}>{line.name}</IonSelectOption>
                ))}
            </IonSelect>
        </IonItem>
    );
}

export default SelectLineByDepartment;