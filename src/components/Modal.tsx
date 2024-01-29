import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonModal,
	IonTitle,
	IonToolbar,
	createAnimation,
} from "@ionic/react";

import { closeOutline } from "ionicons/icons";

interface ModalProps {
	children: React.ReactNode;
	title: string;
	isOpen: boolean;
	onDidDismiss: () => void;
	header?: boolean;
	animation?: boolean;
	className?: string;
	color?:
		| "primary"
		| "secondary"
		| "warning"
		| "danger"
		| "dark"
		| "light"
		| "medium"
		| "tertiary";
	headerColor?:
		| "primary"
		| "secondary"
		| "warning"
		| "danger"
		| "dark"
		| "light"
		| "medium"
		| "tertiary";
}

const Modal: React.FC<ModalProps> = ({
	children,
	isOpen,
	title,
	onDidDismiss,
	header = true,
	animation = true,
	className = "",
	color,
	headerColor,
}) => {
	const enterAnimation = (baseEl: HTMLElement) => {
		const root = baseEl.shadowRoot;
		const backdropAnimation = createAnimation()
			.addElement(root?.querySelector("ion-backdrop") ?? [])
			.fromTo("opacity", "0.01", "var(--backdrop-opacity)");
		const wrapperAnimation = createAnimation()
			.addElement(root?.querySelector(".modal-wrapper") ?? [])
			.keyframes([
				{ offset: 0, opacity: "0", transform: "scale(0)" },
				{ offset: 1, opacity: "0.99", transform: "scale(1)" },
			]);
		return createAnimation()
			.addElement(baseEl)
			.easing("ease-out")
			.duration(300)
			.addAnimation([backdropAnimation, wrapperAnimation]);
	};

	const leaveAnimation = (baseEl: HTMLElement) => {
		return enterAnimation(baseEl).direction("reverse");
	};

	return (
		<IonModal
			isOpen={isOpen}
			color={color}
			onDidDismiss={() => onDidDismiss()}
			className={className}
			enterAnimation={animation ? enterAnimation : undefined}
			leaveAnimation={animation ? leaveAnimation : undefined}>
			<IonHeader hidden={!header}>
				<IonToolbar color={headerColor}>
					<IonButtons slot="end">
						<IonButton onClick={onDidDismiss}>
							<IonIcon icon={closeOutline} />
						</IonButton>
					</IonButtons>
					<IonTitle>{title}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">{children}</IonContent>
		</IonModal>
	);
};

export default Modal;
