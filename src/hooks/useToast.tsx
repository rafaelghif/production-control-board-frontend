import { useIonToast } from "@ionic/react";

import { AxiosResponse } from "axios";
import {
	alertCircleOutline,
	alertOutline,
	checkmarkOutline,
} from "ionicons/icons";

import { ApiErrorDataInterface, ApiResponseErrorInterface } from "../types";

const useToast = () => {
	const [present] = useIonToast();

	const successToast = (message: string, duration: number = 1500) => {
		present({
			message: message,
			duration: duration,
			position: "bottom",
			color: "success",
			icon: checkmarkOutline,
		});
	};

	const warningToast = (message: string, duration: number = 1500) => {
		present({
			message: message,
			duration: duration,
			position: "bottom",
			color: "warning",
			icon: alertCircleOutline,
		});
	};

	const errorToast = (
		messageData: unknown | undefined | ApiResponseErrorInterface,
		duration: number = 3000,
	) => {
		let errorMessage = messageData;
		if (messageData === undefined) {
			errorMessage = "Something wrong, please contact engineering!";
		} else if (typeof messageData === "object") {
			if ("response" in messageData!) {
				const response = messageData.response as AxiosResponse;
				const { data, isExpressValidation } = response.data;
				if (isExpressValidation) {
					const { validationError } = data;
					errorMessage = validationError
						.map((data: ApiErrorDataInterface) => data.msg)
						.join(",");
				} else {
					if (data) {
						const { message } = data;
						errorMessage = message;
					} else {
						const response = messageData.response as AxiosResponse;
						errorMessage = response.data.toString();
						duration = 10000;
					}
				}
			} else {
				if ("message" in messageData!) {
					const { message } = messageData;
					errorMessage = `${message} - Too Many Requests`;
				}
			}
		}
		present({
			message: errorMessage as string,
			duration: duration,
			position: "middle",
			color: "danger",
			icon: alertOutline,
		});
	};

	return {
		successToast,
		warningToast,
		errorToast,
	};
};

export default useToast;
