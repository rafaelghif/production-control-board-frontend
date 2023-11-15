interface ContainerActualWorkingTimeAllProps {
	actualWorkingTimeAll?: number;
}

const ContainerActualWorkingTimeAll: React.FC<
	ContainerActualWorkingTimeAllProps
> = ({ actualWorkingTimeAll }) => {
	return (
		<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
			<span className="font-semibold text-center border-b-2">
				Actual Working Time
			</span>
			<span className="text-sm">Standard</span>
			<span className="text-xs font-semibold">
				{actualWorkingTimeAll}
			</span>
		</div>
	);
};

export default ContainerActualWorkingTimeAll;
