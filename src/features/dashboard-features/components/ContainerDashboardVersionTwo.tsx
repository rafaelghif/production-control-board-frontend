import {
	IonRefresher,
	IonRefresherContent,
	IonSpinner,
	RefresherEventDetail,
} from "@ionic/react";

import { Suspense, lazy, useEffect, useState } from "react";

import { application } from "../../../constant";
import { formatDateString } from "../../../libs";
import { socket } from "../../../libs";
import { getLine } from "../../../services";
import useDashboardStore from "../../../stores/useDashboardStore";
import { useQueryControlBoardV2 } from "../hooks";
import ModalDetailRemark from "./ModalDetailRemark";
import NavbarDashboard from "./NavbarDashboard";

const NoProduction = lazy(() => import("./NoProduction"));

const GridControlBoard = lazy(
	() => import("../../../components/GridControlBoard"),
);

const ContainerFilterDashboard = lazy(
	() => import("./ContainerFilterDashboard"),
);

const ContainerDashboardVersionTwo: React.FC = () => {
	const { date, line, shift, setDate, setLine } = useDashboardStore();

	const { data, isLoading, refetch } = useQueryControlBoardV2(
		line,
		date,
		shift,
	);

	const [isOpenRemark, setIsOpenRemark] = useState<boolean>(false);

	const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
		refetch();
		event.detail.complete();
	};

	useEffect(() => {
		socket.on("input", () => {
			refetch();
		});
		setLine(getLine());
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			if (date !== formatDateString(new Date())) {
				setDate(formatDateString(new Date()));
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
						{application.title}
					</span>
				</div>
				<Suspense fallback={<IonSpinner name="dots" />}>
					<ContainerFilterDashboard />
				</Suspense>
				<div className="w-full">
					{isLoading ? (
						<IonSpinner name="crescent" />
					) : (
						<Suspense fallback={<IonSpinner name="dots" />}>
							{data && data.length > 0 ? (
								<GridControlBoard
									data={data}
									openModal={() => setIsOpenRemark(true)}
								/>
							) : (
								<NoProduction />
							)}
						</Suspense>
					)}
				</div>
			</div>
			<ModalDetailRemark
				isOpen={isOpenRemark}
				onDidDismiss={() => setIsOpenRemark(false)}
			/>
		</div>
	);
};

export default ContainerDashboardVersionTwo;
