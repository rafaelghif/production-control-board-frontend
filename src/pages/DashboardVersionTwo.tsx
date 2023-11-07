import { IonContent, IonPage, IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

const ContainerDashboardVersionTwo = lazy(
	() =>
		import(
			"../features/dashboard-features/components/ContainerDashboardVersionTwo"
		),
);

const DashboardVersionTwo: React.FC = () => {
	return (
		<IonPage>
			<IonContent fullscreen>
				<Suspense fallback={<IonSpinner name="crescent" />}>
					<ContainerDashboardVersionTwo />
				</Suspense>
			</IonContent>
		</IonPage>
	);
};

export default DashboardVersionTwo;
