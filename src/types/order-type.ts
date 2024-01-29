import { LineInterface } from "./line-type";

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

export interface OrderCableInterface {
	id: string;
	model: string;
	orderQty:number;
	serialNumber: string;
	serialNumberType: "Plasma Order Tag" | "Inhouse";
	barcodeIssueNo: string;
	sapLinkageNo: string;
	scannedOrder: number;
	inActive: boolean;
	createdBy: string;
	updatedBy: string;
	createdAt: string;
	updatedAt: string;
	LineId: string;
}

export type OrderResponseType = Pick<
	OrderInterface,
	| "serialNumberType"
	| "serialNumber"
	| "model"
	| "barcodeIssueNo"
	| "sapLinkageNo"
>;

export type OrderResponseCableType = Pick<
OrderCableInterface,
	| "serialNumberType"
	| "serialNumber"
	| "model"
	| "scannedOrder"
	| "orderQty"
	| "barcodeIssueNo"
	| "sapLinkageNo"
>;

export type CreateOrderType = Pick<
	OrderInterface,
	| "serialNumberType"
	| "serialNumber"
	| "model"
	| "barcodeIssueNo"
	| "sapLinkageNo"
	| "LineId"
>;

export interface OrderWithLineInterface extends OrderInterface {
	Line: Pick<LineInterface, "id" | "name">;
}

export interface OrderResponseInterface {
	message: string;
	data: OrderInterface;
}
