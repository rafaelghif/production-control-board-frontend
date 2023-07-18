import { IonItem, IonIcon, IonLabel } from "@ionic/react";

interface MenuItemProps {
    text: string;
    url: string;
    icon: string;
    handleClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, url, icon, handleClick }) => {
    return (
        <IonItem routerLink={url} onClick={handleClick ? () => handleClick() : undefined}>
            <IonIcon icon={icon} slot="start" />
            <IonLabel>{text}</IonLabel>
        </IonItem>
    );
}

export default MenuItem;