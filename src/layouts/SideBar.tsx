import { IonSplitPane } from "@ionic/react";

import Menu from "./Menu";

interface SideBarInterface {
	children: React.ReactNode;
	isAuth: boolean;
}

const SideBar: React.FC<SideBarInterface> = ({ children, isAuth }) => {
	return (
		<IonSplitPane contentId="main" disabled={!isAuth}>
			<Menu isAuth={isAuth} />
			{children}
		</IonSplitPane>
	);
};

export default SideBar;
