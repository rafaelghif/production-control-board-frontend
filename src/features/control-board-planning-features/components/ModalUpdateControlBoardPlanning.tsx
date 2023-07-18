import { useEffect, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonInput, IonItem } from "@ionic/react";
import { ControlBoardPlanningInterface, UpdateControlBoardPlanningType } from "../../../types/control-board-planning-type";
import { useUpdateControlBoardPlanning } from "../hooks/useUpdateControlBoardPlanning";

interface ModalUpdateControlBoardPlanningProps {
    isOpen: boolean;
    data?: ControlBoardPlanningInterface;
    onDidDismiss: () => void;
}

const ModalUpdateControlBoardPlanning: React.FC<ModalUpdateControlBoardPlanningProps> = ({ isOpen, data, onDidDismiss }) => {
    const [formData, setFormData] = useState<UpdateControlBoardPlanningType>({});
    const { mutate } = useUpdateControlBoardPlanning();

    const handleInput = (key: keyof UpdateControlBoardPlanningType, value: string | number) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }

    useEffect(() => {
        setFormData((prevState) => ({ ...prevState, id: data?.id, date: data?.date, LineId: data?.LineId }));
    }, [data]);

    return (
        <Modal title="Update Control Board Planning" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Id" labelPlacement="floating" value={formData?.id} onIonInput={(e) => handleInput("id", e.detail.value!)} required disabled />
                </IonItem>
                <IonItem>
                    <IonInput type="date" label="Date" labelPlacement="floating" value={formData?.date} onIonInput={(e) => handleInput("date", e.detail.value!)} required />
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalUpdateControlBoardPlanning;