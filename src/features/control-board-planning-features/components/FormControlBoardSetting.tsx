import { useEffect } from "react";
import { CreateControlBoardPlanningType } from "../../../types/control-board-planning-type";
import { useQueryControlBoardSettingByLine } from "../hooks/useQueryControlBoardSettingByLine";
import { IonInput, IonItem } from "@ionic/react";
import Card from "../../../components/Card";

interface FormControlBoardSettingProps {
    lineId: string;
    value: CreateControlBoardPlanningType;
    handleInputControlBoardPlanning: (key: keyof CreateControlBoardPlanningType, value: string | number) => void;
}

const FormControlBoardSetting: React.FC<FormControlBoardSettingProps> = ({ lineId, value, handleInputControlBoardPlanning }) => {
    const { data } = useQueryControlBoardSettingByLine(lineId);

    useEffect(() => {
        if (data) {
            handleInputControlBoardPlanning("actualWorkingTimeAll", data.actualWorkingTimeAll);
            handleInputControlBoardPlanning("productLoadingPlanQty", data.productLoadingPlanQty);
            handleInputControlBoardPlanning("productLoadingPlanBacklogQty", data.productLoadingPlanBacklogQty);
            handleInputControlBoardPlanning("tackTime", data.tackTime);
            handleInputControlBoardPlanning("totalProcessTime", data.totalProcessTime);
            handleInputControlBoardPlanning("actualWorkingTime", data.actualWorkingTime);
            handleInputControlBoardPlanning("actualWorkingTimeOvertime", data.actualWorkingTimeOvertime);
            handleInputControlBoardPlanning("manPowerCount", data.manPowerCount);
            handleInputControlBoardPlanning("manPowerAdditionalCount", data.manPowerAdditionalCount);
            handleInputControlBoardPlanning("manPowerAbleToSpare", data.manPowerAbleToSpare);
        }
    }, [data]);

    return (
        <Card title="Control Board Planning">
            <IonItem>
                <IonInput type="number" min={0} label="Actual Working Time All" labelPlacement="floating" value={value?.actualWorkingTimeAll} onIonInput={(e) => handleInputControlBoardPlanning("actualWorkingTimeAll", e.detail.value!)} required />
            </IonItem>
            <IonItem>
                <IonInput type="number" min={0} label="Production Loading Plan Qty" labelPlacement="floating" value={value?.productLoadingPlanQty} onIonInput={(e) => handleInputControlBoardPlanning("productLoadingPlanQty", e.detail.value!)} required />
            </IonItem>
            <IonItem>
                <IonInput type="number" min={0} label="Production Loading Backlog Qty" labelPlacement="floating" value={value?.productLoadingPlanBacklogQty} onIonInput={(e) => handleInputControlBoardPlanning("productLoadingPlanBacklogQty", e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonInput type="text" min={0} label="Tack Time" labelPlacement="floating" value={value?.tackTime} onIonInput={(e) => handleInputControlBoardPlanning("tackTime", e.detail.value!)} required />
            </IonItem>
            <IonItem>
                <IonInput type="number" min={0} label="Total Process Time" labelPlacement="floating" value={value?.totalProcessTime} onIonInput={(e) => handleInputControlBoardPlanning("totalProcessTime", e.detail.value!)} required />
            </IonItem>
            <IonItem>
                <IonInput type="number" min={0} label="Actual Working Time" labelPlacement="floating" value={value?.actualWorkingTime} onIonInput={(e) => handleInputControlBoardPlanning("actualWorkingTime", e.detail.value!)} required />
            </IonItem>
            <IonItem>
                <IonInput type="number" min={0} label="Actual Working Time Overtime" labelPlacement="floating" value={value?.actualWorkingTimeOvertime} onIonInput={(e) => handleInputControlBoardPlanning("actualWorkingTimeOvertime", e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonInput type="number" min={0} label="Man Power Count" labelPlacement="floating" value={value?.manPowerCount} onIonInput={(e) => handleInputControlBoardPlanning("manPowerCount", e.detail.value!)} required />
            </IonItem>
            <IonItem>
                <IonInput type="number" min={0} label="Man Power Additional Count" labelPlacement="floating" value={value?.manPowerAdditionalCount} onIonInput={(e) => handleInputControlBoardPlanning("manPowerAdditionalCount", e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonInput type="number" min={0} label="Man Power Able to Spare Count" labelPlacement="floating" value={value?.manPowerAbleToSpare} onIonInput={(e) => handleInputControlBoardPlanning("manPowerAbleToSpare", e.detail.value!)} />
            </IonItem>
        </Card>
    );
}

export default FormControlBoardSetting;