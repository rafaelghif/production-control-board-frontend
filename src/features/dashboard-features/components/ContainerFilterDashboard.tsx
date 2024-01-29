import { IonItem, IonSelect, IonSelectOption, IonSpinner } from "@ionic/react";

import { format } from "date-fns";
import { Suspense, lazy } from "react";

import { setLine as setLineLocal } from "../../../services/local-storage-service";
import useDashboardStore from "../../../stores/useDashboardStore";

const SelectLineDashboard = lazy(
	() => import("../../../components/SelectLineDashboard"),
);

const ContainerFilterDashboard: React.FC = () => {
	const { line, shift, date, setLine, setShift } = useDashboardStore();

	const handleChangeLine = (lineId: string) => {
		setLine(lineId);
		setLineLocal(lineId);
	};
	return (
		<div className="flex flex-col justify-center gap-2 items-center w-[996px] p-5 rounded shadow dark:bg-[#121212]">
			<div className="flex flex-col items-center justify-center w-[800px] gap-2 dark:bg-[#181818] p-5">
				<div className="flex items-center justify-center w-full">
					<div className="w-full">
						<Suspense fallback={<IonSpinner />}>
							<SelectLineDashboard
								value={line}
								onChange={(lineId) => handleChangeLine(lineId)}
							/>
						</Suspense>
					</div>
				</div>
				<div className="flex items-center justify-center w-full">
					<div className="flex w-full gap-2">
						<div className="w-1/2">
							<div className="w-full h-full bg-[#1e1e1e] flex flex-col py-1 px-3 rounded hover:bg-[#272727]">
								<span>Date</span>
								<div>
									{format(new Date(date), "dd - LLLL - yyyy")}
								</div>
							</div>
						</div>
						<div className="w-1/2">
							<IonItem>
								<IonSelect
									label="Shift"
									labelPlacement="stacked"
									value={shift}
									onIonChange={(e) =>
										setShift(e.detail.value!)
									}>
									<IonSelectOption value="Normal">
										Normal
									</IonSelectOption>
									<IonSelectOption value="Short">
										7 Hours
									</IonSelectOption>
									<IonSelectOption value="Long">
										8 Hours
									</IonSelectOption>
								</IonSelect>
							</IonItem>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContainerFilterDashboard;
