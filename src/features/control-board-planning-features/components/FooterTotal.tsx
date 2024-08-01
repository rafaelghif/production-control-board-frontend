import { CreateControlBoardPlanningDetailType } from "@/types";
import { useEffect, useState } from "react";

interface FooterTotalProps {
	data: CreateControlBoardPlanningDetailType[];
	planTotal: number;
}

const FooterTotal: React.FC<FooterTotalProps> = ({ data, planTotal }) => {
	const [total, setTotal] = useState<number>(0);
	useEffect(() => {
		const totalVal = data
			.map((val) => parseInt(val.qty.toString()))
			.reduce((prev, cur) => prev + cur, 0);

		setTotal(totalVal);
	}, [data, planTotal]);
	return (
		<div className="flex justify-between w-full p-3">
			<div>
				<span>Planning: </span>
				<span>{planTotal}</span>
			</div>
			<div>
				<span>Input Total: </span>
				<span>{total}</span>
			</div>
		</div>
	);
};

export default FooterTotal;
