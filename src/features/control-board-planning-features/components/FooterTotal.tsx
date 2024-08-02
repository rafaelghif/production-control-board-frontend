import usePlanning from "@/stores/usePlanning";
import usePlanningDetail from "@/stores/usePlanningDetail";
import { useEffect, useState } from "react";

const FooterTotal: React.FC = () => {
	const { planning } = usePlanning();
	const { planningDetail } = usePlanningDetail();

	const [total, setTotal] = useState<number>(0);
	useEffect(() => {
		const totalVal = planningDetail
			.map((val) => parseInt(val.qty.toString()))
			.reduce((prev, cur) => prev + cur, 0);

		setTotal(totalVal);
	}, [planning, planningDetail]);

	return (
		<div className="flex justify-between w-full p-3">
			<div>
				<span>Planning: </span>
				<span>{planning.productLoadingPlanQty}</span>
			</div>
			<div>
				<span>Input Total: </span>
				<span>{total}</span>
			</div>
		</div>
	);
};

export default FooterTotal;
