interface ContainerRegularProps {
	fontSize: string;
	manPowerCount?: number;
}

const ContainerRegular: React.FC<ContainerRegularProps> = ({
	fontSize,
	manPowerCount,
}) => {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-lg">Regular</span>
			<span className={`${fontSize} font-semibold text-white`}>
				{manPowerCount}
			</span>
		</div>
	);
};

export default ContainerRegular;
