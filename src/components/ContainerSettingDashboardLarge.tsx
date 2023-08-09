import { ControlBoardPlanningInterface } from "../types/control-board-planning-type";

interface ContainerSettingDashboardLargeProps {
    data?: ControlBoardPlanningInterface;
}

const ContainerSettingDashboardLarge: React.FC<ContainerSettingDashboardLargeProps> = ({ data }) => {
    return (
        <div className="flex flex-col gap-3 p-5">
            <div className="flex flex-col justify-center gap-3 lg:flex-row">
                <div className="flex flex-col justify-between gap-1 text-center basis-3/12">
                    <span className="text-xl font-semibold text-center border-b-2">Actual Working Time</span>
                    <span className="text-lg">Standard</span>
                    <span className="text-base font-semibold">{data?.actualWorkingTimeAll}</span>
                </div>
                <div className="flex flex-col justify-between gap-1 text-center basis-5/12">
                    <span className="text-xl font-semibold text-center border-b-2">Product Loading Plan Qty</span>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-lg">Today</span>
                            <span className="text-base font-semibold">{data?.productLoadingPlanQty}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-lg">BackLog</span>
                            <span className="text-base font-semibold">{data?.productLoadingPlanBacklogQty || "-"}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-1 text-center basis-3/12">
                    <span className="text-xl font-semibold border-b-2">Tact Time</span>
                    <span className="text-base font-semibold ">{data?.tackTime}</span>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-3 lg:flex-row">
                <div className="flex flex-col justify-between gap-1 text-center basis-3/12">
                    <span className="text-xl font-semibold text-center border-b-2">Total Processing</span>
                    <span className="text-lg">Time Needed</span>
                    <span className="text-base font-semibold">{data?.totalProcessTime}</span>
                </div>
                <div className="flex flex-col justify-between gap-1 text-center basis-3/12">
                    <span className="text-xl font-semibold text-center border-b-2">Actual Working Time</span>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-lg">Standard</span>
                            <span className="text-base font-semibold">{data?.actualWorkingTime}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-lg">O/T</span>
                            <span className="text-base font-semibold">{data?.actualWorkingTimeOvertime || "-"}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-1 text-center basis-5/12">
                    <span className="text-xl font-semibold text-center border-b-2">Man Power Required</span>
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col gap-1">
                            <span className="text-lg">Regular</span>
                            <span className="text-base font-semibold">{data?.manPowerCount}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-lg">Additional</span>
                            <span className="text-base font-semibold">{data?.manPowerAdditionalCount || "-"}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-lg">Spare</span>
                            <span className="text-base font-semibold">{data?.manPowerAbleToSpare || "-"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContainerSettingDashboardLarge;