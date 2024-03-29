import { IonCol, IonGrid, IonRow, IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

import { ControlBoardWithLineShiftInterface } from "../types";

const ContainerControlBoardV2 = lazy(() => import("./ContainerControlBoardV2"));

interface GridControlBoardProps {
	data?: ControlBoardWithLineShiftInterface[];
	openModal: () => void;
}

const GridControlBoard: React.FC<GridControlBoardProps> = ({ data }) => {
	return (
		<IonGrid>
			<IonRow>
				{data?.map((controlBoard) => (
					<IonCol
						size="12"
						key={`control-board-${controlBoard.lineName}`}>
						<Suspense fallback={<IonSpinner name="crescent" />}>
							<ContainerControlBoardV2
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
