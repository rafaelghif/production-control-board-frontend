interface ContainerManPowerProps {
	manPowerCount?: number;
	manPowerAdditionalCount?: number;
	manPowerAbleToSpare?: number;
}

const ContainerManPower: React.FC<ContainerManPowerProps> = ({
	manPowerCount,
	manPowerAdditionalCount,
	manPowerAbleToSpare,
}) => {
	return (
		<div className="flex flex-col justify-between gap-1 text-center basis-5/12">
			<span className="font-semibold text-center border-b-2">
				Man Power Required
			</span>
			<div className="grid grid-cols-3">
				<div className="flex flex-col gap-1">
					<span className="text-sm">Regular</span>
					<span className="text-xs font-semibold">
						{manPowerCount}
					</span>
				</div>
				<div className="flex flex-col gap-1">
					<span className="text-sm">Additional</span>
					<span className="text-xs font-semibold">
						{manPowerAdditionalCount || "-"}
					</span>
				</div>
				<div className="flex flex-col gap-1">
					<span className="text-sm">Spare</span>
					<span className="text-xs font-semibold">
						{manPowerAbleToSpare || "-"}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ContainerManPower;
