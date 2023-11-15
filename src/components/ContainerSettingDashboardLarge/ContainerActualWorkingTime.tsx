interface ContainerActualWorkingTimeProps {
	fontSize: string;
	actualWorkingTime?: number;
	actualWorkingTimeOvertime?: number;
}

const ContainerActualWorkingTime: React.FC<ContainerActualWorkingTimeProps> = ({
	fontSize,
	actualWorkingTime,
	actualWorkingTimeOvertime,
}) => {
	return (
		<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
			<span className="text-xl font-semibold text-center border-b-2">
				Actual Working Time
			</span>
			<div className="grid grid-cols-2">
				<div className="flex flex-col gap-1">
					<span className="text-lg">Standard</span>
					<span className={`${fontSize} font-semibold text-white`}>
						{actualWorkingTime}
					</span>
				</div>
				<div className="flex flex-col gap-1">
					<span className="text-lg">O/T</span>
					<span className={`${fontSize} font-semibold text-white`}>
						{actualWorkingTimeOvertime || "-"}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ContainerActualWorkingTime;
