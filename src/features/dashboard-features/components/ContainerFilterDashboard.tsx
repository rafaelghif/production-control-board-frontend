import {
	IonInput,
	IonItem,
	IonSelect,
	IonSelectOption,
	IonSpinner,
} from "@ionic/react";

import { format } from "date-fns";
import { Suspense, lazy } from "react";

import { setLine as setLineLocal } from "../../../services/local-storage-service";
import useDashboardStore from "../../../stores/useDashboardStore";

const SelectLine = lazy(() => import("../../../components/SelectLine"));

const ContainerFilterDashboard: React.FC = ({}) => {
	const { line, shift, date, setLine, setShift } = useDashboardStore();

	const handleChangeLine = (lineId: string) => {
		setLine(lineId);
		setLineLocal(lineId);
	};
	return (
		<div className="grid w-11/12 grid-cols-3 gap-3 p-5 rounded shadow dark:bg-[#181818]">
			<Suspense fallback={<IonSpinner />}>
				<SelectLine
					value={line}
					onChange={(lineId) => handleChangeLine(lineId)}
				/>
			</Suspense>
			<div className="w-full h-full bg-[#1e1e1e] flex flex-col py-1 px-3 rounded hover:bg-[#272727]">
				<span>Date</span>
				<div>{format(new Date(date), "dd - LLLL - yyyy")}</div>
			</div>
			<IonItem>
				<IonSelect
					label="Shift"
					labelPlacement="stacked"
					value={shift}
					onIonChange={(e) => setShift(e.detail.value!)}>
					<IonSelectOption value="Normal">Normal</IonSelectOption>
					<IonSelectOption value="Short">7 Hours</IonSelectOption>
					<IonSelectOption value="Long">8 Hours</IonSelectOption>
				</IonSelect>
			</IonItem>
		</div>
	);
};

export default ContainerFilterDashboard;
