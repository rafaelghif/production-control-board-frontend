import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";

import { useDashboardThree } from "@/features/dashboard-three/hooks/useDashboardThree";
import { formatDateString, socket } from "@/libs";
import { DashboardThreeInterface } from "@/types";
import { useEffect, useState } from "react";

const DashboardVersionThree: React.FC = () => {
	const [dateFilter, setDateFilter] = useState<string>(
		formatDateString(new Date()),
	);

	const { query } = useDashboardThree();
	const { data, refetch } = query(dateFilter);

	useEffect(() => {
		socket.on("input", () => {
			refetch();
		});
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			if (dateFilter !== formatDateString(new Date())) {
				setDateFilter(formatDateString(new Date()));
			}
		}, 1000);

		const intervalHourly = setInterval(
			() => {
				refetch();
			},
			1000 * 60 * 60,
		);

		return () => {
			clearInterval(interval);
			clearInterval(intervalHourly);
		};
	}, []);

	const renderRow = (val: DashboardThreeInterface, index: number) => {
		const differenceQty =
			val.totalOrderComplete - parseInt(val.totalPlanningQty);
		const isOrderMoreThanPlanning =
			val.totalOrderComplete > parseInt(val.totalPlanningQty);

		const textColor =
			differenceQty < 0
				? "px-6 py-2 text-red-500"
				: isOrderMoreThanPlanning
				? "px-6 py-2 text-[#035BC8]"
				: "px-6 py-2";

		if (val.totalPlanningQty === "0") {
			return (
				<tr key={index} className="border-b dark:border-white">
					<td className="px-6 py-2">{val.lineName}</td>
					<td className="px-6 py-2 text-red-500" colSpan={3}>
						No Production
					</td>
				</tr>
			);
		}

		return (
			<tr key={index} className="border-b dark:border-white">
				<td className="px-6 py-2">{val.lineName}</td>
				<td className="px-6 py-2">{val.totalPlanningQty}</td>
				<td className="px-6 py-2">{val.totalOrderComplete}</td>
				<td className={textColor}>{differenceQty}</td>
			</tr>
		);
	};

	return (
		<IonPage>
			<IonContent fullscreen>
				<div className="flex flex-col items-center w-full h-screen p-3 shadow">
					<div className="font-['Source_Sans_3']">
						<span className="text-2xl font-bold">
							Production Control Board
						</span>
					</div>
					<div>{dateFilter}</div>
					<IonGrid className="w-full">
						<IonRow>
							<IonCol size="6">
								<table className="w-full text-xl text-center text-gray-500 border border-collapse dark:text-gray-400">
									<thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
										<tr>
											<th
												scope="col"
												className="px-6 py-2">
												Line
											</th>
											<th
												scope="col"
												className="px-6 py-2">
												Plan
											</th>
											<th
												scope="col"
												className="px-6 py-2">
												Actual
											</th>
											<th
												scope="col"
												className="px-6 py-2">
												Difference
											</th>
										</tr>
									</thead>
									<tbody>
										{data
											?.filter(
												(val, index) => index <= 14,
											)
											.map((res, index) =>
												renderRow(res, index),
											)}
									</tbody>
								</table>
							</IonCol>
							<IonCol size="6">
								<table className="w-full text-xl text-center text-gray-500 border border-collapse dark:text-gray-400">
									<thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
										<tr>
											<th
												scope="col"
												className="px-6 py-2">
												Line
											</th>
											<th
												scope="col"
												className="px-6 py-2">
												Plan
											</th>
											<th
												scope="col"
												className="px-6 py-2">
												Actual
											</th>
											<th
												scope="col"
												className="px-6 py-2">
												Difference
											</th>
										</tr>
									</thead>
									<tbody>
										{data
											?.filter((val, index) => index > 14)
											.map((res, index) =>
												renderRow(res, index),
											)}
									</tbody>
								</table>
							</IonCol>
						</IonRow>
					</IonGrid>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default DashboardVersionThree;
