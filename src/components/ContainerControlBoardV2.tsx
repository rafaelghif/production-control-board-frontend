import { IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

import { ControlBoardInterface, ShiftType } from "../types";
import { ControlBoardPlanningInterface } from "../types";
import Card from "./Card";

const TableControlBoard = lazy(() => import("./TableControlBoard"));

const ContainerSettingDashboardLarge = lazy(
	() => import("./ContainerSettingDashboardLarge"),
);

interface ContainerControlBoardProps {
	title: string;
	data?: ControlBoardInterface[];
	shiftFilter: ShiftType;
	settings?: ControlBoardPlanningInterface;
}

const ContainerControlBoardV2: React.FC<ContainerControlBoardProps> = ({
	title,
	data,
	shiftFilter,
	settings,
}) => {
	return (
		<Card title={title}>
			<div className="flex flex-col gap-1">
				<div>
					<Suspense fallback={<IonSpinner name="dots" />}>
						<ContainerSettingDashboardLarge
							data={settings}
							shiftFilter={shiftFilter}
						/>
					</Suspense>
				</div>
				<div>
					<Suspense fallback={<IonSpinner name="dots" />}>
						<TableControlBoard
							data={data}
							shiftFilter={shiftFilter}
						/>
					</Suspense>
				</div>
			</div>
		</Card>
	);
};

export default ContainerControlBoardV2;
