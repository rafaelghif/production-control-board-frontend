export interface ApiResponseInterface<T> {
	message: string;
	data: T;
}

export interface ApiErrorDataInterface {
	title: string;
	msg: string;
	validationError?: unknown[];
}

export interface ApiResponseErrorInterface {
	isExpressValidation: boolean;
	data: ApiErrorDataInterface;
}
