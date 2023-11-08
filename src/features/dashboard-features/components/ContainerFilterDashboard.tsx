import {
	IonInput,
	IonItem,
	IonSelect,
	IonSelectOption,
	IonSpinner,
} from "@ionic/react";

import { Suspense, lazy } from "react";

import { ShiftType } from "../../../types/control-board";

const SelectLine = lazy(() => import("../../../components/SelectLine"));

interface ContainerFilterDashboardProps {
	line: string;
	date: string;
	shift: string;
	handleChangeDate: (date: string) => void;
	handleChangeLine: (id: string) => void;
	handleChangeShift: (shift: ShiftType) => void;
}

const ContainerFilterDashboard: React.FC<ContainerFilterDashboardProps> = ({
	line,
	date,
	shift,
	handleChangeLine,
	handleChangeDate,
	handleChangeShift,
}) => {
	return (
		<div className="grid w-11/12 grid-cols-3 gap-3 p-5 rounded shadow lg:w-8/12 xl:w-4/12 dark:bg-[#181818]">
			<Suspense fallback={<IonSpinner />}>
				<SelectLine value={line} onChange={handleChangeLine} />
			</Suspense>
			<IonItem>
				<IonInput
					type="date"
					label="Date"
					labelPlacement="floating"
					value={date}
					onIonInput={(e) => handleChangeDate(e.detail.value!)}
				/>
			</IonItem>
			<IonItem>
				<IonSelect
					label="Shift"
					labelPlacement="stacked"
					value={shift}
					onIonChange={(e) => handleChangeShift(e.detail.value!)}>
					<IonSelectOption value="Normal">Normal</IonSelectOption>
					<IonSelectOption value="Short">Short</IonSelectOption>
					<IonSelectOption value="Long">Long</IonSelectOption>
				</IonSelect>
			</IonItem>
		</div>
	);
};

export default ContainerFilterDashboard;
