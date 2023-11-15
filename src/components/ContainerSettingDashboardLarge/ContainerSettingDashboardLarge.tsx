import { IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

import { ControlBoardPlanningInterface } from "../../types";

const ContainerActualWorkingTime = lazy(
	() => import("./ContainerActualWorkingTime"),
);
const ContainerActualWorkingTimeAll = lazy(
	() => import("./ContainerActualWorkingTimeAll"),
);
const ContainerManPower = lazy(
	() => import("./ContainerManPower/ContainerManPower"),
);
const ContainerProductionPlanQty = lazy(
	() => import("./ContainerProductionPlanQty"),
);
const ContainerTackTime = lazy(() => import("./ContainerTackTime"));
const ContainerTotalProcessing = lazy(
	() => import("./ContainerTotalProcessing"),
);

interface ContainerSettingDashboardLargeProps {
	data?: ControlBoardPlanningInterface;
	shiftFilter?: string;
}

const ContainerSettingDashboardLarge: React.FC<
	ContainerSettingDashboardLargeProps
> = ({ data, shiftFilter }) => {
	const fontSize =
		shiftFilter && shiftFilter === "Normal" ? "text-xl" : "text-4xl";
	return (
		<div className="flex flex-col gap-3 p-5">
			<div className="flex flex-col justify-center gap-3 lg:flex-row">
				<Suspense fallback={<IonSpinner name="dots" />}>
					<ContainerActualWorkingTimeAll
						fontSize={fontSize}
						actualWorkingTimeAll={data?.actualWorkingTimeAll}
					/>
					<ContainerProductionPlanQty
						fontSize={fontSize}
						productLoadingPlanQty={data?.productLoadingPlanQty}
						productLoadingPlanBacklogQty={
							data?.productLoadingPlanBacklogQty
						}
					/>
					<ContainerTackTime
						fontSize={fontSize}
						tackTime={data?.tackTime}
					/>
				</Suspense>
			</div>
			<div className="flex flex-col justify-center gap-3 lg:flex-row">
				<Suspense fallback={<IonSpinner name="dots" />}>
					<ContainerTotalProcessing
						fontSize={fontSize}
						totalProcessTime={data?.totalProcessTime}
					/>
					<ContainerActualWorkingTime
						fontSize={fontSize}
						actualWorkingTime={data?.actualWorkingTime}
						actualWorkingTimeOvertime={
							data?.actualWorkingTimeOvertime
						}
					/>
					<ContainerManPower
						fontSize={fontSize}
						manPowerCount={data?.manPowerCount}
						manPowerAdditionalCount={data?.manPowerAdditionalCount}
						manPowerAbleToSpare={data?.manPowerAbleToSpare}
					/>
				</Suspense>
			</div>
		</div>
	);
};

export default ContainerSettingDashboardLarge;
