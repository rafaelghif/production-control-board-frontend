import { lazy } from "react";

import AdminLayout from "../layouts/AdminLayout";

const ContainerInputOrder = lazy(
	() =>
		import(
			"../features/input-order-features/components/ContainerInputOrder"
		),
);

const InputOrder: React.FC = () => {
	return (
		<AdminLayout title="Input Order">
			<ContainerInputOrder />
		</AdminLayout>
	);
};

export default InputOrder;
