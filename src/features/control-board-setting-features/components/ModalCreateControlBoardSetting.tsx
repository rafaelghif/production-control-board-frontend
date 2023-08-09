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

const initialValue: CreateControlBoardSettingType = {
    actualWorkingTimeAll: 0,
    productLoadingPlanQty: 0,
    productLoadingPlanBacklogQty: 0,
    tackTime: 0,
    totalProcessTime: 0,
    actualWorkingTime: 0,
    actualWorkingTimeOvertime: 0,
    manPowerCount: 0,
    manPowerAdditionalCount: 0,
    manPowerAbleToSpare: 0,
    LineId: ""
}

const ModalCreateControlBoardSetting: React.FC<ModalCreateControlBoardSettingProps> = ({ isOpen, onDidDismiss }) => {
    const { department } = useDepartmentStore();

    const [formData, setFormData] = useState<CreateControlBoardSettingType>(initialValue);
    const { mutate } = useCreateControlBoardSetting();

    const handleInput = (key: keyof CreateControlBoardSettingType, value: number | string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        setFormData(initialValue);
        onDidDismiss();
    }
    return (
        <Modal title="Create Control Board Setting" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <Suspense fallback={<IonSpinner name="crescent" />}>
                    <SelectLineByDepartment value={formData.LineId} departmentId={department.id} onChange={(id) => handleInput("LineId", id)} />
                </Suspense>
                <IonItem>
                    <IonInput type="number" min={0} label="Actual Working Time All" labelPlacement="floating" value={formData.actualWorkingTimeAll} onIonInput={(e) => handleInput("actualWorkingTimeAll", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" min={0} label="Production Loading Plan Qty" labelPlacement="floating" value={formData.productLoadingPlanQty} onIonInput={(e) => handleInput("productLoadingPlanQty", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" min={0} label="Production Loading Backlog Qty" labelPlacement="floating" value={formData.productLoadingPlanBacklogQty} onIonInput={(e) => handleInput("productLoadingPlanBacklogQty", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="text" min={0} label="Tack Time" labelPlacement="floating" value={formData.tackTime} onIonInput={(e) => handleInput("tackTime", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" min={0} label="Total Process Time" labelPlacement="floating" value={formData.totalProcessTime} onIonInput={(e) => handleInput("totalProcessTime", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" min={0} label="Actual Working Time" labelPlacement="floating" value={formData.actualWorkingTime} onIonInput={(e) => handleInput("actualWorkingTime", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" min={0} label="Actual Working Time Overtime" labelPlacement="floating" value={formData.actualWorkingTimeOvertime} onIonInput={(e) => handleInput("actualWorkingTimeOvertime", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" min={0} label="Man Power Count" labelPlacement="floating" value={formData.manPowerCount} onIonInput={(e) => handleInput("manPowerCount", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" min={0} label="Man Power Additional Count" labelPlacement="floating" value={formData.manPowerAdditionalCount} onIonInput={(e) => handleInput("manPowerAdditionalCount", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="number" min={0} label="Man Power Able to Spare Count" labelPlacement="floating" value={formData.manPowerAbleToSpare} onIonInput={(e) => handleInput("manPowerAbleToSpare", e.detail.value!)} required />
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalCreateControlBoardSetting;