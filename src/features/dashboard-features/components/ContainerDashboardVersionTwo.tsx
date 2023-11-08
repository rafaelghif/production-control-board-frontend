import {
	IonRefresher,
	IonRefresherContent,
	IonSpinner,
	RefresherEventDetail,
} from "@ionic/react";

import { Suspense, lazy, useEffect, useState } from "react";

import { formatDateString } from "../../../libs/date-fns";
import socket from "../../../libs/socket.io";
import { getLine, setLine } from "../../../services/local-storage-service";
import { ShiftType } from "../../../types/control-board";
import { useQueryControlBoardV2 } from "../hooks/useQueryControlBoardV2";
import FooterDashboard from "./FooterDashboard";
import ModalDetailRemark from "./ModalDetailRemark";
import NavbarDashboard from "./NavbarDashboard";

const GridControlBoard = lazy(
	() => import("../../../components/GridControlBoard"),
);

const ContainerFilterDashboard = lazy(
	() => import("./ContainerFilterDashboard"),
);

const ContainerDashboardVersionTwo: React.FC = () => {
	const [dateFilter, setDateFilter] = useState<string>(
		formatDateString(new Date()),
	);
	const [lineFilter, setLineFilter] = useState<string>(getLine());
	const [shiftFilter, setShiftFilter] = useState<ShiftType>("Long");

	const { data, isLoading, refetch } = useQueryControlBoardV2(
		lineFilter,
		dateFilter,
		shiftFilter,
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
			<NavbarDashboard />
			<div className="flex flex-col items-center justify-center w-full gap-2 p-5">
				<div className="font-['Source_Sans_3']">
					<span className="text-2xl font-bold">
						Production Control Board
					</span>
				</div>
				<Suspense fallback={<IonSpinner name="dots" />}>
					<ContainerFilterDashboard
						line={lineFilter}
						date={dateFilter}
						shift={shiftFilter}
						handleChangeLine={(id) => handleChangeLine(id)}
						handleChangeDate={(date) => setDateFilter(date)}
						handleChangeShift={(shift: ShiftType) =>
							setShiftFilter(shift)
						}
					/>
				</Suspense>
				<div className="w-full">
					{isLoading ? (
						<IonSpinner name="crescent" />
					) : (
						<Suspense fallback={<IonSpinner name="dots" />}>
							<GridControlBoard
								data={data}
								shiftFilter={shiftFilter}
								openModal={() => setIsOpenRemark(true)}
							/>
						</Suspense>
					)}
				</div>
			</div>
			<FooterDashboard />
			<ModalDetailRemark
				isOpen={isOpenRemark}
				onDidDismiss={() => setIsOpenRemark(false)}
			/>
		</div>
	);
};

export default ContainerDashboardVersionTwo;
