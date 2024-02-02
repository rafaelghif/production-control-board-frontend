import { IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

import AdminLayout from "../layouts/AdminLayout";

const ContainerPtrPerLinePts = lazy(
	() =>
		import(
			"../features/ptr-perline-pts-features/components/ContainerPtrPerLinePts"
		),
);

const ReportPTRPTS: React.FC = () => {
	return (
		<AdminLayout title="Report PTR PTS">
			<Suspense fallback={<IonSpinner />}>
				<ContainerPtrPerLinePts />
			</Suspense>
		</AdminLayout>
	);
};

export default ReportPTRPTS;
