interface ContainerActualWorkingTimeAllProps {
	fontSize: string;
	actualWorkingTimeAll?: number;
}

const ContainerActualWorkingTimeAll: React.FC<ContainerActualWorkingTimeAllProps> = ({
	actualWorkingTimeAll,
	fontSize,
}) => {
	return (
		<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
			<span className="text-xl font-semibold text-center border-b-2">
				Actual Working Time
			</span>
			<span className="text-lg">Standard</span>
			<span className={`${fontSize} font-semibold text-white`}>
				{actualWorkingTimeAll}
			</span>
		</div>
	);
};

export default ContainerActualWorkingTimeAll;
