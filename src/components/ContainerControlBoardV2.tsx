import { IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

import { ControlBoardInterface } from "../types";
import { ControlBoardPlanningInterface } from "../types";
import Card from "./Card";

const TableControlBoard = lazy(() => import("./TableControlBoard/TableControlBoard"));

const ContainerSettingDashboardLarge = lazy(
	() => import("./ContainerSettingDashboardLarge"),
);

interface ContainerControlBoardProps {
	data?: ControlBoardInterface[];
	settings?: ControlBoardPlanningInterface;
}

const ContainerControlBoardV2: React.FC<ContainerControlBoardProps> = ({
	data,
	settings,
}) => {
	return (
		<Card title={""}>
			<div className="flex flex-col gap-1">
				<div>
					<Suspense fallback={<IonSpinner name="dots" />}>
						<ContainerSettingDashboardLarge
							data={settings}
							orderCompleteNumber={
								data
									? data[data.length - 1]
											.totalOrderCompleteCumulative
									: 0
							}
						/>
					</Suspense>
				</div>
				<div>
					<Suspense fallback={<IonSpinner name="dots" />}>
						<TableControlBoard data={data} />
					</Suspense>
				</div>
			</div>
		</Card>
	);
};

export default ContainerControlBoardV2;
