import { IonCol, IonGrid, IonRow, IonSpinner } from "@ionic/react";
import { ControlBoardWithLineInterface } from "../types/control-board";
import { Suspense, lazy } from "react";

// const ContainerControlBoard = lazy(() => import("./ContainerControlBoard"));
const ContainerControlBoardV2 = lazy(() => import("./ContainerControlBoardV2"));

interface GridControlBoardProps {
    data?: ControlBoardWithLineInterface[];
    dateFilter: string;
    openModal: () => void;
}

const GridControlBoard: React.FC<GridControlBoardProps> = ({ data, dateFilter, openModal }) => {
    return (
        <IonGrid>
            <IonRow>
                {data?.map((controlBoard) => (
                    <IonCol size="12" key={`control-board-${controlBoard.lineName}`}>
                        <Suspense fallback={<IonSpinner name="crescent" />}>
                            {/* <ContainerControlBoard title={`Control Board ${controlBoard.lineName}`} data={controlBoard.plannings} settings={controlBoard.settings} dateFilter={dateFilter} openModal={openModal} /> */}
                            <ContainerControlBoardV2 title={`Control Board ${controlBoard.lineName}`} data={controlBoard.plannings} settings={controlBoard.settings} />
                        </Suspense>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
}

export default GridControlBoard;