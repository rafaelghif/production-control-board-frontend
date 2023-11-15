interface ContainerTotalProcessingProps {
	fontSize: string;
	totalProcessTime?: number;
}

const ContainerTotalProcessing: React.FC<ContainerTotalProcessingProps> = ({
	fontSize,
	totalProcessTime,
}) => {
	return (
		<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
			<span className="text-xl font-semibold text-center border-b-2">
				Total Processing
			</span>
			<span className="text-lg">Time Needed</span>
			<span className={`${fontSize} font-semibold text-white`}>
				{totalProcessTime}
			</span>
		</div>
	);
};

export default ContainerTotalProcessing;
