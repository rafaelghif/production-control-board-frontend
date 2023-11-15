interface ContainerSpareProps {
	fontSize: string;
	manPowerAbleToSpare?: number;
}

const ContainerSpare: React.FC<ContainerSpareProps> = ({
	fontSize,
	manPowerAbleToSpare,
}) => {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-lg">Spare</span>
			<span className={`${fontSize} font-semibold text-white`}>
				{manPowerAbleToSpare || "-"}
			</span>
		</div>
	);
};

export default ContainerSpare;