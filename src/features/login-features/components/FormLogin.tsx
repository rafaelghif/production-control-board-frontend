import { IonButton, IonIcon, IonInput, IonItem } from "@ionic/react";
import { personOutline, lockClosedOutline } from "ionicons/icons";
import { useState } from "react";
import { AuthenticationInterface } from "../../../types/authentication-type";
import { useAuthentication } from "../hooks/useAuthentication";

const FormLogin: React.FC = () => {
    const [formData, setFormData] = useState<AuthenticationInterface>({ badgeId: "", password: "" });
    const { mutate } = useAuthentication();
    
    const handleInput = (key: keyof AuthenticationInterface, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <IonItem>
                <IonIcon icon={personOutline} slot="start" />
                <IonInput type="text" label="BadgeId" labelPlacement="floating" value={formData.badgeId} onIonInput={(e) => handleInput("badgeId", e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonIcon icon={lockClosedOutline} slot="start" />
                <IonInput type="password" label="Password" labelPlacement="floating" value={formData.password} onIonInput={(e) => handleInput("password", e.detail.value!)} />
            </IonItem>
            <IonButton type="submit" expand="block">Login</IonButton>
        </form>
    );
}

export default FormLogin;