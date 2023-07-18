import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";

interface CardProps {
    children: React.ReactNode;
    title: string;
    color?: "primary" | "secondary" | "warning" | "danger" | "dark" | "light" | "medium" | "tertiary";
    headerColor?: "primary" | "secondary" | "warning" | "danger" | "dark" | "light" | "medium" | "tertiary";
}

const Card: React.FC<CardProps> = ({ children, title, color, headerColor }) => {
    return (
        <IonCard color={color}>
            <IonCardHeader color={headerColor}>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                {children}
            </IonCardContent>
        </IonCard>
    );
}

export default Card;