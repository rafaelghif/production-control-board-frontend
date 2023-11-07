import { IonFab, IonFabButton, IonIcon } from "@ionic/react";

import { addOutline } from "ionicons/icons";

interface FabButtonProps {
	handleClick: () => void;
}

const FabButton: React.FC<FabButtonProps> = ({ handleClick }) => {
	return (
		<IonFab slot="fixed" vertical="bottom" horizontal="end">
			<IonFabButton onClick={() => handleClick()}>
				<IonIcon icon={addOutline} />
			</IonFabButton>
		</IonFab>
	);
};

export default FabButton;
