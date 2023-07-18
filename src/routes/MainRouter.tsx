import { IonRouterOutlet, IonSpinner } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";

import Login from "../pages/Login";
import SideBar from "../layouts/SideBar";
import useAuthStore from "../stores/useAuthStore";
import { Suspense, lazy } from "react";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";

const Home = lazy(() => import("../pages/Home"));
const Department = lazy(() => import("../pages/Department"));
const User = lazy(() => import("../pages/User"));
const ControlBoardSetting = lazy(() => import("../pages/ControlBoardSetting"));
const ControlBoardPlanning = lazy(() => import("../pages/ControlBoardPlanning"));
const InputOrder = lazy(() => import("../pages/InputOrder"));

const MainRouter: React.FC = () => {
    const { isAuth } = useAuthStore();
    return (
        <IonReactRouter>
            <SideBar isAuth={isAuth}>
                <IonRouterOutlet id="main">
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Suspense fallback={<IonSpinner name="crescent" />}>
                        <Route exact path="/home" component={() => <PrivateRoute isAuth={isAuth} component={Home} />} />
                        <Route exact path="/input-order" component={() => <PrivateRoute isAuth={isAuth} component={InputOrder} />} />
                        <Route exact path="/department" component={() => <PrivateRoute isAuth={isAuth} component={Department} isStrictRole={true} roles={["Super User"]} />} />
                        <Route exact path="/user" component={() => <PrivateRoute isAuth={isAuth} component={User} isStrictRole={true} roles={["Super User"]} />} />
                        <Route exact path="/control-board-setting" component={() => <PrivateRoute isAuth={isAuth} component={ControlBoardSetting} isStrictRole={true} roles={["Super User", "Admin"]} />} />
                        <Route exact path="/control-board-planning" component={() => <PrivateRoute isAuth={isAuth} component={ControlBoardPlanning} />} />
                    </Suspense>
                    <Route exact path="/">
                        <Redirect to={isAuth ? "/home" : "/dashboard"} />
                    </Route>
                </IonRouterOutlet>
            </SideBar>
        </IonReactRouter>
    );
}

export default MainRouter;