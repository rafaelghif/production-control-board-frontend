import { IonSpinner } from "@ionic/react";

import { Suspense, lazy, useState } from "react";

import FabButton from "../components/FabButton";
import AdminLayout from "../layouts/AdminLayout";

const ContainerControlBoardSetting = lazy(
	() =>
		import(
			"../features/control-board-setting-features/components/ContainerControlBoardSetting"
		),
);
const ModalCreateControlBoardSetting = lazy(
	() =>
		import(
			"../features/control-board-setting-features/components/ModalCreateControlBoardSetting"
		),
);

const ControlBoardSetting: React.FC = () => {
	const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
	return (
		<AdminLayout title="Control Board Setting">
			<Suspense fallback={<IonSpinner name="crescent" />}>
				<ContainerControlBoardSetting />
				<ModalCreateControlBoardSetting
					isOpen={isOpenModalCreate}
					onDidDismiss={() => setIsOpenModalCreate(false)}
				/>
			</Suspense>
			<FabButton handleClick={() => setIsOpenModalCreate(true)} />
		</AdminLayout>
	);
};

export default ControlBoardSetting;
