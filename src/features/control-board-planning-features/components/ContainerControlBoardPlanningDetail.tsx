import { ExpanderComponentProps } from "react-data-table-component";
import { ControlBoardPlanningDetailInterface, ControlBoardPlanningWithLineInterface } from "../../../types/control-board-planning-type";
import Card from "../../../components/Card";
import { useQueryControlBoardPlanningDetail } from "../hooks/useQueryControlBoardPlanningDetail";
import { Suspense, lazy, useState } from "react";
import { IonGrid, IonRow, IonCol, IonSpinner } from "@ionic/react";
import ModalUpdateControlBoardPlanningDetail from "./ModalUpdateControlBoardPlanningDetail";

const TableControlBoardPlanningDetail = lazy(() => import("./TableControlBoardPlanningDetail"));

const ContainerControlBoardPlanningDetail: React.FC<ExpanderComponentProps<ControlBoardPlanningWithLineInterface>> = ({ data: controlBoardPlanning }) => {
    const { data, isLoading } = useQueryControlBoardPlanningDetail(controlBoardPlanning.id);

    const [selectValue, setSelectValue] = useState<ControlBoardPlanningDetailInterface>();
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

    const handleClickBtnEdit = (data: ControlBoardPlanningDetailInterface) => {
        setSelectValue(data);
        setIsOpenModalUpdate(true);
    }
    return (
        <>
            <IonGrid>
                <IonRow>
                    <IonCol size="12">
                        <Card title={`Detail ${controlBoardPlanning.Line.name} ${controlBoardPlanning.date}`} headerColor="light">
                            {isLoading ? (
                                <IonSpinner name="crescent" />
                            ) : (
                                <Suspense fallback={<IonSpinner name="crescent" />}>
                                    <TableControlBoardPlanningDetail data={data} handleClickBtnEdit={(data) => handleClickBtnEdit(data)} />
                                </Suspense>
                            )}
                        </Card>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <ModalUpdateControlBoardPlanningDetail isOpen={isOpenModalUpdate} data={selectValue} onDidDismiss={() => setIsOpenModalUpdate(false)} />
        </>
    );
}

export default ContainerControlBoardPlanningDetail;