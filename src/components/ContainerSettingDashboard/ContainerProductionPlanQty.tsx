interface ContainerProductionPlanQtyProps {
	productLoadingPlanQty?: number;
	productLoadingPlanBacklogQty?: number;
}

const ContainerProductionPlanQty: React.FC<ContainerProductionPlanQtyProps> = ({
	productLoadingPlanBacklogQty,
	productLoadingPlanQty,
}) => {
	return (
		<div className="flex flex-col justify-between gap-1 text-center basis-5/12">
			<span className="font-semibold text-center border-b-2">
				Product Loading Plan Qty
			</span>
			<div className="grid grid-cols-2">
				<div className="flex flex-col gap-1">
					<span className="text-sm">Today</span>
					<span className="text-xs font-semibold">
						{productLoadingPlanQty}
					</span>
				</div>
				<div className="flex flex-col gap-1">
					<span className="text-sm">BackLog</span>
					<span className="text-xs font-semibold">
						{productLoadingPlanBacklogQty || "-"}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ContainerProductionPlanQty;
