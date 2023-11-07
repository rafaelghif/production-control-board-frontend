import {
	IonInput,
	IonItem,
	IonRefresher,
	IonRefresherContent,
	IonSpinner,
	RefresherEventDetail,
	useIonRouter,
} from "@ionic/react";

import { Suspense, lazy, useEffect, useState } from "react";
import { useHistory } from "react-router";

import logo from "../../../assets/images/logo.png";
import GridControlBoard from "../../../components/GridControlBoard";
import { formatDateString } from "../../../libs/date-fns";
import socket from "../../../libs/socket.io";
import { getLine, setLine } from "../../../services/local-storage-service";
import { useQueryControlBoard } from "../hooks/useQueryControlBoard";
import ModalDetailRemark from "./ModalDetailRemark";

const SelectLine = lazy(() => import("../../../components/SelectLine"));

const ContainerDashboard: React.FC = () => {
	const { routeInfo } = useIonRouter();
	const history = useHistory();
	const [dateFilter, setDateFilter] = useState<string>(
		formatDateString(new Date()),
	);
	const [lineFilter, setLineFilter] = useState<string>(getLine());

	const { data, isLoading, refetch } = useQueryControlBoard(
		lineFilter,
		dateFilter,
	);
	const [isOpenRemark, setIsOpenRemark] = useState<boolean>(false);

	const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
		refetch();
		event.detail.complete();
	};

	const handleChangeLine = (id: string) => {
		setLineFilter(id);
		setLine(id);
	};

	const handleClickBtnLogin = () => {
		history.replace("/login");
	};

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

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative h-screen w-full overflow-auto scroll-smooth bg-white dark:bg-[#121212]">
			<IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
				<IonRefresherContent />
			</IonRefresher>
			<div
				className={`flex items-center justify-between px-5 py-1 shadow bg-[#f4f5f8] dark:bg-[#181818] ${
					routeInfo.pathname !== "/dashboard" ? "hidden" : ""
				} select-none`}
				hidden={routeInfo.pathname !== "/dashboard"}>
				<div className="flex items-center justify-center gap-3 font-['Source_Sans_3'] cursor-pointer">
					<img
						src={logo}
						alt="Yokogawa Logo"
						className="w-10 h-auto"
					/>
					<span className="text-2xl font-semibold">Yokogawa</span>
				</div>
				<div className="text-blue-400 hover:text-blue-500">
					<button
						className="px-5 py-2 tracking-wide"
						onClick={handleClickBtnLogin}>
						Login
					</button>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center w-full gap-2 p-5">
				<div className="font-['Source_Sans_3']">
					<span className="text-2xl font-bold">
						Production Control Board
					</span>
				</div>
				<div className="grid w-11/12 grid-cols-2 gap-3 p-5 rounded shadow lg:w-8/12 xl:w-4/12 dark:bg-[#181818]">
					<Suspense fallback={<IonSpinner />}>
						<SelectLine
							value={lineFilter}
							onChange={(id) => handleChangeLine(id)}
						/>
					</Suspense>
					<IonItem>
						<IonInput
							type="date"
							label="Date"
							labelPlacement="floating"
							value={dateFilter}
							onIonInput={(e) => setDateFilter(e.detail.value!)}
						/>
					</IonItem>
				</div>
				<div className="w-full">
					{isLoading ? (
						<IonSpinner name="crescent" />
					) : (
						<GridControlBoard
							data={data}
							dateFilter={dateFilter}
							openModal={() => setIsOpenRemark(true)}
						/>
					)}
				</div>
			</div>
			<div className="sticky bottom-0 flex items-center justify-center w-full p-2">
				<span className="text-xs tracking-tight font-['Source_Sans_3']">
					Yokogawa Manufacturing Batam &copy; 2023
				</span>
			</div>
			<ModalDetailRemark
				isOpen={isOpenRemark}
				onDidDismiss={() => setIsOpenRemark(false)}
			/>
		</div>
	);
};

export default ContainerDashboard;
