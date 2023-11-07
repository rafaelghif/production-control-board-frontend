import {
	IonAccordion,
	IonAccordionGroup,
	IonIcon,
	IonItem,
	IonLabel,
} from "@ionic/react";

interface MenuItemDropDownProps {
	children: React.ReactNode;
	headerText: string;
	headerIcon: string;
}

const MenuItemDropDown: React.FC<MenuItemDropDownProps> = ({
	headerText,
	headerIcon,
	children,
}) => {
	return (
		<IonAccordionGroup>
			<IonAccordion value="Master Data">
				<IonItem slot="header">
					<IonIcon icon={headerIcon} slot="start" />
					<IonLabel>{headerText}</IonLabel>
				</IonItem>
				<div className="ion-padding" slot="content">
					{children}
				</div>
			</IonAccordion>
		</IonAccordionGroup>
	);
};

export default MenuItemDropDown;
