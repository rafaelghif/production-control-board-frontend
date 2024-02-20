import {
	IonCol,
	IonGrid,
	IonRefresher,
	IonRefresherContent,
	IonRow,
	IonSearchbar,
	IonSpinner,
	RefresherEventDetail,
} from "@ionic/react";

import { Suspense, lazy, useState } from "react";

import Card from "../../../components/Card";
import { UserInterface } from "../../../types";
import { useQueryUser } from "../hooks";
import ModalUpdateUser from "./ModalUpdateUser";

const TableUser = lazy(() => import("./TableUser"));

const ContainerUser: React.FC = () => {
	const [search, setSearch] = useState<string>("");
	const { data, isLoading, refetch } = useQueryUser(search);
	const [selectValue, setSelectValue] = useState<UserInterface>();
	const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

	const handleClickBtnEdit = (data: UserInterface) => {
		setSelectValue(data);
		setIsOpenModalUpdate(true);
	};

	const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
		refetch();
		event.detail.complete();
	};
	return (
		<>
			<IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
				<IonRefresherContent />
			</IonRefresher>
			<IonGrid>
				<IonRow>
					<IonCol size="12">
						<IonSearchbar
							value={search}
							onIonInput={(e) => setSearch(e.detail.value!)}
							debounce={1000}
						/>
					</IonCol>
					<IonCol size="12">
						<Card title="Data User">
							{isLoading ? (
								<IonSpinner name="crescent" />
							) : (
								<Suspense
									fallback={<IonSpinner name="crescent" />}>
									<TableUser
										data={data}
										handleClickBtnEdit={(data) =>
											handleClickBtnEdit(data)
										}
									/>
								</Suspense>
							)}
						</Card>
					</IonCol>
				</IonRow>
			</IonGrid>
			<ModalUpdateUser
				data={selectValue}
				isOpen={isOpenModalUpdate}
				onDidDismiss={() => setIsOpenModalUpdate(false)}
			/>
		</>
	);
};

export default ContainerUser;
