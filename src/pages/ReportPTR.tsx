import { IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

import AdminLayout from "../layouts/AdminLayout";

const ContainerPtrPerLine = lazy(
	() =>
		import(
			"../features/ptr-perline-features/components/ContainerPtrPerLine"
		),
);

const ReportPTR: React.FC = () => {
	return (
		<AdminLayout title="Report PTR">
			<Suspense fallback={<IonSpinner />}>
				<ContainerPtrPerLine />
			</Suspense>
		</AdminLayout>
	);
};

export default ReportPTR;
