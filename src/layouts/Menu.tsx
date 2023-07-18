import { IonContent, IonFooter, IonHeader, IonImg, IonMenu, IonTitle, IonToolbar } from "@ionic/react";
import { homeOutline, logOutOutline, newspaperOutline, pushOutline, radioButtonOffOutline, serverOutline } from "ionicons/icons";
import profilePicture from "../assets/images/profile.png";
import MenuItem from "../components/MenuItem";
import MenuItemDropDown from "../components/MenuItemDropDown";
import useUserStore from "../stores/useUserStore";
import useAuthStore from "../stores/useAuthStore";
import useDepartmentStore from "../stores/useDepartmentStore";
import useLineStore from "../stores/useLineStore";

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
    }

    return (
        <IonMenu contentId="main" menuId="main" disabled={!isAuth} className="border-r-2">
            <IonHeader>
                <IonToolbar color={"light"}>
                    <IonTitle className="text-center">Control Board</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="bg-slate-600">
                <div className="flex items-center h-40 px-5 text-white border-b-2 border-white shadow bg-opacity-80 bg-slate-500">
                    <div>
                        <IonImg src={profilePicture} className="w-16 h-auto border-2 border-white rounded-full shadow-md" />
                    </div>
                    <div className="ml-3">
                        <span className="block text-lg font-bold font-['Source_Sans_3']">{user.badgeId}</span>
                        <span className="block font-['Source_Sans_3']">{user.name}</span>
                        <span className="block text-sm font-['Source_Sans_3'] tracking-tighter">{department.name}</span>
                        <span className="block text-xs font-['Source_Sans_3'] tracking-tighter">{line?.name}</span>
                    </div>
                </div>
                <div className="bg-slate-600">
                    <MenuItem url="/home" text="Home" icon={homeOutline} />
                    <MenuItem url="/input-order" text="Input Order" icon={pushOutline} />
                    <MenuItemDropDown headerText="Master Data" headerIcon={serverOutline}>
                        <MenuItem url="/department" text="Department" icon={radioButtonOffOutline} />
                        <MenuItem url="/user" text="User" icon={radioButtonOffOutline} />
                    </MenuItemDropDown>
                    <MenuItemDropDown headerText="Control Board" headerIcon={newspaperOutline}>
                        <MenuItem url="/control-board-setting" text="Setting" icon={radioButtonOffOutline} />
                        <MenuItem url="/control-board-planning" text="Planning" icon={radioButtonOffOutline} />
                    </MenuItemDropDown>
                    <MenuItem url="/dashboard" text="Logout" icon={logOutOutline} handleClick={() => handleClickBtnLogout()} />
                </div>
            </IonContent>
            <IonFooter>
                <IonToolbar color={"light"}>
                    <IonTitle className="text-sm text-center">Version 1.0.0</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonMenu>
    )
}

export default Menu;