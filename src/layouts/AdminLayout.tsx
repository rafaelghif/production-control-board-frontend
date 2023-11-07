import {
	IonContent,
	IonFooter,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

interface AdminLayoutProps {
	title: string;
	children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ title, children }) => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>{title}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>{children}</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonTitle className="text-sm text-center">
						Yokogawa Manufacturing Batam &copy; 2023
					</IonTitle>
				</IonToolbar>
			</IonFooter>
		</IonPage>
	);
};
export default AdminLayout;
