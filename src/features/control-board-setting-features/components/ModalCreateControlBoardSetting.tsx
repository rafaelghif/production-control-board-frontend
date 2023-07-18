import { Suspense, lazy, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonInput, IonItem, IonSpinner } from "@ionic/react";
import { CreateControlBoardSettingType } from "../../../types/control-board-setting-type";
import { useCreateControlBoardSetting } from "../hooks/useCreateControlBoardSetting";
import useDepartmentStore from "../../../stores/useDepartmentStore";

const SelectLineByDepartment = lazy(() => import("../../../components/SelectLineByDepartment"));

interface ModalCreateControlBoardSettingProps {
    isOpen: boolean;
    onDidDismiss: () => void;
}

const ModalCreateControlBoardSetting: React.FC<ModalCreateControlBoardSettingProps> = ({ isOpen, onDidDismiss }) => {
    const { department } = useDepartmentStore();

    const [formData, setFormData] = useState<CreateControlBoardSettingType>({ actualWorkingTime: 0, planQty: 0, manPowerRegular: 0, shiftTotal: 0, LineId: "" });
    const { mutate } = useCreateControlBoardSetting();

    const handleInput = (key: keyof CreateControlBoardSettingType, value: number | string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        setFormData({ actualWorkingTime: 0, planQty: 0, manPowerRegular: 0, shiftTotal: 0, LineId: "" });
        onDidDismiss();
    }
    return (
        <Modal title="Create Control Board Setting" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <Suspense fallback={<IonSpinner name="crescent" />}>
                    <SelectLineByDepartment value={formData.LineId} departmentId={department.id} onChange={(id) => handleInput("LineId", id)} />
                </Suspense>
                <IonItem>
                    <IonInput type="number" label="Actual Working Time" labelPlacement="floating" value={formData.actualWorkingTime} onIonInput={(e) => handleInput("actualWorkingTime", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" label="Plan QTY" labelPlacement="floating" value={formData.planQty} onIonInput={(e) => handleInput("planQty", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" label="Man Power Regular" labelPlacement="floating" value={formData.manPowerRegular} onIonInput={(e) => handleInput("manPowerRegular", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" label="Shift Total" labelPlacement="floating" value={formData.shiftTotal} onIonInput={(e) => handleInput("shiftTotal", e.detail.value!)} required />
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalCreateControlBoardSetting;