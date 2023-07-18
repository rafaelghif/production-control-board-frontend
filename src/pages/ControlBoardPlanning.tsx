import { Suspense, lazy, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import FabButton from "../components/FabButton";
import { IonSpinner } from "@ionic/react";

const ContainerControlBoardPlanning = lazy(() => import("../features/control-board-planning-features/components/ContainerControlBoardPlanning"));
const ModalCreateControlBoardPlanning = lazy(() => import("../features/control-board-planning-features/components/ModalCreateControlBoardPlanning"));

const ControlBoardPlanning: React.FC = () => {
    const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
    return (
        <AdminLayout title="Control Board Planning">
            <Suspense fallback={<IonSpinner name="crescent" />}>
                <ContainerControlBoardPlanning />
                <ModalCreateControlBoardPlanning isOpen={isOpenModalCreate} onDidDismiss={() => setIsOpenModalCreate(false)} />
            </Suspense>
            <FabButton handleClick={() => setIsOpenModalCreate(true)} />
        </AdminLayout>
    );
}

export default ControlBoardPlanning;