import { IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

import AdminLayout from "../layouts/AdminLayout";

const ContainerReportOutput = lazy(
	() =>
		import(
			"../features/report-output-features/components/ContainerReportOutput"
		),
);

const ReportOutput: React.FC = () => {
	return (
		<AdminLayout title="Report Output">
			<Suspense fallback={<IonSpinner />}>
				<ContainerReportOutput />
			</Suspense>
		</AdminLayout>
	);
};

export default ReportOutput;
