import { IonCol, IonGrid, IonRow, IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

import { ControlBoardWithLineShiftInterface } from "../types/control-board";

// const ContainerControlBoard = lazy(() => import("./ContainerControlBoard"));
const ContainerControlBoardV2 = lazy(() => import("./ContainerControlBoardV2"));

interface GridControlBoardProps {
	data?: ControlBoardWithLineShiftInterface[];
	shiftFilter: string;
	openModal: () => void;
}

const GridControlBoard: React.FC<GridControlBoardProps> = ({
	data,
	shiftFilter,
	openModal,
}) => {
	return (
		<IonGrid>
			<IonRow>
				{data?.map((controlBoard) => (
					<IonCol
						size="12"
						key={`control-board-${controlBoard.lineName}`}>
						<Suspense fallback={<IonSpinner name="crescent" />}>
							{/* <ContainerControlBoard title={`Control Board ${controlBoard.lineName}`} data={controlBoard.plannings} settings={controlBoard.settings} dateFilter={dateFilter} openModal={openModal} /> */}
							<ContainerControlBoardV2
								shiftFilter={shiftFilter}
								title={`Control Board ${controlBoard.lineName}`}
								data={controlBoard.plannings}
								settings={controlBoard.settings}
							/>
						</Suspense>
					</IonCol>
				))}
			</IonRow>
		</IonGrid>
	);
};

export default GridControlBoard;
