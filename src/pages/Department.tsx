import { IonSpinner } from "@ionic/react";

import { Suspense, lazy, useState } from "react";

import FabButton from "../components/FabButton";
import AdminLayout from "../layouts/AdminLayout";

const ContainerDepartment = lazy(
	() =>
		import(
			"../features/department-features/components/ContainerDepartment"
		),
);
const ModalCreateDepartment = lazy(
	() =>
		import(
			"../features/department-features/components/ModalCreateDepartment"
		),
);

const Department: React.FC = () => {
	const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
	return (
		<AdminLayout title="Department">
			<Suspense fallback={<IonSpinner name="crescent" />}>
				<ContainerDepartment />
				<ModalCreateDepartment
					isOpen={isOpenModalCreate}
					onDidDismiss={() => setIsOpenModalCreate(false)}
				/>
			</Suspense>

			<FabButton handleClick={() => setIsOpenModalCreate(true)} />
		</AdminLayout>
	);
};

export default Department;
