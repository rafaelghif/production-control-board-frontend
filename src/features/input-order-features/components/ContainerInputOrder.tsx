import {
	IonButton,
	IonCol,
	IonGrid,
	IonInput,
	IonItem,
	IonRow,
	IonSpinner,
} from "@ionic/react";

import { Suspense, lazy, useRef, useState } from "react";

import Card from "../../../components/Card";
import useLineStore from "../../../stores/useLineStore";
import { OrderResponseType } from "../../../types/order-type";
import { useCreateOrder } from "../hooks/useCreateOrder";
import { useGetOrderInput } from "../hooks/useGetOrderInput";
import OrderInformationColumn from "./OrderInformationColumn";
import OrderInformationGrid from "./OrderInformationGrid";

const SelectLine = lazy(() => import("../../../components/SelectLine"));
const Clock = lazy(() => import("../../../components/Clock"));

const ContainerInputOrder: React.FC = () => {
	const { line } = useLineStore();
	const [lineId, setLineId] = useState<string>("");
	const initialData: OrderResponseType = {
		serialNumberType: "Inhouse",
		serialNumber: "",
		model: "",
		barcodeIssueNo: "",
		sapLinkageNo: "",
	};
	const [order, setOrder] = useState<OrderResponseType>(initialData);
	const [serialNumber, setSerialNumber] = useState<string>("");
	const orderInput = useGetOrderInput();
	const createOrder = useCreateOrder();

	const inputRef = useRef<HTMLIonInputElement>(null);

	const resetForm = () => {
		setOrder(initialData);
		setSerialNumber("");
	};

	const handleKeyUp = async (e: React.KeyboardEvent<HTMLIonInputElement>) => {
		if (e.key === "Enter") {
			try {
				const data = await orderInput.mutateAsync(serialNumber);
				setOrder(data ?? initialData);
			} catch (err) {
				resetForm();
			}
		}
	};

	const handleClickBtnSubmit = () => {
		const lineIdForm = line?.id ? line.id : lineId;
		createOrder.mutate({ ...order, LineId: lineIdForm });
		resetForm();
	};

	return (
		<IonGrid>
			<IonRow>
				<IonCol>
					<div className="flex flex-col items-center justify-center w-full gap-3">
						<div>
							<Suspense fallback={<IonSpinner name="crescent" />}>
								<Clock />
							</Suspense>
						</div>
						<div className="w-1/3">
							<IonItem>
								<IonInput
									ref={inputRef}
									autofocus
									type="text"
									label="Serial Number"
									tabIndex={0}
									autoFocus={true}
									labelPlacement="floating"
									onFocus={resetForm}
									onIonInput={(e) =>
										setSerialNumber(e.detail.value!)
									}
									onKeyUp={handleKeyUp}
									clearOnEdit
								/>
							</IonItem>
							{!line?.id && (
								<Suspense
									fallback={<IonSpinner name="crescent" />}>
									<SelectLine
										value={lineId}
										onChange={(id) => setLineId(id)}
									/>
								</Suspense>
							)}
						</div>
					</div>
				</IonCol>
				<IonCol size="12">
					<div className="flex flex-col items-center justify-center w-full">
						<div className="w-full xl:w-2/3">
							<Card title="Order Information" headerColor="light">
								<OrderInformationGrid>
									<OrderInformationColumn
										title="Serial Number"
										text={order.serialNumber}
									/>
									<OrderInformationColumn
										title="Serial Number Type"
										text={order.serialNumberType}
									/>
									<OrderInformationColumn
										title="Model"
										text={order.model}
									/>
									<OrderInformationColumn
										title="SAP Linkage No"
										text={order.sapLinkageNo}
									/>
									<OrderInformationColumn
										title="Barcode Issue No"
										text={order.barcodeIssueNo}
									/>
								</OrderInformationGrid>
								<IonButton
									expand="block"
									onClick={handleClickBtnSubmit}
									disabled={
										order.serialNumber ? false : true
									}>
									Submit
								</IonButton>
							</Card>
						</div>
					</div>
				</IonCol>
			</IonRow>
		</IonGrid>
	);
};

export default ContainerInputOrder;
