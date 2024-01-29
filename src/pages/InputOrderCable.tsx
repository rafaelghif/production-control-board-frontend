import { lazy } from "react";

import AdminLayout from "../layouts/AdminLayout";

const ContainerInputOrderCable = lazy(
	() =>
		import(
			"../features/input-order-cable-features/components/ContainerInputOrderCable"
		),
);

const InputOrderCable: React.FC = () => {
	return (
		<AdminLayout title="Input Order Cable">
			<ContainerInputOrderCable />
		</AdminLayout>
	);
};

export default InputOrderCable;
