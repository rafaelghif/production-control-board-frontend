import { useIonToast } from "@ionic/react";
import { alertCircleOutline, alertOutline, checkmarkOutline } from "ionicons/icons";

export const useToast = () => {
    const [present] = useIonToast();

    const successToast = (message: string, duration: number = 1500) => {
        present({
            message: message,
            duration: duration,
            position: "bottom",
            color: "success",
            icon: checkmarkOutline
        });
    };

    const warningToast = (message: string, duration: number = 1500) => {
        present({
            message: message,
            duration: duration,
            position: "bottom",
            color: "warning",
            icon: alertCircleOutline
        });
    };

    const errorToast = (messageData: any, duration: number = 3000) => {
        let errorMessage = messageData;
        if (typeof messageData === undefined) {
            errorMessage = "Something wrong, please contact engineering!";
        } else if (typeof messageData === "object") {
            if ("response" in messageData) {
                const response = messageData.response;
                const { data, isExpressValidation } = response.data;
                if (isExpressValidation) {
                    const { validationError } = data;
                    errorMessage = validationError.map((data: any) => data.msg).join(",");
                } else {
                    if (data) {
                        const { message } = data;
                        errorMessage = message;
                    } else {
                        errorMessage = messageData.response.data.toString();
                        duration = 10000
                    }
                }
            } else {
                if ("message" in messageData) {
                    const { message } = messageData;
                    errorMessage = `${message} - Too Many Requests`;
                }
            }
        }
        present({
            message: errorMessage,
            duration: duration,
            position: "middle",
            color: "danger",
            icon: alertOutline,
        });
    };

    return {
        successToast,
        warningToast,
        errorToast
    };
}