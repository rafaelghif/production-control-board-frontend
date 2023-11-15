import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
} from "@ionic/react";

import { IonicColorType } from "../types";

interface CardProps {
	children: React.ReactNode;
	title: string;
	color?: IonicColorType;
	headerColor?: IonicColorType;
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