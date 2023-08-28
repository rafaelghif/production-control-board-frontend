import { useEffect, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonInput, IonItem } from "@ionic/react";
import { ControlBoardSettingDetailInterface, UpdateControlBoardSettingDetailType } from "../../../types/control-board-setting-type";
import { useUpdateControlBoardSettingDetail } from "../hooks/useUpdateControlBoardSettingDetail";

interface ModalUpdateControlBoardSettingDetailProps {
    isOpen: boolean;
    data?: ControlBoardSettingDetailInterface;
    onDidDismiss: () => void;
}

const ModalUpdateControlBoardSettingDetail: React.FC<ModalUpdateControlBoardSettingDetailProps> = ({ isOpen, data, onDidDismiss }) => {
    const [formData, setFormData] = useState<UpdateControlBoardSettingDetailType>({});
    const { mutate } = useUpdateControlBoardSettingDetail();

    const handleInput = (key: keyof UpdateControlBoardSettingDetailType, value: string | number) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }

    useEffect(() => {
        setFormData((prevState) => ({ ...prevState, id: data?.id, qty: data?.qty }));
    }, [data]);

    return (
        <Modal title="Update Control Board Setting Detail" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Id" labelPlacement="floating" value={formData?.id} onIonInput={(e) => handleInput("id", e.detail.value!)} required disabled />
                </IonItem>
                <IonItem>
                    <IonInput type="number" label="Qty" labelPlacement="floating" value={formData?.qty} onIonInput={(e) => handleInput("qty", e.detail.value!)} required />
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalUpdateControlBoardSettingDetail;