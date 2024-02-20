import { lazy } from "react";

import AdminLayout from "../layouts/AdminLayout";

const ContainerInputOrderNode = lazy(
	() =>
		import(
			"../features/input-order-node-features/components/ContainerInputOrderNode"
		),
);

const InputOrderNode: React.FC = () => {
	return (
		<AdminLayout title="Input Order Node">
			<ContainerInputOrderNode />
		</AdminLayout>
	);
};

export default InputOrderNode;
