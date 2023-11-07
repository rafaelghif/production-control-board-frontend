import {
	IonButton,
	IonCheckbox,
	IonInput,
	IonItem,
	IonSelect,
	IonSelectOption,
	IonSpinner,
} from "@ionic/react";

import { Suspense, lazy, useEffect, useState } from "react";

import Modal from "../../../components/Modal";
import useDepartmentStore from "../../../stores/useDepartmentStore";
import {
	ControlBoardSettingInterface,
	UpdateControlBoardSettingType,
} from "../../../types/control-board-setting-type";
import { useUpdateControlBoardSetting } from "../hooks/useUpdateControlBoardSetting";

const SelectLine = lazy(
	() => import("../../../components/SelectLineByDepartment"),
);

interface ModalUpdateControlBoardSettingProps {
	isOpen: boolean;
	data?: ControlBoardSettingInterface;
	onDidDismiss: () => void;
}

const ModalUpdateControlBoardSetting: React.FC<
	ModalUpdateControlBoardSettingProps
> = ({ isOpen, data, onDidDismiss }) => {
	const { department } = useDepartmentStore();

	const [formData, setFormData] = useState<UpdateControlBoardSettingType>({});
	const { mutate } = useUpdateControlBoardSetting();

	const handleInput = (
		key: keyof UpdateControlBoardSettingType,
		value: number | string | boolean,
	) => {
		setFormData((prevState) => ({ ...prevState, [key]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		mutate(formData);
		onDidDismiss();
	};

	useEffect(() => {
		setFormData((prevState) => ({
			...prevState,
			id: data?.id,
			shift: data?.shift,
			actualWorkingTimeAll: data?.actualWorkingTimeAll,
			productLoadingPlanQty: data?.productLoadingPlanQty,
			productLoadingPlanBacklogQty: data?.productLoadingPlanBacklogQty,
			tackTime: data?.tackTime,
			totalProcessTime: data?.totalProcessTime,
			actualWorkingTime: data?.actualWorkingTime,
			actualWorkingTimeOvertime: data?.actualWorkingTimeOvertime,
			manPowerCount: data?.manPowerCount,
			manPowerAdditionalCount: data?.manPowerAdditionalCount,
			manPowerAbleToSpare: data?.manPowerAbleToSpare,
			inActive: data?.inActive,
			LineId: data?.LineId,
		}));
	}, [data]);

	return (
		<Modal
			title="Update Control Board Setting"
			isOpen={isOpen}
			onDidDismiss={onDidDismiss}>
			<form onSubmit={handleSubmit}>
				<IonItem>
					<IonSelect
						label="Shift"
						labelPlacement="stacked"
						value={formData?.shift}
						onIonChange={(e) =>
							handleInput("shift", e.detail.value!)
						}>
						<IonSelectOption value="Long">Long</IonSelectOption>
						<IonSelectOption value="Short">Short</IonSelectOption>
					</IonSelect>
				</IonItem>
				<Suspense fallback={<IonSpinner name="crescent" />}>
					<SelectLine
						value={formData?.LineId}
						departmentId={department.id}
						onChange={(id) => handleInput("LineId", id)}
					/>
				</Suspense>
				<IonItem>
					<IonInput
						type="number"
						min={0}
						label="Actual Working Time All"
						labelPlacement="floating"
						value={formData?.actualWorkingTimeAll}
						onIonInput={(e) =>
							handleInput("actualWorkingTimeAll", e.detail.value!)
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
						value={formData?.productLoadingPlanQty}
						onIonInput={(e) =>
							handleInput(
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
						value={formData?.productLoadingPlanBacklogQty}
						onIonInput={(e) =>
							handleInput(
								"productLoadingPlanBacklogQty",
								e.detail.value!,
							)
						}
						required
					/>
				</IonItem>
				<IonItem>
					<IonInput
						type="text"
						min={0}
						label="Tack Time"
						labelPlacement="floating"
						value={formData?.tackTime}
						onIonInput={(e) =>
							handleInput("tackTime", e.detail.value!)
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
						value={formData?.totalProcessTime}
						onIonInput={(e) =>
							handleInput("totalProcessTime", e.detail.value!)
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
						value={formData?.actualWorkingTime}
						onIonInput={(e) =>
							handleInput("actualWorkingTime", e.detail.value!)
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
						value={formData?.actualWorkingTimeOvertime}
						onIonInput={(e) =>
							handleInput(
								"actualWorkingTimeOvertime",
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
						label="Man Power Count"
						labelPlacement="floating"
						value={formData?.manPowerCount}
						onIonInput={(e) =>
							handleInput("manPowerCount", e.detail.value!)
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
						value={formData?.manPowerAdditionalCount}
						onIonInput={(e) =>
							handleInput(
								"manPowerAdditionalCount",
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
						label="Man Power Able to Spare Count"
						labelPlacement="floating"
						value={formData?.manPowerAbleToSpare}
						onIonInput={(e) =>
							handleInput("manPowerAbleToSpare", e.detail.value!)
						}
						required
					/>
				</IonItem>
				<IonItem>
					<IonCheckbox
						checked={formData?.inActive}
						onIonChange={(e) =>
							handleInput("inActive", e.detail.checked!)
						}>
						InActive
					</IonCheckbox>
				</IonItem>
				<IonButton type="submit" expand="block">
					Submit
				</IonButton>
			</form>
		</Modal>
	);
};

export default ModalUpdateControlBoardSetting;
