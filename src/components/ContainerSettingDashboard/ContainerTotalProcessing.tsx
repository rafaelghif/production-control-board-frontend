interface ContainerTotalProcessingProps {
	totalProcessTime?: number;
}

const ContainerTotalProcessing: React.FC<ContainerTotalProcessingProps> = ({
	totalProcessTime,
}) => {
	return (
		<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
			<span className="font-semibold text-center border-b-2">
				Total Processing
			</span>
			<span className="text-sm">Time Needed</span>
			<span className="text-xs font-semibold">{totalProcessTime}</span>
		</div>
	);
};

export default ContainerTotalProcessing;
