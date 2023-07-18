import { Suspense, lazy, useEffect, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonCol, IonGrid, IonRow, IonSpinner } from "@ionic/react";
import { CreateControlBoardPlanningDetailType, CreateControlBoardPlanningType } from "../../../types/control-board-planning-type";
import useLineStore from "../../../stores/useLineStore";
import { formatDateString, plus1HourTime } from "../../../libs/date-fns";
import FormControlBoardPlanningDetail from "./FormControlBoardPlanningDetail";
import Card from "../../../components/Card";
import { useToast } from "../../../hooks/useToast";
import { initialValueDetail } from "../../../datas/control-board-planning-data";
import { useCreateControlBoardPlanning } from "../hooks/useCreateControlBoardPlanning";

const FormControlBoardPlanning = lazy(() => import("./FormControlBoardPlanning"));

interface ModalCreateControlBoardPlanningProps {
    isOpen: boolean;
    onDidDismiss: () => void;
}

const ModalCreateControlBoardPlanning: React.FC<ModalCreateControlBoardPlanningProps> = ({ isOpen, onDidDismiss }) => {
    const { line } = useLineStore();
    const { warningToast } = useToast();

    const [isSubmitPlanning, setIsSubmitPlanning] = useState<boolean>(false);
    const [controlBoardPlanning, setControlBoardPlanning] = useState<CreateControlBoardPlanningType>({ date: formatDateString(new Date()), LineId: line.id });
    const [controlBoardPlanningDetails, setControlBoardPlanningDetails] = useState<CreateControlBoardPlanningDetailType[]>(initialValueDetail);
    const { mutate } = useCreateControlBoardPlanning();

    const handleInputControlBoardPlanning = (key: keyof CreateControlBoardPlanningType, value: string) => {
        setControlBoardPlanning((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmitControlBoardPlanning = (e: React.FormEvent) => {
        e.preventDefault();
        controlBoardPlanning.LineId ? setIsSubmitPlanning(true) : warningToast("Please fill Line");
    }

    const handleDismissModal = () => {
        onDidDismiss();
        setIsSubmitPlanning(false);
        setControlBoardPlanning({ date: formatDateString(new Date()), LineId: line.id });
        setControlBoardPlanningDetails(initialValueDetail);
    }

    const handleChange = (data: CreateControlBoardPlanningDetailType, dataIndex: number) => {
        setControlBoardPlanningDetails(controlBoardPlanningDetails.map(
            (controlBoardPlanningDetail, index) =>
                dataIndex !== index
                    ? controlBoardPlanningDetail
                    : data
        ));
    }

    const onClickBtnSubmit = () => {
        mutate({ planning: controlBoardPlanning, planningDetails: controlBoardPlanningDetails });
        handleDismissModal();
    }

    return (
        <Modal title="Create Control Board Planning" isOpen={isOpen} onDidDismiss={handleDismissModal}>
            <Suspense fallback={<IonSpinner name="crescent" />}>
                {isSubmitPlanning ? (
                    <IonGrid>
                        <IonRow>
                            {controlBoardPlanningDetails.map((controlBoardPlanningDetail, index) => (
                                <IonCol size="12" sizeMd="6" key={`planning-detail-${index}`}>
                                    <Card title={`Time ${controlBoardPlanningDetail.time} - ${plus1HourTime(controlBoardPlanningDetail.time)}`} headerColor="light">
                                        <FormControlBoardPlanningDetail value={controlBoardPlanningDetail} onChange={(data) => handleChange(data, index)} />
                                    </Card>
                                </IonCol>
                            ))}
                            <IonCol size="12">
                                <IonButton expand="block" onClick={onClickBtnSubmit}>Submit</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                ) : (
                    <FormControlBoardPlanning controlBoardPlanning={controlBoardPlanning} handleInputControlBoardPlanning={handleInputControlBoardPlanning} handleSubmit={handleSubmitControlBoardPlanning} line={line.id} />
                )}
            </Suspense>
        </Modal>
    );
}

export default ModalCreateControlBoardPlanning;