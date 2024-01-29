import {
	IonContent,
	IonFooter,
	IonHeader,
	IonImg,
	IonMenu,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

import {
	homeOutline,
	logOutOutline,
	newspaperOutline,
	pushOutline,
	radioButtonOffOutline,
	serverOutline,
} from "ionicons/icons";

import profilePicture from "../assets/images/profile.png";
import MenuItem from "../components/MenuItem";
import MenuItemDropDown from "../components/MenuItemDropDown";
import { useAuthStore } from "../stores";
import { useDepartmentStore } from "../stores";
import { useLineStore } from "../stores";
import { useUserStore } from "../stores";

interface MenuProps {
	isAuth: boolean;
}

const Menu: React.FC<MenuProps> = ({ isAuth }) => {
	const { logoutUser } = useAuthStore();
	const { user, clearUser } = useUserStore();
	const { department, clearDepartment } = useDepartmentStore();
	const { line, clearLine } = useLineStore();

	const handleClickBtnLogout = () => {
		clearUser();
		clearDepartment();
		clearLine();
		logoutUser();
	};

	return (
		<IonMenu
			contentId="main"
			menuId="main"
			disabled={!isAuth}
			className="border-r-2">
			<IonHeader>
				<IonToolbar color={"light"}>
					<IonTitle className="text-center">Control Board</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="bg-slate-600">
				<div className="flex items-center h-40 px-5 text-white border-b-2 border-white shadow bg-opacity-80 bg-slate-500">
					<div>
						<IonImg
							src={profilePicture}
							alt="Profile Picture"
							className="w-16 h-auto border-2 border-white rounded-full shadow-md"
						/>
					</div>
					<div className="ml-3">
						<span className="block text-lg font-bold font-['Source_Sans_3']">
							{user.badgeId}
						</span>
						<span className="block font-['Source_Sans_3']">
							{user.name}
						</span>
						<span className="block text-sm font-['Source_Sans_3'] tracking-tighter">
							{department.name}
						</span>
						<span className="block text-xs font-['Source_Sans_3'] tracking-tighter">
							{line?.name}
						</span>
					</div>
				</div>
				<div className="bg-slate-600">
					<MenuItem url="/home" text="Home" icon={homeOutline} />
					<MenuItemDropDown
						headerText="Input Order"
						headerIcon={pushOutline}>
						<MenuItem
							url="/input-order"
							text="Input Order"
							icon={radioButtonOffOutline}
						/>
						<MenuItem
							url="/input-order-cable"
							text="Input Order Cable"
							icon={radioButtonOffOutline}
						/>
					</MenuItemDropDown>
					<MenuItemDropDown
						headerText="Master Data"
						headerIcon={serverOutline}>
						<MenuItem
							url="/department"
							text="Department"
							icon={radioButtonOffOutline}
						/>
						<MenuItem
							url="/user"
							text="User"
							icon={radioButtonOffOutline}
						/>
					</MenuItemDropDown>
					<MenuItemDropDown
						headerText="Control Board"
						headerIcon={newspaperOutline}>
						<MenuItem
							url="/control-board-setting"
							text="Setting"
							icon={radioButtonOffOutline}
						/>
						<MenuItem
							url="/control-board-planning"
							text="Planning"
							icon={radioButtonOffOutline}
						/>
					</MenuItemDropDown>
					<MenuItemDropDown
						headerText="Report"
						headerIcon={serverOutline}>
						<MenuItem
							url="/report"
							text="Report SN"
							icon={radioButtonOffOutline}
						/>
						<MenuItem
							url="/report-output"
							text="Report Output"
							icon={radioButtonOffOutline}
						/>
						<MenuItem
							url="/report-ptr"
							text="Report PTR PerLine"
							icon={radioButtonOffOutline}
						/>
					</MenuItemDropDown>

					<MenuItem
						url="/dashboardV2"
						text="Logout"
						icon={logOutOutline}
						handleClick={() => handleClickBtnLogout()}
					/>
				</div>
			</IonContent>
			<IonFooter>
				<IonToolbar color={"light"}>
					<IonTitle className="text-sm text-center">
						Version {import.meta.env.VITE_APP_VERSION}
					</IonTitle>
				</IonToolbar>
			</IonFooter>
		</IonMenu>
	);
};

export default Menu;
