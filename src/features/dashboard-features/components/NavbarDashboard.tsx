import { useIonRouter } from "@ionic/react";

import { useHistory } from "react-router";

import logo from "../../../assets/images/logo.png";

const NavbarDashboard: React.FC = () => {
	const { routeInfo } = useIonRouter();
	const history = useHistory();
	const handleClickBtnLogin = () => {
		history.replace("/login");
	};
	return (
		<div
			className={`flex items-center justify-between px-5 py-1 shadow bg-[#f4f5f8] dark:bg-[#181818] ${
				routeInfo.pathname !== "/dashboardV2" ? "hidden" : ""
			} select-none`}
			hidden={routeInfo.pathname !== "/dashboardV2"}>
			<div></div>
			<div className="text-blue-400 hover:text-blue-500">
				<button
					className="px-5 py-2 tracking-wide"
					onClick={handleClickBtnLogin}>
					Login
				</button>
			</div>
		</div>
	);
};

export default NavbarDashboard;
