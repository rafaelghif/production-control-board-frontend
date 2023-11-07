import { IonContent, IonPage, IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

const ContainerDashboard = lazy(
	() =>
		import("../features/dashboard-features/components/ContainerDashboard"),
);

const Dashboard: React.FC = () => {
	return (
		<IonPage>
			<IonContent fullscreen>
				<Suspense fallback={<IonSpinner name="crescent" />}>
					<ContainerDashboard />
				</Suspense>
			</IonContent>
		</IonPage>
	);
};

export default Dashboard;
