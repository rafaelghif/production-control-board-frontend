import { IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

import AdminLayout from "../layouts/AdminLayout";

const ContainerPartNotRegister = lazy(
	() =>
		import(
			"@/features/part-not-register-features/components/ContainerPartNotRegister"
		),
);

const PartNotRegister: React.FC = () => {
	return (
		<AdminLayout title="Part Not Register">
			<Suspense fallback={<IonSpinner name="crescent" />}>
				<ContainerPartNotRegister />
			</Suspense>
		</AdminLayout>
	);
};

export default PartNotRegister;
