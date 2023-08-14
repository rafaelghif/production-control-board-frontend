import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonRow, IonSpinner } from "@ionic/react"
import { Suspense, lazy, useState } from "react";
import { useGetOrderInput } from "../hooks/useGetOrderInput";
import { OrderResponseType } from "../../../types/order-type";
import Card from "../../../components/Card";
import OrderInformationGrid from "./OrderInformationGrid";
import OrderInformationColumn from "./OrderInformationColumn";
import useLineStore from "../../../stores/useLineStore";
import { useCreateOrder } from "../hooks/useCreateOrder";
import socket from "../../../libs/socket.io";

const Clock = lazy(() => import("../../../components/Clock"));

const ContainerInputOrder: React.FC = () => {
    const { line } = useLineStore();
    const initialData: OrderResponseType = { serialNumberType: "Inhouse", serialNumber: "", model: "", barcodeIssueNo: "", sapLinkageNo: "" };
    const [order, setOrder] = useState<OrderResponseType>(initialData);
    const [serialNumber, setSerialNumber] = useState<string>("");
    const orderInput = useGetOrderInput();
    const createOrder = useCreateOrder();

    const resetForm = () => {
        setOrder(initialData);
        setSerialNumber("");
    }

    const handleKeyUp = async (e: React.KeyboardEvent<HTMLIonInputElement>) => {
        if (e.key === "Enter") {
            try {
                const data = await orderInput.mutateAsync(serialNumber);
                setOrder(data ?? initialData);
                if (data) {
                    await submitInput(data);
                }
            } catch (err) {
                resetForm();
            }
        }
    }

    const handleClickBtnSubmit = () => {
        createOrder.mutate({ ...order, LineId: line.id });
        resetForm();
    }

    const submitInput = async (data: OrderResponseType) => {
        createOrder.mutate({ ...data, LineId: line.id });
        resetForm();
    }

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
                                <IonInput type="text" label="Serial Number" labelPlacement="floating" onFocus={resetForm} onIonInput={(e) => setSerialNumber(e.detail.value!)} onKeyUp={handleKeyUp} clearOnEdit />
                            </IonItem>
                        </div>
                    </div>
                </IonCol>
                <IonCol size="12">
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="w-full xl:w-2/3">
                            <Card title="Order Information" headerColor="light">
                                <OrderInformationGrid>
                                    <OrderInformationColumn title="Serial Number" text={order.serialNumber} />
                                    <OrderInformationColumn title="Serial Number Type" text={order.serialNumberType} />
                                    <OrderInformationColumn title="Model" text={order.model} />
                                    <OrderInformationColumn title="SAP Linkage No" text={order.sapLinkageNo} />
                                    <OrderInformationColumn title="Barcode Issue No" text={order.barcodeIssueNo} />
                                </OrderInformationGrid>
                                <IonButton expand="block" onClick={handleClickBtnSubmit} disabled={order.serialNumber ? false : true}>Submit</IonButton>
                            </Card>
                        </div>
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default ContainerInputOrder;