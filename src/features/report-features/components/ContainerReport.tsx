import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSpinner, RefresherEventDetail } from "@ionic/react"
import { Suspense, lazy, useState } from "react";
import { formatDateString } from "../../../libs/date-fns";
import useLineStore from "../../../stores/useLineStore";
import { useQueryReport } from "../hooks/useQueryReport";
import Card from "../../../components/Card";
import { ExportExcel } from "../../../helpers/export-report";

const SelectLine = lazy(() => import("../../../components/SelectLine"));
const TableReport = lazy(() => import("./TableReport"));

const ContainerReport: React.FC = () => {
	const [search, setSearch] = useState<string>("");
	const { line } = useLineStore();
	const [dateFilter, setDateFilter] = useState<string>(formatDateString(new Date()));
	const [lineFilter, setLineFilter] = useState<string>(line.id || "All");
	const { data, isLoading, refetch } = useQueryReport(lineFilter, dateFilter, search);

	const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
		refetch();
		event.detail.complete();
	}

	return (
		<>
			<IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
				<IonRefresherContent />
			</IonRefresher>
			<IonGrid>
				<IonRow>
					<IonCol size="12">
						<IonSearchbar value={search} onIonInput={(e) => setSearch(e.detail.value!)} debounce={1000} />
					</IonCol>
					<IonCol size="6">
						<Suspense fallback={<IonSpinner />}>
							<SelectLine value={lineFilter} onChange={(id) => setLineFilter(id)} />
						</Suspense>
					</IonCol>
					<IonCol size="6">
						<IonItem>
							<IonInput type="date" label="Date" labelPlacement="floating" value={dateFilter} onIonInput={(e) => setDateFilter(e.detail.value!)} />
						</IonItem>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<Card title="Data Reports">
							{isLoading ? (
								<IonSpinner name="crescent" />
							) : (
								<>
									<IonButton className="float-right mb-3" onClick={() => ExportExcel(data ? data : [], "Report")}>Export to Excel</IonButton>
									<Suspense fallback={<IonSpinner name="crescent" />}>
										<TableReport data={data} />
									</Suspense>
								</>
							)}
						</Card>
					</IonCol>
				</IonRow>
			</IonGrid>
		</>

	);
}

export default ContainerReport;