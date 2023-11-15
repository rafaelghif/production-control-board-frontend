interface ContainerActualWorkingTimeProps {
	actualWorkingTime?: number;
	actualWorkingTimeOvertime?: number;
}

const ContainerActualWorkingTime: React.FC<ContainerActualWorkingTimeProps> = ({
	actualWorkingTime,
	actualWorkingTimeOvertime,
}) => {
	return (
		<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
			<span className="font-semibold text-center border-b-2">
				Actual Working Time
			</span>
			<div className="grid grid-cols-2">
				<div className="flex flex-col gap-1">
					<span className="text-sm">Standard</span>
					<span className="text-xs font-semibold">
						{actualWorkingTime}
					</span>
				</div>
				<div className="flex flex-col gap-1">
					<span className="text-sm">O/T</span>
					<span className="text-xs font-semibold">
						{actualWorkingTimeOvertime || "-"}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ContainerActualWorkingTime;
