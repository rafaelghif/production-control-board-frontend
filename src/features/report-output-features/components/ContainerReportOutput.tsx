import {
	IonButton,
	IonCol,
	IonGrid,
	IonInput,
	IonItem,
	IonRefresher,
	IonRefresherContent,
	IonRow,
	IonSpinner,
	RefresherEventDetail,
} from "@ionic/react";

import { Suspense, lazy, useEffect, useState } from "react";

import Card from "../../../components/Card";
import { ExportExcelReportOutput } from "../../../helpers/export-report";
import { formatDateString } from "../../../libs/date-fns";
import { getLine } from "../../../services/local-storage-service";
import { ControlBoardInterface } from "../../../types/control-board";
import { useQueryControlBoardReport } from "../hooks/useQueryControlBoardReport";
import TableReportOutput from "./TableReportOutput";

const SelectLineWithoutAll = lazy(
	() => import("../../../components/SelectLineWithoutAll"),
);

const ContainerReportOutput: React.FC = () => {
	const [dateFilter, setDateFilter] = useState<string>(
		formatDateString(new Date()),
	);
	const [lineFilter, setLineFilter] = useState<string>(getLine());

	const { data, isLoading, refetch } = useQueryControlBoardReport(
		lineFilter,
		dateFilter,
	);

	const [planningData, setPlanningData] = useState<ControlBoardInterface[]>();
	const [lineName, setLineName] = useState<string>("");

	const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
		refetch();
		event.detail.complete();
	};

	useEffect(() => {
		if (data?.length) {
			if (data.length > 0) {
				setPlanningData(data[0].plannings);
				setLineName(data[0].lineName);
			}
		} else {
			setPlanningData([]);
			setLineName("");
		}
	}, [data]);

	return (
		<>
			<IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
				<IonRefresherContent />
			</IonRefresher>
			<IonGrid>
				<IonRow>
					<IonCol size="12">
						<div className="flex justify-center">
							<div className="grid w-11/12 grid-cols-2 gap-3 p-5 rounded shadow lg:w-8/12 xl:w-4/12 dark:bg-[#181818]">
								<Suspense fallback={<IonSpinner />}>
									<SelectLineWithoutAll
										value={lineFilter}
										onChange={(id) => setLineFilter(id)}
									/>
								</Suspense>
								<IonItem>
									<IonInput
										type="date"
										label="Date"
										labelPlacement="floating"
										value={dateFilter}
										onIonInput={(e) =>
											setDateFilter(e.detail.value!)
										}
									/>
								</IonItem>
							</div>
						</div>
					</IonCol>
					<IonCol size="12">
						<Card title="Data Report Output">
							{isLoading ? (
								<IonSpinner name="crescent" />
							) : (
								<>
									<IonButton
										className="float-right mb-3"
										onClick={() =>
											ExportExcelReportOutput(
												planningData
													? planningData
													: [],
												lineName,
												`Report-Output-${lineName}`,
											)
										}>
										Export to Excel
									</IonButton>
									<Suspense
										fallback={
											<IonSpinner name="crescent" />
										}>
										<TableReportOutput
											data={planningData}
										/>
									</Suspense>
								</>
							)}
						</Card>
					</IonCol>
				</IonRow>
			</IonGrid>
		</>
	);
};

export default ContainerReportOutput;
