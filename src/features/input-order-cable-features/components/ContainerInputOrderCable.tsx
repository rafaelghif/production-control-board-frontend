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
import { useLineStore } from "../../../stores";
import { OrderResponseCableType } from "../../../types";
import OrderInformationColumn from "../../input-order-features/components/OrderInformationColumn";
import OrderInformationGrid from "../../input-order-features/components/OrderInformationGrid";
import { useCreateOrderCable } from "../hooks";
import { useGetOrderInputCable } from "../hooks";

const SelectLine = lazy(() => import("../../../components/SelectLine"));
const Clock = lazy(() => import("../../../components/Clock"));

const ContainerInputOrderCable: React.FC = () => {
	const { line } = useLineStore();
	const [lineId, setLineId] = useState<string>("");
	const initialData: OrderResponseCableType = {
		serialNumberType: "Inhouse",
		orderQty: 0,
		scannedOrder: 0,
		serialNumber: "",
		model: "",
		barcodeIssueNo: "",
		sapLinkageNo: "",
	};
	const [order, setOrder] = useState<OrderResponseCableType>(initialData);
	const [serialNumber, setSerialNumber] = useState<string>("");
	const orderInput = useGetOrderInputCable();
	const createOrder = useCreateOrderCable();

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
									label="Index Number"
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
									<OrderInformationColumn
										title="QTY"
										text={`${order.scannedOrder} / ${order.orderQty}`}
									/>
								</OrderInformationGrid>
								<IonButton
									expand="block"
									onClick={handleClickBtnSubmit}
									disabled={
										order.sapLinkageNo ? false : true
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

export default ContainerInputOrderCable;
