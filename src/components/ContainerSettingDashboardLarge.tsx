import { ControlBoardPlanningInterface } from "../types";

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
				<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
					<span className="text-xl font-semibold text-center border-b-2">
						Actual Working Time
					</span>
					<span className="text-lg">Standard</span>
					<span className={`${fontSize} font-semibold text-white`}>
						{data?.actualWorkingTimeAll}
					</span>
				</div>
				<div className="flex flex-col justify-between gap-1 text-center basis-5/12">
					<span className="text-xl font-semibold text-center border-b-2">
						Product Loading Plan Qty
					</span>
					<div className="grid grid-cols-2">
						<div className="flex flex-col gap-1">
							<span className="text-lg">Today</span>
							<span
								className={`${fontSize} font-semibold text-white`}>
								{data?.productLoadingPlanQty}
							</span>
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-lg">BackLog</span>
							<span
								className={`${fontSize} font-semibold text-white`}>
								{data?.productLoadingPlanBacklogQty || "-"}
							</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
					<span className="text-xl font-semibold border-b-2">
						Tact Time
					</span>
					<span className={`${fontSize} font-semibold text-white`}>
						{data?.tackTime}
					</span>
				</div>
			</div>
			<div className="flex flex-col justify-center gap-3 lg:flex-row">
				<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
					<span className="text-xl font-semibold text-center border-b-2">
						Total Processing
					</span>
					<span className="text-lg">Time Needed</span>
					<span className={`${fontSize} font-semibold text-white`}>
						{data?.totalProcessTime}
					</span>
				</div>
				<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
					<span className="text-xl font-semibold text-center border-b-2">
						Actual Working Time
					</span>
					<div className="grid grid-cols-2">
						<div className="flex flex-col gap-1">
							<span className="text-lg">Standard</span>
							<span
								className={`${fontSize} font-semibold text-white`}>
								{data?.actualWorkingTime}
							</span>
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-lg">O/T</span>
							<span
								className={`${fontSize} font-semibold text-white`}>
								{data?.actualWorkingTimeOvertime || "-"}
							</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-1 text-center basis-5/12">
					<span className="text-xl font-semibold text-center border-b-2">
						Man Power Required
					</span>
					<div className="grid grid-cols-3">
						<div className="flex flex-col gap-1">
							<span className="text-lg">Regular</span>
							<span
								className={`${fontSize} font-semibold text-white`}>
								{data?.manPowerCount}
							</span>
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-lg">Additional</span>
							<span
								className={`${fontSize} font-semibold text-white`}>
								{data?.manPowerAdditionalCount || "-"}
							</span>
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-lg">Spare</span>
							<span
								className={`${fontSize} font-semibold text-white`}>
								{data?.manPowerAbleToSpare || "-"}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContainerSettingDashboardLarge;
