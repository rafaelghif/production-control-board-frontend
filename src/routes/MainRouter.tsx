import { IonRouterOutlet, IonSpinner } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Suspense, lazy } from "react";
import { Redirect, Route } from "react-router";

import SideBar from "../layouts/SideBar";
import Dashboard from "../pages/Dashboard";
import DashboardVersionTwo from "../pages/DashboardVersionTwo";
import Login from "../pages/Login";
import useAuthStore from "../stores/useAuthStore";
import PrivateRoute from "./PrivateRoute";

const Home = lazy(() => import("../pages/Home"));
const Department = lazy(() => import("../pages/Department"));
const User = lazy(() => import("../pages/User"));
const ControlBoardSetting = lazy(() => import("../pages/ControlBoardSetting"));
const ControlBoardPlanning = lazy(
	() => import("../pages/ControlBoardPlanning"),
);
const InputOrder = lazy(() => import("../pages/InputOrder"));
const InputOrderCable = lazy(() => import("../pages/InputOrderCable"));
const Report = lazy(() => import("../pages/Report"));
const ReportOutput = lazy(() => import("../pages/ReportOutput"));
const ReportPTR = lazy(() => import("../pages/ReportPTR"));
const ReportPTRPTS = lazy(() => import("../pages/ReportPTRPTS"));

const MainRouter: React.FC = () => {
	const { isAuth } = useAuthStore();
	return (
		<IonReactRouter>
			<SideBar isAuth={isAuth}>
				<IonRouterOutlet id="main">
					<Route exact path="/login" component={Login} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route
						exact
						path="/dashboardV2"
						component={DashboardVersionTwo}
					/>
					<Suspense fallback={<IonSpinner name="crescent" />}>
						<Route
							exact
							path="/home"
							component={() => (
								<PrivateRoute
									isAuth={isAuth}
									component={Home}
								/>
							)}
						/>
						<Route
							exact
							path="/input-order"
							component={() => (
								<PrivateRoute
									isAuth={isAuth}
									component={InputOrder}
								/>
							)}
						/>
						<Route
							exact
							path="/input-order-cable"
							component={() => (
								<PrivateRoute
									isAuth={isAuth}
									component={InputOrderCable}
								/>
							)}
						/>
						<Route
							exact
							path="/department"
							component={() => (
								<PrivateRoute
									isAuth={isAuth}
									component={Department}
									isStrictRole={true}
									roles={["Super User"]}
								/>
							)}
						/>
						<Route
							exact
							path="/user"
							component={() => (
								<PrivateRoute
									isAuth={isAuth}
									component={User}
									isStrictRole={true}
									roles={["Super User"]}
								/>
							)}
						/>
						<Route
							exact
							path="/control-board-setting"
							component={() => (
								<PrivateRoute
									isAuth={isAuth}
									component={ControlBoardSetting}
									isStrictRole={true}
									roles={["Super User", "Admin"]}
								/>
							)}
						/>
						<Route
							exact
							path="/control-board-planning"
							component={() => (
								<PrivateRoute
									isAuth={isAuth}
									component={ControlBoardPlanning}
								/>
							)}
						/>
						<Route
							exact
							path="/report"
							component={() => (
								<PrivateRoute
									isAuth={isAuth}
									component={Report}
								/>
							)}
						/>
						<Route
							exact
							path="/report-output"
							component={() => (
								<PrivateRoute
									isAuth={isAuth}
									component={ReportOutput}
								/>
							)}
						/>
						<Route
							exact
							path="/report-ptr"
							component={() => (
								<PrivateRoute
									isAuth={isAuth}
									component={ReportPTR}
								/>
							)}
						/>
						<Route
							exact
							path="/report-ptr-pts"
							component={() => (
								<PrivateRoute
									isAuth={isAuth}
									component={ReportPTRPTS}
								/>
							)}
						/>
					</Suspense>
					<Route exact path="/">
						<Redirect to={isAuth ? "/home" : "/dashboardV2"} />
					</Route>
				</IonRouterOutlet>
			</SideBar>
		</IonReactRouter>
	);
};

export default MainRouter;
