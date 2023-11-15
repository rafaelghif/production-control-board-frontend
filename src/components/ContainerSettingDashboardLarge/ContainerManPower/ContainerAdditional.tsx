interface ContainerAdditionalProps {
	fontSize: string;
	manPowerAdditionalCount?: number;
}

const ContainerAdditional: React.FC<ContainerAdditionalProps> = ({
	fontSize,
	manPowerAdditionalCount,
}) => {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-lg">Additional</span>
			<span className={`${fontSize} font-semibold text-white`}>
				{manPowerAdditionalCount || "-"}
			</span>
		</div>
	);
};

export default ContainerAdditional;
