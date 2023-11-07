export interface ApiResponseInterface<T> {
	message: string;
	data: T;
}

export interface ApiResponseErrorInterface {
	isExpressValidation: boolean;
	data: {
		title: string;
		message: string;
		validationError?: any[];
	};
}
