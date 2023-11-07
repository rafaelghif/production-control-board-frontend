import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
} from "@ionic/react";

interface CardProps {
	children: React.ReactNode;
	title: string;
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
	optionButton?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
	children,
	title,
	color,
	headerColor,
	optionButton: OptionButton,
}) => {
	return (
		<IonCard color={color}>
			<IonCardHeader
				color={headerColor}
				className="flex flex-row items-center justify-between">
				<IonCardTitle>{title}</IonCardTitle>
				{OptionButton}
			</IonCardHeader>
			<IonCardContent>{children}</IonCardContent>
		</IonCard>
	);
};

export default Card;
