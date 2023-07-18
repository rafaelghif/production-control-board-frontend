export interface OrderInterface {
    id: string;
    model: string;
    serialNumber: string;
    serialNumberType: "Plasma Order Tag" | "Inhouse";
    barcodeIssueNo: string;
    sapLinkageNo: string;
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    LineId: string;
}

export type OrderResponseType = Pick<OrderInterface, "serialNumberType" | "serialNumber" | "model" | "barcodeIssueNo" | "sapLinkageNo">;
export type CreateOrderType = Pick<OrderInterface, "serialNumberType" | "serialNumber" | "model" | "barcodeIssueNo" | "sapLinkageNo" | "LineId">;

export interface OrderResponseInterface {
    message: string;
    data: OrderInterface;
}