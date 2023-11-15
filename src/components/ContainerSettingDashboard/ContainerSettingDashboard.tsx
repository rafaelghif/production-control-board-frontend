import { IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

import { ControlBoardPlanningInterface } from "../../types";

const ContainerActualWorkingTime = lazy(
	() => import("./ContainerActualWorkingTime"),
);
const ContainerActualWorkingTimeAll = lazy(
	() => import("./ContainerActualWorkingTimeAll"),
);
const ContainerManPower = lazy(() => import("./ContainerManPower"));
const ContainerProductionPlanQty = lazy(
	() => import("./ContainerProductionPlanQty"),
);
const ContainerTackTime = lazy(() => import("./ContainerTackTime"));
const ContainerTotalProcessing = lazy(
	() => import("./ContainerTotalProcessing"),
);

interface ContainerSettingDashboardProps {
	data?: ControlBoardPlanningInterface;
}

const ContainerSettingDashboard: React.FC<ContainerSettingDashboardProps> = ({
	data,
}) => {
	return (
		<div className="flex flex-col gap-3 p-5">
			<div className="flex flex-col gap-3 lg:flex-row">
				<Suspense fallback={<IonSpinner name="dots" />}>
					<ContainerActualWorkingTimeAll
						actualWorkingTimeAll={data?.actualWorkingTimeAll}
					/>
					<ContainerProductionPlanQty
						productLoadingPlanQty={data?.productLoadingPlanQty}
						productLoadingPlanBacklogQty={
							data?.productLoadingPlanBacklogQty
						}
					/>
					<ContainerTackTime tackTime={data?.tackTime} />
				</Suspense>
			</div>
			<div className="flex flex-col gap-3 lg:flex-row">
				<Suspense fallback={<IonSpinner name="dots" />}>
					<ContainerTotalProcessing
						totalProcessTime={data?.totalProcessTime}
					/>
					<ContainerActualWorkingTime
						actualWorkingTime={data?.actualWorkingTime}
						actualWorkingTimeOvertime={
							data?.actualWorkingTimeOvertime
						}
					/>
					<ContainerManPower
						manPowerCount={data?.manPowerCount}
						manPowerAdditionalCount={data?.manPowerAdditionalCount}
						manPowerAbleToSpare={data?.manPowerAbleToSpare}
					/>
				</Suspense>
			</div>
		</div>
	);
};

export default ContainerSettingDashboard;
