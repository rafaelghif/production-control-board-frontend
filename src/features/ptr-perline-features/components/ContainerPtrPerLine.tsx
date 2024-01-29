import { IonButton, IonCol, IonGrid, IonRow, IonSpinner } from "@ionic/react";

import { Suspense, lazy, useEffect, useState } from "react";

import Card from "../../../components/Card";
import { ExportExcelPtr } from "../../../helpers";
import { useDate, useLineStore } from "../../../stores";
import {
	getCurrentDate,
	getDaysInCurrentMonth,
	getDaysInMonthYear,
} from "../../../utils/date";
import { useQueryPtrPerLine } from "../hooks";

const TablePtr = lazy(() => import("./TablePtr"));
const SelectLine = lazy(() => import("../../../components/SelectLine"));
const SelectMonth = lazy(() => import("../../../components/SelectMonth"));
const SelectYear = lazy(() => import("../../../components/SelectYear"));

const ContainerPtrPerLine: React.FC = () => {
	const { days, setDays, setMonth, setYear } = useDate();
	const { line } = useLineStore();

	const [lineFilter, setLineFilter] = useState<string>(line.id || "All");
	const [yearFilter, setYearFilter] = useState<number>(
		getCurrentDate().getFullYear(),
	);
	const [monthFilter, setMonthFilter] = useState<number>(
		getCurrentDate().getMonth() + 1,
	);

	const { data, isLoading, refetch } = useQueryPtrPerLine(
		lineFilter,
		monthFilter,
		yearFilter,
	);

	useEffect(() => {
		const daysInMonth = getDaysInCurrentMonth();

		setDays(daysInMonth);
		setMonth({
			month: daysInMonth[0].month,
			monthName: daysInMonth[0].monthName,
		});
		setYear(parseInt(daysInMonth[0].year));
	}, [setDays]);

	useEffect(() => {
		const daysInMonth = getDaysInMonthYear(yearFilter, monthFilter);
		setDays(daysInMonth);
		setMonth({
			month: daysInMonth[0].month,
			monthName: daysInMonth[0].monthName,
		});
		setYear(parseInt(daysInMonth[0].year));
	}, [yearFilter, monthFilter]);
	return (
		<IonGrid>
			<IonRow>
				<IonCol size="4">
					<Suspense fallback={<IonSpinner />}>
						<SelectLine
							value={lineFilter}
							onChange={(id) => setLineFilter(id)}
						/>
					</Suspense>
				</IonCol>
				<IonCol size="4">
					<Suspense fallback={<IonSpinner />}>
						<SelectMonth
							value={monthFilter}
							onChange={(val) => setMonthFilter(val)}
						/>
					</Suspense>
				</IonCol>
				<IonCol size="4">
					<Suspense fallback={<IonSpinner />}>
						<SelectYear
							value={yearFilter}
							onChange={(val) => setYearFilter(val)}
						/>
					</Suspense>
				</IonCol>
				<IonCol size="12">
					<Card title="PTR">
						<IonButton
							className="float-right mb-3"
							onClick={() =>
								ExportExcelPtr(data ? data : [], days)
							}>
							Export to Excel
						</IonButton>
						<Suspense fallback={<IonSpinner />}>
							{isLoading ? <IonSpinner /> : <TablePtr data={data} />}
						</Suspense>
					</Card>
				</IonCol>
			</IonRow>
		</IonGrid>
	);
};
export default ContainerPtrPerLine;
