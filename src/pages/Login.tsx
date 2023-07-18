import { IonContent, IonPage, IonSpinner } from "@ionic/react";
import { Suspense, lazy } from "react";

const ContainerLogin = lazy(()=> import("../features/login-features/components/ContainerLogin"));

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <Suspense fallback={<IonSpinner name="crescent" />}>
                    <ContainerLogin />
                </Suspense>
            </IonContent>
        </IonPage>
    );
}

export default Login;