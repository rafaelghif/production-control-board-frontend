interface ContainerProductionPlanQtyProps {
	fontSize: string;
	productLoadingPlanQty?: number;
	productLoadingPlanBacklogQty?: number;
}

const ContainerProductionPlanQty: React.FC<ContainerProductionPlanQtyProps> = ({
	fontSize,
	productLoadingPlanQty,
	productLoadingPlanBacklogQty,
}) => {
	return (
		<div className="flex flex-col justify-between gap-1 text-center basis-5/12">
			<span className="text-xl font-semibold text-center border-b-2">
				Product Loading Plan Qty
			</span>
			<div className="grid grid-cols-2">
				<div className="flex flex-col gap-1">
					<span className="text-lg">Today</span>
					<span className={`${fontSize} font-semibold text-white`}>
						{productLoadingPlanQty}
					</span>
				</div>
				<div className="flex flex-col gap-1">
					<span className="text-lg">BackLog</span>
					<span className={`${fontSize} font-semibold text-white`}>
						{productLoadingPlanBacklogQty || "-"}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ContainerProductionPlanQty;
