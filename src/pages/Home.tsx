import { Suspense, lazy } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { IonSpinner } from "@ionic/react";

const ContainerDashboard = lazy(() => import("../features/dashboard-features/components/ContainerDashboard"));

const Home: React.FC = () => {
    return (
        <AdminLayout title="Home">
            <Suspense fallback={<IonSpinner name="crescent" />}>
                <ContainerDashboard />
            </Suspense>
        </AdminLayout>
    );
}

export default Home;