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

	const [time, setTime] = useState(() => new Date().toLocaleTimeString());

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const renderRow = (val: DashboardThreeInterface, index: number) => {
		const bgRows = ["bg-[#1e1e1e]", ""];
		const differenceQty = val.passQty - parseInt(val.plantPassQty);
		const isOrderMoreThanPlanning =
			val.passQty > parseInt(val.plantPassQty);

		const textColor =
			differenceQty < 0
				? "px-2 py-2 text-red-500 font-bold"
				: isOrderMoreThanPlanning
				? "px-2 py-2 text-[#035BC8] font-bold"
				: "px-2 py-2 font-bold";

		if (val.plantCurrQty === "0" || val.plantCurrQty === null) {
			return (
				<tr
					key={index}
					className={`border-b dark:border-white ${
						bgRows[index % 2]
					}`}>
					<td className="px-2 py-2 border">{index + 1}</td>
					<td className="px-2 py-2 border">{val.lineName}</td>
					<td
						className="px-2 py-2 font-bold text-green-500 border"
						colSpan={5}>
						No Production
					</td>
				</tr>
			);
		}

		return (
			<tr
				key={index}
				className={`border-b dark:border-white ${bgRows[index % 2]}`}>
				<td className="px-2 py-2 border">{index + 1}</td>
				<td className="px-2 py-2 border">{val.lineName}</td>
				<td className="px-2 py-2 font-bold border">
					{val.plantCurrQty}
				</td>
				<td className="px-2 py-2 font-bold border">{val.currentQty}</td>
				<td className="px-2 py-2 font-bold border">
					{val.plantPassQty}
				</td>
				<td className="px-2 py-2 font-bold border">{val.passQty}</td>
				<td className={textColor}>{differenceQty}</td>
			</tr>
		);
	};

	return (
		<IonPage>
			<IonContent fullscreen>
				<div className="flex flex-col items-center w-full h-screen p-3 shadow">
					<div className="relative flex justify-center font-['Source_Sans_3'] w-full">
						<span className="text-2xl font-bold">
							Production Control Board
						</span>
						<div className="absolute text-4xl top-2 right-5">{time}</div>
					</div>
					<div>{dateFilter}</div>
					<IonGrid className="w-full">
						<IonRow>
							<IonCol size="6">
								<IonGrid>
									<IonRow>
										<IonCol size="12">
											<table className="w-full text-lg text-center text-gray-500 border border-collapse dark:text-gray-400">
												<thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
													<tr>
														<th
															colSpan={7}
															className="p-3 text-xl border">
															PD1
														</th>
													</tr>
													<tr>
														<th
															scope="col"
															className="px-2 py-2 border"
															rowSpan={2}>
															No
														</th>
														<th
															scope="col"
															className="px-2 py-2 border"
															rowSpan={2}>
															Line
														</th>
														<th
															scope="col"
															className="px-2 py-2 border"
															rowSpan={2}>
															Daily Target
														</th>
														<th
															scope="col"
															className="px-2 py-2 border"
															rowSpan={2}>
															Current Qty
														</th>
														<th
															scope="col"
															className="px-2 py-2 border"
															colSpan={3}>
															Last Hour
															Accumulation
														</th>
													</tr>
													<tr>
														<th
															scope="col"
															className="px-2 py-2 border">
															Target
														</th>
														<th
															scope="col"
															className="px-2 py-2 border">
															Actual
														</th>
														<th
															scope="col"
															className="px-2 py-2 text-2xl border">
															±
														</th>
													</tr>
												</thead>
												<tbody>
													{data
														?.filter(
															(val, index) =>
																index <= 12,
														)
														.map((res, index) =>
															renderRow(
																res,
																index,
															),
														)}
												</tbody>
											</table>
										</IonCol>
									</IonRow>
								</IonGrid>
							</IonCol>
							<IonCol size="6">
								<IonGrid>
									<IonRow>
										<IonCol size="12">
											<table className="w-full text-lg text-center text-gray-500 border border-collapse dark:text-gray-400">
												<thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
													<tr>
														<th
															colSpan={7}
															className="p-3 text-xl border">
															PD2
														</th>
													</tr>
													<tr>
														<th
															scope="col"
															className="px-2 py-2 border"
															rowSpan={2}>
															No
														</th>
														<th
															scope="col"
															className="px-2 py-2 border"
															rowSpan={2}>
															Line
														</th>
														<th
															scope="col"
															className="px-2 py-2 border"
															rowSpan={2}>
															Daily Target
														</th>
														<th
															scope="col"
															className="px-2 py-2 border"
															rowSpan={2}>
															Current Qty
														</th>
														<th
															scope="col"
															className="px-2 py-2 border"
															colSpan={3}>
															Last Hour
															Accumulation
														</th>
													</tr>
													<tr>
														<th
															scope="col"
															className="px-2 py-2 border">
															Target
														</th>
														<th
															scope="col"
															className="px-2 py-2 border">
															Actual
														</th>
														<th
															scope="col"
															className="px-2 py-2 text-2xl border">
															±
														</th>
													</tr>
												</thead>
												<tbody>
													{data
														?.filter(
															(val, index) =>
																index > 12 &&
																index <= 26,
														)
														.map((res, index) =>
															renderRow(
																res,
																index,
															),
														)}
												</tbody>
											</table>
										</IonCol>
									</IonRow>
								</IonGrid>
							</IonCol>
						</IonRow>
					</IonGrid>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default DashboardVersionThree;
