import { IonSpinner } from "@ionic/react";
import { useState, Suspense, lazy } from "react";
import FabButton from "../components/FabButton";
import AdminLayout from "../layouts/AdminLayout";

const ContainerUser= lazy(()=> import("../features/user-features/components/ContainerUser"));
const ModalCreateUser = lazy(()=> import("../features/user-features/components/ModalCreateUser"));

const User: React.FC = () => {
    const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
    return (
        <AdminLayout title="User">
            <Suspense fallback={<IonSpinner name="crescent" />}>
                <ContainerUser />
                <ModalCreateUser isOpen={isOpenModalCreate} onDidDismiss={() => setIsOpenModalCreate(false)} />
            </Suspense>
            <FabButton handleClick={() => setIsOpenModalCreate(true)} />
        </AdminLayout>
    );
}

export default User;