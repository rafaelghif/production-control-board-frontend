import { Suspense, lazy, useEffect, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonCheckbox, IonInput, IonItem, IonSpinner } from "@ionic/react";
import { ControlBoardSettingInterface, UpdateControlBoardSettingType } from "../../../types/control-board-setting-type";
import useDepartmentStore from "../../../stores/useDepartmentStore";
import { useUpdateControlBoardSetting } from "../hooks/useUpdateControlBoardSetting";

const SelectLine = lazy(() => import("../../../components/SelectLineByDepartment"));

interface ModalUpdateControlBoardSettingProps {
    isOpen: boolean;
    data?: ControlBoardSettingInterface;
    onDidDismiss: () => void;
}

const ModalUpdateControlBoardSetting: React.FC<ModalUpdateControlBoardSettingProps> = ({ isOpen, data, onDidDismiss }) => {
    const { department } = useDepartmentStore();

    const [formData, setFormData] = useState<UpdateControlBoardSettingType>({});
    const { mutate } = useUpdateControlBoardSetting();

    const handleInput = (key: keyof UpdateControlBoardSettingType, value: number | string | boolean) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }

    useEffect(() => {
        setFormData((prevState) => ({
            ...prevState,
            actualWorkingTime: data?.actualWorkingTime,
            planQty: data?.planQty,
            manPowerRegular: data?.manPowerRegular,
            shiftTotal: data?.shiftTotal,
            LineId: data?.LineId
        }));
    }, [data]);

    return (
        <Modal title="Update Control Board Setting" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <Suspense fallback={<IonSpinner name="crescent" />}>
                    <SelectLine value={formData?.LineId} departmentId={department.id} onChange={(id) => handleInput("LineId", id)} />
                </Suspense>
                <IonItem>
                    <IonInput type="number" label="Actual Working Time" labelPlacement="floating" value={formData?.actualWorkingTime} onIonInput={(e) => handleInput("actualWorkingTime", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" label="Plan QTY" labelPlacement="floating" value={formData?.planQty} onIonInput={(e) => handleInput("planQty", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" label="Man Power Regular" labelPlacement="floating" value={formData?.manPowerRegular} onIonInput={(e) => handleInput("manPowerRegular", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" label="Shift Total" labelPlacement="floating" value={formData?.shiftTotal} onIonInput={(e) => handleInput("shiftTotal", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonCheckbox checked={formData?.inActive} onIonChange={(e) => handleInput("inActive", e.detail.checked!)}>InActive</IonCheckbox>
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalUpdateControlBoardSetting;