import { IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

import AdminLayout from "../layouts/AdminLayout";

const ContainerReport = lazy(
	() => import("../features/report-features/components/ContainerReport"),
);

const Report: React.FC = () => {
	return (
		<AdminLayout title="Report">
			<Suspense fallback={<IonSpinner />}>
				<ContainerReport />
			</Suspense>
		</AdminLayout>
	);
};

export default Report;
