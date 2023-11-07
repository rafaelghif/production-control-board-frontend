import { ControlBoardPlanningInterface } from "../types/control-board-planning-type";

interface ContainerSettingDashboardProps {
	data?: ControlBoardPlanningInterface;
}

const ContainerSettingDashboard: React.FC<ContainerSettingDashboardProps> = ({
	data,
}) => {
	return (
		<div className="flex flex-col gap-3 p-5">
			<div className="flex flex-col gap-3 lg:flex-row">
				<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
					<span className="font-semibold text-center border-b-2">
						Actual Working Time
					</span>
					<span className="text-sm">Standard</span>
					<span className="text-xs font-semibold">
						{data?.actualWorkingTimeAll}
					</span>
				</div>
				<div className="flex flex-col justify-between gap-1 text-center basis-5/12">
					<span className="font-semibold text-center border-b-2">
						Product Loading Plan Qty
					</span>
					<div className="grid grid-cols-2">
						<div className="flex flex-col gap-1">
							<span className="text-sm">Today</span>
							<span className="text-xs font-semibold">
								{data?.productLoadingPlanQty}
							</span>
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-sm">BackLog</span>
							<span className="text-xs font-semibold">
								{data?.productLoadingPlanBacklogQty || "-"}
							</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
					<span className="font-semibold border-b-2">Tact Time</span>
					<span className="text-xs font-semibold">
						{data?.tackTime}
					</span>
				</div>
			</div>
			<div className="flex flex-col gap-3 lg:flex-row">
				<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
					<span className="font-semibold text-center border-b-2">
						Total Processing
					</span>
					<span className="text-sm">Time Needed</span>
					<span className="text-xs font-semibold">
						{data?.totalProcessTime}
					</span>
				</div>
				<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
					<span className="font-semibold text-center border-b-2">
						Actual Working Time
					</span>
					<div className="grid grid-cols-2">
						<div className="flex flex-col gap-1">
							<span className="text-sm">Standard</span>
							<span className="text-xs font-semibold">
								{data?.actualWorkingTime}
							</span>
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-sm">O/T</span>
							<span className="text-xs font-semibold">
								{data?.actualWorkingTimeOvertime || "-"}
							</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-1 text-center basis-5/12">
					<span className="font-semibold text-center border-b-2">
						Man Power Required
					</span>
					<div className="grid grid-cols-3">
						<div className="flex flex-col gap-1">
							<span className="text-sm">Regular</span>
							<span className="text-xs font-semibold">
								{data?.manPowerCount}
							</span>
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-sm">Additional</span>
							<span className="text-xs font-semibold">
								{data?.manPowerAdditionalCount || "-"}
							</span>
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-sm">Spare</span>
							<span className="text-xs font-semibold">
								{data?.manPowerAbleToSpare || "-"}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContainerSettingDashboard;
