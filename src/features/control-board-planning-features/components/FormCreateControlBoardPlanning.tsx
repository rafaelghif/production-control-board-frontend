import { IonInput, IonItem, IonSelect, IonSelectOption } from "@ionic/react";

import Card from "@/components/Card";
import { CreateControlBoardPlanningType, ShiftType } from "@/types";

interface FormCreateControlBoardPlanningProps {
	planning: CreateControlBoardPlanningType;
	handleInputPlanning: (
		key: keyof CreateControlBoardPlanningType,
		value: string | number | ShiftType,
	) => void;
}

const FormCreateControlBoardPlanning: React.FC<
	FormCreateControlBoardPlanningProps
> = ({ planning, handleInputPlanning }) => {
	return (
		<Card title="Control Board Planning">
			<IonItem>
				<IonSelect
					label="Shift"
					labelPlacement="stacked"
					value={planning.shift}
					onIonChange={(e) =>
						handleInputPlanning("shift", e.target.value)
					}>
					<IonSelectOption value="Short">Short</IonSelectOption>
					<IonSelectOption value="Long">Long</IonSelectOption>
				</IonSelect>
			</IonItem>
			<IonItem>
				<IonInput
					type="number"
					min={0}
					label="Actual Working Time All"
					labelPlacement="floating"
					value={planning.actualWorkingTimeAll}
					onIonInput={(e) =>
						handleInputPlanning(
							"actualWorkingTimeAll",
							e.detail.value!,
						)
					}
					required
				/>
			</IonItem>
			<IonItem>
				<IonInput
					type="number"
					min={0}
					label="Production Loading Plan Qty"
					labelPlacement="floating"
					value={planning.productLoadingPlanQty}
					onIonInput={(e) =>
						handleInputPlanning(
							"productLoadingPlanQty",
							e.detail.value!,
						)
					}
					required
				/>
			</IonItem>
			<IonItem>
				<IonInput
					type="number"
					min={0}
					label="Production Loading Backlog Qty"
					labelPlacement="floating"
					value={planning.productLoadingPlanBacklogQty}
					onIonInput={(e) =>
						handleInputPlanning(
							"productLoadingPlanBacklogQty",
							e.detail.value!,
						)
					}
				/>
			</IonItem>
			<IonItem>
				<IonInput
					type="text"
					min={0}
					label="Tack Time"
					labelPlacement="floating"
					value={planning.tackTime}
					onIonInput={(e) =>
						handleInputPlanning("tackTime", e.detail.value!)
					}
					required
				/>
			</IonItem>
			<IonItem>
				<IonInput
					type="number"
					min={0}
					label="Total Process Time"
					labelPlacement="floating"
					value={planning.totalProcessTime}
					onIonInput={(e) =>
						handleInputPlanning("totalProcessTime", e.detail.value!)
					}
					required
				/>
			</IonItem>
			<IonItem>
				<IonInput
					type="number"
					min={0}
					label="Actual Working Time"
					labelPlacement="floating"
					value={planning.actualWorkingTime}
					onIonInput={(e) =>
						handleInputPlanning(
							"actualWorkingTime",
							e.detail.value!,
						)
					}
					required
				/>
			</IonItem>
			<IonItem>
				<IonInput
					type="number"
					min={0}
					label="Actual Working Time Overtime"
					labelPlacement="floating"
					value={planning.actualWorkingTimeOvertime}
					onIonInput={(e) =>
						handleInputPlanning(
							"actualWorkingTimeOvertime",
							e.detail.value!,
						)
					}
				/>
			</IonItem>
			<IonItem>
				<IonInput
					type="number"
					min={0}
					label="Man Power Count"
					labelPlacement="floating"
					value={planning.manPowerCount}
					onIonInput={(e) =>
						handleInputPlanning("manPowerCount", e.detail.value!)
					}
					required
				/>
			</IonItem>
			<IonItem>
				<IonInput
					type="number"
					min={0}
					label="Man Power Additional Count"
					labelPlacement="floating"
					value={planning.manPowerAdditionalCount}
					onIonInput={(e) =>
						handleInputPlanning(
							"manPowerAdditionalCount",
							e.detail.value!,
						)
					}
				/>
			</IonItem>
			<IonItem>
				<IonInput
					type="number"
					min={0}
					label="Man Power Able to Spare Count"
					labelPlacement="floating"
					value={planning.manPowerAbleToSpare}
					onIonInput={(e) =>
						handleInputPlanning(
							"manPowerAbleToSpare",
							e.detail.value!,
						)
					}
				/>
			</IonItem>
		</Card>
	);
};

export default FormCreateControlBoardPlanning;
