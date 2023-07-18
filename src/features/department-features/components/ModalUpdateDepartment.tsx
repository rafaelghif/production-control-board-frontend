import { useEffect, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonCheckbox, IonInput, IonItem } from "@ionic/react";
import { DepartmentInterface, UpdateDepartmentType } from "../../../types/department-type";
import { useUpdateDepartment } from "../hooks/useUpdateDepartment";

interface ModalUpdateDepartmentProps {
    isOpen: boolean;
    data?: DepartmentInterface;
    onDidDismiss: () => void;
}

const ModalUpdateDepartment: React.FC<ModalUpdateDepartmentProps> = ({ isOpen, data, onDidDismiss }) => {
    const [formData, setFormData] = useState<UpdateDepartmentType>({});
    const { mutate } = useUpdateDepartment();

    const handleInput = (key: keyof UpdateDepartmentType, value: string | boolean) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }

    useEffect(() => {
        setFormData((prevState) => ({ ...prevState, id: data?.id, name: data?.name, abbreviation: data?.abbreviation, inActive: data?.inActive }));
    }, [data]);

    return (
        <Modal title="Update Department" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Id" labelPlacement="floating" value={formData?.id} onIonInput={(e) => handleInput("id", e.detail.value!)} required disabled />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Name" labelPlacement="floating" value={formData?.name} onIonInput={(e) => handleInput("name", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Abbreviation" labelPlacement="floating" value={formData?.abbreviation} onIonInput={(e) => handleInput("abbreviation", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonCheckbox checked={formData?.inActive} onIonChange={(e) => handleInput("inActive", e.detail.checked!)}>InActive</IonCheckbox>
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalUpdateDepartment;