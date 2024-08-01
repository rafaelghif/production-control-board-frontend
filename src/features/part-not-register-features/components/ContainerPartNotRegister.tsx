import { IonCol, IonGrid, IonRow, IonSpinner } from "@ionic/react";

import { Suspense, lazy, useState } from "react";

import Card from "../../../components/Card";
import { useQueryPartNotRegister } from "../hooks";
import ModalCreatePartNotRegister from "./ModalCreatePartNotRegister";

const TablePartNotRegister = lazy(() => import("./TablePartNotRegister"));

const ContainerPartNotRegister: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data, isLoading } = useQueryPartNotRegister();
	const [partOrder, setPartOrder] = useState("");

	const handleAction = (partOrder: string) => {
		setPartOrder(partOrder);
		setIsOpen(true);
	};
	return (
		<>
			<IonGrid>
				<IonRow>
					<IonCol size="12">
						<Card title="Part Not Register">
							<Suspense fallback={<IonSpinner />}>
								{isLoading ? (
									<IonSpinner />
								) : (
									<TablePartNotRegister
										data={data}
										handleClickDefineLine={(
											partOrderSelect,
										) => handleAction(partOrderSelect)}
									/>
								)}
							</Suspense>
						</Card>
					</IonCol>
				</IonRow>
			</IonGrid>
			<ModalCreatePartNotRegister
				isOpen={isOpen}
				onDidDismiss={() => setIsOpen(false)}
				partOrder={partOrder}
			/>
		</>
	);
};
export default ContainerPartNotRegister;
