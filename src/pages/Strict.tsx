import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

import "../theme/font.css";

const Strict: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color="light">
					<IonButtons slot="start">
						<IonBackButton>Back</IonBackButton>
					</IonButtons>
					<IonTitle>Not Authorized</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<div className="flex items-center justify-center w-screen h-full">
					<div className="font-['Lato']">
						<h1 className="inline-block text-[#888] text-2xl lg:text-4xl font-semibold">
							Not Authorized!
						</h1>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Strict;
